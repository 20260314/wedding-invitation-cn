import { useRef, useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import ArrowLeft from "../../icons/angle-left-sm.svg?react"
import { GALLERY_IMAGES } from "../../images"
import Arrowdown from "../../icons/arrowdown1.png"
import Arrowup from "../../icons/arrowup1.png"

export const Gallery = () => {
  const { openModal } = useModal()
  const [expanded, setExpanded] = useState(false)

  const visibleCount = expanded ? GALLERY_IMAGES.length : 9

  // ===============================
  // 큰 사진 모달 뷰어
  // ===============================
  const PhotoViewer = ({ startIndex }: { startIndex: number }) => {
    const [index, setIndex] = useState(startIndex)
    const [isAnimating, setIsAnimating] = useState(false)
    const touchStartX = useRef<number | null>(null)
    const THRESHOLD = 60 // ← 이 정도 밀어야 넘어감
    const DURATION = 250 // ← 슬라이드 체감 속도 (ms)

    const move = (nextIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setIndex(nextIndex)
    setTimeout(() => setIsAnimating(false), DURATION)
  }

    const prev = (e?: React.SyntheticEvent) => {
      e?.stopPropagation()
      setIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1))
    }

    const next = (e?: React.SyntheticEvent) => {
      e?.stopPropagation()
      setIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1))
    }

    // --- 스와이프 감지 ---
    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (touchStartX.current === null) return

      const endX = e.changedTouches[0].clientX
      const diffX = endX - touchStartX.current

      if (diffX > THRESHOLD) prev()
      if (diffX < -THRESHOLD) next()

      touchStartX.current = null
    }

    return (
      <div
        className="photo-view"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 좌측 버튼 */}
        <button className="slide-btn left" onClick={prev}>
          <ArrowLeft className="arrow" />
        </button>

        {/* 큰 사진 */}
        <img
          src={GALLERY_IMAGES[index]}
          className="photo-large"
          draggable={false}
          alt=""
        />

        {/* 우측 버튼 */}
        <button className="slide-btn right" onClick={next}>
          <ArrowLeft className="arrow right" />
        </button>
      </div>
    )
  }

  // ===============================
  // 갤러리 UI
  // ===============================
  return (
    <LazyDiv className="card gallery instagram-gallery">
      <h2 className="english">Gallery</h2>
      <p className="title-kr">갤러리</p>

      {/* 썸네일 그리드 */}
      <div className={`grid ${expanded ? "expanded" : ""}`}>
        {GALLERY_IMAGES.slice(0, visibleCount).map((img, idx) => (
          <div
            key={idx}
            className="thumb"
            onClick={() =>
              openModal({
                className: "photo-view-modal",
                closeOnClickBackground: true,
                content: <PhotoViewer startIndex={idx} />,
              })
            }
          >
            <img src={img} alt={`${idx}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* 더보기 */}
      {!expanded && GALLERY_IMAGES.length > 9 && (
        <div className="more-wrapper">
          <div className="fade" />
          <button className="more-btn" onClick={() => setExpanded(true)}>
            더보기 <img src={Arrowdown} alt="더보기" className="more-arrow" />
          </button>
        </div>
      )}

      {/* 접기 */}
      {expanded && (
        <button className="less-btn" onClick={() => setExpanded(false)}>
          접기 <img src={Arrowup} alt="접기" className="less-arrow" />
        </button>
      )}
    </LazyDiv>
  )
}
