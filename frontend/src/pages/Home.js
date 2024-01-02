import Boxes from '../components/Boxes';
import dynamicBg from '../pic/fadebg10.jpg';

export default function Home() {
  return (
    <>
      <div
        className="dynamicBackground"
        style={{
          backgroundImage: `url(${dynamicBg})`,
          opacity: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      />
      <Boxes />
      <div className="container homeBox">
        <h3 className="pt-3 menuTitle text-center">
          Join us and
          compete
          in logical challenges
          with people from all around the world..
        </h3>
      </div>
    </>
  );
}
