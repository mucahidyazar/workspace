import { useRouter } from 'next/router';

export default function Person() {

  const router = useRouter();
  const { person, vehicle } = router.query;

  return <h2>{person}'s {vehicle}</h2>
}