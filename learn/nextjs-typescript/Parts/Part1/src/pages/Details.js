import Link from 'next/link';

const people = [
  {vehicle: 'car', name: 'talha'},
  {vehicle: 'bike', name: 'john'},
  {vehicle: 'airplane', name: 'Mike'},
]

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