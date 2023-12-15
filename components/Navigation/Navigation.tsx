"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const sessions = useSession();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            className={isActive ? "active" : ""}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
      {sessions?.data && (
        <Link
          className={`${pathname === "/profile" ? "active" : ""}`}
          href="/profile"
        >
          Profile
        </Link>
      )}
      {sessions?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Link>
      ) : (
        <Link
          className={`${pathname === "/signin" ? "active" : ""}`}
          href="/signin"
        >
          Sign in
        </Link>
      )}
    </>
  );
};

export default Navigation;
