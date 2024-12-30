import React, { useEffect, useRef } from 'react';
import './Slide.css';
import slide1 from '../img/slide1.png';
import slide2 from '../img/slide2.png';
import slide3 from '../img/slide3.png';

const Slide2 = () => {
  const outerRef = useRef(null);
  const innerListRef = useRef(null);
  const innersRef = useRef([]);
  let currentIndex = 0; // 현재 슬라이드 화면 인덱스

  // 이미지와 클래스 이름을 함께 정의
  const slides = [
    { src: slide1, className: 'slide1' },
    { src: slide2, className: 'slide2' },
    { src: slide3, className: 'slide3' },
  ];

  useEffect(() => {
    const outer = outerRef.current;
    const innerList = innerListRef.current;
    const inners = innersRef.current;

    if (!outer || !innerList || !inners.length) return;

    // inner의 width를 모두 outer의 width로 설정
    inners.forEach((inner) => {
      inner.style.width = `${outer.clientWidth}px`;
    });

    // innerList의 width를 설정
    innerList.style.width = `${outer.clientWidth * inners.length}px`;

    // 주기적으로 화면 넘기기
    const interval = setInterval(() => {
      currentIndex++;
      currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
      innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    }, 2000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 해제
  }, []);

  return (
    <div className="slide">
      <div className="outer" ref={outerRef}>
        <div className="inner-list" ref={innerListRef}>
          {slides.map(({ src, className }, index) => (
            <div
              key={index}
              className={`inner ${className}`}
              ref={(el) => (innersRef.current[index] = el)}
            >
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide2;