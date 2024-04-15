import { getUserData } from "../api/data"
import HomeLink from "../components/HomeLink"

type GetFullName = (name: string, surname: string) => string
const getFullName: GetFullName = (name, surname) => `${name} ${surname}`

export default function UserPage() {
  const user = getUserData()
  const fullName = getFullName(user.name, user.surname)
  return <>
    <HomeLink />
    { user && 
      <h3>{fullName}, {user.age}</h3>
    }
  </>
}