import { useEffect, useState } from "react"
import { hello } from "../../apis/hello"

export default function Index() {
  let [greeting, setGreeting] = useState('loading...')
  useEffect(() => {
    hello('world').then(x => setGreeting(x))
  }, [setGreeting])
  return <div>
    <h1>Index</h1>
    <p>{greeting}</p>
  </div>
}