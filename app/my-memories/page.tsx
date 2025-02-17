import SignInWithGoogleButton from "@/components/login/google-button";
import LoginButton from "@/components/login/logout-button";
import UserGreetText from "@/components/UserGreetText";

export default function MyMemories() {
  return (
    <div className="mt-[500px]">
      <LoginButton />
      <UserGreetText />
      <SignInWithGoogleButton />
    </div>
  );
}
