import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of</h1>

      <h2>{session?.user?.name}</h2>
      <h2>{session?.user?.email}</h2>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="User icon"
          width={100}
          height={100}
          priority
        />
      )}
    </div>
  );
}
