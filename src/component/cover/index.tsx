<div className="card cover-card">
  <div className="cover">
    ...
  </div>
</div>


import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      <div className="break" />
      </div>
      <div className="subtitle">Wedding Day</div>
      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
    </LazyDiv>
  )
}


  //<div className="info">{LOCATION}</div>
