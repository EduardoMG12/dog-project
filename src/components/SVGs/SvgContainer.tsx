import React, { FC } from "react";

interface ISvgContainer {
  pawnDog?: string;
  fillTenisBall?:string;
  fillBone?:string
  fillShit?:string
  fillPrimaryDogFood?:string
  fillSecondaryDogFood?:string
  fillTertiaryDogFood?:string
  fillBottomPotFoodDog?:string
  fillTopPotFoodDog?:string
  fillRoofDogHouse?:string
  fillDogLeash?:string
  fillEmblemDogLeash?:string
}

const SvgContainer: FC<ISvgContainer> = ({ pawnDog , fillTenisBall, fillBone, fillShit, fillPrimaryDogFood, fillSecondaryDogFood, fillTertiaryDogFood, fillBottomPotFoodDog, fillTopPotFoodDog, fillRoofDogHouse, fillDogLeash, fillEmblemDogLeash}) => {
  return (
    <svg
      width="579"
      height="466"
      viewBox="0 0 579 466"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M227.041 32.7208C225.823 36.97 229.132 43.1128 233.881 45.3098C237.166 46.8242 241.221 45.1616 241.603 42.2421C241.831 39.1883 238.353 33.1148 235.302 31.2083C232.439 29.5207 227.75 30.358 227.041 32.7208Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M244.977 26.6488C243.552 30.3912 246.121 39.304 248.876 40.2466C255.999 42.4569 258.81 28.3773 252.372 23.0245C250.135 21.1788 246.353 23.0256 244.977 26.6488Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M220.237 49.8189C221.23 56.8126 229.382 62.2523 233.93 58.9069C236.575 56.9343 235.642 52.975 231.641 48.9913C228.154 45.7832 225.553 44.9749 222.09 46.3951C220.4 47.0879 220.051 47.9216 220.237 49.8189Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M261.163 31.9514C258.336 36.367 259.471 44.1902 263.248 45.7004C265.546 46.7317 266.222 46.4546 268.739 43.4489C271.962 39.7588 271.137 30.5258 267.444 28.9809C265.419 28.1337 262.785 29.4111 261.163 31.9514Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M241.484 48.2114C237.295 53.8765 235.606 64.4368 237.931 70.5881C239.301 74.1706 243.985 76.6903 246.312 75.1443C247.003 74.6636 248.662 74.378 249.968 74.4345C252.088 74.5518 252.173 74.5172 250.252 73.9234C248.246 73.3643 248.346 73.1261 250.947 70.0857C252.962 67.7794 254.647 66.595 256.644 66.1708C259.928 65.5151 264.495 66.3064 264.285 67.4781C264.17 67.9199 265.914 67.5996 268.026 66.7337C270.172 65.9522 271.42 65.1445 270.774 65.0145C269.925 64.8692 269.936 64.174 270.619 62.71C273.004 58.1795 265.941 49.136 257.126 45.4483C250.099 42.508 244.953 43.4342 241.484 48.2114Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M553.602 314.767C549.434 313.296 543.103 316.23 540.626 320.839C538.917 324.028 540.333 328.175 543.225 328.731C546.259 329.141 552.53 326.035 554.616 323.103C556.473 320.347 555.918 315.616 553.602 314.767Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M558.587 333.035C554.937 331.387 545.886 333.417 544.78 336.111C542.147 343.088 556.032 346.739 561.762 340.633C563.738 338.511 562.122 334.625 558.587 333.035Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M536.943 306.95C529.902 307.521 523.983 315.332 527.05 320.073C528.86 322.831 532.869 322.138 537.085 318.382C540.496 315.094 541.459 312.546 540.249 309.004C539.659 307.276 538.848 306.878 536.943 306.95Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M552.324 348.873C548.086 345.786 540.208 346.45 538.474 350.13C537.307 352.362 537.543 353.053 540.393 355.746C543.883 359.185 553.149 358.914 554.912 355.321C555.879 353.351 554.762 350.645 552.324 348.873Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M537.273 328.255C531.87 323.733 521.43 321.414 515.15 323.365C511.492 324.519 508.696 329.043 510.099 331.458C510.538 332.177 510.723 333.85 510.588 335.15C510.344 337.26 510.374 337.346 511.082 335.464C511.76 333.496 511.992 333.61 514.871 336.389C517.052 338.538 518.133 340.291 518.437 342.31C518.894 345.627 517.831 350.139 516.674 349.859C516.24 349.718 516.455 351.477 517.192 353.637C517.844 355.827 518.575 357.121 518.744 356.484C518.94 355.645 519.633 355.698 521.053 356.467C525.433 359.12 534.883 352.612 539.093 344.034C542.45 337.196 541.834 332.003 537.273 328.255Z"
        fill={pawnDog ?? "black"}
        fill-opacity="0.76"
      />
      <path
        d="M167.208 375.445C167.575 377.792 168.465 379.478 169.412 380.036C170.341 380.505 171.265 382.371 171.705 384.611C172.232 387.298 172.624 387.873 173.058 386.764C173.997 384.44 173.06 381.088 170.989 379.541C170.007 378.803 168.671 376.739 167.944 374.928L166.576 371.754L167.208 375.445Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M160.901 381.241C161.378 383.195 161.777 386.652 161.858 388.962C162.008 392.096 162.469 393.494 163.808 394.627C165.486 396.066 165.468 395.976 164.027 393.375C162.781 391.293 162.517 389.949 163.007 388.178C163.644 385.262 162.784 380.407 161.268 378.843C160.448 377.981 160.391 378.643 160.901 381.241Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M179.755 381.542C180.017 383.351 180.274 386.557 180.392 388.581C180.454 391.267 181.022 392.737 182.254 393.798C183.932 395.236 183.914 395.147 182.508 392.725C181.512 390.966 181.195 389.354 181.578 387.511C182.09 384.433 181.406 380.473 180.122 379.144C179.533 378.515 179.351 379.481 179.755 381.542Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M169.18 394.503C167.976 395.949 166.731 398.613 166.402 400.259C165.985 401.922 164.991 404.443 164.055 405.837C163.119 407.23 162.487 408.75 162.574 409.198C162.68 409.735 161.958 411.272 160.95 412.773C159.942 414.273 159.273 416.079 159.431 416.886C159.572 417.602 159.068 418.353 158.351 418.493C155.574 419.038 153.354 423.847 154.075 427.52C154.744 430.925 155.065 431.141 159.376 432.248C165.834 433.865 175.004 433.182 188.534 430.061C196.975 428.032 201.08 426.668 203.718 424.941C207.254 422.572 207.254 422.572 206.032 418.718C204.74 414.506 202.332 412.187 199.038 411.996C197.534 411.919 196.534 411.092 195.824 409.371C195.184 408.007 194.007 406.75 193.059 406.657C192.11 406.564 190.557 405.287 189.72 403.87C188.669 402.308 187.062 401.228 185.219 400.845C183.59 400.607 182.178 400.047 182.107 399.688C182.037 399.33 180.196 398.482 177.942 397.901C173.488 396.542 172.583 394.3 176.081 392.684C177.964 391.849 178.018 391.652 176.479 391.396C173.401 390.883 171.411 391.646 169.18 394.503Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M538.095 108.547C537.393 110.816 537.449 112.722 538.054 113.64C538.682 114.47 538.691 116.552 538.101 118.757C537.392 121.402 537.491 122.091 538.368 121.286C540.234 119.612 540.868 116.19 539.688 113.889C539.131 112.795 538.84 110.354 538.983 108.407L539.152 104.955L538.095 108.547Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M529.882 110.978C529.45 112.941 528.287 116.222 527.344 118.332C526.099 121.212 525.898 122.67 526.602 124.277C527.475 126.307 527.499 126.219 527.35 123.249C527.147 120.831 527.501 119.508 528.72 118.134C530.576 115.795 531.94 111.057 531.266 108.986C530.909 107.85 530.567 108.42 529.882 110.978Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M546.68 119.543C546.119 121.283 544.939 124.275 544.155 126.145C543.029 128.584 542.892 130.154 543.531 131.649C544.405 133.679 544.428 133.59 544.232 130.797C544.111 128.779 544.536 127.192 545.69 125.705C547.505 123.167 548.633 119.31 548.064 117.551C547.813 116.727 547.223 117.515 546.68 119.543Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M531.481 126.529C529.763 127.298 527.473 129.142 526.454 130.476C525.346 131.786 523.345 133.612 521.891 134.452C520.437 135.291 519.201 136.377 519.083 136.818C518.941 137.347 517.617 138.41 516.051 139.314C514.486 140.218 513.09 141.545 512.878 142.339C512.689 143.045 511.906 143.497 511.2 143.307C508.467 142.575 504.358 145.916 503.389 149.532C502.491 152.883 502.684 153.219 506.068 156.11C511.156 160.404 519.692 163.825 533.214 166.976C541.687 168.868 545.973 169.449 549.103 169.059C553.32 168.488 553.32 168.488 553.919 164.489C554.612 160.138 553.469 156.996 550.595 155.376C549.279 154.645 548.745 153.462 548.865 151.604C548.89 150.098 548.386 148.451 547.575 147.95C546.764 147.449 545.931 145.619 545.804 143.978C545.547 142.114 544.579 140.436 543.093 139.282C541.735 138.351 540.713 137.226 540.808 136.874C540.902 136.521 539.622 134.949 537.854 133.436C534.452 130.256 534.626 127.845 538.478 127.932C540.536 128.011 540.671 127.858 539.402 126.951C536.864 125.136 534.741 124.945 531.481 126.529Z"
        fill={fillShit ??"#88280A"}
        fill-opacity="0.43"
      />
      <path
        d="M38.5966 371.962C36.0985 372.796 34.1624 377.473 35.4443 379.715C35.9571 380.611 35.8372 381.052 35.0365 381.212C32.8747 381.854 32.1159 387.419 33.9103 389.516C35.2081 391.005 35.1762 391.47 34.0393 391.823C33.1025 392.135 33.6472 392.567 35.9375 393.191C37.7874 393.695 38.9165 393.719 38.3958 393.198C37.835 392.478 38.3553 391.957 40.1408 391.308C41.59 390.851 43.0309 389.729 43.2948 388.76C43.7507 387.087 44.3913 387.167 55.6669 390.238C67.4711 393.452 67.6472 393.5 67.8643 395.83C67.9928 397.096 68.6661 398.793 69.403 399.561C70.5084 400.714 70.5246 401.002 69.2755 401.419C68.2507 401.708 68.8834 402.164 71.2619 402.812C73.1118 403.316 74.2409 403.339 73.6722 402.995C72.9514 402.515 73.5436 401.73 75.6012 400.776C77.955 399.43 78.5472 398.645 78.7306 396.235C78.81 394.553 79.0897 392.832 79.2097 392.391C81.7854 384.671 81.7854 384.671 79.6787 382.678C77.9004 380.869 77.3719 380.725 74.9458 381.294C73.4325 381.639 71.6793 382.865 71.0791 384.026C69.9508 386.085 69.9508 386.085 57.8104 383.062L45.67 380.039L46.2698 377.837C46.8936 375.547 44.7944 372.136 42.3279 371.465C41.5351 371.249 39.8696 371.457 38.5966 371.962Z"
        fill= {fillBone ?? "white"}
        fill-opacity="0.9"
      />
      <path
        d="M322.257 300.93C316.598 300.946 312.116 302.68 308.895 305.869C302.37 312.509 302.988 322.289 310.418 329.641L312.525 331.75L308.424 331.688C306.229 331.659 302.86 332.31 301.052 333.171C291.696 337.566 298.476 348.161 313.579 352.785C321.175 355.112 326.664 355.329 331.058 353.568C337.807 350.736 336.87 343.155 329.095 338.088L325.834 335.994L330.556 335.008C336.975 333.51 340.35 331.04 342.508 326.074C344.75 320.848 344.831 318.19 343.129 313.91C340.061 306.703 330.803 300.876 322.257 300.93ZM336.303 308.571C341.041 313.245 342.553 318.422 340.718 323.874C337.438 333.561 322.171 336.359 313.266 328.824C308.156 324.416 305.909 318.237 307.546 313.105C310.985 302.319 327.236 299.739 336.303 308.571ZM329.39 340.769C339.959 349.698 330.108 355.948 313.64 350.792C306.507 348.518 301.377 344.774 299.442 340.323C296.409 333.607 309.314 331.301 321.653 336.482C324.44 337.658 327.931 339.633 329.39 340.769Z"
        fill={fillTertiaryDogFood ?? "#E6E6E6"}
        fill-opacity="0.58"
      />
      <path
        d="M322.654 304.794C315.436 304.888 311.144 307.832 309.258 313.746C306.983 320.879 311.404 327.751 320.102 330.525C325.756 332.328 330.083 331.982 334.265 329.387C340.765 325.231 342.023 317.678 337.005 311.478C333.835 307.593 327.589 304.643 322.654 304.794Z"
        fill={fillSecondaryDogFood ?? "#E5E5E5"}
        fill-opacity="0.74"
      />
      <path
        d="M287.24 367.769L289.128 370.862C294.758 379.653 312.503 385.311 322.182 381.402L325.513 379.973L333.418 355.182L327.165 356.159C321.43 357.014 320.129 356.886 312.475 354.446C304.82 352.005 303.772 351.383 299.706 347.307L295.2 342.804L287.24 367.769ZM306.393 359.693C307.025 361.62 307.258 361.79 308.603 360.877C309.434 360.376 310.759 360.127 311.629 360.405C312.498 360.682 313.435 361.651 313.822 362.541C314.39 364.064 314.679 364.061 316.309 362.855C318.109 361.417 321.696 361.89 321.197 363.456C321.058 363.891 320.137 364.076 319.18 363.771C318.049 363.41 317.246 363.825 316.913 364.869C316.275 366.869 317.306 368.444 318.505 367.389C318.905 367.037 318.87 366.547 318.435 366.408C317.913 366.242 317.616 365.668 317.755 365.233C317.922 364.711 318.815 364.613 319.859 364.946C321.164 365.362 321.46 365.935 320.728 367.331C320.082 368.754 319.105 369.113 317.223 368.705C315.776 368.435 314.408 367.616 314.195 366.781C313.863 365.717 313.575 365.721 312.431 366.602C310.548 368.301 307.879 367.354 307.094 364.708C306.462 362.782 306.316 362.64 305.406 363.691C304.753 364.537 303.685 364.58 302.175 363.906C300.17 362.98 299.961 362.434 300.616 359.48C301.298 356.44 301.555 356.234 303.555 356.872C304.773 357.26 306.002 358.515 306.393 359.693ZM299.153 364.668C299.853 365.178 300.24 366.068 300.101 366.503C299.935 367.025 299.27 367.005 298.685 366.435C298.073 365.952 297.408 365.932 297.27 366.367C297.103 366.889 297.601 367.431 298.297 367.653C298.993 367.875 299.491 368.417 299.324 368.939C299.186 369.374 298.438 369.615 297.742 369.393C297.046 369.171 296.326 369.324 296.16 369.846C296.021 370.281 295.535 370.605 295.013 370.439C294.578 370.3 294.642 368.596 295.252 366.682C296.362 363.203 296.936 362.907 299.153 364.668ZM321.368 374.339C321.165 376.478 317.612 378.604 315.438 377.91C314.22 377.522 314.094 376.715 315.009 373.844C316.091 370.452 316.206 370.393 318.819 371.514C320.677 372.298 321.527 373.24 321.368 374.339ZM306.557 369.999C306.868 371.728 307.042 371.783 308.672 370.578C311.932 368.168 315.955 373.284 312.841 375.836C310.843 377.595 308.411 377.107 307.052 374.757C306.048 373.095 305.875 373.04 305.051 374.119C303.943 375.491 301.191 374.805 300.184 372.854C299.414 371.363 300.179 368.061 301.441 367.41C302.96 366.553 306.158 368.243 306.557 369.999Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.67"
      />
      <path
        d="M302.098 360.24C301.793 361.197 302.152 362.174 302.848 362.396C303.544 362.618 304.403 362.029 304.708 361.073C305.013 360.116 304.654 359.139 303.958 358.917C303.262 358.695 302.403 359.284 302.098 360.24Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.43"
      />
      <path
        d="M309.036 363.124C308.802 365.061 311.213 366.214 311.823 364.3C312.045 363.604 311.571 362.686 310.757 362.235C309.622 361.586 309.163 361.823 309.036 363.124Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.43"
      />
      <path
        d="M316.694 374.573C316.028 376.661 318.112 377.038 319.24 375.002C319.691 374.187 319.451 373.44 318.668 373.19C317.798 372.913 317.026 373.529 316.694 374.573Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.43"
      />
      <path
        d="M301.656 370.641C301.351 371.598 301.71 372.575 302.406 372.796C303.102 373.018 303.961 372.43 304.266 371.473C304.571 370.516 304.212 369.539 303.516 369.317C302.82 369.095 301.961 369.684 301.656 370.641Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.43"
      />
      <path
        d="M309.212 372.188C308.128 373.184 309.254 375.363 310.694 375.056C311.326 374.874 312.039 374.143 312.261 373.447C312.704 372.055 310.526 371.073 309.212 372.188Z"
        fill={fillPrimaryDogFood ?? "#7D5628"}
        fill-opacity="0.43"
      />
      <path
        d="M22.2767 202.549C9.76872 204.557 1.82568 209.67 1.82568 215.605C1.82568 219.987 4.47336 223 11.2295 226.287C20.3594 230.76 36.1542 231.582 47.2927 228.295C60.1659 224.461 65.0048 214.6 57.0618 208.483C50.6708 203.644 33.7804 200.723 22.2767 202.549Z"
        fill={fillTopPotFoodDog ?? "white"}
        fill-opacity="0.43"
      />
      <path
        d="M0 231.126C0 238.886 0.365197 242.903 1.09559 243.36C1.73469 243.725 1.82599 243.634 1.46079 242.994C0.456496 241.351 1.73469 241.716 4.29107 243.725C10.4994 248.655 26.3855 251.577 38.3457 250.025C46.7452 249.02 50.2146 247.925 56.423 244.455C59.162 242.994 61.0792 242.264 60.714 242.721C60.4401 243.268 60.6227 243.725 61.0792 243.725C61.7183 243.725 62.0835 239.799 62.0835 232.495V221.174L58.5229 224.552C53.5014 229.391 45.6497 231.947 34.2372 232.495C28.7593 232.769 23.0074 232.586 19.9032 231.947C12.508 230.395 3.83457 225.83 1.73469 222.361L0 219.531V231.126ZM24.6508 237.334C25.4725 238.886 26.5681 239.16 31.407 239.16C36.4284 239.16 37.2501 238.886 37.7066 237.334C38.3457 234.96 42.6368 234.778 43.1846 237.06C44.828 243.542 41.6325 248.746 38.3457 244.82C36.9762 243.177 35.7893 242.812 31.1331 242.812C26.5681 242.812 25.4725 243.086 24.6508 244.638C23.5552 246.646 20.5423 247.103 19.4468 245.277C18.4425 243.725 18.4425 238.064 19.4468 236.604C20.7249 234.869 23.5552 235.325 24.6508 237.334Z"
        fill={fillBottomPotFoodDog ?? "#FF0101"}
        fill-opacity="0.43"
      />
      <path
        d="M455.277 12.5487C442.769 14.5573 434.826 19.67 434.826 25.6045C434.826 29.9869 437.473 32.9997 444.23 36.2865C453.359 40.7602 469.154 41.5819 480.293 38.2951C493.166 34.4605 498.005 24.6002 490.062 18.4831C483.671 13.6443 466.78 10.7227 455.277 12.5487Z"
        fill={fillTopPotFoodDog ?? "white"}
        fill-opacity="0.43"
      />
      <path
        d="M433 41.1255C433 48.8859 433.365 52.9031 434.096 53.3596C434.735 53.7248 434.826 53.6335 434.461 52.9944C433.456 51.351 434.735 51.7162 437.291 53.7248C443.499 58.6549 459.385 61.5765 471.346 60.0244C479.745 59.0201 483.215 57.9245 489.423 54.4552C492.162 52.9944 494.079 52.264 493.714 52.7205C493.44 53.2683 493.623 53.7248 494.079 53.7248C494.718 53.7248 495.084 49.7989 495.084 42.495V31.1738L491.523 34.5519C486.501 39.3908 478.65 41.9472 467.237 42.495C461.759 42.7689 456.007 42.5863 452.903 41.9472C445.508 40.3951 436.835 35.8301 434.735 32.3607L433 29.5305V41.1255ZM457.651 47.3338C458.473 48.8859 459.568 49.1598 464.407 49.1598C469.428 49.1598 470.25 48.8859 470.707 47.3338C471.346 44.96 475.637 44.7774 476.185 47.0599C477.828 53.5422 474.632 58.7462 471.346 54.8204C469.976 53.177 468.789 52.8118 464.133 52.8118C459.568 52.8118 458.473 53.0857 457.651 54.6378C456.555 56.6463 453.542 57.1028 452.447 55.2769C451.442 53.7248 451.442 48.0642 452.447 46.6034C453.725 44.8687 456.555 45.3252 457.651 47.3338Z"
        fill={fillBottomPotFoodDog ?? "#FF0101"}
        fill-opacity="0.43"
      />
      <path
        d="M51.954 18.2837C36.8648 30.4314 36.2552 31.1111 37.6656 32.793C38.985 34.4669 39.4637 34.234 47.2557 27.9527C51.6998 24.3103 58.1146 19.0996 61.4625 16.4608L67.5805 11.4989L79.3932 25.184C90.1944 37.8637 91.2139 38.7781 92.6979 37.5336C94.182 36.2892 93.3763 35.027 81.5126 20.8792C74.4607 12.4697 68.4714 5.52823 68.1985 5.50427C67.9177 5.57126 60.6364 11.2558 51.954 18.2837Z"
        fill={fillRoofDogHouse ?? "#FF0F0F"}
        fill-opacity="0.54"
      />
      <path
        d="M55.5402 23.3644L44.5743 32.3915L43.025 50.0356C41.1083 71.8635 41.1434 72.5081 42.0578 71.4886C43.178 70.2122 47.1957 70.3817 47.9025 71.7269C48.2104 72.3955 48.8137 69.6989 49.1651 65.6972C50.2193 53.6918 53.0552 48.5335 59.7522 46.372C65.7885 44.4275 72.0862 46.8135 75.3599 52.325C76.7974 54.7425 77.0605 56.9652 76.7694 64.455C76.4335 73.4989 76.4255 73.5899 78.6993 73.7895C79.9725 73.9013 81.4867 74.4009 82.0914 74.8206C82.8541 75.5291 83.4863 71.4604 84.8759 55.6352L86.6249 35.7173L77.36 25.3721C72.2673 19.7008 67.7314 14.9949 67.2927 14.7731C66.8539 14.5513 61.5673 18.3946 55.5402 23.3644ZM61.1351 33.754C62.5215 35.7087 68.9869 36.1848 71.2385 34.5495C73.5969 32.7403 74.8653 33.9515 74.5299 37.7714C74.2185 41.3184 71.801 42.7558 70.2646 40.4213C69.1431 38.5814 62.2309 37.9745 60.458 39.3769C59.065 40.6293 56.8662 40.6195 56.8871 39.3383C56.8174 32.825 58.7851 30.2482 61.1351 33.754Z"
        fill={fillTopPotFoodDog ?? "white"}
        fill-opacity="0.43"
      />
      <path
        d="M415.954 404.284C400.864 416.431 400.255 417.111 401.665 418.793C402.985 420.467 403.463 420.234 411.255 413.953C415.699 410.31 422.114 405.1 425.462 402.461L431.58 397.499L443.393 411.184C454.194 423.864 455.213 424.778 456.697 423.534C458.181 422.289 457.376 421.027 445.512 406.879C438.46 398.47 432.471 391.528 432.198 391.504C431.917 391.571 424.636 397.256 415.954 404.284Z"
        fill={fillRoofDogHouse ?? "#FF0F0F"}
        fill-opacity="0.54"
      />
      <path
        d="M419.54 409.364L408.574 418.391L407.025 436.036C405.108 457.863 405.143 458.508 406.057 457.489C407.177 456.212 411.195 456.382 411.902 457.727C412.21 458.395 412.813 455.699 413.165 451.697C414.219 439.692 417.055 434.533 423.752 432.372C429.788 430.427 436.086 432.813 439.359 438.325C440.797 440.743 441.06 442.965 440.769 450.455C440.433 459.499 440.425 459.59 442.699 459.79C443.972 459.901 445.486 460.401 446.091 460.821C446.854 461.529 447.486 457.46 448.875 441.635L450.624 421.717L441.36 411.372C436.267 405.701 431.731 400.995 431.292 400.773C430.853 400.551 425.567 404.395 419.54 409.364ZM425.135 419.754C426.521 421.709 432.986 422.185 435.238 420.55C437.596 418.74 438.865 419.951 438.529 423.771C438.218 427.318 435.8 428.756 434.264 426.421C433.143 424.581 426.23 423.974 424.458 425.377C423.064 426.629 420.866 426.62 420.887 425.338C420.817 418.825 422.785 416.248 425.135 419.754Z"
        fill={fillTopPotFoodDog ?? "white"}
        fill-opacity="0.43"
      />
      <path
        d="M176.323 119.001C171.028 120.735 164.911 127.218 164.089 132.148C163.815 133.974 163.359 136.165 163.085 136.987C162.811 138.174 163.176 138.63 164.546 138.63C166.554 138.63 168.015 137.352 172.215 131.874C177.054 125.666 182.897 125.666 188.375 131.874C192.301 136.348 192.027 139.817 187.462 145.934C185.453 148.582 183.81 151.686 183.901 152.69C183.992 155.247 185.453 159.538 185.544 157.712C185.636 156.89 187.096 155.794 189.196 155.247C191.296 154.608 194.127 152.599 196.409 150.134C209.921 135.526 195.405 112.975 176.323 119.001Z"
        fill={fillTenisBall ?? "#80FF00"}
        fill-opacity="0.75"
      />
      <path
        d="M175.868 133.335C174.864 134.522 173.22 136.622 172.307 138.082C171.394 139.543 169.294 141.278 167.651 141.917C164.182 143.469 164.09 143.652 166.373 147.395C168.381 150.682 173.129 154.516 176.507 155.52C177.785 155.886 179.063 156.707 179.429 157.255C179.794 157.803 180.159 156.16 180.159 153.694C180.159 149.769 180.707 148.399 183.811 144.199C185.819 141.552 187.463 138.63 187.463 137.808C187.463 135.526 182.715 131.326 180.068 131.326C178.789 131.326 176.872 132.239 175.868 133.335Z"
        fill={fillTenisBall ?? "#80FF00"}
        fill-opacity="0.75"
      />
      <path
        d="M427.323 236.001C422.028 237.735 415.911 244.218 415.089 249.148C414.815 250.974 414.359 253.165 414.085 253.987C413.811 255.174 414.176 255.63 415.546 255.63C417.554 255.63 419.015 254.352 423.215 248.874C428.054 242.666 433.897 242.666 439.375 248.874C443.301 253.348 443.027 256.817 438.462 262.934C436.453 265.582 434.81 268.686 434.901 269.69C434.992 272.246 436.453 276.538 436.544 274.712C436.636 273.89 438.096 272.794 440.196 272.246C442.296 271.607 445.127 269.599 447.409 267.134C460.921 252.526 446.405 229.975 427.323 236.001Z"
        fill={fillTenisBall ?? "#80FF00"}
        fill-opacity="0.75"
      />
      <path
        d="M426.868 250.335C425.864 251.522 424.22 253.621 423.307 255.082C422.394 256.543 420.294 258.278 418.651 258.917C415.182 260.469 415.09 260.651 417.373 264.395C419.381 267.682 424.129 271.516 427.507 272.52C428.785 272.886 430.063 273.707 430.429 274.255C430.794 274.803 431.159 273.159 431.159 270.694C431.159 266.769 431.707 265.399 434.811 261.199C436.819 258.552 438.463 255.63 438.463 254.808C438.463 252.526 433.715 248.326 431.068 248.326C429.789 248.326 427.872 249.239 426.868 250.335Z"
        fill={fillTenisBall ?? "#80FF00"}
        fill-opacity="0.75"
      />
      <path
        d="M185.5 216.913C178.4 217.913 167.9 222.813 165 226.513C163.8 228.113 163 230.613 163 233.113C163 236.813 163.1 237.013 164.8 235.613C177.3 224.513 208.9 224.213 222.2 234.913L226 237.913V233.513C226 229.513 225.5 228.613 221.9 225.313C216.6 220.513 211 218.113 202.4 216.813C194.6 215.713 193.8 215.713 185.5 216.913Z"
        fill={fillDogLeash ?? "#996330"}
      />
      <path
        d="M163 253.613L167.2 257.213C180 268.213 211.9 268.413 223.8 257.513C225.7 255.713 226 254.513 226 247.913V240.413L222.7 243.613C213.3 252.713 190.7 254.413 175.1 247.313C172 245.813 168 243.313 166.3 241.513L163 238.413V253.613ZM179.7 257.413C178.8 258.313 176.9 256.813 177.6 255.613C178 255.013 178.6 255.013 179.3 255.713C179.9 256.313 180.1 257.013 179.7 257.413ZM188 257.413C188 259.413 185 260.413 184 258.713C182.9 257.013 184.7 254.713 186.6 255.513C187.4 255.813 188 256.713 188 257.413ZM206 257.913C206 260.213 203.2 260.513 202.3 258.213C201.7 256.613 203.8 254.513 205.2 255.413C205.6 255.713 206 256.813 206 257.913ZM212 256.313C212 257.113 211.6 257.813 211.1 257.813C209.8 257.813 208.9 256.213 209.7 255.413C210.8 254.313 212 254.813 212 256.313ZM197 257.313C198.8 259.413 197.5 262.013 194.8 261.613C192.2 261.313 191.1 258.013 193.2 256.713C195 255.513 195.6 255.613 197 257.313Z"
        fill={fillDogLeash ?? "#996330"}
      />
      <path
        d="M188.7 268.513C187.8 269.313 187.8 278.113 188.6 280.213C189.1 281.413 190.7 281.813 195.1 281.813H201V267.813H195.2C192 267.813 189 268.113 188.7 268.513Z"
        fill={fillEmblemDogLeash ?? "#FFF625"}
      />
      <path
        d="M350.5 124.913C343.4 125.913 332.9 130.813 330 134.513C328.8 136.113 328 138.613 328 141.113C328 144.813 328.1 145.013 329.8 143.613C342.3 132.513 373.9 132.213 387.2 142.913L391 145.913V141.513C391 137.513 390.5 136.613 386.9 133.313C381.6 128.513 376 126.113 367.4 124.813C359.6 123.713 358.8 123.713 350.5 124.913Z"
        fill={fillDogLeash ?? "#996330"}
      />
      <path
        d="M328 161.613L332.2 165.213C345 176.213 376.9 176.413 388.8 165.513C390.7 163.713 391 162.513 391 155.913V148.413L387.7 151.613C378.3 160.713 355.7 162.413 340.1 155.313C337 153.813 333 151.313 331.3 149.513L328 146.413V161.613ZM344.7 165.413C343.8 166.313 341.9 164.813 342.6 163.613C343 163.013 343.6 163.013 344.3 163.713C344.9 164.313 345.1 165.013 344.7 165.413ZM353 165.413C353 167.413 350 168.413 349 166.713C347.9 165.013 349.7 162.713 351.6 163.513C352.4 163.813 353 164.713 353 165.413ZM371 165.913C371 168.213 368.2 168.513 367.3 166.213C366.7 164.613 368.8 162.513 370.2 163.413C370.6 163.713 371 164.813 371 165.913ZM377 164.313C377 165.113 376.6 165.813 376.1 165.813C374.8 165.813 373.9 164.213 374.7 163.413C375.8 162.313 377 162.813 377 164.313ZM362 165.313C363.8 167.413 362.5 170.013 359.8 169.613C357.2 169.313 356.1 166.013 358.2 164.713C360 163.513 360.6 163.613 362 165.313Z"
        fill={fillDogLeash ?? "#996330"}
      />
      <path
        d="M353.7 176.513C352.8 177.313 352.8 186.113 353.6 188.213C354.1 189.413 355.7 189.813 360.1 189.813H366V175.813H360.2C357 175.813 354 176.113 353.7 176.513Z"
        fill={fillEmblemDogLeash ?? "#FFF625"}
      />
    </svg>
  );
};

export default SvgContainer;
