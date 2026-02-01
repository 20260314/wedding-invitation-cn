
import { LazyDiv } from "../lazyDiv"


export const Location = () => {
  return (
    <>
      {/* --- 제목 --- */}
      <LazyDiv className="card location">
        <h2 className="english">Information</h2>
        <p className="title-cn">温馨提示</p>

      {/* --- 안내문 --- */}

        {/*안내*/}

         <div className="notice-block">
           感谢大家一直以来
            <br />
          给予我们二人的关爱与祝福。
            <br />
            <br />
           婚礼仪式将通过
            <br /> 
           Zoom（线上）进行直播，
           <br />
           <br />
           诚挚邀请您拨冗参加，
            <br />
           与我们一同见证
            <br />
          这一重要时刻。
            <br />
            <br />
           新郎新娘 敬上
            <br />
         </div>

        
           
        
        {/*온라인*/}
        <div className="location-block">
          <div className="heading">ZOOM</div>
          <div class="line"></div>
          <div className="content">
            会议 ID: 823 6639 8235
            <br />
            密码: 0314
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
