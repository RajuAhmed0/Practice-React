import { useEffect, useState } from "react"
import UserCard from "./UserCard"


const Post = () => {
    const [users, setUser] = useState([])

    // useEffect(() =>{},[]) /* useEffect tipe this way */ 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])



    return (
        <div>
            {
                users.map((user) => <UserCard key={user.id} userData={user}></UserCard>)
            }
        </div>
    )



}
export default Post

