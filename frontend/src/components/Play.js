import dynamicBg from '../pic/fadebg10.jpg';
import PlayBoxes from './PlayBoxes';

export default function Play() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
      <div
        className="dynamicBackground"
        id="dynamicBackground"
        style={{
          backgroundImage: `url(${dynamicBg})`,
          opacity: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      />
      <div className="containerQuestions">
        <br />
        <h1 className="mb-5 playTitle">SELECT PLAY MODE</h1>
        <h3 className="pt-3 mainTitle mb-3">
          You have one minute for each challenge as total time.
        </h3>
        <h3 className="pt-3 mainTitle mb-3">
          Choose how many
          <span className="compete"> challenges </span>
          do you want to solve in this session.
          <br />
        </h3>
        <h3 className="pt-3 mainTitle">
          Click an option twice in a row to send it.
        </h3>
      </div>
      <PlayBoxes />
    </>
  );
}
