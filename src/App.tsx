import { gql, useQuery } from "@apollo/client";
import { client } from "./adaptor/client";
import CountryList from "./components/country-list";

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

  const {data} = useQuery(LIST_COUNTRIES, {client});

  return (
   <CountryList {...data}/>
  )
}

export default App
