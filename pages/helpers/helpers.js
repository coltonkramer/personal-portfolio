import DarkModeStyle from "../components/style.module.css";
export const getPathName = () => {
  if (typeof window !== "undefined") {
    let pathnameSplit = window.location.pathname.split("/");
    let pathName = pathnameSplit[2];
    return pathName;
  }
};