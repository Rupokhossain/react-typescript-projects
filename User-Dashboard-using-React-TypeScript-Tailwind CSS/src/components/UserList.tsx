import { useEffect, useState } from "react"
import type { User } from "../types/user";
import { getUsers } from "../services/user";



const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async() => {
        try {
            setLoading(true);
            const data = await getUsers();
            setUsers(data);
            setError(null)
        } catch  {
            setError("Faild to fetch users")
        } finally {
            setLoading(false)
        }
    }

    if(loading) return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
    )

    if(error) return (
        <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
        </div>
    )

  return (
    <div>UserList</div>
  )
}

export default UserList