"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useEffect, useState } from "react";

const SignInForm = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      router.push("/profile");
    }
  }, [session, router]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      setErrorMessage(res?.error as string);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      {errorMessage && <div>Password or Email invalid</div>}
      <button>Sign in</button>
    </form>
  );
};

export default SignInForm;
