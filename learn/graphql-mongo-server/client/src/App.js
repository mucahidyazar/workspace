import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import './App.css';

const GET_CATS = gql`
  {
    cats {
      id
      name
    }
  }
`

const CREATE_CAT = gql`
  mutation ($catNameType: String!){
    createCat(name: $catNameType){
      id
      name
    }
  }
`


const App = props => {

  const [createCat] = useMutation(CREATE_CAT);
  const [catName, setCatName] = useState();

  const { loading, error, data, refetch, networkStatus } = useQuery(GET_CATS, {
    notifyOnNetworkStatusChange: true
  });

  if (networkStatus === 4) return 'Refetching!';


  return (
    <div className="App">
      <p>Merhaba Dunya</p>
      <div>
        <h3>Create New Cat</h3>
        <input onChange={(e) => setCatName(e.target.value)} value={catName} type="text" name="catName" placeholder="Cat Name" />
        <button onClick={() => {
          createCat({variables: { catNameType: catName }});
          setCatName('');
          refetch();
        }}>Add</button>
      </div>
      <button onClick={() => refetch()}>Refetch</button>
      {
        data && data.cats
        ? data.cats.map(cat => (
          <div key={cat.id}>{cat.name}</div>
        )) 
        : null
      }
    </div>
  );
}

export default App;
