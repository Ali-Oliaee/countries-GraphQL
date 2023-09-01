import { gql, useQuery } from "@apollo/client";
import { client } from "./adaptor/client";
import CountryList from "./components/country-list";
import Spinner from "./components/spinner";

function App() {
  const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      native
      currency
      capital
      languages {
        code
        name
      }
    }
  }
  `;

  const {data, loading} = useQuery(LIST_COUNTRIES, {client});
  console.log(loading);
  

  return loading ? <Spinner/> : <CountryList {...data}/>
}

export default App
