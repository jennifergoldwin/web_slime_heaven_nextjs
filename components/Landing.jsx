import React from "react";
import { motion } from "framer-motion";

export const Landing = () => {
  const slime_logo = {
    rest: {
      transform: "translate(283px, 227px) scale(1)",
    },
    play: {
      transform: "translate(283px, 227px) scale(0.95)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const double_slime = {
    rest: {
      transform: "translate(352px, 0.415px) scale(1)",
    },
    play: {
      transform: "translate(352px, 0.415px) scale(1.05)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const brown_slime = {
    rest: {
      transform: "translate(126px, 49.415px)",
    },
    play: {
      transform: "translate(116px, 39.415px)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const purple_slime = {
    rest: {
      transform: "translate(50px, 333.958px) rotate(-7deg)",
    },
    play: {
      transform: "translate(30px, 333.958px) rotate(0deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const yellow_slime_01 = {
    rest: {
      transform: "translate(267px, 457.415px)",
    },
    play: {
      transform: "translate(257px, 467.415px)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const green_slime = {
    rest: {
      transform: "translate(669px, 523.415px) rotate(0deg)",
    },
    play: {
      transform: "translate(679px, 523.415px) rotate(10deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const yellow_slime_02 = {
    rest: {
      transform: "translate(893px, 342.415px) rotate(0deg)",
    },
    play: {
      transform: "translate(913px, 342.415px) rotate(10deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const red_slime = {
    rest: {
      transform: "translate(846px, 49.415px) rotate(0deg)",
    },
    play: {
      transform: "translate(866px, 49.415px) rotate(7deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const whitepaper_btn = {
    rest: {
      transform: "translate(1546px ,824.359px) rotate(0deg)",
    },
    hover: {
      transform: "translate(1546px ,824.359px) rotate(-5deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const play_btn = {
    rest: {
      transform: "translate(1642.388px, 930.404px) rotate(0deg)",
    },
    hover: {
      transform: "translate(1642.388px, 930.404px) rotate(5deg)",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="sm:p-16 w-full">
      {/* <img className="p-4 slime_mobile" src="/assets/images/slime-home.png" alt=""/> */}
      <motion.svg
        initial="rest"
        animate="rest"
        whileInView="play"
        className="p-4 slime_mobile"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1150 952.957"
      >
        <defs>
          <pattern
            id="pattern-cloud-mobile"
            width="1"
            height="1"
            patternTransform="matrix(-1, 0, 0, 1, 376.249, 0)"
            viewBox="0 0 188.125 205.136"
          >
            <image
              preserveAspectRatio="none"
              width="188.125"
              height="205.136"
              xlinkHref="/assets/images/cloud.png"
            />
          </pattern>
          <pattern
            id="pattern-mobile-2"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 644 484"
          >
            <image
              width="644"
              height="484"
              xlinkHref="/assets/images/yellow_splash.png"
            />
          </pattern>
          <pattern
            id="pattern-mobile-3"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 586 431"
          >
            <image
              width="586"
              height="431"
              xlinkHref="/assets/images/black_splash.png"
            />
          </pattern>
          <pattern
            id="pattern-mobile-4"
            width="1"
            height="1"
            viewBox="-34.331 -21.05 344.331 293.237"
          >
            <image
              preserveAspectRatio="none"
              width="310"
              height="264"
              xlinkHref="/assets/images/brown_slime.png"
            />
          </pattern>
          <pattern
            id="pattern-mobile-5"
            width="1"
            height="1"
            viewBox="-29.167 0 532.556 291.537"
          >
            <image
              preserveAspectRatio="none"
              width="506"
              height="277"
              xlinkHref="/assets/images/2-slime.png"
            />
          </pattern>
          <pattern
            id="pattern-mobile-6"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 268 210"
          >
            <image
              width="268"
              height="210"
              xlinkHref="/assets/images/slime2.png"
            />
          </pattern>
          <radialGradient
            id="radial-gradient"
            cx="0.481"
            cy="0.657"
            r="2.176"
            gradientTransform="translate(0.304) scale(0.393 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#a48a7b" />
            <stop offset="1" stopColor="#fff" />
          </radialGradient>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            y1="1"
            x2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#edd6b9" />
            <stop offset="1" stopColor="#d4b492" />
          </linearGradient>
          <radialGradient
            id="radial-gradient-2"
            cx="0.34"
            cy="1.138"
            r="1.589"
            gradientTransform="translate(0.131) scale(0.738 1)"
            xlinkHref="#radial-gradient"
          />
          <radialGradient
            id="radial-gradient-3"
            cx="0.767"
            cy="0.467"
            r="0.855"
            gradientTransform="translate(-0.055) scale(1.11 1)"
            xlinkHref="#radial-gradient"
          />
          <linearGradient
            id="linear-gradient-2"
            x1="0.487"
            y1="0.7"
            x2="0.628"
            y2="0.179"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#bf9f7e" />
            <stop offset="1" stopColor="#edd6b9" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="0.664"
            y1="0.423"
            x2="0.225"
            y2="0.79"
            xlinkHref="#linear-gradient-2"
          />
          <radialGradient
            id="radial-gradient-4"
            cx="0.348"
            cy="1.021"
            r="1.509"
            gradientTransform="translate(0.133) scale(0.734 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#a3805f" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-5"
            cx="0.861"
            cy="0.211"
            r="1.027"
            gradientTransform="translate(-0.099) scale(1.197 1)"
            xlinkHref="#radial-gradient-4"
          />
          <radialGradient
            id="radial-gradient-6"
            cx="0.5"
            cy="0.5"
            r="1.854"
            gradientTransform="translate(0.32) scale(0.359 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#ca9e67" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-7"
            cy="0.5"
            r="1.065"
            gradientTransform="translate(0.324) scale(0.352 1)"
            xlinkHref="#radial-gradient-6"
          />
        </defs>
        <g
          id="group_slime_landing"
          data-name="group_slime_landing"
          transform="translate(-350 -191)"
        >
          <g
            id="Component_23_1"
            data-name="Component 23 – 1"
            transform="translate(350 191)"
          >
            <rect
              id="cloud_v3"
              data-name="cloud v3"
              width="188.125"
              height="205.136"
              transform="translate(750.792 91.65)"
              fill="url(#pattern-cloud-mobile)"
            />
            <g id="Component_20_1" data-name="Component 20 – 1">
              <g
                id="EXPLODES"
                transform="translate(275.762 141.222)"
                opacity="0.739"
              >
                <image
                  id="Layer_48"
                  data-name="Layer 48"
                  width="638"
                  height="537"
                  transform="translate(33.238 -0.222)"
                  xlinkHref="/assets/images/brown_splash.png"
                />
                <rect
                  id="Layer_47"
                  data-name="Layer 47"
                  width="634"
                  height="477"
                  transform="translate(17.238 31.778)"
                  fill="url(#pattern-mobile-2)"
                />
                <rect
                  id="Layer_46"
                  data-name="Layer 46"
                  width="576"
                  height="424"
                  transform="translate(0.238 37.778)"
                  fill="url(#pattern-mobile-3)"
                />
              </g>
              <g
                id="Group_2_copy"
                data-name="Group 2 copy"
                transform="translate(0 -0.415)"
              >
                <motion.rect
                  variants={brown_slime}
                  id="slime5"
                  width="310"
                  height="264"
                  transform="translate(126 49.415)"
                  fill="url(#pattern-mobile-4)"
                />
                <motion.rect
                  variants={double_slime}
                  id="slime4"
                  width="506"
                  height="277"
                  transform="translate(352 0.415)"
                  fill="url(#pattern-mobile-5)"
                />
                <motion.image
                  variants={purple_slime}
                  id="slime3"
                  width="323.649"
                  height="296.256"
                  transform="translate(0 333.958) rotate(-7)"
                  xlinkHref="/assets/images/purple_slime.png"
                />
                <motion.rect
                  variants={red_slime}
                  id="slime2"
                  width="270"
                  height="212"
                  transform="translate(846 49.415)"
                  fill="url(#pattern-mobile-6)"
                />
                <motion.image
                  variants={green_slime}
                  id="slime1"
                  width="307"
                  height="300"
                  transform="translate(669 523.415)"
                  xlinkHref="/assets/images/flower_slime.png"
                />
                <motion.image
                  variants={yellow_slime_02}
                  id="slime6"
                  width="237"
                  height="238"
                  transform="translate(893 342.415)"
                  xlinkHref="/assets/images/yelow_slime_001.png"
                />
                <motion.image
                  variants={yellow_slime_01}
                  id="r"
                  width="374"
                  height="392"
                  transform="translate(267 457.415)"
                  xlinkHref="/assets/images/yelow_slime_002.png"
                />
              </g>
              <image
                id="Layer_46-2"
                data-name="Layer 46"
                width="642"
                height="375"
                transform="translate(283 227)"
                xlinkHref="/assets/images/slime_logo.png"
              />
            </g>
          </g>
          <a
            href="https://drive.google.com/file/d/1J1C6zQBBTxldjzYfRySGRXcfpmLh_mQz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <g
              id="Component_21_1"
              data-name="Component 21 – 1"
              transform="translate(535.194 1051.693)"
            >
              <g id="Group_1720" data-name="Group 1720">
                <g
                  id="Group_1139"
                  data-name="Group 1139"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_2088"
                    data-name="Path 2088"
                    d="M3408.075,3253.147c41.013-.9,211.874-1.444,248.957.14a4.156,4.156,0,0,0,2.585-.378c.62-.5.57-1.434.583-2.16.043-2.391.208-5.134.094-7.043l-8.2-.625,8.072-1.634q-1.128-19.581-1.549-39.386l-4.377-1.3,4.328-1.234c-.342-18.779,1.26-6.262,2.037-24.99a64.061,64.061,0,0,0-7.648-12.308,2.806,2.806,0,0,0-2.438-1.168c-16.386,1.257-230.994,2.637-260.54,1.377a2.744,2.744,0,0,0-2.928,2.517c-.156,5.512.551,9.093.772,14.343l3.179,1.718-1.43,1.607.261,1.238-1.792,1.073c.682,19.546.609,8.959-.21,28.353l2.4,1.069-1.2,1.882,3.391,1.471-4.84,1.054c-.385,7.764-1.78,15.6-1.845,23.159,4.9,4.4,14.68,9.07,22.344,11.228Z"
                    transform="translate(-3383.588 -3161.051)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <g
                    id="Group_1138"
                    data-name="Group 1138"
                    transform="translate(0 1.494)"
                  >
                    <path
                      id="Path_2089"
                      data-name="Path 2089"
                      d="M3402.458,3254.7c6.1,1.258,231.533.633,255-.751q-.275-3.841-.522-7.694l-8.4-.6,8.267-1.559q-1.154-18.675-1.587-37.563l-4.483-1.241,4.433-1.177c-.349-17.909-.168-5.821.627-23.682l-10.679-12.774c-1.468-.535-242.347.483-266.392,1.249q.615,8.663,1,17.306l3.256,1.638-1.465,1.532.268,1.181-1.835,1.023c.7,18.642.624,7.153-.215,25.649l2.455,1.019-1.228,1.8,3.473,1.4-4.958,1q-.611,11.509-1.617,22.98v.014l24.6,9.242Z"
                      transform="translate(-3377.846 -3167.514)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_2090"
                      data-name="Path 2090"
                      d="M3402.412,3492.981l-24.6-9.241c.766-1.006,8.433-6.187,9.481-6.279,1.01-.089,12.569,13.617,15.118,15.52Z"
                      transform="translate(-3377.813 -3405.8)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-2)"
                      style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                    />
                    <path
                      id="Path_2091"
                      data-name="Path 2091"
                      d="M4368.639,3180.934c-2.457-1-12.947-2.461-13.432-3.377-.382-.721,2.193-6.866,2.753-9.4l10.679,12.775Z"
                      transform="translate(-4090.695 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-3)"
                      style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                    />
                    <path
                      id="Path_2092"
                      data-name="Path 2092"
                      d="M3385.831,3486.84a194.4,194.4,0,0,0,16.594,13.357c-1.812,0-24.612-7.719-24.612-9.246a47.442,47.442,0,0,1,8.018-4.111Z"
                      transform="translate(-3377.813 -3413.01)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient-2)"
                    />
                    <path
                      id="Path_2093"
                      data-name="Path 2093"
                      d="M4371.292,3180.934c-4.209-1.615-8.438-3.2-12.486-5.087a65.149,65.149,0,0,0,1.807-7.688c1.04,0,10.68,11.821,10.68,12.775Z"
                      transform="translate(-4093.348 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient-3)"
                    />
                    <path
                      id="Path_2094"
                      data-name="Path 2094"
                      d="M3406.226,3498.268c-1.415-4.374-12.439-9.719-16.167-9.25a45,45,0,0,1,4.7-2.178,194.828,194.828,0,0,0,16.552,13.329l.042.029a33.8,33.8,0,0,1-5-1.353,3.1,3.1,0,0,0-.129-.575Z"
                      transform="translate(-3386.745 -3413.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-4)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2095"
                      data-name="Path 2095"
                      d="M4360.472,3174.986c1.235,2.439,6.635,4.166,9.909,4.858.126.027.25.052.37.076a3.22,3.22,0,0,1,.541,1.014c-.1-.041-.215-.085-.342-.131-4.1-1.57-8.206-3.117-12.145-4.956a64.956,64.956,0,0,0,1.807-7.688.612.612,0,0,1,.285.129c-.02.047-.039.094-.058.143-.673,1.737-1.209,4.9-.368,6.555Z"
                      transform="translate(-4093.348 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-5)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2096"
                      data-name="Path 2096"
                      d="M3415.944,3262.149c-2.914-.995-3.987-3.1-5.553-6.319-4.481-9.216-10.335-7.56-15.028-10.076-3.131-1.678-4.114-6.746,1.677-13.559,5.347-6.292-4.361-13.244-4.019-26.411.219-8.427,5.506,8.312,6.372,4.387.8-3.629,1.8-5.561-2.224-10.728-1.554-2,.193-2.922-3.613-7.98-1.993-2.65-1.361-4.527.593-5.891,11.526-8.043,40.946-2.914,53.95-1.861,5.925.479,10.209-2.751,19.972-1.95,17.455,1.432,14.759-5.871,39.86,2.942,16.389,5.755,96.062-3.668,109.974-2.667,6.988.5,9.349-.812,13.8-1.252,3.435-.34,7.029-.822,10-.061,6.155,1.575,3.249,6.795,8.556,9.993,7.631,4.6,15.939-1.821,12.158,11.575-1.9,6.732-4.137,14.56-.555,22.9,1.033,2.406,1.016-21.578-.15-19.356-4.656,8.872-8.959,7.494-2.779,12.562,5.04,4.134-2.055,7.53,1.578,12.16,3.516,4.48,1.846,8.834-2.055,17.99-.529,1.244,2.1,2.768-2.8,5.206-3.412,1.7,8.681,6.582-18.644,6.582-7.757,0-10.143,2.346-17.976,2.146-13.5-.346-98.23-3.608-114.937-2.341-10.907.828-16.352,2.182-28.008,1.756-6.922-.253-8.353,1.633-17.788-.73-14.324-3.588-29.39,5.416-42.369.986Z"
                      transform="translate(-3388.407 -3177.321)"
                      fillRule="evenodd"
                      opacity="0.5"
                      fill="url(#radial-gradient-6)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2097"
                      data-name="Path 2097"
                      d="M3413.509,3254.6c-3.76-2.895-5.562-5.1-2.975-13.159,3.847-11.975-3.69-15-4.516-22.457-1.06-9.562-.184,25.173,3.847,18.423,2.488-4.168-4.163-5.468,3.564-13.3,5.748-5.825,4.358-10.567-.88-15.9-4.24-4.317-4.731-10.236-.184-13.1,7.1-4.473,15.216.581,20.784.871,1.674.088,3.814-.253,7.333-1.417,4.011-1.326,14.123,3.584,22.038,3.584,9.681,0,19.985-4.711,33.985-4.711,14.6,0,18.673,10.575,31.267,6.135,1.4-.494,87.178,4.49,99.848-1.178,10.089-4.513,23.891-2.543,26.731,1.969.774,1.23,6.1.182,7.045,7.208.412,3.062,9.312,5.023,4.044,13.282-.966,1.515-1.636,10.259.092,12.877,1.979,3,1.971-20.34-.092-17.739-5.84,7.364,2.506,13.409-1.786,18.762-4.347,5.42-.63,9.74-.63,13.876,0,8.7-3.614,3.42-1.588,11.908,1.766,7.4-5.386,8.419-12.919,6.932-2.215-.437-4.1-.869-8.81,2.062-7.076,4.408-17.367,1.589-25.471-.5-11.259-2.905-95.57-2.757-107.314.2-7.973,2.01-21.069-5.032-34.291-1.006-11.545,3.516-16.622-4.126-25,.556-6.427,3.589-12.64,2.692-15.453.263-3.589-3.1.6.781-4.957-5.743-5.36-6.3-11.8-7.229-13.706-8.7Z"
                      transform="translate(-3398.085 -3187.315)"
                      fillRule="evenodd"
                      opacity="0.5"
                      fill="url(#radial-gradient-7)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                  </g>
                </g>
              </g>
              <path
                id="Icon_awesome-book-open"
                data-name="Icon awesome-book-open"
                d="M38.341,2.254c-3.875.22-11.577,1.02-16.332,3.931a1.087,1.087,0,0,0-.514.931v25.73a1.119,1.119,0,0,0,1.646.954c4.892-2.462,11.967-3.134,15.465-3.318a2.205,2.205,0,0,0,2.123-2.168V4.424a2.217,2.217,0,0,0-2.388-2.171ZM18.72,6.184C13.966,3.274,6.264,2.474,2.389,2.254A2.218,2.218,0,0,0,0,4.424v23.89a2.2,2.2,0,0,0,2.123,2.168c3.5.184,10.578.856,15.47,3.32a1.116,1.116,0,0,0,1.641-.952V7.1A1.065,1.065,0,0,0,18.72,6.184Z"
                transform="translate(34.346 28.043)"
                fill="#572b0c"
              />
              <text
                id="WHITE_PAPER"
                data-name="WHITE PAPER"
                transform="translate(231.441 52.293)"
                fill="#572b0c"
                fontSize="29"
                fontFamily="CatatanPerjalanan, Catatan Perjalanan"
              >
                <tspan x="-128.151" y="0">
                  WHITE PAPER
                </tspan>
              </text>
            </g>
          </a>

          <g
            id="Component_22_1"
            data-name="Component 22 – 1"
            transform="translate(1105.194 1051.693)"
          >
            <g id="Group_1720" data-name="Group 1720">
              <g
                id="Group_1139"
                data-name="Group 1139"
                transform="translate(0 0)"
              >
                <path
                  id="Path_2088"
                  data-name="Path 2088"
                  d="M3408.075,3253.147c41.013-.9,211.874-1.444,248.957.14a4.156,4.156,0,0,0,2.585-.378c.62-.5.57-1.434.583-2.16.043-2.391.208-5.134.094-7.043l-8.2-.625,8.072-1.634q-1.128-19.581-1.549-39.386l-4.377-1.3,4.328-1.234c-.342-18.779,1.26-6.262,2.037-24.99a64.061,64.061,0,0,0-7.648-12.308,2.806,2.806,0,0,0-2.438-1.168c-16.386,1.257-230.994,2.637-260.54,1.377a2.744,2.744,0,0,0-2.928,2.517c-.156,5.512.551,9.093.772,14.343l3.179,1.718-1.43,1.607.261,1.238-1.792,1.073c.682,19.546.609,8.959-.21,28.353l2.4,1.069-1.2,1.882,3.391,1.471-4.84,1.054c-.385,7.764-1.78,15.6-1.845,23.159,4.9,4.4,14.68,9.07,22.344,11.228Z"
                  transform="translate(-3383.588 -3161.051)"
                  fillRule="evenodd"
                  fill="url(#radial-gradient)"
                  style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                />
                <g
                  id="Group_1138"
                  data-name="Group 1138"
                  transform="translate(0 1.494)"
                >
                  <path
                    id="Path_2089"
                    data-name="Path 2089"
                    d="M3402.458,3254.7c6.1,1.258,231.533.633,255-.751q-.275-3.841-.522-7.694l-8.4-.6,8.267-1.559q-1.154-18.675-1.587-37.563l-4.483-1.241,4.433-1.177c-.349-17.909-.168-5.821.627-23.682l-10.679-12.774c-1.468-.535-242.347.483-266.392,1.249q.615,8.663,1,17.306l3.256,1.638-1.465,1.532.268,1.181-1.835,1.023c.7,18.642.624,7.153-.215,25.649l2.455,1.019-1.228,1.8,3.473,1.4-4.958,1q-.611,11.509-1.617,22.98v.014l24.6,9.242Z"
                    transform="translate(-3377.846 -3167.514)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_2090"
                    data-name="Path 2090"
                    d="M3402.412,3492.981l-24.6-9.241c.766-1.006,8.433-6.187,9.481-6.279,1.01-.089,12.569,13.617,15.118,15.52Z"
                    transform="translate(-3377.813 -3405.8)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-2)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <path
                    id="Path_2091"
                    data-name="Path 2091"
                    d="M4368.639,3180.934c-2.457-1-12.947-2.461-13.432-3.377-.382-.721,2.193-6.866,2.753-9.4l10.679,12.775Z"
                    transform="translate(-4090.695 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-3)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <path
                    id="Path_2092"
                    data-name="Path 2092"
                    d="M3385.831,3486.84a194.4,194.4,0,0,0,16.594,13.357c-1.812,0-24.612-7.719-24.612-9.246a47.442,47.442,0,0,1,8.018-4.111Z"
                    transform="translate(-3377.813 -3413.01)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient-2)"
                  />
                  <path
                    id="Path_2093"
                    data-name="Path 2093"
                    d="M4371.292,3180.934c-4.209-1.615-8.438-3.2-12.486-5.087a65.149,65.149,0,0,0,1.807-7.688c1.04,0,10.68,11.821,10.68,12.775Z"
                    transform="translate(-4093.348 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient-3)"
                  />
                  <path
                    id="Path_2094"
                    data-name="Path 2094"
                    d="M3406.226,3498.268c-1.415-4.374-12.439-9.719-16.167-9.25a45,45,0,0,1,4.7-2.178,194.828,194.828,0,0,0,16.552,13.329l.042.029a33.8,33.8,0,0,1-5-1.353,3.1,3.1,0,0,0-.129-.575Z"
                    transform="translate(-3386.745 -3413.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-4)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2095"
                    data-name="Path 2095"
                    d="M4360.472,3174.986c1.235,2.439,6.635,4.166,9.909,4.858.126.027.25.052.37.076a3.22,3.22,0,0,1,.541,1.014c-.1-.041-.215-.085-.342-.131-4.1-1.57-8.206-3.117-12.145-4.956a64.956,64.956,0,0,0,1.807-7.688.612.612,0,0,1,.285.129c-.02.047-.039.094-.058.143-.673,1.737-1.209,4.9-.368,6.555Z"
                    transform="translate(-4093.348 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-5)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2096"
                    data-name="Path 2096"
                    d="M3415.944,3262.149c-2.914-.995-3.987-3.1-5.553-6.319-4.481-9.216-10.335-7.56-15.028-10.076-3.131-1.678-4.114-6.746,1.677-13.559,5.347-6.292-4.361-13.244-4.019-26.411.219-8.427,5.506,8.312,6.372,4.387.8-3.629,1.8-5.561-2.224-10.728-1.554-2,.193-2.922-3.613-7.98-1.993-2.65-1.361-4.527.593-5.891,11.526-8.043,40.946-2.914,53.95-1.861,5.925.479,10.209-2.751,19.972-1.95,17.455,1.432,14.759-5.871,39.86,2.942,16.389,5.755,96.062-3.668,109.974-2.667,6.988.5,9.349-.812,13.8-1.252,3.435-.34,7.029-.822,10-.061,6.155,1.575,3.249,6.795,8.556,9.993,7.631,4.6,15.939-1.821,12.158,11.575-1.9,6.732-4.137,14.56-.555,22.9,1.033,2.406,1.016-21.578-.15-19.356-4.656,8.872-8.959,7.494-2.779,12.562,5.04,4.134-2.055,7.53,1.578,12.16,3.516,4.48,1.846,8.834-2.055,17.99-.529,1.244,2.1,2.768-2.8,5.206-3.412,1.7,8.681,6.582-18.644,6.582-7.757,0-10.143,2.346-17.976,2.146-13.5-.346-98.23-3.608-114.937-2.341-10.907.828-16.352,2.182-28.008,1.756-6.922-.253-8.353,1.633-17.788-.73-14.324-3.588-29.39,5.416-42.369.986Z"
                    transform="translate(-3388.407 -3177.321)"
                    fillRule="evenodd"
                    opacity="0.5"
                    fill="url(#radial-gradient-6)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2097"
                    data-name="Path 2097"
                    d="M3413.509,3254.6c-3.76-2.895-5.562-5.1-2.975-13.159,3.847-11.975-3.69-15-4.516-22.457-1.06-9.562-.184,25.173,3.847,18.423,2.488-4.168-4.163-5.468,3.564-13.3,5.748-5.825,4.358-10.567-.88-15.9-4.24-4.317-4.731-10.236-.184-13.1,7.1-4.473,15.216.581,20.784.871,1.674.088,3.814-.253,7.333-1.417,4.011-1.326,14.123,3.584,22.038,3.584,9.681,0,19.985-4.711,33.985-4.711,14.6,0,18.673,10.575,31.267,6.135,1.4-.494,87.178,4.49,99.848-1.178,10.089-4.513,23.891-2.543,26.731,1.969.774,1.23,6.1.182,7.045,7.208.412,3.062,9.312,5.023,4.044,13.282-.966,1.515-1.636,10.259.092,12.877,1.979,3,1.971-20.34-.092-17.739-5.84,7.364,2.506,13.409-1.786,18.762-4.347,5.42-.63,9.74-.63,13.876,0,8.7-3.614,3.42-1.588,11.908,1.766,7.4-5.386,8.419-12.919,6.932-2.215-.437-4.1-.869-8.81,2.062-7.076,4.408-17.367,1.589-25.471-.5-11.259-2.905-95.57-2.757-107.314.2-7.973,2.01-21.069-5.032-34.291-1.006-11.545,3.516-16.622-4.126-25,.556-6.427,3.589-12.64,2.692-15.453.263-3.589-3.1.6.781-4.957-5.743-5.36-6.3-11.8-7.229-13.706-8.7Z"
                    transform="translate(-3398.085 -3187.315)"
                    fillRule="evenodd"
                    opacity="0.5"
                    fill="url(#radial-gradient-7)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                </g>
              </g>
            </g>
            <path
              id="Icon_awesome-gamepad"
              data-name="Icon awesome-gamepad"
              d="M39.016,6.75H13.005a13.005,13.005,0,1,0,9.283,22.109h7.437A13,13,0,1,0,39.016,6.75ZM20.809,21.381a.978.978,0,0,1-.975.975H15.607v4.227a.978.978,0,0,1-.975.975H11.38a.978.978,0,0,1-.975-.975V22.357H6.178a.978.978,0,0,1-.975-.975V18.13a.978.978,0,0,1,.975-.975H10.4V12.928a.978.978,0,0,1,.975-.975h3.251a.978.978,0,0,1,.975.975v4.227h4.227a.978.978,0,0,1,.975.975Zm14.956,5.527a3.9,3.9,0,1,1,3.9-3.9A3.9,3.9,0,0,1,35.765,26.908Zm6.5-6.5a3.9,3.9,0,1,1,3.9-3.9A3.9,3.9,0,0,1,42.268,20.406Z"
              transform="translate(24.694 26.377)"
              fill="#572b0c"
            />
            <text
              id="COMING_SOON"
              data-name="COMING_SOON"
              transform="translate(231.441 52.293)"
              fill="#572b0c"
              fontSize="29"
              fontFamily="CatatanPerjalanan, Catatan Perjalanan"
            >
              <tspan x="-128.151" y="0">
                COMING SOON
              </tspan>
            </text>
          </g>
        </g>
      </motion.svg>

      <motion.svg
        className="slime_desktop"
        initial="rest"
        animate="rest"
        whileHover="play"
        whileInView="play"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1662 879"
      >
        <defs>
          <pattern
            id="pattern_cloud"
            width="1"
            height="1"
            patternTransform="matrix(-1, 0, 0, 1, 376.249, 0)"
            viewBox="0 0 188.125 205.136"
          >
            <image
              preserveAspectRatio="none"
              width="188.125"
              height="205.136"
              xlinkHref="/assets/images/cloud.png"
            />
          </pattern>
          <pattern
            id="pattern-2"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 644 484"
          >
            <image
              width="644"
              height="484"
              xlinkHref="/assets/images/yellow_splash.png"
            />
          </pattern>
          <pattern
            id="pattern-3"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 586 431"
          >
            <image
              width="586"
              height="431"
              xlinkHref="/assets/images/black_splash.png"
            />
          </pattern>
          <pattern
            id="pattern-4"
            width="1"
            height="1"
            viewBox="-34.331 -21.05 344.331 293.237"
          >
            <image
              preserveAspectRatio="none"
              width="310"
              height="264"
              xlinkHref="/assets/images/brown_slime.png"
            />
          </pattern>
          <pattern
            id="pattern-5"
            width="1"
            height="1"
            viewBox="-29.167 0 532.556 291.537"
          >
            <image
              preserveAspectRatio="none"
              width="506"
              height="277"
              xlinkHref="/assets/images/2-slime.png"
            />
          </pattern>
          <pattern
            id="pattern-6"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 268 210"
          >
            <image
              width="268"
              height="210"
              xlinkHref="/assets/images/slime2.png"
            />
          </pattern>
          <radialGradient
            id="radial-gradient"
            cx="0.481"
            cy="0.657"
            r="2.176"
            gradientTransform="translate(0.304) scale(0.393 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#a48a7b" />
            <stop offset="1" stopColor="#fff" />
          </radialGradient>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            y1="1"
            x2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#edd6b9" />
            <stop offset="1" stopColor="#d4b492" />
          </linearGradient>
          <radialGradient
            id="radial-gradient-2"
            cx="0.34"
            cy="1.138"
            r="1.589"
            gradientTransform="translate(0.131) scale(0.738 1)"
            xlinkHref="#radial-gradient"
          />
          <radialGradient
            id="radial-gradient-3"
            cx="0.767"
            cy="0.467"
            r="0.855"
            gradientTransform="translate(-0.055) scale(1.11 1)"
            xlinkHref="#radial-gradient"
          />
          <linearGradient
            id="linear-gradient-2"
            x1="0.487"
            y1="0.7"
            x2="0.628"
            y2="0.179"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#bf9f7e" />
            <stop offset="1" stopColor="#edd6b9" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="0.664"
            y1="0.423"
            x2="0.225"
            y2="0.79"
            xlinkHref="#linear-gradient-2"
          />
          <radialGradient
            id="radial-gradient-4"
            cx="0.348"
            cy="1.021"
            r="1.509"
            gradientTransform="translate(0.133) scale(0.734 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#a3805f" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-5"
            cx="0.861"
            cy="0.211"
            r="1.027"
            gradientTransform="translate(-0.099) scale(1.197 1)"
            xlinkHref="#radial-gradient-4"
          />
          <radialGradient
            id="radial-gradient-6"
            cx="0.5"
            cy="0.5"
            r="1.854"
            gradientTransform="translate(0.32) scale(0.359 1)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#ca9e67" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-7"
            cy="0.5"
            r="1.065"
            gradientTransform="translate(0.324) scale(0.352 1)"
            xlinkHref="#radial-gradient-6"
          />
        </defs>
        <g
          id="group_slime_landing"
          data-name="group_slime_landing"
          transform="translate(-300 -171)"
        >
          <g
            id="Component_23_1"
            data-name="Component 23 – 1"
            transform="translate(490 191)"
          >
            <rect
              id="cloud_v3"
              data-name="cloud v3"
              width="188.125"
              height="205.136"
              transform="translate(750.792 91.65)"
              fill="url(#pattern-cloud)"
            />
            <g id="Component_20_1" data-name="Component 20 – 1">
              <g
                id="EXPLODES"
                transform="translate(275.762 141.222)"
                opacity="0.739"
              >
                <image
                  id="Layer_48"
                  data-name="Layer 48"
                  width="638"
                  height="537"
                  transform="translate(33.238 -0.222)"
                  xlinkHref="/assets/images/brown_splash.png"
                />
                <rect
                  id="Layer_47"
                  data-name="Layer 47"
                  width="634"
                  height="477"
                  transform="translate(17.238 31.778)"
                  fill="url(#pattern-2)"
                />
                <rect
                  id="Layer_46"
                  data-name="Layer 46"
                  width="576"
                  height="424"
                  transform="translate(0.238 37.778)"
                  fill="url(#pattern-3)"
                />
              </g>
              <g
                id="Group_2_copy"
                data-name="Group 2 copy"
                transform="translate(0 -0.415)"
              >
                <motion.rect
                  variants={brown_slime}
                  id="slime5"
                  width="310"
                  height="264"
                  transform="translate(126 49.415)"
                  fill="url(#pattern-4)"
                />
                <motion.rect
                  variants={double_slime}
                  id="slime4"
                  width="506"
                  height="277"
                  transform="translate(352 0.415)"
                  fill="url(#pattern-5)"
                />
                <motion.image
                  variants={purple_slime}
                  id="slime3"
                  width="323.649"
                  height="296.256"
                  transform="translate(0 333.958) rotate(-7)"
                  xlinkHref="/assets/images/purple_slime.png"
                />
                <motion.rect
                  variants={red_slime}
                  id="slime2"
                  width="270"
                  height="212"
                  transform="translate(846 49.415)"
                  fill="url(#pattern-6)"
                />
                <motion.image
                  variants={green_slime}
                  id="slime1"
                  width="307"
                  height="300"
                  transform="translate(669 523.415)"
                  xlinkHref="/assets/images/flower_slime.png"
                />
                <motion.image
                  variants={yellow_slime_02}
                  id="slime6"
                  width="237"
                  height="238"
                  transform="translate(893 342.415)"
                  xlinkHref="/assets/images/yelow_slime_001.png"
                />
                <motion.image
                  variants={yellow_slime_01}
                  id="r"
                  width="374"
                  height="392"
                  transform="translate(267 457.415)"
                  xlinkHref="/assets/images/yelow_slime_002.png"
                />
              </g>
              <motion.image
                variants={slime_logo}
                id="Layer_46-2"
                data-name="Layer 46"
                width="642"
                height="375"
                transform="translate(283 227)"
                xlinkHref="/assets/images/slime_logo.png"
              />
            </g>
          </g>
          <a
            href="https://drive.google.com/file/d/1J1C6zQBBTxldjzYfRySGRXcfpmLh_mQz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <motion.g
              style={{ cursor: "pointer" }}
              variants={whitepaper_btn}
              initial="rest"
              animate="rest"
              whileHover="hover"
              id="Component_21_1"
              data-name="Component 21 – 1"
              transform="translate(1546 824.359)"
            >
              <g id="Group_1720" data-name="Group 1720">
                <g
                  id="Group_1139"
                  data-name="Group 1139"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_2088"
                    data-name="Path 2088"
                    d="M3408.075,3253.147c41.013-.9,211.874-1.444,248.957.14a4.156,4.156,0,0,0,2.585-.378c.62-.5.57-1.434.583-2.16.043-2.391.208-5.134.094-7.043l-8.2-.625,8.072-1.634q-1.128-19.581-1.549-39.386l-4.377-1.3,4.328-1.234c-.342-18.779,1.26-6.262,2.037-24.99a64.061,64.061,0,0,0-7.648-12.308,2.806,2.806,0,0,0-2.438-1.168c-16.386,1.257-230.994,2.637-260.54,1.377a2.744,2.744,0,0,0-2.928,2.517c-.156,5.512.551,9.093.772,14.343l3.179,1.718-1.43,1.607.261,1.238-1.792,1.073c.682,19.546.609,8.959-.21,28.353l2.4,1.069-1.2,1.882,3.391,1.471-4.84,1.054c-.385,7.764-1.78,15.6-1.845,23.159,4.9,4.4,14.68,9.07,22.344,11.228Z"
                    transform="translate(-3383.588 -3161.051)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <g
                    id="Group_1138"
                    data-name="Group 1138"
                    transform="translate(0 1.494)"
                  >
                    <path
                      id="Path_2089"
                      data-name="Path 2089"
                      d="M3402.458,3254.7c6.1,1.258,231.533.633,255-.751q-.275-3.841-.522-7.694l-8.4-.6,8.267-1.559q-1.154-18.675-1.587-37.563l-4.483-1.241,4.433-1.177c-.349-17.909-.168-5.821.627-23.682l-10.679-12.774c-1.468-.535-242.347.483-266.392,1.249q.615,8.663,1,17.306l3.256,1.638-1.465,1.532.268,1.181-1.835,1.023c.7,18.642.624,7.153-.215,25.649l2.455,1.019-1.228,1.8,3.473,1.4-4.958,1q-.611,11.509-1.617,22.98v.014l24.6,9.242Z"
                      transform="translate(-3377.846 -3167.514)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_2090"
                      data-name="Path 2090"
                      d="M3402.412,3492.981l-24.6-9.241c.766-1.006,8.433-6.187,9.481-6.279,1.01-.089,12.569,13.617,15.118,15.52Z"
                      transform="translate(-3377.813 -3405.8)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-2)"
                      style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                    />
                    <path
                      id="Path_2091"
                      data-name="Path 2091"
                      d="M4368.639,3180.934c-2.457-1-12.947-2.461-13.432-3.377-.382-.721,2.193-6.866,2.753-9.4l10.679,12.775Z"
                      transform="translate(-4090.695 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-3)"
                      style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                    />
                    <path
                      id="Path_2092"
                      data-name="Path 2092"
                      d="M3385.831,3486.84a194.4,194.4,0,0,0,16.594,13.357c-1.812,0-24.612-7.719-24.612-9.246a47.442,47.442,0,0,1,8.018-4.111Z"
                      transform="translate(-3377.813 -3413.01)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient-2)"
                    />
                    <path
                      id="Path_2093"
                      data-name="Path 2093"
                      d="M4371.292,3180.934c-4.209-1.615-8.438-3.2-12.486-5.087a65.149,65.149,0,0,0,1.807-7.688c1.04,0,10.68,11.821,10.68,12.775Z"
                      transform="translate(-4093.348 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#linear-gradient-3)"
                    />
                    <path
                      id="Path_2094"
                      data-name="Path 2094"
                      d="M3406.226,3498.268c-1.415-4.374-12.439-9.719-16.167-9.25a45,45,0,0,1,4.7-2.178,194.828,194.828,0,0,0,16.552,13.329l.042.029a33.8,33.8,0,0,1-5-1.353,3.1,3.1,0,0,0-.129-.575Z"
                      transform="translate(-3386.745 -3413.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-4)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2095"
                      data-name="Path 2095"
                      d="M4360.472,3174.986c1.235,2.439,6.635,4.166,9.909,4.858.126.027.25.052.37.076a3.22,3.22,0,0,1,.541,1.014c-.1-.041-.215-.085-.342-.131-4.1-1.57-8.206-3.117-12.145-4.956a64.956,64.956,0,0,0,1.807-7.688.612.612,0,0,1,.285.129c-.02.047-.039.094-.058.143-.673,1.737-1.209,4.9-.368,6.555Z"
                      transform="translate(-4093.348 -3168.01)"
                      fillRule="evenodd"
                      fill="url(#radial-gradient-5)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2096"
                      data-name="Path 2096"
                      d="M3415.944,3262.149c-2.914-.995-3.987-3.1-5.553-6.319-4.481-9.216-10.335-7.56-15.028-10.076-3.131-1.678-4.114-6.746,1.677-13.559,5.347-6.292-4.361-13.244-4.019-26.411.219-8.427,5.506,8.312,6.372,4.387.8-3.629,1.8-5.561-2.224-10.728-1.554-2,.193-2.922-3.613-7.98-1.993-2.65-1.361-4.527.593-5.891,11.526-8.043,40.946-2.914,53.95-1.861,5.925.479,10.209-2.751,19.972-1.95,17.455,1.432,14.759-5.871,39.86,2.942,16.389,5.755,96.062-3.668,109.974-2.667,6.988.5,9.349-.812,13.8-1.252,3.435-.34,7.029-.822,10-.061,6.155,1.575,3.249,6.795,8.556,9.993,7.631,4.6,15.939-1.821,12.158,11.575-1.9,6.732-4.137,14.56-.555,22.9,1.033,2.406,1.016-21.578-.15-19.356-4.656,8.872-8.959,7.494-2.779,12.562,5.04,4.134-2.055,7.53,1.578,12.16,3.516,4.48,1.846,8.834-2.055,17.99-.529,1.244,2.1,2.768-2.8,5.206-3.412,1.7,8.681,6.582-18.644,6.582-7.757,0-10.143,2.346-17.976,2.146-13.5-.346-98.23-3.608-114.937-2.341-10.907.828-16.352,2.182-28.008,1.756-6.922-.253-8.353,1.633-17.788-.73-14.324-3.588-29.39,5.416-42.369.986Z"
                      transform="translate(-3388.407 -3177.321)"
                      fillRule="evenodd"
                      opacity="0.5"
                      fill="url(#radial-gradient-6)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                    <path
                      id="Path_2097"
                      data-name="Path 2097"
                      d="M3413.509,3254.6c-3.76-2.895-5.562-5.1-2.975-13.159,3.847-11.975-3.69-15-4.516-22.457-1.06-9.562-.184,25.173,3.847,18.423,2.488-4.168-4.163-5.468,3.564-13.3,5.748-5.825,4.358-10.567-.88-15.9-4.24-4.317-4.731-10.236-.184-13.1,7.1-4.473,15.216.581,20.784.871,1.674.088,3.814-.253,7.333-1.417,4.011-1.326,14.123,3.584,22.038,3.584,9.681,0,19.985-4.711,33.985-4.711,14.6,0,18.673,10.575,31.267,6.135,1.4-.494,87.178,4.49,99.848-1.178,10.089-4.513,23.891-2.543,26.731,1.969.774,1.23,6.1.182,7.045,7.208.412,3.062,9.312,5.023,4.044,13.282-.966,1.515-1.636,10.259.092,12.877,1.979,3,1.971-20.34-.092-17.739-5.84,7.364,2.506,13.409-1.786,18.762-4.347,5.42-.63,9.74-.63,13.876,0,8.7-3.614,3.42-1.588,11.908,1.766,7.4-5.386,8.419-12.919,6.932-2.215-.437-4.1-.869-8.81,2.062-7.076,4.408-17.367,1.589-25.471-.5-11.259-2.905-95.57-2.757-107.314.2-7.973,2.01-21.069-5.032-34.291-1.006-11.545,3.516-16.622-4.126-25,.556-6.427,3.589-12.64,2.692-15.453.263-3.589-3.1.6.781-4.957-5.743-5.36-6.3-11.8-7.229-13.706-8.7Z"
                      transform="translate(-3398.085 -3187.315)"
                      fillRule="evenodd"
                      opacity="0.5"
                      fill="url(#radial-gradient-7)"
                      style={{ isolation: "isolate", mixBlendMode: "screen" }}
                    />
                  </g>
                </g>
              </g>
              <path
                id="Icon_awesome-book-open"
                data-name="Icon awesome-book-open"
                d="M38.341,2.254c-3.875.22-11.577,1.02-16.332,3.931a1.087,1.087,0,0,0-.514.931v25.73a1.119,1.119,0,0,0,1.646.954c4.892-2.462,11.967-3.134,15.465-3.318a2.205,2.205,0,0,0,2.123-2.168V4.424a2.217,2.217,0,0,0-2.388-2.171ZM18.72,6.184C13.966,3.274,6.264,2.474,2.389,2.254A2.218,2.218,0,0,0,0,4.424v23.89a2.2,2.2,0,0,0,2.123,2.168c3.5.184,10.578.856,15.47,3.32a1.116,1.116,0,0,0,1.641-.952V7.1A1.065,1.065,0,0,0,18.72,6.184Z"
                transform="translate(34.346 28.043)"
                fill="#572b0c"
              />
              <text
                id="WHITE_PAPER"
                data-name="WHITE PAPER"
                transform="translate(231.441 52.293)"
                fill="#572b0c"
                fontSize="29"
                fontFamily="CatatanPerjalanan, Catatan Perjalanan"
              >
                <tspan x="-128.151" y="0">
                  WHITE PAPER
                </tspan>
              </text>
            </motion.g>
          </a>
          <motion.g
            style={{ cursor: "pointer" }}
            variants={play_btn}
            initial="rest"
            animate="rest"
            whileHover="hover"
            id="Component_22_1"
            data-name="Component 22 – 1"
            transform="translate(1642.388 930.404)"
          >
            <g id="Group_1720" data-name="Group 1720">
              <g
                id="Group_1139"
                data-name="Group 1139"
                transform="translate(0 0)"
              >
                <path
                  id="Path_2088"
                  data-name="Path 2088"
                  d="M3408.075,3253.147c41.013-.9,211.874-1.444,248.957.14a4.156,4.156,0,0,0,2.585-.378c.62-.5.57-1.434.583-2.16.043-2.391.208-5.134.094-7.043l-8.2-.625,8.072-1.634q-1.128-19.581-1.549-39.386l-4.377-1.3,4.328-1.234c-.342-18.779,1.26-6.262,2.037-24.99a64.061,64.061,0,0,0-7.648-12.308,2.806,2.806,0,0,0-2.438-1.168c-16.386,1.257-230.994,2.637-260.54,1.377a2.744,2.744,0,0,0-2.928,2.517c-.156,5.512.551,9.093.772,14.343l3.179,1.718-1.43,1.607.261,1.238-1.792,1.073c.682,19.546.609,8.959-.21,28.353l2.4,1.069-1.2,1.882,3.391,1.471-4.84,1.054c-.385,7.764-1.78,15.6-1.845,23.159,4.9,4.4,14.68,9.07,22.344,11.228Z"
                  transform="translate(-3383.588 -3161.051)"
                  fillRule="evenodd"
                  fill="url(#radial-gradient)"
                  style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                />
                <g
                  id="Group_1138"
                  data-name="Group 1138"
                  transform="translate(0 1.494)"
                >
                  <path
                    id="Path_2089"
                    data-name="Path 2089"
                    d="M3402.458,3254.7c6.1,1.258,231.533.633,255-.751q-.275-3.841-.522-7.694l-8.4-.6,8.267-1.559q-1.154-18.675-1.587-37.563l-4.483-1.241,4.433-1.177c-.349-17.909-.168-5.821.627-23.682l-10.679-12.774c-1.468-.535-242.347.483-266.392,1.249q.615,8.663,1,17.306l3.256,1.638-1.465,1.532.268,1.181-1.835,1.023c.7,18.642.624,7.153-.215,25.649l2.455,1.019-1.228,1.8,3.473,1.4-4.958,1q-.611,11.509-1.617,22.98v.014l24.6,9.242Z"
                    transform="translate(-3377.846 -3167.514)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_2090"
                    data-name="Path 2090"
                    d="M3402.412,3492.981l-24.6-9.241c.766-1.006,8.433-6.187,9.481-6.279,1.01-.089,12.569,13.617,15.118,15.52Z"
                    transform="translate(-3377.813 -3405.8)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-2)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <path
                    id="Path_2091"
                    data-name="Path 2091"
                    d="M4368.639,3180.934c-2.457-1-12.947-2.461-13.432-3.377-.382-.721,2.193-6.866,2.753-9.4l10.679,12.775Z"
                    transform="translate(-4090.695 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-3)"
                    style={{ isolation: "isolate", mixBlendMode: "multiply" }}
                  />
                  <path
                    id="Path_2092"
                    data-name="Path 2092"
                    d="M3385.831,3486.84a194.4,194.4,0,0,0,16.594,13.357c-1.812,0-24.612-7.719-24.612-9.246a47.442,47.442,0,0,1,8.018-4.111Z"
                    transform="translate(-3377.813 -3413.01)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient-2)"
                  />
                  <path
                    id="Path_2093"
                    data-name="Path 2093"
                    d="M4371.292,3180.934c-4.209-1.615-8.438-3.2-12.486-5.087a65.149,65.149,0,0,0,1.807-7.688c1.04,0,10.68,11.821,10.68,12.775Z"
                    transform="translate(-4093.348 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#linear-gradient-3)"
                  />
                  <path
                    id="Path_2094"
                    data-name="Path 2094"
                    d="M3406.226,3498.268c-1.415-4.374-12.439-9.719-16.167-9.25a45,45,0,0,1,4.7-2.178,194.828,194.828,0,0,0,16.552,13.329l.042.029a33.8,33.8,0,0,1-5-1.353,3.1,3.1,0,0,0-.129-.575Z"
                    transform="translate(-3386.745 -3413.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-4)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2095"
                    data-name="Path 2095"
                    d="M4360.472,3174.986c1.235,2.439,6.635,4.166,9.909,4.858.126.027.25.052.37.076a3.22,3.22,0,0,1,.541,1.014c-.1-.041-.215-.085-.342-.131-4.1-1.57-8.206-3.117-12.145-4.956a64.956,64.956,0,0,0,1.807-7.688.612.612,0,0,1,.285.129c-.02.047-.039.094-.058.143-.673,1.737-1.209,4.9-.368,6.555Z"
                    transform="translate(-4093.348 -3168.01)"
                    fillRule="evenodd"
                    fill="url(#radial-gradient-5)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2096"
                    data-name="Path 2096"
                    d="M3415.944,3262.149c-2.914-.995-3.987-3.1-5.553-6.319-4.481-9.216-10.335-7.56-15.028-10.076-3.131-1.678-4.114-6.746,1.677-13.559,5.347-6.292-4.361-13.244-4.019-26.411.219-8.427,5.506,8.312,6.372,4.387.8-3.629,1.8-5.561-2.224-10.728-1.554-2,.193-2.922-3.613-7.98-1.993-2.65-1.361-4.527.593-5.891,11.526-8.043,40.946-2.914,53.95-1.861,5.925.479,10.209-2.751,19.972-1.95,17.455,1.432,14.759-5.871,39.86,2.942,16.389,5.755,96.062-3.668,109.974-2.667,6.988.5,9.349-.812,13.8-1.252,3.435-.34,7.029-.822,10-.061,6.155,1.575,3.249,6.795,8.556,9.993,7.631,4.6,15.939-1.821,12.158,11.575-1.9,6.732-4.137,14.56-.555,22.9,1.033,2.406,1.016-21.578-.15-19.356-4.656,8.872-8.959,7.494-2.779,12.562,5.04,4.134-2.055,7.53,1.578,12.16,3.516,4.48,1.846,8.834-2.055,17.99-.529,1.244,2.1,2.768-2.8,5.206-3.412,1.7,8.681,6.582-18.644,6.582-7.757,0-10.143,2.346-17.976,2.146-13.5-.346-98.23-3.608-114.937-2.341-10.907.828-16.352,2.182-28.008,1.756-6.922-.253-8.353,1.633-17.788-.73-14.324-3.588-29.39,5.416-42.369.986Z"
                    transform="translate(-3388.407 -3177.321)"
                    fillRule="evenodd"
                    opacity="0.5"
                    fill="url(#radial-gradient-6)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                  <path
                    id="Path_2097"
                    data-name="Path 2097"
                    d="M3413.509,3254.6c-3.76-2.895-5.562-5.1-2.975-13.159,3.847-11.975-3.69-15-4.516-22.457-1.06-9.562-.184,25.173,3.847,18.423,2.488-4.168-4.163-5.468,3.564-13.3,5.748-5.825,4.358-10.567-.88-15.9-4.24-4.317-4.731-10.236-.184-13.1,7.1-4.473,15.216.581,20.784.871,1.674.088,3.814-.253,7.333-1.417,4.011-1.326,14.123,3.584,22.038,3.584,9.681,0,19.985-4.711,33.985-4.711,14.6,0,18.673,10.575,31.267,6.135,1.4-.494,87.178,4.49,99.848-1.178,10.089-4.513,23.891-2.543,26.731,1.969.774,1.23,6.1.182,7.045,7.208.412,3.062,9.312,5.023,4.044,13.282-.966,1.515-1.636,10.259.092,12.877,1.979,3,1.971-20.34-.092-17.739-5.84,7.364,2.506,13.409-1.786,18.762-4.347,5.42-.63,9.74-.63,13.876,0,8.7-3.614,3.42-1.588,11.908,1.766,7.4-5.386,8.419-12.919,6.932-2.215-.437-4.1-.869-8.81,2.062-7.076,4.408-17.367,1.589-25.471-.5-11.259-2.905-95.57-2.757-107.314.2-7.973,2.01-21.069-5.032-34.291-1.006-11.545,3.516-16.622-4.126-25,.556-6.427,3.589-12.64,2.692-15.453.263-3.589-3.1.6.781-4.957-5.743-5.36-6.3-11.8-7.229-13.706-8.7Z"
                    transform="translate(-3398.085 -3187.315)"
                    fillRule="evenodd"
                    opacity="0.5"
                    fill="url(#radial-gradient-7)"
                    style={{ isolation: "isolate", mixBlendMode: "screen" }}
                  />
                </g>
              </g>
            </g>
            <path
              id="Icon_awesome-gamepad"
              data-name="Icon awesome-gamepad"
              d="M39.016,6.75H13.005a13.005,13.005,0,1,0,9.283,22.109h7.437A13,13,0,1,0,39.016,6.75ZM20.809,21.381a.978.978,0,0,1-.975.975H15.607v4.227a.978.978,0,0,1-.975.975H11.38a.978.978,0,0,1-.975-.975V22.357H6.178a.978.978,0,0,1-.975-.975V18.13a.978.978,0,0,1,.975-.975H10.4V12.928a.978.978,0,0,1,.975-.975h3.251a.978.978,0,0,1,.975.975v4.227h4.227a.978.978,0,0,1,.975.975Zm14.956,5.527a3.9,3.9,0,1,1,3.9-3.9A3.9,3.9,0,0,1,35.765,26.908Zm6.5-6.5a3.9,3.9,0,1,1,3.9-3.9A3.9,3.9,0,0,1,42.268,20.406Z"
              transform="translate(24.694 26.377)"
              fill="#572b0c"
            />
            <text
              id="COMING_SOON"
              data-name="COMING_SOON"
              transform="translate(231.441 52.293)"
              fill="#572b0c"
              fontSize="29"
              fontFamily="CatatanPerjalanan, Catatan Perjalanan"
            >
              <tspan x="-128.151" y="0">
                COMING SOON
              </tspan>
            </text>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
};
