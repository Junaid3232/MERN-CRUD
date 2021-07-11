import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router"

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
const AddUser = () => {
    const styles = useStyle()


    const [user, setUser] = useState(initialValues)
    const { name, username, email, phone } = user;
    const history = useHistory()
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const AddUserDetails = async () => {
        await addUser(user)
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
        <Button variant="contained" color='primary' onClick={() => AddUserDetails()}>Add User</Button>
    </FormGroup>
}

export default AddUser