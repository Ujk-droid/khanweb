"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function GlobalLoading() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 2-second artificial delay

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return <Loading />;
}
