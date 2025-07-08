"use client";
import SplashLoader from "@/components/loader";
import { getUserFromStore } from "@/utils/user-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = getUserFromStore();
    if (user) {
      setLoading(false);
    } else {
      router.push("/login");
    }
  }, []);
  return <>{loading ? <SplashLoader /> : children}</>;
}
