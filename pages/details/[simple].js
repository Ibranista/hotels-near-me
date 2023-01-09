import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Simple() {
  const router = useRouter();
  const Id = router.query.simple;
  return (
    <div>
      Simple
      <Link href="/">Back to Home</Link>
      <h1>url name:{Id}</h1>
    </div>
  );
}

export default Simple;
