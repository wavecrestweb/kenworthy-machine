// LIBRARY IMPORTS
import client from "@/tina/__generated__/client";

// LOCAL IMPORTS
import CareersPage from "@/app/components/CareersPage";

export default async function Careers() {
  const result = await client.queries.page({
    relativePath: "careers.md",
  });

  return <CareersPage {...result} />;
}
