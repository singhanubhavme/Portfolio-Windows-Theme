import useOpenAppContext from '@/hooks/use-open-app-hook';
import { useState, useEffect } from 'react';
import { Menu, Item, Separator, Submenu } from 'react-contexify';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';

function CustomContextMenu({ handleItemClick }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [changeBg, setChangeBg] = useState(true);
  const { open } = useOpenAppContext();

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullScreen(!!document.fullscreenElement);
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    setChangeBg(true);
    for (let i = 0; i < open.length; i++) {
      if (open[i].open === true) {
        setChangeBg(false);
        break;
      }
    }
  }, [open]);

  return (
    <Menu id={'main-context'}>
      {changeBg && (
        <Item id="change-bg" onClick={handleItemClick}>
          🎨 Change Background
        </Item>
      )}
      {!isFullScreen ? (
        <Item id="enter" onClick={() => document.body.requestFullscreen()}>
          ⏩ Enter Full Screen
        </Item>
      ) : (
        <Item id="exit" onClick={() => document.exitFullscreen()}>
          ⏪ Exit Full Screen
        </Item>
      )}

      <Item id="reload" onClick={handleItemClick}>
        🔄 Reset
      </Item>
      {/* <Item id="copy">Copy</Item>
      <Item id="cut">Cut</Item> */}
      <Separator />
      {/* <Item disabled>Disabled</Item> */}
      {/* <Separator /> */}
      <Submenu label={'📷 Socials'}>
        <Item
          id="github"
          className="text-lg"
          onClick={() =>
            window.open('https://github.com/singhanubhavme', '_blank')
          }
        >
          <AiFillGithub className="mr-3 text-2xl" /> Github
        </Item>
        <Item
          id="linkedin"
          className="text-lg"
          onClick={() =>
            window.open('https://linkedin.com/in/anubhavsinghdev', '_blank')
          }
        >
          <AiFillLinkedin className="mr-3 text-2xl" /> LinkedIn
        </Item>
        <Item
          id="instagram"
          className="text-lg"
          onClick={() =>
            window.open('https://instagram.com/anubhavsinghdev', '_blank')
          }
        >
          <AiFillInstagram className="mr-3 text-2xl" />
          Instagram
        </Item>
        <Item
          id="twitter"
          className="text-lg"
          onClick={() =>
            window.open('https://twitter.com/anubhavsinghdev', '_blank')
          }
        >
          <AiFillTwitterSquare className="mr-3 text-2xl" />
          Twitter
        </Item>
        <Item
          id="blog"
          className="text-lg"
          onClick={() => window.open('https://blog.anubhavsingh.dev', '_blank')}
        >
          <SiHashnode className="mr-3 text-2xl" />
          Blog
        </Item>
      </Submenu>
    </Menu>
  );
}

export default CustomContextMenu;
