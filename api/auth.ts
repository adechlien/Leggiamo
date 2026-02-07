import { auth } from "decap-cms-backend-github";

export default auth({
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  repo: "adechlien/Leggiamo",
});
