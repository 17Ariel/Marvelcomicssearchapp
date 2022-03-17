import md5 from "blueimp-md5";

export const hash = md5(process.env.REACT_APP_HASH);
