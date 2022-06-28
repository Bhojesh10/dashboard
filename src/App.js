import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './sidebar';
import Topbar from './topbar';
// import "../assets/sb-admin-2.min.css"
import Heading from './heading';
import User from './user';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './product';
// import {Link} from 'react-router-dom'
import Createuser from './createuser';
import Login from './login';
import Home from './home';
 

function App() {
  return (
    
 <div className='apps'>
<Routes>
<Route path="/" element={<Login />} />


{/* <Route path="/" element={<Home />} > */}

<Route path="home" element={<Home />} >
<Route path="home" element={<Heading />}  />
<Route path="dashboard" element={<Heading />} />
<Route path="users" element={<User />} />
{/* <Route path="users/createuser" element={<Createuser />} /> */}
<Route path="products" element={<Product />} />
</Route>

  </Routes>
 </div>   
   


    
   
  );
}

export default App;
