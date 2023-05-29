import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

//import FloatedButton from "./Components/buttonFloated";
//import Leyenda from "./Components/leyenda";
import { NewComponent } from "./Components/newComponent";
import { MultiLinea } from "./Components/multiLínea";
import { GridLabels } from "./Components/gridLabels";
import { LineCard } from "./Components/lineCard";
import { FormDropdown } from "./Components/formDropdown";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>{children}</Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    {/* <Leyenda /> */}
    {/* <FloatedButton /> */}
    <MultiLinea />
    {/* <GridLabels/> */}
    {/* <NewComponent /> */}
    {/* <LineCard /> */}
  </App>,
  document.getElementById("root")
);
