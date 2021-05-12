import React from "react";
import "./Header.css";

import ModalHeader from "../ModalHeader/ModalHeader";

function Header({ isShowingHeader, toggleHeader, versPercy, versGinny, versPercyHeader, versGinnyHeader}) {
  return (
    <section>
      <div className="hautPage">
        <img
          className="percy"
          alt="perceverance"
          src="images/percy.jpg"
          width="38%"
          onClick={versPercy}
        />
        <img
          className="logo"
          alt="logo"
          src="images/wall-e.jpg"
          width="30%"
          onClick={toggleHeader}
        />
        <img
          className="ginny"
          alt="ingenuity"
          src="images/ginny.jpg"
          width="38%"
          onClick={versGinny}
        />

        <svg>
          <filter id="wavy">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.008"
              numOctaves="5"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.09;0.005;0.09"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </svg>
        <div class="circle"></div>
      </div>

      <ModalHeader
        isShowingHeader={isShowingHeader}
        toggleHeader={toggleHeader}
        versPercyHeader={versPercyHeader}
        versGinnyHeader={versGinnyHeader}
      />
    </section>
  );
}

export default Header;
