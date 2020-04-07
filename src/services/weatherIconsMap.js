import cloudLight from "../assets/cloud-lightning.svg";
import cloudRain from "../assets/cloud-rain.svg";
import cloudSnow from "../assets/cloud-snow.svg";
import cloud from "../assets/cloud.svg";
import sun from "../assets/sun.svg";

export default function IconWeatherMap(weatherName = "clear") {
  let icon;

  const name = weatherName.toLowerCase();

  if (name.search("rain") !== -1) {
    icon = cloudRain;
  } else if (name.search("storm") !== -1) {
    icon = cloudLight;
  } else if (name.search("snow") !== -1) {
    icon = cloudSnow;
  } else if (name === "clear" || name === "hot" || name.search("sun") !== -1) {
    icon = sun;
  } else {
    icon = cloud;
  }

  return icon;
}
