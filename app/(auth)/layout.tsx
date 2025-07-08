"use client";
import SplashLoader from "@/components/loader";
import { getUserFromStore } from "@/utils/user-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = getUserFromStore();
    if (user) {
      router.push("/welcome");
    } else {
      setLoading(false);
    }
  }, []);
  return <>{loading ? <SplashLoader /> : children}</>;
}
