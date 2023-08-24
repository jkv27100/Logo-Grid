import { AnimatedBg, Logo } from "./components";
import { logoList } from "./assets";

import "./App.css";

function App() {
  return (
    <>
      <AnimatedBg />
      <h1>Awesome Logo Animation 💨</h1>
      <div className="logo__container">
        {logoList.map(({ src, delay }) => (
          <Logo logo={src} delay={delay} />
        ))}
      </div>
    </>
  );
}

export default App;
