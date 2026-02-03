import "./Home.css";
import TypingEffect from "./TypingEffect";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title">
        <img src="Bird-View-AIT.jpg"></img>
        <p class="Typing_effect"><TypingEffect text="ARMY INSTITUTE OF TECHNOLOGY" minLength={1}/></p>
        <h1>
          IEEE International Conference on Nexus of Digitalization,
          Intelligence and Applications
          </h1>
      </div>
    </div>
  );
}

export default Home;
