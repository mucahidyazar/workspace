import { NextPageContext } from 'next';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';

export const myGet = async (url: string, ctx: NextPageContext) => {
  const cookie = await ctx.req?.headers.cookie;

  const resp = await fetch(url, {
    headers: {
      cookie: cookie!
    }
  });

  if(resp.status === 401 && !ctx.req) {
    Router.replace('/login');
    return {};
  }

  if(resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: 'http://localhost:3000/login'
    });
    return;
  }
  return await resp.json();
}