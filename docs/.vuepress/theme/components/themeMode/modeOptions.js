// modeOption.js
const modeOptions = {
  light: {
    "--main-color": "rgb(15 19 31)",
    "--main-color-2": "rgb(15 19 31 / 20%)",
    "--main-color-9": "rgb(15 19 31 / 90%)",
    "--regular-text": "rgb(15 19 31 / 85%)",
    // "--secondary-text": "#8e8787",
    // "--primary-text": "#292525",
    "--bg-color": "rgb(247 249 251)",
    "--bg-border-color": "rgb(219 225 236)",
    // "--card-color": "#ffffff",
    // "--border-color": "#e5e5e5",
    "--box-shadow": "rgba(34, 36, 38, 0.15)",
    "--mask-color": "rgba(255,255,255,0.9)"
  },
  dark: {
    "--main-color": "#ffefdc",
    "--regular-text": "#b8b8b8",
    "--secondary-text": "#7f7f7f",
    "--primary-text": "#ffffff",
    "--bg-color": "#25221f",
    "--card-color": "#232222",
    "--border-color": "#373737",
    "--box-shadow": "rgba(34, 36, 38, 0.15)",
    "--mask-color": "rgba(0,0,0,0.9)"
  }
}

export default modeOptions
