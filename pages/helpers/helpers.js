import DarkModeStyle from '../components/style.module.css'
export const getPathName = () => {
    if(typeof window !== "undefined"){
        let pathnameSplit = window.location.pathname.split('/')
        let pathName = pathnameSplit[2]
        return pathName 
    }
}

// export function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
//   }
  
// export function keepTheme() {
//     if (localStorage.getItem('theme')) {
//       if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//       } else if (localStorage.getItem('theme') === 'theme-light') {
//         setTheme('theme-light')
//       }
//     } else {
//       setTheme('theme-dark')
//     }
//   }

// export function darkModeHelper(){
//     if (typeof window !== undefined){
//         let body = document.getElementsByTagName("body")
//         body.classList.toggle({DarkModeStyle})
//     }
//     }

  