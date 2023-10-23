import React, { useState } from "react";
import Started from "./Started";
import Regis from "./Regis";
import Login from "./Login";

const Auth = (props) => {
  const { setToken, token } = props;
  const [initialized, setInitialized] = useState(false);
  const [swapWin, setSwapWin] = useState("");

  useEffect(()=>{
    if(!initialized){
      createTokenTable()
      setInitialized(true);
    }
  }, [initialized])

  return swapWin === "login" ? (
    <Login setSwapWin={setSwapWin} setToken={setToken} token={token}/>
  ) : swapWin === "regis" ? (
    <Regis setSwapWin={setSwapWin} setToken={setToken} token={token}/>
  ) : (
    <Started setSwapWin={setSwapWin} />
  );
};

export default Auth;
