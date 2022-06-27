import {Routes, Route} from 'react-router-dom'

import Home from './routes/home/home.component'
import Navegation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component';
import Shop from './compoments/shop/shop.component'

// const Shop = () =>{
//   return(
//     <h1>I am the shop page</h1>
//   )
// }

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navegation/>}>
        {/* <Route path='home' element={<Home />}/> */}
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>

      {/* /home/shop */}
    </Routes>
  );
};

export default App;
