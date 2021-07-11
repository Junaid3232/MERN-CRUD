import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core"
import React, { useState, useEffect } from 'react';
import { GetUsers, deleteUserData } from "../Service/api"
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: 10
    },
    thead: {
        '&>*': {
            background: '#000000',
            color: '#FFFFFF',

        }
    }
})
const AllUsers = () => {
    const styles = useStyle()
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
        const response = await GetUsers()
        // console.log(response)
        setUsers(response.data)
    }
    const deleteUser = async (id) => {
        await deleteUserData(id);
        getAllUsers();
    }


    return (

        <Table className={styles.table}>
            <TableHead>
                <TableRow className={styles.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>PhoneNo</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" component={Link} style={{ marginRight: 10 }} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" component={Link} to={'/all'} onClick={() => deleteUser(user._id)}> Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );

}
export default AllUsers