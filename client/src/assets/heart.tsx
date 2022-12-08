import { FC } from "react";

import { IColor } from "../Interface";

const Heart:FC<IColor> = ({color = "#4F2CD9"}) => {
  return(
    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24Z" fill={color}/>
    </svg>
  );
}

export default Heart;