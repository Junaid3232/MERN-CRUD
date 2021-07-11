import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles } from "@material-ui/core"
import { useEffect } from "react"
import { useState } from "react"
import { useHistory, useParams } from "react-router"
import { GetUsers, editUser } from "../Service/api"
import { Link } from "react-router-dom"

import { addUser } from "../Service/api"

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',

        '&>*': {
            marginTop: 20

        }
    }
})
const initialValues = [{
    name: '',
    username: '',
    email: '',
    phone: ''
}]

const EditUser = () => {
    const { id } = useParams()
    const styles = useStyle()


    const [user, setUser] = useState(initialValues)
    const { name, username, email, phone } = user;
    const history = useHistory()
    useEffect(() => {
        LoadUserData()
    }, [])
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }


    const LoadUserData = async () => {
        const response = await GetUsers(id);
        setUser(response.data)
    }

    const EditUserDetails = async () => {
        await editUser(id, user)
        history.push('./all')

    }

    return <FormGroup className={styles.container}>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
        </FormControl>
        <Button variant="contained" color='primary' component={Link} to={'/all '} onClick={() => EditUserDetails()}>Edit User</Button>
    </FormGroup>
}

export default EditUser