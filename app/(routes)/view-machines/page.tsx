// LIBRARY IMPORTS
import client from "@/tina/__generated__/client";

// LOCAL IMPORTS
import MachinesPage from "@/app/components/MachinesPage/MachinesPage";

export default async function ViewMachines() {
  const result = await client.queries.pageAndFooter({
    relativePath: "view_machines.md",
  });

  return <MachinesPage {...result} />;
}
