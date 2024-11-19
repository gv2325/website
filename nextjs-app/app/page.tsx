import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Navbar2 } from "@/app/components/Navbar2";
import { Footer1 } from "@/app/components/Footer1";
import { Header1 } from "@/app/components/Header1";
import { Layout484 } from "@/app/components/Layout484";
import { Layout3 } from "@/app/components/Layout3";
import { Stats1 } from "@/app/components/Stats1";
import { Team6 } from "@/app/components/Team6";
import { AllPosts } from "@/app/components/Posts";

export default function Page() {
  return (
    <div className="relative">
      <Header1 />
      <Layout484 />
      <Layout3 />
      <Stats1 />
      <Team6 />
    </div>
  );
}
