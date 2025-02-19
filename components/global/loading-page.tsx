export default function LoadingPage() {
  return (
    <div
      className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24 flex flex-col gap-4 items-center justify-center"
      style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
    >
      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
      <p className="text-white text-2xl font-caveat">Loading...</p>
    </div>
  );
}
