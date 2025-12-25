import { LazyDiv } from "../lazyDiv"
import { ENDING_IMAGE } from "../../images"

export const EndingImage = () => {
  return (
    <LazyDiv className="ending">
      <div className="image-wrapper">
        <img
          src={ENDING_IMAGE["ending3-2"]}
          alt="ending image"
        />
      </div>
   </LazyDiv>
  )
}
