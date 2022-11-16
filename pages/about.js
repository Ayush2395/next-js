import Head from "next/head";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, earum
        sapiente. Aliquid magnam nihil eligendi quibusdam quo unde impedit ipsam
        placeat earum veritatis rerum accusantium labore voluptate mollitia ipsa
        id saepe vel, optio omnis molestiae facere? Eveniet velit suscipit
        incidunt.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, earum
        sapiente. Aliquid magnam nihil eligendi quibusdam quo unde impedit ipsam
        placeat earum veritatis rerum accusantium labore voluptate mollitia ipsa
        id saepe vel, optio omnis molestiae facere? Eveniet velit suscipit
        incidunt.
      </p>
      <Link href="/">Home page</Link>
    </>
  );
};

export default about;
