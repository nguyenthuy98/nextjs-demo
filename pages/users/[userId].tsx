import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { ReactNode } from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./user.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface UserPageProps {
  user: any;
}

export default function PostDetailPage({ user }: UserPageProps) {
  const router = useRouter();

  // ISR
  if (router.isFallback) {
    return (
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Loading...</div>
    );
  }

  if (!user) return null;

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897"
        />
        <CardContent>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => router.push(`/users`)}>Back to list</Button>
        </CardActions>
        </Card>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    paths: data.map((user: any) => ({
      params: { userId: user.id.toString() },
    })),
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<UserPageProps> = async (
  context: GetStaticPropsContext
) => {
  const userId = context.params?.userId;
  if (!userId) return { notFound: true };

  const response = await fetch(
    `http://localhost:3001/employees/${userId}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 5
  };
};

PostDetailPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
