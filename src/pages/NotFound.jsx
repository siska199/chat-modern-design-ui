import Page from "../layouts/Page";
import notFound from "../assets/not-found.svg";
const NotFound = () => {
  return (
    <Page>
      <article className="flex justify-center items-center mx-auto">
        <img className="w-[50rem] h-[50rem]" src={notFound} alt="" />
      </article>
    </Page>
  );
};

export default NotFound;
