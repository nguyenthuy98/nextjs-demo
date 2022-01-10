import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
import { ReactNode } from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import styles from "./user.module.css";
import { getUsersList } from "../../services/users/api";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
export interface UsersListProps {
  users: any[];
}

export default function UsersList({ users }: UsersListProps) {
  const router = useRouter();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Name", width: 140 },
    { field: "phone", headerName: "Phone", width: 155 },
    { field: "email", headerName: "Email", width: 280 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "country", headerName: "Country", width: 120 },
    { field: "region", headerName: "Region", width: 120 }
  ];

  const rows = users;
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: "650px", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onRowClick={(params, event) => {
            router.push(`/users/${params.row.id}`);
          }}
        />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<UsersListProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await getUsersList();
  const data = response.data;
  return {
    props: {
      users: data,
    },
    revalidate: 5
  };
};

UsersList.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
