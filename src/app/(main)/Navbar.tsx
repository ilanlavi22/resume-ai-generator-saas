"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { CreditCard } from "lucide-react";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={35} height={35} />
          <span className="text-xl font-bold tracking-tight">
            Resume AI Generator
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              //  checking the UserButton theme
              baseTheme: theme === "dark" ? dark : undefined,
              //  checking the size of the avatar
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            {/*  new feature to add custom links to UserButton */}
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
