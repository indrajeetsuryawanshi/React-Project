import React from 'react'
import './UserDetail.css'
const UserDetails = (props) => {
    return (

        <div className='user'>
            
               
                    <section>
                        <div className='user-1'>
                            <label >username</label>
                            <p>{props.detail.login.username}</p>
                        </div>
                        <div className='pass'>
                            <label >password</label>
                            <p>{props.detail.login.password}</p>
                        </div>
                    </section>
               

           
        </div>

    )
}

export default UserDetails
