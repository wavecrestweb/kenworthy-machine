// LIBRARY IMPORTS
import client from "@/tina/__generated__/client";

// LOCAL IMPORTS
import MachinesPage from "@/app/components/MachinesPage";

export default async function ViewMachines() {
  const result = await client.queries.page({
    relativePath: "view_machines.md",
  });

  return <MachinesPage {...result} />;
}
