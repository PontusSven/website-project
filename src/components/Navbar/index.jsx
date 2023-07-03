import {  Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
    <div>
        <div style={{backgroundColor: 'red', width: '80%'}}>
            <h2>Navbar</h2>
        </div>
        <Outlet />
    </div>
    )
}

export default Navbar
