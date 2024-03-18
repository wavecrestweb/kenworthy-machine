// LIBRARY IMPORTS
import client from "@/tina/__generated__/client";

// LOCAL IMPORTS
import QuotePage from "@/app/components/QuotePage/QuotePage";
import { Box } from "@chakra-ui/react";

export default async function RequestQuotePage() {
  const result = await client.queries.page({
    relativePath: "request_quote.md",
  });

  return <QuotePage {...result} />;
}
