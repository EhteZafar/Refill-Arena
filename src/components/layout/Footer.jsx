import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@mantine/carousel";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer p-2 text-center">
        <p className="text-white">WE ACCEPT</p>
        <hr
          className="mx-auto"
          style={{ width: "5%", borderRadius: "100px", borderWidth: "1.5px" }}
        />
      </div>
      <div
        className="bg-blue-900"
        style={{
          backgroundImage: 'url("/images/footer/Banner.png")',
          backgroundSize: "cover",
        }}
      >
        <div
          className="pt-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(47, 30, 98, 0.37) 0%, rgba(80, 69, 155, 0.37) 100%)",
          }}
        >
          <Carousel
            withIndicators
            height={100}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap="40px"
            controlsOffset="xl"
            loop
            align="start"
          >
            <Carousel.Slide className="pl-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="82"
                fill="none"
                viewBox="0 0 82 82"
              >
                <path
                  fill="#F7931A"
                  d="M81.004 44.862C83.348 22.555 67.164 2.57 44.854.225 22.556-2.117 2.57 14.068.227 36.373c-2.348 22.308 13.835 42.295 36.138 44.638 22.308 2.346 42.294-13.841 44.64-36.15z"
                ></path>
                <path
                  fill="#fff"
                  d="M56.647 51.087c-.572 5.435-5.284 7.218-11.218 7.686l-.066 7.546-4.594-.04.064-7.348c-1.206-.01-2.44-.045-3.667-.08l-.063 7.396-4.591-.04.064-7.545c-.995-.029-1.971-.056-2.923-.064l-.001.023-6.336-.053.044-4.906s3.392.094 3.336.031c1.86.016 2.477-1.059 2.66-1.99l.075-8.597c.129.001.296-.003.486-.027l-.484-.005.103-12.044c-.077-.586-.413-1.523-1.713-1.536.06-.052-3.339-.028-3.339-.028l-.864-5.495 5.979.052c1.112.009 2.207 0 3.28.002l.07-7.634 4.588.04-.065 7.551c1.259-.015 2.478-.014 3.668-.003l.064-7.517 4.593.04-.065 7.62c7.719.51 13.108 2.503 13.714 9.76.49 5.843-2.277 8.425-6.67 9.44 2.65 1.383 4.295 3.787 3.871 7.765zM50.362 34.71c.051-5.704-9.72-5.14-12.834-5.17l-.087 10.112c3.114.027 12.866 1.007 12.92-4.942zM48.1 48.96c.044-5.19-8.106-4.655-10.7-4.678l-.08 9.171c2.594.023 10.733.92 10.78-4.493z"
                ></path>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <span className="flex w-[85px] h-[85px] bg-red-700 justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  fill="none"
                  viewBox="0 0 22 23"
                >
                  <path
                    fill="#fff"
                    d="M8.91 23.004c-2.494 0-4.537-.586-6.129-1.76C1.21 20.05.424 18.353.424 16.153c0-.461.052-1.027.157-1.697.272-1.509.66-3.321 1.163-5.438C3.169 3.256 6.846.375 12.775.375c1.614 0 3.06.273 4.338.818 1.278.523 2.284 1.32 3.017 2.388.733 1.048 1.1 2.305 1.1 3.772 0 .44-.053.995-.157 1.665a71.16 71.16 0 01-1.132 5.438c-.733 2.87-2 5.018-3.803 6.442-1.802 1.404-4.211 2.106-7.228 2.106zm.44-4.526c1.173 0 2.168-.345 2.985-1.037.839-.691 1.436-1.75 1.792-3.174.482-1.97.849-3.688 1.1-5.154.084-.44.126-.89.126-1.352 0-1.906-.996-2.86-2.986-2.86-1.174 0-2.18.346-3.017 1.037-.817.692-1.404 1.75-1.76 3.175-.377 1.404-.755 3.122-1.132 5.154a6.708 6.708 0 00-.126 1.32c0 1.928 1.006 2.892 3.018 2.892z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  fill="none"
                  viewBox="0 0 22 23"
                >
                  <path
                    fill="#fff"
                    d="M.674 22.69c-.23 0-.409-.074-.534-.22a.75.75 0 01-.095-.566L4.383 1.475A.9.9 0 014.728.91a.958.958 0 01.597-.22h8.36c2.326 0 4.191.482 5.595 1.446 1.425.964 2.137 2.357 2.137 4.18 0 .524-.063 1.069-.189 1.634-.523 2.41-1.581 4.191-3.174 5.344-1.571 1.152-3.73 1.728-6.474 1.728H7.337L5.89 21.904a.9.9 0 01-.346.566.958.958 0 01-.597.22H.674zM11.8 10.684c.88 0 1.644-.241 2.294-.723.67-.482 1.11-1.173 1.32-2.074a5.51 5.51 0 00.094-.943c0-.608-.178-1.069-.534-1.383-.356-.335-.964-.503-1.823-.503H9.38l-1.195 5.626H11.8z"
                  ></path>
                </svg>
              </span>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="82"
                fill="none"
                viewBox="0 0 82 82"
              >
                <mask
                  id="mask0_250_603"
                  style={{ maskType: "luminance" }}
                  width="82"
                  height="82"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#fff" d="M.751 0H82v81.249H.751V0z"></path>
                </mask>
                <g mask="url(#mask0_250_603)">
                  <path
                    fill="#F0B90B"
                    fillRule="evenodd"
                    d="M41.376 0C18.938 0 .75 18.187.75 40.624c0 22.438 18.187 40.625 40.625 40.625C63.813 81.249 82 63.062 82 40.625 82 18.186 63.813 0 41.376 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    d="M59.671 40.624l-.029 10.741-9.126 5.373v6.288l14.469-8.485V37.485l-5.314 3.14zm0-10.74v6.259l5.317-3.146v-6.26l-5.317-3.142-5.343 3.146 5.343 3.142zm-12.967-3.147l-5.317-3.146-5.343 3.146 5.343 3.146 5.317-3.146z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M55.832 49.14v-6.29l-5.317 3.146v6.26l5.317-3.117zm-9.126 9.85l-5.317 3.146-5.343-3.146v6.26l5.343 3.145 5.317-3.146v-6.26zM28.425 26.737l-5.317-3.146-5.343 3.146v6.26l5.343 3.146v-6.26l5.317-3.146zm-5.317 24.628l-.03-10.74-5.316-3.147v17.056L32.23 63.02V56.73l-9.123-5.366z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.92 49.14l5.316 3.116v-6.26l-5.316-3.145v6.288z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.921 32.11l-.03 6.288 9.156 5.372v10.767l5.317 3.117 5.317-3.117V43.77l9.155-5.372V32.11l-5.34-3.146-9.1 5.398-9.155-5.398-5.343 3.146h.023zm28.912-10.742L41.39 12.854 26.92 21.367l5.317 3.146 9.155-5.398 9.123 5.398 5.317-3.146z"
                  ></path>
                </g>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                fill="none"
                viewBox="0 0 81 81"
              >
                <g clipPath="url(#clip0_250_597)">
                  <path
                    fill="#F5AC37"
                    d="M40.5 0C62.87 0 81 18.134 81 40.5 81 62.87 62.87 81 40.5 81 18.134 81 0 62.868 0 40.5 0 18.134 18.134 0 40.5 0z"
                  ></path>
                  <path
                    fill="#FEFEFD"
                    d="M41.993 43.36h15.39c.327 0 .482 0 .506-.43a29.41 29.41 0 000-4.708c0-.304-.151-.43-.481-.43H26.78c-.379 0-.48.126-.48.48v4.506c0 .582 0 .582.606.582h15.087zM56.17 32.527a.494.494 0 000-.354 10.018 10.018 0 00-.915-1.595 12.923 12.923 0 00-1.873-2.354 6.223 6.223 0 00-1.165-1.14 18.195 18.195 0 00-7.594-3.847 18.876 18.876 0 00-4.303-.455H26.727c-.379 0-.43.15-.43.48v8.986c0 .379 0 .48.482.48h29.209s.253-.05.304-.201h-.124.002zm0 16.098a5.917 5.917 0 00-1.294 0h-28.07c-.38 0-.507 0-.507.507v8.784c0 .405 0 .507.507.507h12.96c.62.047 1.24.003 1.846-.126 1.88-.135 3.73-.543 5.495-1.216a10.066 10.066 0 001.846-.86h.177a16.444 16.444 0 007.062-7.11s.177-.382-.022-.482v-.004zM21.213 62.977V48.98c0-.33 0-.379-.405-.379h-5.493c-.304 0-.43 0-.43-.404v-4.81h5.872c.328 0 .456 0 .456-.43v-4.759c0-.304 0-.379-.405-.379h-5.493c-.304 0-.43 0-.43-.404V32.96c0-.279 0-.353.404-.353h5.442c.38 0 .482 0 .482-.481V18.482c0-.404 0-.506.506-.506h18.984c1.377.054 2.746.206 4.1.455a24.747 24.747 0 017.923 2.936 22.335 22.335 0 014.454 3.443 24.393 24.393 0 012.708 3.366 20.3 20.3 0 011.978 3.873.66.66 0 00.756.532h4.53c.582 0 .582 0 .608.558v4.152c0 .404-.152.506-.558.506h-3.494c-.353 0-.456 0-.43.456.139 1.542.139 3.09 0 4.63 0 .431 0 .482.483.482h3.997c.177.228 0 .456 0 .685.025.294.025.59 0 .884v3.064c0 .43-.126.558-.507.558h-4.784a.633.633 0 00-.734.48 20.243 20.243 0 01-5.317 7.746 30.467 30.467 0 01-2.708 2.177c-1.013.583-2 1.19-3.038 1.67a27.373 27.373 0 01-5.974 1.898c-1.954.35-3.935.509-5.923.481H21.204v-.025l.008-.006z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_597">
                    <path fill="#fff" d="M0 0H81V81H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="83"
                fill="none"
                viewBox="0 0 83 83"
              >
                <g clipPath="url(#clip0_250_615)">
                  <path
                    fill="#fff"
                    d="M41.417 78.351c20.398 0 36.934-16.536 36.934-36.934 0-20.399-16.536-36.935-36.934-36.935-20.398 0-36.935 16.537-36.935 36.935 0 20.398 16.537 36.934 36.935 36.934z"
                  ></path>
                  <path
                    fill="#345D9D"
                    d="M41.417 0a41.417 41.417 0 1041.417 41.417A41.297 41.297 0 0041.658 0h-.24zm.702 42.821l-4.312 14.541h23.065a1.164 1.164 0 011.204 1.123v.382l-2.006 6.919a1.495 1.495 0 01-1.504 1.103h-35.3l5.917-20.157-6.62 2.006 1.505-4.613 6.619-2.006 8.323-28.28a1.515 1.515 0 011.505-1.103h8.925a1.164 1.164 0 011.203 1.123v.381l-7.02 23.868 6.62-2.006-1.405 4.814-6.719 1.905z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_615">
                    <path fill="#fff" d="M0 0H83V82.834H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                fill="none"
                viewBox="0 0 81 81"
              >
                <g clipPath="url(#clip0_250_594)">
                  <path
                    fill="#26A17B"
                    d="M40.5 81C62.867 81 81 62.867 81 40.5S62.867 0 40.5 0 0 18.133 0 40.5 18.133 81 40.5 81z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M44.816 44.238v-.007c-.28.02-1.725.104-4.942.104-2.572 0-4.375-.071-5.013-.104v.007c-9.891-.437-17.268-2.156-17.268-4.22 0-2.057 7.384-3.783 17.268-4.219v6.726c.644.046 2.5.156 5.059.156 3.073 0 4.61-.13 4.896-.156v-6.72c9.871.443 17.229 2.162 17.229 4.22 0 2.057-7.364 3.776-17.229 4.22m0-9.136v-6.017h13.772v-9.174H21.096v9.174h13.771v6.017c-11.193.514-19.605 2.728-19.605 5.385 0 2.656 8.419 4.87 19.605 5.39v19.287h9.956V45.885c11.173-.515 19.573-2.728 19.573-5.385 0-2.65-8.4-4.87-19.573-5.385"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_594">
                    <path fill="#fff" d="M0 0H81V81H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="79"
                height="79"
                fill="none"
                viewBox="0 0 79 79"
              >
                <g clipPath="url(#clip0_250_584)">
                  <path
                    fill="#2775CA"
                    d="M39.5 79C61.39 79 79 61.39 79 39.5S61.39 0 39.5 0 0 17.61 0 39.5 17.61 79 39.5 79z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M50.363 45.754c0-5.76-3.456-7.735-10.369-8.558-4.938-.658-5.925-1.975-5.925-4.28 0-2.304 1.646-3.785 4.938-3.785 2.962 0 4.608.988 5.43 3.457.165.493.66.822 1.153.822h2.633c.659 0 1.152-.493 1.152-1.151v-.165a8.223 8.223 0 00-7.406-6.748v-3.95c0-.658-.494-1.152-1.317-1.317h-2.468c-.659 0-1.152.494-1.317 1.317v3.785c-4.938.659-8.065 3.95-8.065 8.065 0 5.431 3.292 7.57 10.205 8.394 4.608.823 6.09 1.81 6.09 4.444 0 2.633-2.305 4.443-5.432 4.443-4.28 0-5.76-1.81-6.255-4.28-.164-.657-.658-.987-1.151-.987H29.46c-.658 0-1.151.494-1.151 1.153v.164c.658 4.115 3.291 7.077 8.723 7.9v3.95c0 .658.493 1.152 1.316 1.317h2.469c.658 0 1.152-.494 1.317-1.317v-3.95c4.937-.823 8.229-4.28 8.229-8.723z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M31.105 63.035c-12.838-4.608-19.421-18.926-14.648-31.6 2.469-6.912 7.9-12.179 14.648-14.647.658-.33.987-.823.987-1.646v-2.304c0-.659-.329-1.153-.987-1.317-.165 0-.494 0-.659.164C14.811 16.623 6.252 33.246 11.19 48.881c2.962 9.217 10.04 16.294 19.256 19.257.659.329 1.317 0 1.481-.659.165-.164.165-.329.165-.658v-2.304c0-.494-.494-1.152-.987-1.482zm17.446-51.35c-.659-.329-1.317 0-1.482.659-.164.165-.164.329-.164.658v2.304c0 .659.493 1.317.987 1.646C60.73 21.56 67.313 35.88 62.54 48.552c-2.469 6.913-7.9 12.18-14.648 14.648-.658.33-.987.823-.987 1.646v2.304c0 .658.329 1.152.987 1.317.165 0 .494 0 .659-.165 15.635-4.937 24.193-21.56 19.256-37.196-2.963-9.381-10.205-16.458-19.256-19.42z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_584">
                    <path fill="#fff" d="M0 0H79V79H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                fill="none"
                viewBox="0 0 78 78"
              >
                <g clipPath="url(#clip0_250_578)">
                  <path
                    fill="#000"
                    d="M39 78c21.54 0 39-17.46 39-39S60.54 0 39 0 0 17.46 0 39s17.46 39 39 39z"
                  ></path>
                  <path
                    fill="#2DE370"
                    d="M28.08 19.5L11.7 37.042 39 66.3l27.3-29.258L49.92 19.5H28.08z"
                  ></path>
                  <path
                    fill="#000"
                    d="M27.316 30.899c6.458-6.966 16.908-6.966 23.307 0l5.578 6.016-5.578 6.017c-6.458 6.966-16.908 6.966-23.307 0l-5.578-6.017 5.578-6.016z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M39 44.262c-3.758 0-6.81-3.23-6.81-7.157 0-3.926 3.052-7.156 6.81-7.156 3.757 0 6.81 3.23 6.81 7.156 0 3.927-3.053 7.157-6.81 7.157z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#000"
                    d="M39 40.018c-1.585 0-2.877-1.393-2.877-3.103 0-1.71 1.292-3.103 2.877-3.103 1.585 0 2.877 1.393 2.877 3.103-.06 1.71-1.292 3.103-2.877 3.103z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_578">
                    <path fill="#fff" d="M0 0H78V78H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                fill="none"
                viewBox="0 0 81 81"
              >
                <g clipPath="url(#clip0_250_618)">
                  <path
                    fill="#DEE0E0"
                    d="M40.42 0c22.343 0 40.453 18.11 40.453 40.452 0 22.343-18.11 40.437-40.437 40.437C18.094 80.889 0 62.779 0 40.452-.016 18.11 18.094 0 40.42 0z"
                  ></path>
                  <path
                    fill="#8A92B2"
                    d="M40.5 11.14v21.53a.205.205 0 01-.192.192c-.652.27-1.225.557-1.877.827-.844.366-1.783.732-2.626 1.194l-3.087 1.384-2.53 1.114-3.088 1.385c-.843.366-1.687.732-2.626 1.193-.652.27-1.4.653-2.068.923-.096 0-.096.096-.191 0h-.096c.287-.461.557-.827.844-1.289 1.495-2.498 3.087-4.997 4.599-7.48 1.59-2.673 3.278-5.362 4.87-8.036a429.453 429.453 0 014.503-7.384c1.13-1.846 2.243-3.596 3.278-5.458.19 0 .19-.095.286-.095z"
                  ></path>
                  <path
                    fill="#464A75"
                    d="M58.689 40.898c-1.4.923-2.912 1.75-4.313 2.594-4.599 2.673-9.102 5.267-13.685 7.94-.096 0-.096.096-.191.096-.096 0-.096-.095-.096-.095V32.862c0-.096.096-.096.191-.096.382.191.748.366 1.226.557 1.13.557 2.339 1.019 3.469 1.575 1.034.462 1.973.923 3.007 1.29 1.035.461 1.974.922 3.008 1.384.843.366 1.782.732 2.626 1.194.843.366 1.782.732 2.626 1.193.652.27 1.32.652 2.068.923-.032-.08-.032.016.064.016z"
                  ></path>
                  <path
                    fill="#8A92B2"
                    d="M40.5 69.622c-.096 0-.096 0-.191-.096-1.878-2.593-3.66-5.076-5.538-7.67l-5.618-7.75c-1.782-2.498-3.66-4.997-5.442-7.575l-1.4-1.941c0-.096-.096-.096-.096-.191.095 0 .095.095.19.095 2.531 1.48 5.157 2.96 7.687 4.44 2.912 1.75 5.904 3.422 8.816 5.172.462.27 1.035.557 1.496.828.095 0 .095.095.095.19v14.498z"
                  ></path>
                  <path
                    fill="#808081"
                    d="M22.215 40.898c.094 0 .094 0 0 0 0 .078 0 .078 0 0z"
                  ></path>
                  <path
                    fill="#636890"
                    d="M22.31 40.977c0-.079 0-.079 0 0 .94-.461 1.878-.827 2.817-1.288l3.66-1.671c.94-.462 1.878-.828 2.817-1.29 1.305-.652 2.721-1.193 4.026-1.845.94-.366 1.878-.828 2.817-1.194a19.85 19.85 0 001.973-.923c.096 0 .096-.095.191-.095v18.841c-.095.096-.095 0-.19 0-.287-.19-.558-.27-.749-.461l-17.155-9.978c-.111-.096-.206-.096-.206-.096zM58.594 44.4c0 .095 0 .095-.096.19-5.442 7.576-10.885 15.055-16.311 22.63-.557.828-1.13 1.575-1.687 2.403V54.934c1.225-.732 2.434-1.48 3.66-2.133 4.79-2.769 9.564-5.538 14.354-8.323-.016-.08.08-.08.08-.08z"
                  ></path>
                  <path
                    fill="#636890"
                    d="M40.5 32.766V11.22l17.998 29.376c.096.095.191.19.191.27a15.251 15.251 0 00-1.225-.557c-.462-.19-.94-.461-1.4-.652-.287-.096-.557-.27-.94-.366-.46-.191-1.034-.462-1.495-.653-.287-.095-.557-.27-.844-.366l-1.973-.827c-.382-.191-.652-.27-1.034-.462-.462-.19-.94-.461-1.4-.652-.287-.096-.558-.27-.844-.366l-1.974-.828c-.381-.19-.652-.27-1.034-.461-.461-.191-.939-.462-1.4-.653-.287-.19-.653-.27-.94-.461l-1.686-.796z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_618">
                    <path fill="#fff" d="M0 0H81V81H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                fill="none"
                viewBox="0 0 81 81"
              >
                <g clipPath="url(#clip0_250_626)">
                  <path
                    fill="#E84142"
                    d="M40.5 81C62.867 81 81 62.867 81 40.5S62.867 0 40.5 0 0 18.133 0 40.5 18.133 81 40.5 81z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M54.785 41.552c1.403-2.423 3.667-2.423 5.07 0l8.738 15.34c1.403 2.423.255 4.4-2.55 4.4H48.438c-2.774 0-3.922-1.977-2.551-4.4l8.897-15.34zm-16.901-29.53c1.403-2.423 3.635-2.423 5.038 0l1.945 3.508 4.593 8.068a8.382 8.382 0 010 7.303L34.056 57.593a8.099 8.099 0 01-6.315 3.699H14.955c-2.807 0-3.955-1.945-2.552-4.4l25.48-44.87z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_626">
                    <path fill="#fff" d="M0 0H81V81H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="83"
                fill="none"
                viewBox="0 0 83 83"
              >
                <g clipPath="url(#clip0_250_629)">
                  <path
                    fill="#000"
                    d="M41.5 83C64.42 83 83 64.42 83 41.5S64.42 0 41.5 0 0 18.58 0 41.5 18.58 83 41.5 83z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M31.446 32.301H14.162a.892.892 0 01-.88-.88V14.16c0-.477.403-.88.88-.88h17.284c.477 0 .88.403.88.88v17.262c.038.476-.366.88-.88.88zM68.839 32.338H51.554a.892.892 0 01-.88-.88V14.197c0-.477.403-.88.88-.88H68.84c.477 0 .88.403.88.88v17.261c0 .477-.403.88-.88.88zM31.446 69.72H14.162a.893.893 0 01-.88-.88V51.58c0-.477.403-.88.88-.88h17.284c.477 0 .88.403.88.88V68.84c.038.44-.366.88-.88.88zM68.839 69.72H51.554a.892.892 0 01-.88-.88V51.58c0-.477.403-.88.88-.88H68.84c.477 0 .88.403.88.88V68.84c0 .476-.403.88-.88.88z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M50.161 51.102H32.877a.893.893 0 01-.88-.88V32.962c0-.477.403-.88.88-.88H50.16c.477 0 .88.403.88.88v17.261c.038.477-.366.88-.88.88z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_250_629">
                    <path fill="#fff" d="M0 0H83V83H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Carousel.Slide>
            <Carousel.Slide>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                fill="none"
                viewBox="0 0 81 81"
              >
                <mask
                  id="mask0_250_588"
                  style={{ maskType: "luminance" }}
                  width="81"
                  height="81"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#fff" d="M81 0H0v81h81V0z"></path>
                </mask>
                <g mask="url(#mask0_250_588)">
                  <path
                    fill="#13B5EC"
                    d="M40.5 81C62.867 81 81 62.867 81 40.5S62.867 0 40.5 0 0 18.133 0 40.5 18.133 81 40.5 81z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M43.538 32.653l9.112-5.316V37.97l-9.112-5.316zm9.112 22.782L40.5 62.522l-12.15-7.087V43.03L40.5 50.12l12.15-7.088v12.404zm-24.3-28.098l9.112 5.316-9.112 5.316V27.337zm13.669 7.848L51.13 40.5l-9.112 5.316V35.184zm-3.038 10.63L29.87 40.5l9.112-5.316v10.632zm12.15-21.009L40.5 30.881l-10.631-6.075L40.5 18.478l10.631 6.328zm-25.819-1.012v33.16L40.5 65.558l15.188-8.606v-33.16L40.5 15.189l-15.188 8.606z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </Carousel.Slide>
          </Carousel>
        </div>
        <div className="container mx-auto pt-20 pb-20 pl-32 pr-32">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 xl:col-span-4">
              <div className="flex items-center pr-20 pt-14">
                <p className="text-white text-sm">
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-yellow-500 text-16 font-bold">Company</p>
              <ul className="space-y-4 text-sm">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/about">
                    <i className="mdi mdi-chevron-right"></i> Gift Card
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/contact">
                    <i className="mdi mdi-chevron-right"></i> Brand
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/services">
                    <i className="mdi mdi-chevron-right"></i> Customer reviews
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/blog">
                    <i className="mdi mdi-chevron-right"></i> Press
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/team">
                    <i className="mdi mdi-chevron-right"></i> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16 font-bold text-yellow-500">
                Payment Option
              </p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-categories">
                    <i className="mdi mdi-chevron-right"></i> Buy with Credit
                    Cards
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-list">
                    <i className="mdi mdi-chevron-right"></i> Buy with PayPal
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/job-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Venmo
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/bookmark-jobs">
                    <i className="mdi mdi-chevron-right"></i> Buy with Skrill
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/bookmark-jobs">
                    <i className="mdi mdi-chevron-right"></i> Buy with Click To
                    Pay
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/bookmark-jobs">
                    <i className="mdi mdi-chevron-right"></i> Buy with Google
                    Pay
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/bookmark-jobs">
                    <i className="mdi mdi-chevron-right"></i> Buy with Apple Pay
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-16 font-bold text-yellow-500">
                Buy with Cryptocurrency
              </p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-list">
                    <i className="mdi mdi-chevron-right"></i> Buy with
                    Cryptocurrency
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-grid">
                    <i className="mdi mdi-chevron-right"></i> Buy with Bitcoin
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Bitcoin
                    Cash
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Litecoin
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Ethereum
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Dogecoin
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/candidate-details">
                    <i className="mdi mdi-chevron-right"></i> Buy with Shiba Inu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16 font-bold text-yellow-500">
                Support
              </p>
              <ul className="space-y-4">
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/contact">
                    <i className="mdi mdi-chevron-right"></i> FAQ
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/faqs">
                    <i className="mdi mdi-chevron-right"></i> How It Works
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/privacy-policy">
                    <i className="mdi mdi-chevron-right"></i> Terms Of Use
                  </Link>
                </li>
                <li className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                  <Link href="/privacy-policy">
                    <i className="mdi mdi-chevron-right"></i> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 footer flex">
        <div className="flex pl-10 pt-7">
          <a href="https://example.com" className="pl-10 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <circle
                cx="14.962"
                cy="14.962"
                r="14.212"
                stroke="#fff"
                strokeWidth="0.5"
              ></circle>
              <path
                fill="#fff"
                d="M18.712 7.732h-1.948c-.547 0-1.04.088-1.48.264-.449.166-.83.41-1.142.733a3.242 3.242 0 00-.718 1.171c-.166.45-.25.957-.25 1.524v1.699h-1.962a.298.298 0 00-.308.308v2.46a.298.298 0 00.308.308h1.963v6.226c0 .088.03.16.088.22a.281.281 0 00.205.087h2.563c.078 0 .15-.029.213-.087a.287.287 0 00.095-.22v-6.226h2.285c.078 0 .149-.03.212-.088a.286.286 0 00.096-.22v-2.46c0-.04-.01-.079-.03-.117a.39.39 0 00-.073-.103.176.176 0 00-.088-.066.333.333 0 00-.117-.022h-2.285v-1.435c0-.352.063-.616.19-.792.127-.175.415-.263.865-.263h1.318a.298.298 0 00.308-.308V8.04a.298.298 0 00-.308-.308z"
              ></path>
            </svg>
          </a>
          <a href="https://example.com" className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <circle
                cx="15.403"
                cy="14.962"
                r="14.212"
                stroke="#fff"
                strokeWidth="0.5"
              ></circle>
              <path
                fill="#fff"
                d="M22.902 9.98a5.6 5.6 0 01-.857.315c-.297.083-.603.14-.915.169.322-.186.6-.425.835-.718.234-.293.41-.62.527-.981a6.721 6.721 0 01-.945.454 5.945 5.945 0 01-1.018.293 3.262 3.262 0 00-1.003-.703 2.95 2.95 0 00-1.238-.264c-.43 0-.83.078-1.201.234a3.227 3.227 0 00-.974.667c-.278.278-.5.603-.667.974a3.063 3.063 0 00-.212 1.553c.014.117.032.234.051.351a9.566 9.566 0 01-1.845-.293 8.725 8.725 0 01-3.223-1.655 8.736 8.736 0 01-1.275-1.274 3.615 3.615 0 00-.3.74c-.073.258-.11.53-.11.812 0 .537.125 1.028.374 1.473.249.444.578.808.989 1.09a3.083 3.083 0 01-1.392-.395v.044c0 .742.237 1.394.71 1.956a3.074 3.074 0 001.766 1.062c-.137.03-.271.053-.403.073a2.84 2.84 0 01-.99-.03 3.039 3.039 0 001.078 1.524c.522.4 1.12.606 1.794.615a6.045 6.045 0 01-1.765.975c-.65.229-1.336.344-2.058.344-.127 0-.252-.003-.374-.008a2.853 2.853 0 01-.359-.036c.342.224.699.42 1.07.586.37.175.754.322 1.15.44a8.37 8.37 0 001.223.263c.42.068.845.102 1.274.102 1.416 0 2.666-.268 3.75-.805 1.094-.528 2.012-1.211 2.754-2.051a8.808 8.808 0 001.685-2.813c.38-1.044.57-2.075.57-3.09l-.014-.396a5.944 5.944 0 001.538-1.597z"
              ></path>
            </svg>
          </a>
          <a href="https://example.com" className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <circle
                cx="15.403"
                cy="14.962"
                r="14.212"
                stroke="#fff"
                strokeWidth="0.5"
              ></circle>
              <path
                fill="#fff"
                d="M22.639 11.417c-.088-.4-.281-.735-.579-1.003a1.853 1.853 0 00-1.033-.476 34.106 34.106 0 00-1.406-.118 45.18 45.18 0 00-2.812-.088H13.996a45.048 45.048 0 00-2.812.088c-.47.03-.933.069-1.392.117-.4.05-.75.208-1.047.477-.298.268-.491.603-.579 1.003a9.832 9.832 0 00-.227 1.758 44.371 44.371 0 00-.037 1.787c0 .586.01 1.182.03 1.787.02.606.097 1.191.234 1.758.088.4.28.735.579 1.003.297.269.647.423 1.047.462.459.058.923.102 1.392.131.468.03.937.05 1.406.06.469.009.937.014 1.406.014a67.965 67.965 0 002.813 0c.468 0 .937-.005 1.406-.015.469-.01.937-.03 1.406-.058.469-.03.933-.074 1.392-.132.4-.04.75-.193 1.047-.462.298-.268.49-.603.579-1.003a9.836 9.836 0 00.227-1.758c.024-.605.036-1.201.036-1.787 0-.586-.01-1.182-.029-1.787a8.661 8.661 0 00-.234-1.758zm-9.17 5.874v-1.245-1.238-1.238-1.245c.4.205.796.415 1.186.63.4.205.799.41 1.194.615l1.194.615c.39.215.786.425 1.187.63-.391.206-.787.41-1.187.616l-1.194.615c-.395.205-.793.415-1.194.63-.39.205-.786.41-1.186.615z"
              ></path>
            </svg>
          </a>
          <a href="https://example.com" className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <circle
                cx="15.403"
                cy="14.962"
                r="14.212"
                stroke="#fff"
                strokeWidth="0.5"
              ></circle>
              <path
                fill="#fff"
                d="M22.858 12.142c-.02-.4-.058-.745-.117-1.033a4.225 4.225 0 00-.234-.784 4.095 4.095 0 00-.36-.718 3.2 3.2 0 00-.504-.615 3.81 3.81 0 00-1.333-.864 5.778 5.778 0 00-.784-.227 6.293 6.293 0 00-1.033-.125c-.4-.02-.762-.031-1.084-.036-.322-.005-.991-.008-2.007-.008-1.015 0-1.684.003-2.006.008a32.57 32.57 0 00-1.085.036c-.4.02-.744.059-1.032.118-.288.058-.55.136-.784.234a4.107 4.107 0 00-.718.359 3.2 3.2 0 00-.615.505c-.195.186-.366.39-.513.615a3.263 3.263 0 00-.351.718 4.228 4.228 0 00-.235.784 6.962 6.962 0 00-.117 1.033c-.02.4-.031.761-.036 1.084-.005.322-.008.99-.008 2.006 0 1.016.003 1.685.008 2.007.005.322.017.684.036 1.084.02.4.059.745.117 1.033.06.288.137.55.235.784.088.254.205.493.351.717.147.225.318.43.513.616a3.433 3.433 0 001.318.864c.245.098.51.176.799.234.288.059.632.098 1.033.117.4.02.759.032 1.076.037.318.005.989.007 2.014.007 1.016 0 1.685-.002 2.007-.007.322-.005.684-.017 1.084-.037.4-.02.745-.058 1.033-.117.288-.058.55-.136.784-.234a3.786 3.786 0 001.333-.864c.38-.381.668-.825.864-1.333.088-.235.163-.496.227-.784.063-.288.105-.632.124-1.033.01-.4.02-.762.03-1.084.01-.322.014-.991.014-2.007 0-1.015-.002-1.684-.007-2.006a32.703 32.703 0 00-.037-1.084zm-1.347 6.123c-.02.37-.056.664-.11.879a4.579 4.579 0 01-.154.512 2.39 2.39 0 01-.564.864c-.249.245-.535.43-.857.557a3.122 3.122 0 01-.527.161 5.374 5.374 0 01-.864.103c-.4.02-.755.032-1.062.036-.308.005-.965.008-1.97.008-.997 0-1.651-.003-1.963-.008a32.263 32.263 0 01-1.07-.036 5.374 5.374 0 01-.864-.103 3.122 3.122 0 01-.527-.16 2.46 2.46 0 01-.865-.558 2.582 2.582 0 01-.322-.395 2.103 2.103 0 01-.234-.469 4.574 4.574 0 01-.154-.512 4.248 4.248 0 01-.095-.88c-.02-.39-.032-.741-.037-1.054-.005-.313-.007-.972-.007-1.978 0-.996.002-1.65.007-1.962.005-.313.017-.665.037-1.055.01-.371.041-.664.095-.88.054-.214.105-.385.154-.512a2.19 2.19 0 01.571-.864c.117-.127.249-.237.395-.33.147-.092.298-.168.455-.227.136-.058.312-.112.527-.16.215-.05.503-.084.864-.103.4-.02.757-.032 1.07-.037.312-.005.966-.007 1.962-.007 1.006 0 1.665.002 1.978.007.312.005.664.017 1.055.037.37.02.664.053.879.102.214.049.385.103.512.161.166.059.322.135.469.227.146.093.278.203.395.33.127.117.237.249.33.396.093.146.169.302.227.468.049.127.1.298.154.513.054.215.09.508.11.879.02.39.032.742.036 1.055.005.312.008.966.008 1.962 0 1.006-.003 1.666-.008 1.978-.005.313-.017.664-.036 1.055zm-6.109-6.885a3.62 3.62 0 00-1.494.307 3.775 3.775 0 00-2.05 2.051 3.686 3.686 0 00-.308 1.494c0 .538.102 1.036.307 1.495a3.775 3.775 0 002.051 2.05 3.62 3.62 0 001.494.308c.528 0 1.026-.103 1.495-.308a3.775 3.775 0 002.05-2.05c.205-.46.308-.957.308-1.495 0-.527-.103-1.025-.308-1.494a3.775 3.775 0 00-2.05-2.05 3.687 3.687 0 00-1.495-.308zm0 6.357a2.414 2.414 0 01-1.772-.732 2.414 2.414 0 01-.732-1.773c0-.693.244-1.284.732-1.772a2.414 2.414 0 011.772-.733c.694 0 1.284.245 1.773.733.488.488.732 1.08.732 1.772 0 .694-.244 1.285-.732 1.773a2.414 2.414 0 01-1.773.732zm4.908-6.504a.86.86 0 01-.264.63.877.877 0 01-.645.264.86.86 0 01-.63-.264.86.86 0 01-.263-.63c0-.254.088-.468.264-.644a.86.86 0 01.63-.264c.253 0 .468.088.644.264.176.176.264.39.264.644z"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-yellow-500 pl-20 mt-8">
          © 2023 companyname. All Rights Reserved.
        </p>
        <div className="ml-auto flex mr-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="41"
              fill="none"
              viewBox="0 0 44 41"
              className="ml-3"
            >
              <path
                fill="#00B67A"
                d="M43.055 15.7H26.797L21.776.073 16.738 15.7.48 15.684l13.167 9.668-5.038 15.61 13.167-9.651 13.15 9.651-5.021-15.61 13.15-9.652z"
              ></path>
              <path
                fill="#005128"
                d="M31.034 28.886l-1.13-3.534-8.129 5.959 9.26-2.425z"
              ></path>
            </svg>
            <p className="text-white text-sm">Trustpilot</p>
          </div>
          <div
            className="bg-white ml-3"
            style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          >
            <img
              src="/images/footer/BBB-icon.svg"
              alt="norton_seal logo"
              width={40}
              className="ml-4"
            />
          </div>
          <img
            src="/images/footer/norton_seal.png"
            alt="norton_seal logo"
            className="ml-3"
          />
          <img
            src="/images/footer/TRUSTe-icon.svg"
            alt="TRUSTe logo"
            className="ml-3 mb-4"
          />
          <img
            src="/images/footer/pci-icon.svg"
            alt="pci logo"
            className="ml-3"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
