import { React, useState } from "react";
import image from "./images/4-cropped.png";
import youtubeIcon from "./images/yt_icon_mono_dark.png";
import youtubeThumbnail from "./images/youtube-thumbnail.png";
<<<<<<< HEAD
import { Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import feature1 from "./images/Feature-Request.png";
import feature2 from "./images/Feature-FriendFinder.png";
import feature3 from "./images/Feature-Chat.png";

import villageIphone from "./images/Village-iPhoneMock.png";
=======
import { Button, Modal } from "react-bootstrap";

import placeholder from "./images/Village-iPhoneMock.png";
>>>>>>> master

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
<<<<<<< HEAD
              <img
                className="youtube-icon"
                src={youtubeIcon}
                alt="YouTube play icon"
              />
              <img
                className="explanation-video"
                src={youtubeThumbnail}
                alt="Ashley's story YouTube video thumbnail"
              ></img>
=======
              <img className="youtube-icon" src={youtubeIcon} />
              <img className="explanation-video" src={youtubeThumbnail}></img>
>>>>>>> master
            </a>
          </div>
        ) : (
          <div className="features-container">
<<<<<<< HEAD
            <div className="features-group">
              <div className="feature-1">
                <img className="feature-image" src={feature1}></img>
                <div className="feature-text">
                  <h1>Requests</h1>
                  <h2>
                    Quickly send requests for anything you might need to
                    multiple people at once without group messaging.
                  </h2>
                </div>
              </div>
              <div className="feature-2">
                <img className="feature-image" src={feature2}></img>
                <div className="feature-text">
                  <h1>Friend Finder + Nearby Neighbors</h1>
                  <h2>
                    Easily meet people around you, find common interests and
                    build long lasting relationships.
                  </h2>
                </div>
              </div>
              <div className="feature-3">
                <img className="feature-image" src={feature3}></img>
                <div className="feature-text">
                  <h1>Circles</h1>
                  <h2>
                    Organize your connections into Circles so the right people
                    get notified for the right reason.
                  </h2>
                </div>
              </div>
            </div>
            <div className="feature-3-separate">
              <img className="feature-image" src={feature3}></img>
              <div className="feature-text">
                <h1>Circles</h1>
                <h2>
                  Organize your connections into Circles so the right people get
                  notified for the right reason.
                </h2>
              </div>
            </div>
            <img className="iPhone-diagram" src={villageIphone}></img>
=======
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
>>>>>>> master
          </div>
        )}
      </div>
    </div>
  );
};

export default Explanation;
