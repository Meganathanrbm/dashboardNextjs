"use client";

import { useAuth } from "@/utils/AuthProvider";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  useEffect(() => {
    if (!auth.userIsLoggedIn) {
      router.push("/signin");
    } else {
      router.push("/bookkeeping");
    }
    console.log(auth.userIsLoggedIn);
  }, []);


  //need to implement auth sigin functionality
}
