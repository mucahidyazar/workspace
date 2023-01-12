import { useRouter } from 'next/router';
import {} from '../'
import { VehiclePerson } from '../../../api/interfaces';
import { NextPageContext } from 'next';

export interface PersonProps {
  ownersList?: VehiclePerson[];
}

export default function Person({ ownersList }: PersonProps) {

  const router = useRouter();
  return <pre>{JSON.stringify(ownersList, null, 4)}</pre>
}

//NextPageContext aslinda NextJS library sinden geliyor.
interface MyNextPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  }
}

Person.getInitialProps = async ( ctx: MyNextPageContext) => {
  const { query } = ctx;

  const response = await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`);
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return {ownersList: ownersList}
}