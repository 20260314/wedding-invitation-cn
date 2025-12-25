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
      <p className="title-kr">초대합니다</p>

      <div className="break" />

      <div className="content">싱그러운 여름 향기 가득한 날</div>
      <div className="content">소중한 분들을 모시고</div>
      <div className="content">사랑의 약속을 하려고 합니다.</div>
      <div className="break" />
      <div className="content">햇살이 뜨거울 땐 가려주고,</div>
      <div className="content">비가 오면 우산이 되어주는</div>
      <div className="content">부부가 되겠습니다.</div>
      <div className="break" />
      <div className="content">기쁜날 함께 하셔서</div>
      <div className="content">저희의 앞날을 축복해 주세요.</div>

      <div className="break" />

     
    </LazyDiv>
  )
}
