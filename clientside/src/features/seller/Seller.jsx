import React from 'react'
import { Outlet } from 'react-router'

function Seller() {
    return (
        <>
            <div>Seller</div>
            <Outlet />
        </>
    )
}

export default Seller