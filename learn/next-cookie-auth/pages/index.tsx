import Layout from '../src/components/Layout';
import Link from 'next/link';

export default function Index() {
  return (
    <Layout title="home">
      <Link href="profile">
        <a>Go to profile</a>
      </Link>
    </Layout>
  )
}