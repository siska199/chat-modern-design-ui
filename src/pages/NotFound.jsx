import Page from "../layouts/Page";
import notFound from "../assets/not-found.svg";
const NotFound = () => {
  return (
    <Page>
      <article className="flex justify-center items-center mx-auto">
        <img className="w-[30rem] h-[30rem]" src={notFound} alt="" />
      </article>
    </Page>
  );
};

export default NotFound;
