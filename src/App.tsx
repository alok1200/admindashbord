import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Products from './pages/Products';
import Transaction from './pages/Transaction';
import Customers from './pages/Customer';
import BarCharts from './pages/charts/BarCharts';
import PieCharts from './pages/charts/PieCharts';
import LineCharts from './pages/charts/LineCharts';
import Stopwatch from './pages/app/Stopwatch';
import Coupon from './pages/app/Coupon';
import Toss from './pages/app/Toss';
import NewProduct from './pages/management/NewProduct';
import ProductManagement from './pages/management/ProductManagement';
import TransactionManagement from './pages/management/TransactionManagement';
import DashboardTable from './component/DashboardTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/admin/dashboard">
              <button>Visit Dashboard</button>
            </Link>
          }
        />

        <Route path="/admin/dashboard" element={<DashboardTable data={[]} />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/transaction" element={<Transaction />} />

        {/* Charts */}

        <Route path="/admin/chart/bar" element={<BarCharts />} />
        <Route path="/admin/chart/pie" element={<PieCharts />} />
        <Route path="/admin/chart/line" element={<LineCharts />} />

        {/* Apps */}

        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/toss" element={<Toss />} />

        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
        <Route
          path="/admin/transaction/:id"
          element={<TransactionManagement />}
        />
      </Routes>
    </Router>
  );
};

export default App;
