import Link from 'next/link';

export default function Details () {
  return (
    <div>
      {
        people.map((man) => (
          <Link as={`/${man.vehicle}/${man.name}`} href="/[vehicle]/[person]"><a>Navigate to {man.name}'s {man.vehicle}</a></Link>
        ))
      }      
    </div>
  )
}