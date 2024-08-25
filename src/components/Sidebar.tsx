import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="w-[250px] border-r p-4 border-gray-100 h-screen">
        <h4 className='text-lg font-bold'>Sidebar</h4>
        <ul className='space-y-2 mt-10'>
          <li>
            <Link to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link to="/products">
              Products
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar