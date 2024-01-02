import dynamicBg from '../pic/fadebg5.png';

export default function About() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className="container about">
        <h1 className="aboutTitle">
          WHAT
          <br />
          IS MINDFLIP?
        </h1>
        <div className="aboutInfo">
          Mind Flip is an online game
          <br />
          where you have to complete logical challenges
          <br />
          over a short time
          to incrase your personal rating
        </div>
      </div>
      <div className="container aboutContainers" id="aboutContainer">
        <h1 className="aboutTitle text-right">
          THE EXCERCISES
        </h1>
        <div className="aboutInfo">
          Mind Flip is an online game
          <br />
          where you have to complete logical challenges
          <br />
          over a short time
          to incrase your personal rating
        </div>
        <div className="aboutInfo">
          Mind Flip is an online game
          <br />
          where you have to complete logical challenges
          <br />
          over a short time
          to incrase your personal rating
        </div>
      </div>
    </>
  );
}
