import { Navigate } from "react-router-dom"

export default function Index() {

  return <div>
    <Navigate to={`/platform/android`} />
  </div>
}