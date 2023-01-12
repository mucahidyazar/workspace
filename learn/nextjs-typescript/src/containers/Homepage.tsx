import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/people"><a>People</a></Link>
      <Link href="/vehicles"><a>Vehicles</a></Link>
    </div>
  )
}