import React, {useState} from "react"
import Input from '../atoms/Input'
import { inputsFormAuth } from "../lib/data"
import { TFormAuth } from "../lib/types"
const FormAuth = () => {
    const initialForm : TFormAuth = {
        fullname : "",
        username : "",
        password : ""
    }
    const [form, setForm] = useState(initialForm)
    const [type, setType] = useState<"Log In" | "Register">("Log In")

    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault()
        const inputsInvalid = document.querySelectorAll('input.input-auth:invalid,input[value=""].input-auth')
        inputsInvalid.forEach((inputElmn)=>{
            inputElmn.classList.add("input-shake")
            setTimeout(()=>{
                inputElmn.classList.remove("input-shake")
            },1000)
        })
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
    <section className="flex flex-col gap-8 justify-center items-center">
        <div className="text-center">
            <h1 className="text-[1.7rem] font-medium">{type} to Your Account</h1>
            <p className="small-text">Your Own Digital Chat App</p>
        </div>
        <form className=" flex flex-col gap-6 w-[21rem]">
            {
                inputsFormAuth.map((data,i)=>{
                    if(type==="Log In"&&data.name==="username") return null
                    const field = data.name as string
                    return(
                        <Input value={form[field as keyof TFormAuth]} handleOnChange={handleOnChange} key={i} {...data}/>
                    )
                })
            }
            <button onClick={(e)=>handleSubmit(e)} className="bg-gradient-to-r p-3 font-medium rounded-md from-main to-blue-600">{type}</button>
            <p className="small-text text-center cursor-pointer" onClick={()=>handleTypeAuth()}>
                {type==="Log In"?"Not a member yet? ":"Have an Account? "}
                <span className="text-white underline underline-offset-2">{type==="Log In"?"Register":"Log In"} Now</span>
            </p>
        </form>
    </section>
  )
}

export default FormAuth