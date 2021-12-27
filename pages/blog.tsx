import { ReactNode } from "react";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/sidebar/Sidebar";
import { getPostList } from "../services/posts/api";
import { Box, ListItem, ListItemText, Button } from "@mui/material";

export interface PostsListProps {
  posts: any[];
}

export default function Blog({ posts }: PostsListProps) {
  return (
    <div>
      <h2>Blog</h2>
      <Box>
        {posts.map((post: any) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getPostList();
  const data = await res.data;

  // Pass data to the page via props
  return { props: { posts: data } };
}

Blog.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
