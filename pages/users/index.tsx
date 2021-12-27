import { GetStaticProps, GetStaticPropsContext } from "next"
import * as React from "react"
import { ReactNode } from "react"
import Layout from "../../components/layout/Layout"
import Sidebar from "../../components/sidebar/Sidebar"
import { useRouter } from 'next/router'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, IconButton} from '@mui/material'
import styles from './user.module.css'
import { getUsersList } from "../../services/users/api"
// import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit'
export interface UsersListProps {
  users: any[];
}

export default function UsersList({ users }: UsersListProps) {
  const router = useRouter();

  return (
    <div>
      <h3>User List</h3>
      <TableContainer component={Paper} className={styles.mainContent}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Website</TableCell>
              <TableCell align="center">Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">{user.website}</TableCell>
                <TableCell align="center">{user.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
