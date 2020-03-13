import styled from '@emotion/styled';
import React from 'react';
import { useThemeUI } from 'theme-ui';
import useSound from 'use-sound';
import Sfx from './sfx-provider';

const Button = styled.button`
  cursor: pointer;
  text-align: left;
  opacity: 0.7;
  position: relative;
  width: 40px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: transparent;
  font: inherit;
  border-radius: 5px;
`;

function SoundToggle() {
  let [active, setActive] = Sfx.useContainer();
  let { theme } = useThemeUI();
  let [playOn] = useSound('/audio/enable-sound.mp3');
  let [playOff] = useSound('/audio/disable-sound.mp3');

  let label = active ? 'Disable sounds' : 'Enable sounds';

  function toggleSound(e) {
    e.preventDefault();
    if (active) {
      playOff();
    } else {
      playOn();
    }
    setActive(!active);
  }

  return (
    <Button
      aria-label={label}
      title={label}
      onClick={toggleSound}
      style={{ marginLeft: 16 }}
    >
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        <path
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          style={{
            stroke: theme.colors.themeToggle,
            fill: theme.colors.themeToggle,
            transformOrigin: '30% center',
            transition: 'opacity 200ms ease 0s'
          }}
        ></path>
        <path
          d="
            M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
          "
          style={{
            opacity: active ? 1 : 0,
            transitionDelay: '150ms',
            stroke: theme.colors.themeToggle,
            transition: 'opacity 200ms ease 0s'
          }}
        ></path>
        <path
          d="
            M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475
          "
          style={{
            opacity: active ? 1 : 0,
            transitionDelay: '0ms',
            stroke: theme.colors.themeToggle,
            transition: 'opacity 200ms ease 0s'
          }}
        ></path>
      </svg>
    </Button>
  );
}

export default SoundToggle;
