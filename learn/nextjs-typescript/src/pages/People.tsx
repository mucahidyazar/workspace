import { NextPageContext } from "next";
import fetch from 'isomorphic-unfetch';
import Router from "next/router";
import { myGet } from "../../api/myGet";

export default function People({people}: any) {
  return (
    <div>{JSON.stringify(people)}</div>
  )
}

People.getInitialProps = async (ctx: NextPageContext) => {

  const json = await myGet('http://localhost:3000/api/people', ctx);

  return { people: json };
}