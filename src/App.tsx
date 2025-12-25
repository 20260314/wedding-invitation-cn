import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Gallery } from "./component/gallery"
import { EndingImage } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"
import { STATIC_ONLY } from "./env"

function App() {
  return (
        <div className="background">
      <div className="card-view">
        <LazyDiv className="card-group cover-full">
          {/* 표지 */}
          <Cover />
          </LazyDiv>
        
<LazyDiv className="card-group">
          {/* 초대합니다 */}
          <Invitation />
        </LazyDiv>
        
 <LazyDiv className="card-group">
          {/* 갤러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 엔딩 */}
          <EndingImage />
        </LazyDiv>
        
      </div>
    </div>
  )
}

export default App
