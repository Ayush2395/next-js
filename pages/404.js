import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="not-found">
        <h1>Oops...</h1>
        <h2>Page not found</h2>
        <p>
          Go back to <Link href="/">Home</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
