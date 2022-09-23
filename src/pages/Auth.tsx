
import FormAuth from '../components/FormAuth'
import Page from '../layouts/Page'
import bg from "../assets/bg.png"

const Auth = () => {
  return (
    <Page>
      <article className='flex justify-center items-center gap-[3rem] mx-auto px-5'>
        <div className='flex  flex-[0.5]'>
          <img alt="" src={bg} className="m-auto" />
        </div>
        <FormAuth/>
      </article>
    </Page>
  )
}

export default Auth