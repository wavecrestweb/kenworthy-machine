// LIBRARY IMPORTS
import client from "@/tina/__generated__/client";

// LOCAL IMPORTS
import Home from "./components/Home";

export default async function Page() {
  // CMS QUERIES
  const result = await client.queries.page({ relativePath: "home.md" });

  return <Home {...result} />;
}
