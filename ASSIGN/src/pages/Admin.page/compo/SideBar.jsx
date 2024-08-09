import React from 'react'
import "../../Admin.page/compo/Side.css"
const SideBar = ({ setView }) => {
  return (
    <div>
          <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <button onClick={() => setView('create')}>Create Product</button>
        </li>
       
        <li>
          <button onClick={() => setView('view')}>View Product</button>
        </li>
        {/* <li>
          <button onClick={()=>setView('menuadd')}>ADD MENU</button>
        </li> */}
      </ul>
    </div>
    </div>
  )
}

export default SideBar