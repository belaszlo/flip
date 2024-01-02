import { useNavigate } from 'react-router-dom';

export default function Boxes() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const navigate = useNavigate();
  const root = document.querySelector(':root');
  root.style.setProperty('--zIndexMiddle', '26');
  root.style.setProperty('--menuSvg', 'rotate(-45deg)');
  root.style.setProperty('--smallDisplay', 'initial');
  function openTab() {
    root.style.setProperty('--smallBoxBg', 'rgb(26,26,26');
    root.style.setProperty('--containerHeigh', '0vh');
    root.style.setProperty('--containerArc', '90deg');
    root.style.setProperty('--rightBox', '11.5%');
    root.style.setProperty('--leftBox', '-51.5%');
    root.style.setProperty('--smallDisplay', 'none');
    setTimeout(navigatePlay, 250);
  }

  function navigateAbout() {
    navigate('about');
  }
  function navigatePlay() {
    navigate('play');
  }
  function hoverLeftSideOn() {
    root.style.setProperty('--zIndexMiddle', '26');
  }

  function hoverLeftSideOff() {
    root.style.setProperty('--zIndexMiddle', '26');
  }

  return (
    <div className="containerDefault menuContainer">
      <div
        className="firstBox"
        role="presentation"
        onMouseEnter={() => hoverLeftSideOn()}
        onMouseLeave={() => hoverLeftSideOff()}
      >
        <div className="boxMenu">
          About
        </div>
      </div>
      <div className="smallBoxContainer">
        <div className="smallBoxRow">
          <div className="smallBox firstSmall">
            <div className="menuSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 32" xmlSpace="preserve">
                <path
                  d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7
              7-3.14 7-7
              7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27
              32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6
              24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942
              8.943V31a1 1 0 0 1-1 1z"
                  fill="#efefef"
                />
              </svg>
            </div>
            <div />
          </div>
          <div className="smallBox thirdSmall" onClick={navigateAbout} role="presentation">
            <div className="menuSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 24">
                <path
                  d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12
                    12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
                  fill="#efefef"
                />
                <path
                  d="M15 19h-4v-8H9V9h4v8h2v2zM11 5h2v2h-2z"
                  fill="#efefef"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="smallBoxRow">
          <div className="smallBox forthSmall" onClick={openTab} role="presentation">
            <div className="menuSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 32">
                <g fill="#efefef">
                  <path
                    d="M9.48 29a2.65 2.65 0 0 1-1.13-.25A2.3 2.3 0 0 1 7 26.69V5.31a2.3 2.3 0 0 1 1.35-2.06
                    2.63 2.63 0 0 1 2.77.33l13 10.69a2.2 2.2 0 0 1 0 3.46l-13 10.69a2.61 2.61 0
                    0 1-1.64.58zm0-24a.61.61
                    0 0 0-.28.06c-.08 0-.21.12-.21.25v21.38c0 .13.13.21.21.25a.62.62 0 0 0 .64-.06l13-10.7a.2.2 0
                    0 0 0-.36l-13-10.7A.62.62 0 0 0 9.49 5z"
                    fill="#efefef"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="smallBox secondSmall">
            <div className="menuSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 48">
                <g fill="#efefef">
                  <path
                    d="M33.31 27.259C48.657 21.456 48 5.478 48 5.316a.728.728 0 0
                    0-.727-.689H39.35a70.77 70.77 0 0 0 .278-3.871A.728.728
                     0 0 0 38.9 0H9.107a.726.726 0 0 0-.726.756c.009.24.07 1.7.278 3.871H.733a.729.729 0 0
                     0-.727.689C0 5.478-.656 21.462 14.7 27.263a15.77
                     15.77 0 0 0 5.22 5.713 10.945 10.945 0 0 1-5.757 6.217h-4.7a.728.728 0
                     0 0-.727.729v7.352a.728.728 0 0
                     0 .723.726H38.55a.728.728 0 0 0
                      .727-.727v-7.351a.728.728 0 0 0-.727-.729h-4.7a10.87 10.87 0 0 1-5.757-6.217
                      15.755 15.755 0 0 0 5.217-5.717zM46.552
                      6.082c-.035 2.906-.935 13.979-12.169 19.15
                       2.933-6.146 4.243-14.008 4.816-19.15zm-45.1 0H8.81c.573
                      5.145 1.884 13.008 4.818 19.156C2.385 20.07 1.485 8.988 1.45 6.082zm36.371
                      34.566v5.9H10.187v-5.9h27.636zm-10.947-8.654a.728.728
                      0 0 0-.358.846 12 12 0 0 0 4.459
                      6.354H17.035a12.005 12.005 0 0 0 4.458-6.354.729.729 0 0 0-.357-.846C11.915
                      27.107 10.141 5.756 9.875 1.455h28.26c-.265 4.3-2.035
                      25.652-11.259 30.539z"
                    fill="#efefef"
                  />
                  <path
                    d="M15.278 44.324h17.454a.727.727 0 1 0 0-1.454H15.278a.727.727 0 1 0 0 1.454z"
                    fill="#efefef"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="secondBox" onClick={openTab} role="presentation" />
      <div
        className="thirdBox"
        role="presentation"
        onMouseEnter={() => hoverLeftSideOn()}
        onMouseLeave={() => hoverLeftSideOff()}
      >
        <div className="boxMenu">
          Play
        </div>
      </div>
    </div>
  );
}
