import { ReactNode } from "react";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/sidebar/Sidebar";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import styles from "../styles/about.module.css";
export default function About() {
  const address = `https://randomuser.me/api/`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error, isValidating, mutate } = useSWR(address, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 3000,
  });

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  function handleMutateClick() {
    mutate(
      {
        ...data,
        results: data.results.map((item: any) => {
          return {
            ...item,
            email: "nththuy@humaxdigital.com",
          };
        }),
      },
      true
    );
  }

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.container}>
          {data &&
            data.results.map((item: any) => (
              <div
                key={item.cell}
                className={`${styles.userCard}  ${item.gender}`}
              >
                <div className={styles.right}>
                  <Image
                    width={100}
                    height={100}
                    src={item.picture.large}
                    alt="user-avatar"
                    className={styles.img}
                  />
                  <h3
                    className={styles.nameCard}
                  >{`${item.name.first}  ${item.name.last}`}</h3>
                </div>
                <div className={styles.details}>
                  <p>Country: {item.location.country}</p>
                  <p>State: {item.location.state}</p>
                  <p>Email: {item.email}</p>
                  <p>Phone: {item.phone}</p>
                  <p>Age: {item.dob.age}</p>
                </div>
              </div>
            ))}
        </div>
        <button onClick={handleMutateClick} className={styles.button}>Update email</button>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
