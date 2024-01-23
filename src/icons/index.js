/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

const fasIcons = [fas.faMicrochip];
const farIcons = [];
const fabIcons = [];

export default function registerComponents() {
  fasIcons.forEach((icon) => {
    library.add(icon);
  });
  fabIcons.forEach((icon) => {
    library.add(icon);
  });
  farIcons.forEach((icon) => {
    library.add(icon);
  });
}
