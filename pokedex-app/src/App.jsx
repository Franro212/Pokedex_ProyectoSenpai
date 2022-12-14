import {  useState } from "react";

// ============ IMPORTS COMPONENTS ===============
import Stras from "./components/background/Stars";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import pokemones from './API/data'



function App() {
  
  const [listPokemones, setListPokemones] = useState(pokemones);
  const [orderButton, setOrderButton] = useState(true);
  

  
  const showData = (data) => {
    setListPokemones(data);
  };
   const dataDefault = () => {
   setListPokemones(pokemones)
    
   };

  const orderAlfa = () => {
    const result = [...listPokemones]?.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    showData(result);
    setOrderButton(false);
  };

  const orderId = () => {
    const result = [...listPokemones]?.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    showData(result);
    setOrderButton(true);
  };

  return (
    <div className="App">
      <Stras />
      <Header
        showData={showData}
         dataDefault={dataDefault}
        listPokemones={listPokemones}
        orderAlfa={orderAlfa}
        orderId={orderId}
        stateButton={orderButton}
      />

      <Main listPokemones={listPokemones} />
    </div>
  );
}

export default App;
