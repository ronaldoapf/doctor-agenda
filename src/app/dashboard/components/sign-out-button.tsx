"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await authClient.signOut()
    redirect("/authentication");
  }

  return (
    <Button type="button" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}