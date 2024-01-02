import room from 'szoba.jpg';

export default function Pictures() {
  const root = document.querySelector(':root');

  function leftBedRoomButtonOn() {
    root.style.setProperty('--leftBedRoom', `${0}%`);
    root.style.setProperty('--leftHalf', `${0}%`);
  }

  function leftBedRoomButtonOff() {
    root.style.setProperty('--leftBedRoom', `${90}%`);
    root.style.setProperty('--leftHalf', `${100}%`);
  }

  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="houseImage">
          <div className="imageBlanket">
            <div className="blanketRows">
              <div className="blanketCols" id="a01" />
              <div className="blanketCols" id="a02" />
              <div className="blanketCols" id="a03" />
              <div className="blanketCols" id="a04" />
              <div className="blanketCols" id="a05" />
              <div className="blanketCols" id="a06" />
              <div className="blanketCols" id="a07" />
              <div className="blanketCols" id="a08" />
              <div className="blanketCols" id="a09" />
              <div className="blanketCols" id="a10" />
              <div className="blanketCols" id="a11" />
              <div className="blanketCols" id="a12" />
              <div className="blanketCols" id="a13" />
              <div className="blanketCols" id="a14" />
              <div className="blanketCols" id="a15" />
              <div className="blanketCols" id="a16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="b01" />
              <div className="blanketCols" id="b02" />
              <div className="blanketCols" id="b03" />
              <div className="blanketCols" id="b04" />
              <div className="blanketCols" id="b05" />
              <div className="blanketCols" id="b06" />
              <div className="blanketCols" id="b07" />
              <div className="blanketCols" id="b08" />
              <div className="blanketCols" id="b09" />
              <div className="blanketCols" id="b10" />
              <div className="blanketCols" id="b11" />
              <div className="blanketCols" id="b12" />
              <div className="blanketCols" id="b13" />
              <div className="blanketCols" id="b14" />
              <div className="blanketCols" id="b15" />
              <div className="blanketCols" id="b16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="c01" />
              <div className="blanketCols" id="c02" />
              <div className="blanketCols" id="c03" />
              <div className="blanketCols" id="c04" />
              <div className="blanketCols" id="c05" />
              <div className="blanketCols" id="c06" />
              <div className="blanketCols" id="c07" />
              <div className="blanketCols topTerrace" id="c08" />
              <div className="blanketCols topTerrace" id="c09" />
              <div className="blanketCols topTerrace" id="c10" />
              <div className="blanketCols topTerrace" id="c11" />
              <div className="blanketCols rightBedRoom" id="c12" />
              <div className="blanketCols rightBedRoom" id="c13" />
              <div className="blanketCols rightBedRoom" id="c14" />
              <div className="blanketCols rightBedRoom" id="c15" />
              <div className="blanketCols rightBedRoom" id="c16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="d01" />
              <div className="blanketCols" id="d02" />
              <div className="blanketCols" id="d03" />
              <div className="blanketCols" id="d04" />
              <div className="blanketCols" id="d05" />
              <div className="blanketCols" id="d06" />
              <div className="blanketCols" id="d07" />
              <div className="blanketCols topTerrace" id="d08" />
              <div className="blanketCols topTerrace" id="d09" />
              <div className="blanketCols topTerrace" id="d10" />
              <div className="blanketCols topTerrace" id="d11" />
              <div className="blanketCols rightBedRoom" id="d12" />
              <div className="blanketCols rightBedRoom" id="d13" />
              <div className="blanketCols rightBedRoom" id="d14" />
              <div className="blanketCols rightBedRoom" id="d15" />
              <div className="blanketCols rightBedRoom" id="d16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="e01" />
              <div className="blanketCols leftBedRoom" id="e02" />
              <div className="blanketCols leftBedRoom" id="e03" />
              <div className="blanketCols leftBedRoom" id="e04" />
              <div className="blanketCols leftBedRoom" id="e05" />
              <div className="blanketCols leftBedRoom" id="e06" />
              <div className="blanketCols halfCol" id="e07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols topTerrace" id="e08" />
              <div className="blanketCols topTerrace" id="e09" />
              <div className="blanketCols topTerrace" id="e10" />
              <div className="blanketCols topTerrace" id="e11" />
              <div className="blanketCols rightBedRoom" id="e12" />
              <div className="blanketCols rightBedRoom" id="e13" />
              <div className="blanketCols rightBedRoom" id="e14" />
              <div className="blanketCols rightBedRoom" id="e15" />
              <div className="blanketCols rightBedRoom" id="e16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="f01" />
              <div className="blanketCols leftBedRoom" id="f02" />
              <div className="blanketCols leftBedRoom" id="f03" />
              <div className="blanketCols leftBedRoom" id="f04" />
              <div className="blanketCols leftBedRoom" id="f05" />
              <div className="blanketCols leftBedRoom" id="f06" />
              <div className="blanketCols halfCol" id="f07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="f08" />
              <div className="blanketCols bathRoom" id="f09" />
              <div className="blanketCols bathRoom" id="f10" />
              <div className="blanketCols bathRoom" id="f11" />
              <div className="blanketCols rightBedRoom" id="f12" />
              <div className="blanketCols rightBedRoom" id="f13" />
              <div className="blanketCols rightBedRoom" id="f14" />
              <div className="blanketCols rightBedRoom" id="f15" />
              <div className="blanketCols rightBedRoom" id="f16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="g01" />
              <div className="blanketCols leftBedRoom leftTerrace" id="g02" />
              <div className="blanketCols leftBedRoom" id="g03" />
              <div className="blanketCols leftBedRoom" id="g04" />
              <div className="blanketCols leftBedRoom" id="g05" />
              <div className="blanketCols leftBedRoom" id="g06" />
              <div className="blanketCols halfCol" id="g07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="g08" />
              <div className="blanketCols bathRoom" id="g09" />
              <div className="blanketCols bathRoom" id="g10" />
              <div className="blanketCols bathRoom" id="g11" />
              <div className="blanketCols rightBedRoom" id="g12" />
              <div className="blanketCols rightBedRoom" id="g13" />
              <div className="blanketCols rightBedRoom" id="g14" />
              <div className="blanketCols rightBedRoom" id="g15" />
              <div className="blanketCols rightBedRoom" id="g16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="h01" />
              <div className="blanketCols leftTerrace" id="h02" />
              <div className="blanketCols leftBedRoom" id="h03" />
              <div className="blanketCols leftBedRoom" id="h04" />
              <div className="blanketCols leftBedRoom" id="h05" />
              <div className="blanketCols leftBedRoom" id="h06" />
              <div className="blanketCols halfCol" id="h07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="h08" />
              <div className="blanketCols bathRoom" id="h09" />
              <div className="blanketCols bathRoom" id="h10" />
              <div className="blanketCols bathRoom" id="h11" />
              <div className="blanketCols rightBedRoom" id="h12" />
              <div className="blanketCols rightBedRoom" id="h13" />
              <div className="blanketCols rightBedRoom" id="h14" />
              <div className="blanketCols rightBedRoom" id="h15" />
              <div className="blanketCols rightBedRoom" id="h16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="i01" />
              <div className="blanketCols leftTerrace" id="i02" />
              <div className="blanketCols leftBedRoom" id="i03" />
              <div className="blanketCols leftBedRoom" id="i04" />
              <div className="blanketCols leftBedRoom" id="i05" />
              <div className="blanketCols leftBedRoom" id="i06" />
              <div className="blanketCols halfCol" id="i07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="i08" />
              <div className="blanketCols bathRoom" id="i09" />
              <div className="blanketCols bathRoom" id="i10" />
              <div className="blanketCols bathRoom" id="i11" />
              <div className="blanketCols livingRoom" id="i12" />
              <div className="blanketCols livingRoom" id="i13" />
              <div className="blanketCols livingRoom" id="i14" />
              <div className="blanketCols livingRoom" id="i15" />
              <div className="blanketCols livingRoom" id="i16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="j01" />
              <div className="blanketCols leftTerrace" id="j02" />
              <div className="blanketCols kitchen" id="j03" />
              <div className="blanketCols kitchen" id="j04" />
              <div className="blanketCols kitchen" id="j05" />
              <div className="blanketCols kitchen" id="j06" />
              <div className="blanketCols kitchen" id="j07" />
              <div className="blanketCols kitchen" id="j08" />
              <div className="blanketCols kitchen" id="j09" />
              <div className="blanketCols kitchen" id="j10" />
              <div className="blanketCols kitchen" id="j11" />
              <div className="blanketCols livingRoom" id="j12" />
              <div className="blanketCols livingRoom" id="j13" />
              <div className="blanketCols livingRoom" id="j14" />
              <div className="blanketCols livingRoom" id="j15" />
              <div className="blanketCols livingRoom" id="j16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="k01" />
              <div className="blanketCols leftTerrace" id="k02" />
              <div className="blanketCols kitchen" id="k03" />
              <div className="blanketCols kitchen" id="k04" />
              <div className="blanketCols kitchen" id="k05" />
              <div className="blanketCols kitchen" id="k06" />
              <div className="blanketCols kitchen" id="k07" />
              <div className="blanketCols kitchen" id="k08" />
              <div className="blanketCols kitchen" id="k09" />
              <div className="blanketCols kitchen" id="k10" />
              <div className="blanketCols kitchen" id="k11" />
              <div className="blanketCols livingRoom" id="k12" />
              <div className="blanketCols livingRoom" id="k13" />
              <div className="blanketCols livingRoom" id="k14" />
              <div className="blanketCols livingRoom" id="k15" />
              <div className="blanketCols livingRoom" id="k16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="l01" />
              <div className="blanketCols kitchen" id="l02" />
              <div className="blanketCols kitchen" id="l03" />
              <div className="blanketCols kitchen" id="l04" />
              <div className="blanketCols kitchen" id="l05" />
              <div className="blanketCols kitchen" id="l06" />
              <div className="blanketCols kitchen" id="l07" />
              <div className="blanketCols kitchen" id="l08" />
              <div className="blanketCols kitchen" id="l09" />
              <div className="blanketCols kitchen" id="l10" />
              <div className="blanketCols kitchen" id="l11" />
              <div className="blanketCols livingRoom" id="l12" />
              <div className="blanketCols livingRoom" id="l13" />
              <div className="blanketCols livingRoom" id="l14" />
              <div className="blanketCols livingRoom" id="l15" />
              <div className="blanketCols livingRoom" id="l16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols kitchen" id="m01" />
              <div className="blanketCols kitchen" id="m02" />
              <div className="blanketCols kitchen" id="m03" />
              <div className="blanketCols kitchen" id="m04" />
              <div className="blanketCols kitchen" id="m05" />
              <div className="blanketCols kitchen" id="m06" />
              <div className="blanketCols kitchen" id="m07" />
              <div className="blanketCols kitchen" id="m08" />
              <div className="blanketCols kitchen" id="m09" />
              <div className="blanketCols kitchen" id="m10" />
              <div className="blanketCols kitchen" id="m11" />
              <div className="blanketCols livingRoom" id="m12" />
              <div className="blanketCols livingRoom" id="m13" />
              <div className="blanketCols livingRoom" id="m14" />
              <div className="blanketCols livingRoom" id="m15" />
              <div className="blanketCols livingRoom" id="m16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols kitchen" id="n01" />
              <div className="blanketCols kitchen" id="n02" />
              <div className="blanketCols kitchen" id="n03" />
              <div className="blanketCols kitchen" id="n04" />
              <div className="blanketCols kitchen" id="n05" />
              <div className="blanketCols kitchen" id="n06" />
              <div className="blanketCols kitchen" id="n07" />
              <div className="blanketCols kitchen" id="n08" />
              <div className="blanketCols kitchen" id="n09" />
              <div className="blanketCols kitchen" id="n10" />
              <div className="blanketCols kitchen" id="n11" />
              <div className="blanketCols livingRoom" id="n12" />
              <div className="blanketCols livingRoom" id="n13" />
              <div className="blanketCols livingRoom" id="n14" />
              <div className="blanketCols livingRoom" id="n15" />
              <div className="blanketCols livingRoom" id="n16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="o01" />
              <div className="blanketCols" id="o02" />
              <div className="blanketCols" id="o03" />
              <div className="blanketCols" id="o04" />
              <div className="blanketCols" id="o05" />
              <div className="blanketCols" id="o06" />
              <div className="blanketCols" id="o07" />
              <div className="blanketCols" id="o08" />
              <div className="blanketCols" id="o09" />
              <div className="blanketCols" id="o10" />
              <div className="blanketCols" id="o11" />
              <div className="blanketCols" id="o12" />
              <div className="blanketCols" id="o13" />
              <div className="blanketCols" id="o14" />
              <div className="blanketCols" id="o15" />
              <div className="blanketCols" id="o16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="p01" />
              <div className="blanketCols" id="p02" />
              <div className="blanketCols" id="p03" />
              <div className="blanketCols" id="p04" />
              <div className="blanketCols" id="p05" />
              <div className="blanketCols" id="p06" />
              <div className="blanketCols" id="p07" />
              <div className="blanketCols" id="p08" />
              <div className="blanketCols" id="p09" />
              <div className="blanketCols" id="p10" />
              <div className="blanketCols" id="p11" />
              <div className="blanketCols" id="p12" />
              <div className="blanketCols" id="p13" />
              <div className="blanketCols" id="p14" />
              <div className="blanketCols" id="p15" />
              <div className="blanketCols" id="p16" />
            </div>
          </div>
          <img src={room} alt="room" />
        </div>
      </div>
      <div>
        <div className="buttons container">
          <div className="buttonBoxes">
            Bal Háló
            <div>
              <button type="button" id="leftBedRoomButtonOn" onClick={leftBedRoomButtonOn}>Be</button>
              <button type="button" id="leftBedRoomButtonOff" onClick={leftBedRoomButtonOff}>Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Jobb Háló
            <div>
              <button type="button" id="rightBedRoomButtonOn">Be</button>
              <button type="button" id="rightBedRoomButtonOff">Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Konyha
            <div>
              <button type="button" id="kitchenButtonOn">Be</button>
              <button type="button" id="kitchenButtonOff">Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Nappali
            <div>
              <button type="button" id="livingRoomButtonOn">Be</button>
              <button type="button" id="livingRoomButtonOff">Ki</button>
            </div>
          </div>
        </div>
        <div className="buttons container">
          <div className="buttonBoxes">
            Fürdőszobák
            <div>
              <button type="button" id="bathRoomButtonOn">Be</button>
              <button type="button" id="bathRoomButtonOff">Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Bal Terasz
            <div>
              <button type="button" id="leftTerraceButtonOn">Be</button>
              <button type="button" id="leftTerraceButtonOff">Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Top Terasz
            <div>
              <button type="button" id="topTerraceButtonOn">Be</button>
              <button type="button" id="topTerraceButtonOff">Ki</button>
            </div>
          </div>
          <div className="buttonBoxes">
            Összes
            <div>
              <button type="button" id="allButtonOn">Be</button>
              <button type="button" id="allButtonOff">Ki</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
