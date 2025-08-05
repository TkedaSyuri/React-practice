import { ENDPOINT } from "@/constants";
import Article from "../../components/article";

export async function generateStaticParams(){
  const data = await fetch(ENDPOINT).then(res=>res.json());
  console.log(data);
  return [{id: '1'}]
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
