import GoogleButton from "@/components/GoogleButton/GoogleButton";
import SignInForm from "@/components/SignInForm/SignInForm";

export default async function Signin() {
  return (
    <div className="stack">
      <h1>Sign in</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
