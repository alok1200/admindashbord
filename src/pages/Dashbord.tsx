import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
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
        <section className="Widgatcontainer">
          <WidgetItom
            heading="Revenue"
            value={1234}
            percent={12}
            color="green"
            amount
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItomprop {
  heading: string;
  percent: number;
  value: number;
  color: string;
  amount?: boolean;
}

const WidgetItom = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItomprop) => {
  return (
    <article className="widget">
      <div className="widgetinfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className={color}>
            <HiTrendingUp /> + {percent}% {''}
          </span>
        ) : (
          <span className={color}>
            <HiTrendingDown /> - {percent}% {''}
          </span>
        )}
      </div>
    </article>
  );
};

export default Dashbord;
