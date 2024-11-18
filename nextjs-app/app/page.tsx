import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Navbar2 } from "@/app/components/Navbar2";
import { Footer1 } from "@/app/components/Footer1";
import { Header1 } from "@/app/components/Header1";
import { Layout484 } from "@/app/components/Layout484";
import { Layout47 } from "@/app/components/Layout47";
import { AllPosts } from "@/app/components/Posts";

export default function Page() {
  return (
    <div className="relative">
      <Header1 />
      <Layout484 />
      <Layout47 />
    </div>
  );
}
