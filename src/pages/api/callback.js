import { createHandler } from "netlify-cms-oauth-provider-node";

const handler = createHandler({
  provider: "github",
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  redirectURI: `${process.env.SITE_URL}/admin/#`,
  scopes: ["repo"],
});

export const GET = ({ request }) => handler(request);
export const POST = ({ request }) => handler(request);
