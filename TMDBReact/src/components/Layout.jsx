import Navbar from "./NavBar"
import {Outlet} from 'react-router-dom'

const Layout = (props) => {
    return (
        <>
        <Navbar setMovies = {props.setMovies}/>
        <Outlet />
        </>
    )
}

export default Layout