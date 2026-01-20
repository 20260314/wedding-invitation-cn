<div className="card cover-card">
  <div className="cover">
    ...
  </div>
</div>


import {
  BRIDE_FULLNAME,

} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      <div className="break" />
      </div>
      <div className="subtitle">Wedding Day</div>
      <div className="content">2026年3月14日 星期六 上午11点</div>
    </LazyDiv>
  )
}


  //<div className="info">{LOCATION}</div>
