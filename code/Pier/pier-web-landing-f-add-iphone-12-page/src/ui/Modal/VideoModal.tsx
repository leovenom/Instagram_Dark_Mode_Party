import { useRef, useEffect } from "react";
import * as React from "react";
import ReactDOM from "react-dom";

import { fadeIn } from "../theme/animations";
import styled from "styled-components";
import Icon from "../Icon";

const IFRAME_MAX_WIDTH = "854";
const IFRAME_MAX_HEIGHT = "480";

interface Props {
  isOpen: boolean;
  hide: () => void;
  videoUrl: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black70};
  display: flex;

  justify-content: center;

  animation: ${fadeIn} 0.2s linear;
`;

const Container = styled.div`
  width: ${IFRAME_MAX_WIDTH}px;
  height: ${IFRAME_MAX_HEIGHT}px;
  margin: 24px;
  .video-responsive {
    float: none;
    clear: both;
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
  }

  .video-responsive iframe {
    background: ${({ theme }) => theme.colors.black};
    top: 45vh;
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .video-responsive svg {
    top: calc(45vh - 32px);
    right: 0;
    transform: translateY(-100%);
    position: absolute;
    height: 100%;
    cursor: pointer;
  }
`;

const Iframe = styled.iframe`
  background: ${({ theme }) => theme.colors.black};
`;

const Modal: React.FC<Props> = ({ isOpen, hide, videoUrl }): JSX.Element => {
  const refContainer = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    if (refContainer.current) refContainer.current.focus();
  }, [isOpen]);

  const closeModalOnClickOutside = (event: React.MouseEvent): void => {
    if (refContainer && !refContainer.current.contains(event.target)) hide();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <Wrapper
          onClick={closeModalOnClickOutside}
          tabIndex={-1}
          aria-modal="true"
          aria-hidden={!isOpen}
        >
          <Container>
            <div className="video-responsive">
              <Icon
                name="close"
                fill="white"
                size={24}
                stroke={8}
                onClick={hide}
              />
              <Iframe
                ref={refContainer}
                width="854"
                height="480"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Container>
        </Wrapper>,
        document.body
      )
    : null;
};

export default Modal;
