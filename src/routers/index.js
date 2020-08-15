import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import EditProduct from '../pages/views/Admin/EditProduct';
import AddProduct from '../pages/views/Admin/AddProduct';
import Detail from '../pages/views/Main/Detail';


const Routers = ({ products, onRemove, onAdd, onUpdate,product,onSearch }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onHandleSearch=(key)=>{
        onSearch(key);
       }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} onSearch={onHandleSearch} />
                            }>
                            </Route>
                            <Route path='/admin/product/add'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'
                                render={(props) =>
                                    <EditProduct {...props} products={products} onUpdate={onHandleUpdate} />
                                }
                            >
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home  products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/product/:id">
                                <Detail product={product} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
