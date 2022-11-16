import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Hello</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a adipisci
        eius illum fugiat? Est dolorem, similique a, laudantium odio ipsum,
        eveniet delectus nisi quidem earum autem aliquam quibusdam quo!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a adipisci
        eius illum fugiat? Est dolorem, similique a, laudantium odio ipsum,
        eveniet delectus nisi quidem earum autem aliquam quibusdam quo!
      </p>
      <Link className={styles.btn} href="/ninjas">
        See ninja List
      </Link>
    </>
  );
}
