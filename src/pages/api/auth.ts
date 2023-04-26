import type { APIRoute } from 'astro'

import PassDB from "../../../data/pass.json";

//const realPassword = import.meta.env.SITE_PASSWORD

export const post: APIRoute = async (context) => {
  const body = await context.request.json();

  const { user, pass } = body;
  const res = (PassDB[user] === pass);

   return new Response(JSON.stringify({
    code: res ? 0 : -1,
  }))
}
