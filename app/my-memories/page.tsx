import SignInWithGoogleButton from "@/components/login/google-button";
import LoginButton from "@/components/login/logout-button";

export default function MyMemories() {
  return (
    <div
      className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
    >
      <LoginButton />
      <SignInWithGoogleButton />
    </div>
  );
}
