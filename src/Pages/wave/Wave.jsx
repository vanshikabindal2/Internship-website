import React from 'react'
import './Waave.css'
const Wave = () => {
  return (
      <div className="jc-wave-wrap">

      {/* Thin flowing water */}
      <div className="jc-wave jc-wave-1">
        <svg viewBox="0 0 1600 100" preserveAspectRatio="none">
          <path d="
            M0 58
            C130 35 220 72 350 55
            C480 38 570 40 700 58
            C830 76 930 65 1050 45
            C1180 25 1290 55 1410 48
            C1490 43 1550 45 1600 38
            L1600 100 L0 100 Z
          " />
        </svg>
      </div>

      {/* Soft second layer */}
      <div className="jc-wave jc-wave-2">
        <svg viewBox="0 0 1600 100" preserveAspectRatio="none">
          <path d="
            M0 67
            C150 50 250 82 390 65
            C530 48 620 55 750 68
            C900 83 990 70 1110 55
            C1240 40 1350 66 1470 55
            C1530 50 1570 52 1600 48
            L1600 100 L0 100 Z
          " />
        </svg>
      </div>

      {/* Moving ship */}
      <div className="jc-ship">

        {/* wake */}
        <div className="jc-wake">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <svg
          viewBox="0 0 420 180"
          className="jc-ship-svg"
        >

          {/* Containers */}
          <rect x="155" y="48" width="38" height="24" rx="2" fill="#087fc2" />
          <rect x="197" y="48" width="38" height="24" rx="2" fill="#008f7b" />
          <rect x="239" y="48" width="38" height="24" rx="2" fill="#087fc2" />
          <rect x="281" y="48" width="38" height="24" rx="2" fill="#008f7b" />

          <rect x="177" y="22" width="38" height="23" rx="2" fill="#008f7b" />
          <rect x="219" y="22" width="38" height="23" rx="2" fill="#087fc2" />
          <rect x="261" y="22" width="38" height="23" rx="2" fill="#008f7b" />

          {/* Bridge */}
          <path
            d="M100 72V42H148L166 72Z"
            fill="#f5f8fa"
          />

          {/* Windows */}
          <path
            d="M108 48H143L151 61H108Z"
            fill="#54c8df"
          />

          {/* Antenna */}
          <line
            x1="128"
            y1="42"
            x2="128"
            y2="22"
            stroke="#18384b"
            strokeWidth="2"
          />

          {/* Main hull */}
          <path
            d="
              M48 75
              H330
              L375 88
              L340 120
              H90
              C68 108 54 94 48 75Z
            "
            fill="#092d42"
          />

          {/* Hull highlight */}
          <path
            d="M48 75H330L350 81H58Z"
            fill="#28566a"
          />

          {/* Lower hull */}
          <path
            d="
              M82 120
              H340
              L315 138
              H112
              C100 134 90 128 82 120Z
            "
            fill="#075a7c"
          />

          {/* Blue waterline */}
          <path
            d="M78 113H348L340 120H82Z"
            fill="#079dca"
          />

          {/* Windows */}
          <g fill="#82dfef">
            <rect x="112" y="85" width="12" height="7" rx="1" />
            <rect x="130" y="85" width="12" height="7" rx="1" />
            <rect x="148" y="85" width="12" height="7" rx="1" />
          </g>

        </svg>

        {/* front foam */}
        <div className="jc-front-foam">
          <i></i>
          <i></i>
        </div>

      </div>

      {/* Tiny highlight */}
      <div className="jc-water-shine"></div>

    </div>
  
  )
}

export default Wave;
