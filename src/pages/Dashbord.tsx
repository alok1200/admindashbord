import AdminSideBar from '../component/adminSideBar';
import { BsSearch } from 'react-icons/bs';

const userImg =
  'https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg';
const Dashbord = () => {
  return (
    <div className="adiminContainer">
      <AdminSideBar />
      <main className="dashbord">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data users docs" />
          <img src={userImg} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashbord;
