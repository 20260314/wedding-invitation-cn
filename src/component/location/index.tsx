import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      {/* --- 상단 주소 카드 --- */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <p className="title-kr">오시는 길</p>

        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>

        <Map />
      </LazyDiv>

      {/* --- 교통 카드 --- */}
      <LazyDiv className="card location">

        {/* 대중교통 */}
        <div className="location-block">
          <div className="heading">대중교통</div>
          <div class="line"></div>
          <div className="content">
            회관으로 들어오는 길은 인도가 없어서
            <br />
            도보로 오시기에는 매우 위험합니다.
            <br />
            <b>평택역</b> 또는 <b>공도 시외버스 터미널</b>에서 하차하셔서
            <br />
            <b>택시</b>를 이용해 방문해주시기를 부탁드립니다.
          </div>
        </div>

        {/* 자가용 */}
        <div className="location-block">
          <div className="heading">자가용</div>
          <div class="line"></div>
          <div className="content">
            <b>경기도 안성시 공도읍 신두만곡로 101</b>
            <br />
            근처 다른 회관으로 도착하지 않도록,
            <br />
            주소를 정확히 검색해 주시기 바랍니다.
            <br /><br />
            주차공간이 협소한 관계로 가능하신 경우
            <br />
            일행분들과 카풀해주신다면 감사드리겠습니다.
          </div>
        </div>

        {/*온라인*/}
        <div className="location-block">
          <div className="heading">온라인</div>
          <div class="line"></div>
          <div className="content">
            줌 (ZOOM) 으로도 결혼식이 생중계됩니다.
            <br />
            회의 ID: 823 6639 8235
            <br />
            암호: 0314
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
