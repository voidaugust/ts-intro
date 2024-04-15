import { Link } from "react-router-dom"

export default function StartPage() {
  return <>
    <h2>
      <Link to="/user">User</Link>  
    </h2>

    <h2>
      <Link to="/weather">Weather</Link>
    </h2>

    <h2>
      <Link to="/city">City</Link>
    </h2>

    <h2>
      <Link to="/zoo">Zoo</Link>
    </h2>
  </>
}