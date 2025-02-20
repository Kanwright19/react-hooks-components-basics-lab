import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2>
        {props.text}
      </h2>
    </div>

  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About text= "about"/>
    </div>
  );
}

export default App;
