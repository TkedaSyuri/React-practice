
import { ENDPOINT } from "@/constants";
import ClientCompo from "./components/clientCompo";
import ArticleList from "@/components/articleList";

export default  async function  SSR() {
const articles = await fetch(ENDPOINT).then((res)=>res.json());

  return (
    <div>
      <div>SSR Page</div>
      <ClientCompo />
      <ArticleList list={articles} basePath="/010_SSR" />
    </div>
  );
}
