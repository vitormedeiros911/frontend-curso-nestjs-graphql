import { Outlet } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
