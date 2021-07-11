
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})
const NavBar = () => {
    const styles = useStyle()
    return <AppBar className={styles.header} position="static">
        <Toolbar className={styles.toolbar}>
            <NavLink className={styles.tabs} exact to="/">First MERN Project</NavLink>
            <NavLink className={styles.tabs} exact to="/all">All Users</NavLink>
            <NavLink className={styles.tabs} exact to="/add">Add Users</NavLink>
        </Toolbar>
    </AppBar>
}
export default NavBar