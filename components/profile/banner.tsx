import EditButton from "@/components/global/edit-button";

export default function ProfileBanner() {
  const bgUrl =
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg";

  return (
    <div
      className="h-[200px] w-full bg-gray-500 bg-cover bg-center rounded-b-lg"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <EditButton className="absolute top-[185px] md:top-2 right-2 " />
    </div>
  );
}
