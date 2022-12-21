import React from 'react'
import user from "../Assets/Images/user.jpeg"

const ContactCard = (props) => {
    //destructuring
    const {id,name,email}=props.contact
  return (
      <div className="item">
      <img className='ui avatar image' src={user} alt="user" />
            <div className="content">
              <div className="header">{name}</div>
              <div>{email}</div>
            </div>
            <div style={{marginLeft:"600px",marginBottom:"10px"}}>
            <i onClick={()=>props.clickHandler(id)} style={{color:"red",fontSize:25}} className="trash alternate outline icon"></i>
            </div>
          </div>
  )
}

export default ContactCard
