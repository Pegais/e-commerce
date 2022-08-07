import React from 'react'
import {Link} from "react-router-dom"

function Content({ res }) {
    console.log(res);
  return (
      <div>
          <Link to="/login">
              
          <button>login</button>
          </Link>
          <Link to="/signup">
              
          <button>Sigup</button>
          </Link>
    </div>
  )
}

export default Content