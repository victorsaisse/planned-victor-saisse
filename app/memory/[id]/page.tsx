export default function MemoryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div className="text-4xl">{id}</div>;
}
