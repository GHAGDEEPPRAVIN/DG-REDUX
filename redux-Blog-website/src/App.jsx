import { useState } from 'react';
import Navbar from './Components/Navbar';
import RoutesConfig from './Allroutes/Allroute';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <RoutesConfig />

    </>
  );
}

export default App;
