
import bg from "../assets/bg.png"
import FormAuth from '../components/FormAuth'
import Page from '../layouts/Page'

const Auth = () => {
  return (
    <Page type="auth">
      <article className='flex-col flex md:flex-row justify-center items-center gap-[1rem] md:gap-[3rem] mx-auto px-5'>
        <div className='flex w-[10rem] md:w-[22rem] justify-center mx-auto'>
          <img alt="" src={bg} className="m-auto" />
        </div>
        <FormAuth/>
      </article>
    </Page>
  )
}

export default Auth
