import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import ReactHowler from "react-howler";

const propTypes = {
  color: PropTypes.string.isRequired,
  soundFile: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  setPlayed: PropTypes.func.isRequired,
};

const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }
  20%, 80% {
    transform: translateX(1px);
  }
  30%, 50%, 70% {
    transform: translateX(-2px);
  }
  45%, 55% {
    transform: translateX(2px);
  }
`;

const animation = (props) => css`
  ${shake} 0.5s cubic-bezier(.35,.05,.20,.99) both infinite;
`;

const Wrapper = styled.div`
  font-family: "Impact", sans-serif;
  font-size: 10rem;
  color: ${(props) => props.color};
  cursor: pointer;
  animation: ${(props) => (props.playing ? animation : "unset")};
`;

class Letter extends Component {
  state = {
    playing: false,
  };

  _handleMouseOver = () => {
    this.player.stop();
    this.props.setPlayed();
    this.setState({ playing: true });
  };

  render() {
    const { color, soundFile, character } = this.props;
    const { playing } = this.state;
    return (
      <Wrapper
        color={color}
        onMouseOver={this._handleMouseOver}
        playing={playing}
      >
        {character}
        <ReactHowler
          src={soundFile}
          playing={this.state.playing}
          onEnd={() => this.setState({ playing: false })}
          ref={(ref) => (this.player = ref)}
        />
      </Wrapper>
    );
  }
}

Letter.propTypes = propTypes;

export default Letter;
