import Layout from "../components/layout/Layout";
import Sidebar from "../components/sidebar/Sidebar";
import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, ListItem, ListItemText, Button } from "@mui/material";

// dynamic import
//const Hello = dynamic(() => import('../components/content/hello'), { ssr: false })

export default function Index() {
  const [postList, setPostList] = useState([]);

  const loadPosts = async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    const data = await response.json();
    setPostList(data.postsList);
  };

  return (
    <div>
      <h2>Home</h2>
      {/* <Hello /> */}
      <h3>List post data</h3>
      <Button variant="contained" onClick={() => loadPosts()}>Show Posts Data</Button>
      <Box>
          {postList.map((post: any) => (
            <ListItem key={post.id}>
              <ListItemText primary={post.title} secondary={post.body} />   
            </ListItem>
          ))}
      </Box>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};


export async function getStaticProps() {
	console.log('get static props')
	return {
		props: {},
	}
}