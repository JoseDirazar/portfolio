import { useEffect, useState } from "react";

export const BiggerLogo = ({ theme }: { theme?: string }) => {
  const [currentTheme, setCurrentTheme] = useState<null | string>(null);
  const [width, setWidth] = useState(98);
  const [height, setHeight] = useState(38);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 643) {
        setWidth(70);
        setHeight(24);
      } else {
        setWidth(98);
        setHeight(38);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (theme) setCurrentTheme(theme);
  }, [theme]);

  return (
    <svg width={width} height={height} viewBox="0 0 98 38" fill="none">
      <g clipPath="url(#clip0_303_2135)">
        <path
          d="M14.8425 18.6791H14.5829V18.058H14.8425C16.3125 18.058 16.8316 17.0589 16.8316 16.0279V1.81785C16.8316 1.30145 16.4072 0.882355 15.8844 0.882355H0V2.14714H0.871414V35.7949H0V37.0615H15.8919C16.4148 37.0615 16.8391 36.6424 16.8391 36.126L16.8316 20.0749C16.8316 18.9897 16.3125 18.6791 14.8425 18.6791ZM7.97723 4.50457H9.7068V16.5425H7.97723V4.50457ZM9.73142 33.4449H7.97723V20.1609H9.73142V33.4449Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M18.6236 37.0615H25.7257V6.18661H18.6236V37.0615Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M18.6236 4.50273H25.7257V0.882377H18.6236V4.50273Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M61.5901 0.901079H46.8689C46.3309 0.901079 45.897 1.3314 45.897 1.86089V36.083C45.897 36.6144 46.3309 37.0428 46.8689 37.0428H54.5411C55.6398 37.0428 55.9543 36.5227 55.9543 35.0502V34.7902H56.5813V35.0502C56.5813 36.5227 56.9489 37.0428 57.9945 37.0428H62.5619V20.1853H55.0942V24.0807H55.96V32.0623H53.3647V4.50459H55.0942V18.4771H62.5619V1.86089C62.5619 1.3314 62.1262 0.901079 61.5901 0.901079Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M64.3161 37.0989L80.2724 37.1176V21.9477L73.1704 21.929V33.4805H71.4162V20.2077H78.0749V16.5799H71.4162V4.53826H73.1704V14.8455L80.2724 14.8661V0.940361L64.3161 0.919781V37.0989Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M95.9825 18.0411C97.4734 18.0411 97.9981 17.68 97.9981 16.6454V1.81787C97.9981 1.30148 97.5738 0.882377 97.0509 0.882377H82.0417V37.0615H89.1438V22.9525H90.898V37.0615H98V20.0581C98 18.9729 97.4734 18.6623 95.9844 18.6623H95.7211V18.0411H95.9844H95.9825ZM90.898 19.334H89.1438V4.50085H90.898V19.334Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
        <path
          d="M43.1729 0.901079H28.4517C27.9137 0.901079 27.4799 1.3314 27.4799 1.86089V36.083C27.4799 36.6144 27.9137 37.0428 28.4517 37.0428H36.1239C37.2227 37.0428 37.5371 36.5227 37.5371 35.0502V34.7902H38.1642V35.0502C38.1642 36.5227 38.5317 37.0428 39.5774 37.0428H44.1447V20.1853H36.6771V24.0807H37.5428V32.0623H34.9475V4.50459H36.6771V18.4771H44.1447V1.86089C44.1447 1.3314 43.709 0.901079 43.1729 0.901079Z"
          fill={currentTheme === "dark" ? "white" : "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2135">
          <rect
            width="98"
            height="36.2353"
            fill={currentTheme === "dark" ? "white" : "black"}
            transform="translate(0 0.882355)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
