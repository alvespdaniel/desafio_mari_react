import React from 'react';

const App = () => {
  let count = 1;
  const comprou = () => {
    alert(`Você comprou ${count++} Carrinho(s)!`);
  }

  return (
    <>
      <div>Carrinho Hotweels Special Edition - <span style={{fontWeight : 'bold'}}>R$ 35</span></div>
      <br />
      <button onClick={comprou}>Comprar</button>
    </>
  );
};

export default App;
