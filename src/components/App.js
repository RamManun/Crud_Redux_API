import React, { Component } from 'react';
import Header from './Header'
import Productos from './Productos'
import EditarProduto from './EditarProducto'
import NuevoProducto from './NuevoProducto'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Redux
import {Provider} from 'react-redux'
import store from '../store'

class App extends Component {
  render() { 
    return ( 
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header/>
            
              <div className="container">
                  <Switch>
                      <Route exact path="/" component={Productos}/>
                      <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                      <Route exact path="/productos/editar/:id" component={EditarProduto}/>
                  </Switch>
              </div>
          </React.Fragment>
        </Router>
      </Provider>
     );
  }
}
 
export default App;