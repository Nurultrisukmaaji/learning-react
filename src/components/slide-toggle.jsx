import React, { useState, useRef } from 'react';
// import './SlideToggle.css';

const SlideToggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="slide-toggle">
      <button onClick={toggleSlide} className="toggle-button">
        {isOpen ? 'Tutup Konten' : 'Buka Konten'}
      </button>
      <div
        className="content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        ref={contentRef}
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default SlideToggle;