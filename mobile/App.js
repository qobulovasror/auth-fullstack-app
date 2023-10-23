import { useEffect, useState } from "react";
import MainContainer from "./src/MainConatiner";
import Auth from "./src/Auth/Auth";
import {createTokenTable, getToken} from './services/tokenServer';

function App() {
  
  const [token, setToken] = useState('');

  useEffect(()=>{
    if (!token) {
      createTokenTable()
      getToken("authToken")
        .then((data) => {
          setToken(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [])
  
  return token ? (
    <MainContainer setToken={setToken} token={token} />
  ) : (
    <Auth setToken={setToken} token={token} />
  );
}

export default App;
