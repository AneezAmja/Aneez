import React, { Children } from 'react'


const ListItem = ({children}) => {
  return (
    <li className="before:content-['▹'] before:text-[30px]  before:absolute before:left-[-9px] py-1 before:text-secondary-content text-sm list-none">
    {children}
  </li>
  )
}

export default ListItem