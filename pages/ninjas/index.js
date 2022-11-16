import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const json = await res.json();
  return {
    props: { ninjas: json },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Head>
        <title>Ninja List</title>
      </Head>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((user) => {
          return (
            <Link href={`/ninjas/${user.id}`} className={styles.single} key={user.id}>
              <h3>{user.username}</h3>
            </Link>
          );
        })}
    </div>
  );
};

export default Ninjas;
