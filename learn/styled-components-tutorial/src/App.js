import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { blueTheme, greenTheme, redTheme } from "./examples/Theming/themes";
import { Banner, SecondBanner } from "./components/Banner";
// import Navbar from "./components/Navbar";
// import { Button } from "./components/Theming/Button";
// import Content from "./components/Content";
// import { Hero } from "./components/Hero";
// import Banner from "./examples/Banner";
// import { DangerButton } from "./components/Buttons";
// import { Button, SecondButton } from "./Buttons";
// import Header from "./components/Header";
// import StyledHeader from "./components/StyledHeader";
// import {
//   PropsButton,
//   BigButton,
//   DangerButton,
//   SuccessButton,
// } from "./components/PropsButton";
// import StyledWrapper from "./components/AlternativeHeader";
// import { AwesomeInput, BasicInput } from "./components/Inputs";
// import { GreenBox, RedBox } from "./components/Boxes";
// import { Box } from "./examples/AnimatedBox";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

function App() {
  // const [theme, setTheme] = useState(redTheme);

  // const handleTheme = () => {
  //   if (theme.primaryColor === "red") {
  //     setTheme(greenTheme);
  //   } else if (theme.primaryColor === "green") {
  //     setTheme(blueTheme);
  //   } else {
  //     setTheme(redTheme);
  //   }
  // };

  return (
    <ThemeProvider theme={blueTheme}>
      <div className="App">
        <GlobalStyle />
        {/*<Header />
      <StyledWrapper />
      <h1>Styled-Components</h1>
      <Button>Click Me</Button>
      <SecondButton>Second Click Me</SecondButton>

      <StyledHeader title="hello from app.js" />
      <PropsButton color="red">propss button</PropsButton>
      <DangerButton big>danger button</DangerButton>
      <SuccessButton>success button</SuccessButton>*/}
        {/*<Hero img="./assets/img/image0001.jpeg">
        <Banner title="This is my title" color="red">
          <DangerButton>Click Me</DangerButton>
        </Banner>
      </Hero>
      <Hero big img="./assets/img/image0002.jpeg" />
      <Hero />*/}
        {/*<BasicInput />
      <AwesomeInput type="text" placeholder="Please enter email" />
      <AwesomeInput />*/}
        {/*<GreenBox color="green" />
      <RedBox color="red" />
      <Box />*/}
        {/*<Navbar>
          <Button onClick={handleTheme}>Toggle Theme</Button>
        </Navbar>
        <Content />*/}
        <Banner>
          <h1>first banner</h1>
        </Banner>
        <SecondBanner>
          <h1>first banner</h1>
        </SecondBanner>
      </div>
    </ThemeProvider>
  );
}

export default App;
