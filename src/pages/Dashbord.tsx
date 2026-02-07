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
            value={340000}
            percent={40}
            color="green"
            amount={false}
          />
          <WidgetItom
            heading="Revenue"
            value={400}
            percent={-14}
            color="rgb(0 198 202)"
            amount={false}
          />
          <WidgetItom
            heading="Revenue"
            value={3400}
            percent={80}
            color="rgb(0 198 202)"
            amount={false}
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

      <div
        className="widgetcircle"
        style={{
          background: `conic-greeen(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(225, 225, 225) 0
        )`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

export default Dashbord;
