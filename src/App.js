import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/SteyledJsx";
import { StyleComponents } from "./components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyleComponents />
      <Emotion />
    </div>
  );
}
