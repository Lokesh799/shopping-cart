import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductsContainer from './ProductsContainer'
// import CartContainer from './CartContainer'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap';
//import { useHistory } from "react-router-dom";
import Login from '../components/Login'


const App = () => {


  return (

    <div>
      <div>
        <h1> Home Page</h1>
        <BrowserRouter>
          <Button to="/Login">login Page</Button><hr />
          {/* <Link to="/ProductsContainer">Show Products </Link><hr/>
          <Link to="/CartContainer">show Cart Container</Link><hr/>
          <Route exact path="/Home" component={Home}/>
          <Route  path="/ProductsContainer" component={ProductsContainer}/>
          <Route  path="/CartContainer" component={CartContainer}/> */}
          {/* <ProductsContainer/>
        <CartContainer /> */}
          <Route exact path="/Login" component={Login} />
        </BrowserRouter>
      </div>
    </div>


  )
}

export default App
