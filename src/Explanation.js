import { React, useState } from "react";
import image from "./images/4-cropped.png";
import youtubeIcon from "./images/yt_icon_mono_dark.png";
import youtubeThumbnail from "./images/youtube-thumbnail.png";
import { Button, Modal } from "react-bootstrap";

import placeholder from "./images/Village-iPhoneMock.png";

const Explanation = (props) => {
  const [modal, showModal] = useState(false);
  const handleOpen = () => {
    showModal(true);
  };
  const handleClose = () => {
    showModal(false);
  };

  return (
    <div className="explanation-container-outer">
      <div className="explanation-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
      </div>
      <div className="explanation-content-container">
        {props.type == "video" ? (
          <div>
            {modal && (
              <Modal
                show={modal}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="bootstrap-modal"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ljQFwTT6J_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal>
            )}
            <a
              data-video="https://www.youtube.com/embed/ljQFwTT6J_I"
              href="#0"
              aria-controls="video-modal"
              onClick={handleOpen}
              className="youtube-thumbnail-container"
            >
              <img className="youtube-icon" src={youtubeIcon} />
              <img className="explanation-video" src={youtubeThumbnail}></img>
            </a>
          </div>
        ) : (
          <div className="features-container">
            <div className="feature-1">
              <h2>Requests</h2>
            </div>
            <div className="feature-2">
              <h2>Friend Finder & Nearby Neighbor</h2>
            </div>
            <div className="feature-3">
              <h2>Circles</h2>
            </div>
            <img className="iPhone-diagram" src={placeholder}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explanation;
