"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

const DashboardPage = () => { 
  const router = useRouter()
  const session = authClient.useSession();

  if(!session?.data?.user) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.data?.user.name}</h1>
      <h1>{session?.data?.user.email}</h1>
      <Button
        onClick={() => {
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/authentication");
              }
            }
          })
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default DashboardPage;