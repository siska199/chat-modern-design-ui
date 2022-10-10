import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import Input from '../atoms/Input'
import Loading from "../atoms/Loading"
import { inputsFormAuth } from "../lib/data"
import { Alert } from "../lib/helperFunction"
import { TFormAuth } from "../lib/types"
import { handleLogin, handleRegister } from "../redux/features/authSlice"
import { useAppDispatch } from "../redux/store"
const FormAuth = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const initialForm : TFormAuth = {
        fullname : "",
        username : "",
        password : ""
    }
    const [form, setForm] = useState(initialForm)
    const [type, setType] = useState<"Log In" | "Register">("Log In")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault()
        const inputsInvalid = document.querySelectorAll('input.input-auth:invalid,input[value=""].input-auth')
        if(inputsInvalid.length>0){
            inputsInvalid.forEach((inputElmn)=>{
                inputElmn.classList.add("input-shake")
                setTimeout(()=>{
                    inputElmn.classList.remove("input-shake")
                },1000)
            })
        }else{
            setLoading(true)
            dispatch(type==="Log In"? handleLogin(form):handleRegister(form)).then((state:any)=>{
               setLoading(false)
               if(state.payload.error){
                   Alert("error",state.payload.error)
                }else{

                   setTimeout(()=>{
                       navigate("/chats")
                       Alert("success",type==="Log In"?"Log in Success":"Register Success")
                    },500)
               }
            })
        }
    }
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleTypeAuth = ()=>{
        setType(prev=>{
            const newType = prev==="Register"?"Log In":"Register"
            setForm(initialForm)
            return newType
        })
    }
  return (
    <section className="flex flex-col gap-4 md:gap-8 justify-center items-center">
        <div className="text-center">
            <h1 className="text-[1.4rem] md:text-[1.7rem] font-medium">{type} to Your Account</h1>
            <p className="small-text">Your Own Digital Chat App</p>
        </div>
        <form className=" flex flex-col gap-4 md:gap-6 w-[21rem]">
            {
                inputsFormAuth.map((data,i)=>{
                    if(type==="Log In"&&data.name==="fullname") return null
                    const field = data.name as string
                    return(
                        <Input value={form[field as keyof TFormAuth]} handleOnChange={handleOnChange} key={i} {...data}/>
                    )
                })
            }
            <button onClick={(e)=>handleSubmit(e)} className="bg-gradient-to-r flex justify-center items-center gap-2 p-2 md:p-3 font-medium rounded-md from-main to-blue-600">
                {type}
                {loading &&                
                    <Loading type="loading" size={"w-5 h-5"}/>
                }
            </button>
            <p className="small-text text-center cursor-pointer" onClick={()=>handleTypeAuth()}>
                {type==="Log In"?"Not a member yet? ":"Have an Account? "}
                <span className="text-white underline underline-offset-2">{type==="Log In"?"Register":"Log In"} Now</span>
            </p>
        </form>
    </section>
  )
}

export default FormAuth