import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>
      <p className="title-cn">诚挚邀请</p>

      <div className="break" />

      <div className="content">两个人相遇，</div>
      <div className="content">开始描绘携手一生的未来。</div>
      <div className="content">今后，我们将彼此珍惜、相互依靠，</div>
      <div className="content">作为一个充满爱与温暖的家庭，</div>
      <div className="content">一起走过人生的每一步。</div>
        <div className="break" />
      <div className="content">在这幸福的日子里，</div>
      <div className="content">若能得到您的祝福与陪伴，</div>
      <div className="content">将成为我们最珍贵的喜悦。</div>

      <div className="break" />

     
    </LazyDiv>
  )
}
