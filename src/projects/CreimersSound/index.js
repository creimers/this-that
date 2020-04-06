import React, { Component } from "react";
import styled from "styled-components";

import Letter from "./Letter";

import c from "./static/c.mp3";
import d from "./static/d.mp3";
import e from "./static/e.mp3";
import f from "./static/f.mp3";
import g from "./static/g.mp3";
import a from "./static/a.mp3";
import b from "./static/b.mp3";
import c2 from "./static/c2.mp3";

const letterMapping = [
  { letter: "c", sound: c, color: "#000000" },
  { letter: "r", sound: d, color: "#D7297D" },
  { letter: "e", sound: e, color: "#DA2DCF" },
  { letter: "i", sound: f, color: "#02BD66" },
  { letter: "m", sound: g, color: "#F1E407" },
  { letter: "e", sound: a, color: "#F27604" },
  { letter: "r", sound: b, color: "#C5333B" },
  { letter: "s", sound: c2, color: "#1BDCF0" },
];

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
`;

class App extends Component {
  state = {
    background: "#ffffff",
    letterColor: "#000000",
    blink: false,
    lettersPlayed: [],
  };

  setPlayed = (letter) => {
    const { lettersPlayed } = this.state;
    lettersPlayed.push(letter.letter);
    this.setState({
      lettersPlayed,
      background: letter.color,
      letterColor: "#ffffff",
    });
  };

  render() {
    const { background, letterColor } = this.state;
    return (
      <Wrapper background={background}>
        {letterMapping.map((letter, index) => (
          <Letter
            key={`${letter.letter}-${index}`}
            color={letterColor}
            soundFile={letter.sound}
            character={letter.letter}
            setPlayed={() => this.setPlayed(letter)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
