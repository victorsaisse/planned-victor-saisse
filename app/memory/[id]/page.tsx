import ShareCard from "@/components/share/share-card";
import { getMemory } from "@/services/get-memory";
import { redirect } from "next/navigation";

export default async function MemoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const memory = await getMemory({ memoryId: id });

  if (!memory) {
    redirect("/not-found");
  }

  return <ShareCard memory={memory} />;
}
