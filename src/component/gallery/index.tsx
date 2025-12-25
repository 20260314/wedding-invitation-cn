import { useState } from "react"
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

  // -- 큰 사진 보여주는 컴포넌트 --
  const PhotoViewer = ({ startIndex }) => {
    const [index, setIndex] = useState(startIndex)

    const prev = (e) => {
      e.stopPropagation()
      setIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1))
    }

    const next = (e) => {
      e.stopPropagation()
      setIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1))
    }

    return (
      <div className="photo-view" style={{ position: "relative" }}>
        {/* --- 좌측 버튼 --- */}
        <button className="slide-btn left" onClick={prev}>
          <ArrowLeft className="arrow" />
        </button>

        {/* --- 큰 사진 --- */}
        <img src={GALLERY_IMAGES[index]} className="photo-large" draggable={false} />

        {/* --- 우측 버튼 (좌우 반전) --- */}
        <button className="slide-btn right" onClick={next}>
          <ArrowLeft className="arrow right" />
        </button>
      </div>
    )
  }

  return (
    <LazyDiv className="card gallery instagram-gallery">
      <h2 className="english">Gallery</h2>
      <p className="title-kr">갤러리</p>

      {/* --- thumbnail grid --- */}
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

      {/* --- 더보기 --- */}
      {!expanded && GALLERY_IMAGES.length > 9 && (
        <div className="more-wrapper">
          <div className="fade" />
          <button className="more-btn" onClick={() => setExpanded(true)}>
            더보기 <img src={Arrowdown} alt="더보기" className="more-arrow" />
          </button>
        </div>
      )}

      {/* --- 접기 --- */}
      {expanded && (
        <button className="less-btn" onClick={() => setExpanded(false)}>
          접기 <img src={Arrowup} alt="더보기" className="less-arrow" />
        </button>
      )}
    </LazyDiv>
  )
}
