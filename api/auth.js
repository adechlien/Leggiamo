import { createHandler } from "netlify-cms-oauth-provider-node";

const handler = createHandler({
  provider: "github",
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  redirectURI: `${process.env.SITE_URL}/api/callback`,
  scopes: ["repo"],
});

export default function (req, res) {
  return handler(req, res);
}
