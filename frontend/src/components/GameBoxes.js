import { useState } from 'react';

export default function GameBoxes() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [dColor, setDcolor] = useState('black');
  const [dBackground, setDbackground] = useState('rgb(239,239,239');
  const [selectedAnswer, setSelectedAnswer] = useState('e');
  const root = document.querySelector(':root');

  function selectD() {
    setDcolor('white');
    setDbackground('rgb(26,26,26');
    root.style.setProperty('--dIconBg', 'rgb(239,239,239)');
    root.style.setProperty('--dIconColor', 'rgb(26,26,26)');
    root.style.setProperty('--borderD', 'bottom');
  }

  function selectC() {
    if (selectedAnswer === 3) {
      setSelectedAnswer(0);
    } else {
      setSelectedAnswer(3);
    }
  }

  return (
    <div className="containerDefault">
      <div className="gameBoxLeft">
        <div className="answer topAnswer">
          <div>
            hehe hehe hehe
          </div>
        </div>
        <div className="answer">
          <div style={{
            background: selectedAnswer === 3 ? 'rgb(26,26,26)' : 'none',
            color: selectedAnswer === 3 ? 'rgb(239,239,239)' : 'rgb(26,26,26)',
          }}
          >
            hehe hehe hehe h
          </div>
        </div>
      </div>
      <div className="gameBoxMid">
        <div className="flexRow">
          <div className="smallGameBox firstSmall gameIcons">
            <div>
              A
            </div>
          </div>
          <div className="smallGameBox forthSmall gameIcons">
            <div>
              B
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div
            className="smallGameBox thirdSmall gameIcons"
            // style={{
            //   background: selectedAnswer === 3 ? 'rgb(239,239,239)' : 'rgb(26,26,26)',
            //   borderBottom: selectedAnswer === 3 ? 'solid 2.5px rgb(26,26,26)' : 'rgb(239,239,239)',
            // }}
            onClick={selectC}
            role="presentation"
          >
            <div style={{ color: selectedAnswer === 3 ? 'rgb(26,26,26)' : 'rgb(239,239,239)' }}>
              C
            </div>
          </div>
          <div className="smallGameBox secondSmall gameIcons" id="dIcon" onClick={selectD} role="presentation">
            <div>
              D
            </div>
          </div>
        </div>
      </div>
      <div className="gameBoxRight">
        <div className="answer topAnswer">
          <div>
            hehe hehe hehe hehe hehe hehe hehe hehehehe hehehehe hehe
          </div>
        </div>
        <div className="answer">
          <div className="dAnswer" style={{ color: dColor, background: dBackground }}>
            hehe hehe hehe
            <br />
            lol
          </div>
        </div>
      </div>
    </div>
  );
}
