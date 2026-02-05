import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashbord from './pages/Dashbord';
import Products from './pages/Products';
import Transaction from './pages/Transaction';
import Customer from './pages/Customer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashbord />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/Customer" element={<Customer />} />
      </Routes>
    </Router>
  );
};

export default App;
