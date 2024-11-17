import { Suspense } from "react";
import Link from "next/link";

import { AllPosts } from "@/app/components/Posts";
export default async function Page() {
  return (
    <>
      <div className="relative">
        <div className="container relative">
          <aside className="py-12 sm:py-20">
            <Suspense>
              <AllPosts />
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
