import React from 'react';
const UserCard = ({userData}) =>{
    const {name, username, email, phone, website, address,} = userData

    return (
        <div style={{border: "2px solid tomato", padding: "20px", borderRadius: '50px', marginBottom:'20px'
        }}>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <h4>Email: {email}</h4>
            <p>Mobail: {phone}</p>
            <p>Address: {address.street}</p>
            <p>Website: {website}</p>
        </div>
    )
}
export default UserCard