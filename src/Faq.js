import { React, useEffect, useState, useRef } from "react";
import image from "./images/4-cropped.png";
import youtubeIcon from "./images/yt_icon_mono_dark.png";
import youtubeThumbnail from "./images/youtube-thumbnail.png";
import { Card, Accordion } from "react-bootstrap";
import hex from "./images/hex.png";
import hex3 from "./images/hex3.png";

import placeholder from "./images/Village-iPhoneMock.png";

const Faq = (props) => {
  const [expand, setExpand] = useState("none");
  return (
    <div className="FAQ-container-outer">
      <div className="shapes-left">
        <div className="shape1"></div>
      </div>
      <div className="faq-text-container">
        <div className="header-container">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Accordion className="faq-accordion">
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="0"
              className={
                expand === "expand1" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand1" ? setExpand("none") : setExpand("expand1");
              }}
            >
              <h2>
                Why should I use Village over any other currently available app
                or tool?
              </h2>
              {expand === "expand1" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Social media, texting and messaging are all great communication
                tools. Village is a connection tool. It’s sole purpose is to
                connect you to the people in your support network and
                surrounding community. It's about creating greater efficiency
                for getting the help you need.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="1"
              className={
                expand === "expand2" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand2" ? setExpand("none") : setExpand("expand2");
              }}
            >
              <h2>How is Village different from social media?</h2>
              {expand === "expand2" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                The answer to that is actually in the word “Media.” Village
                isn’t about content generation. It’s not really “social media”
                at all. There’s no comment section, no wall, no publicly shared
                pictures and no fake internet popularity points. We aren’t
                asking you to spend your time on the app, we want you to spend
                time supporting people around you and accessing support. You
                could say it's more of a “social engagement” app.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="2"
              className={
                expand === "expand3" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand3" ? setExpand("none") : setExpand("expand3");
              }}
            >
              <h2>Is Village safe?</h2>
              {expand === "expand3" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Your safety is incredibly important to us. You are in total
                control of what information is shared and who gets to see it. We
                comply with all jurisdictional requirements and use a third
                party verification system on sign up. We also need you to do
                your part to keep Village safe which means reporting any
                suspicious activity and using the same vigilance and techniques
                you would for any other time you are meeting someone new if you
                decide to explore beyond your personal network.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="3"
              className={
                expand === "expand4" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand4" ? setExpand("none") : setExpand("expand4");
              }}
            >
              <h2>Is Village for me?</h2>
              {expand === "expand4" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Village is for everyone. We believe that everyone benefits from
                an increased sense of belonging to their community. There are so
                many different ways Village can be used, we guarantee you’ll
                find something for you. If you think you won’t use it to ask for
                help, then you’ll make an excellent helper!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="4"
              className={
                expand === "expand5" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand5" ? setExpand("none") : setExpand("expand5");
              }}
            >
              <h2>How can I use Village during Covid?</h2>

              {expand === "expand5" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                It is important to always follow the recommended guidelines of
                your local public health officers. Thankfully there are a lot of
                opportunities to use Village while following guidelines. For
                example, if you are having to self isolate, Village is a great
                way to communicate your needs to the people around you
                (groceries, medication pick up etc). We know Covid has been
                tough financially on many people, use Village to see if anyone
                in your neighbourhood might have an item to give. Maybe you need
                some extra food, diapers or clothing to get you by, just reach
                out to your local community and you will be amazed at the
                support you receive. Village can also be used to start building
                those connections with people in your area, start exploring the
                people nearby and request to chat so when it’s safe to do so,
                you can set up meetings and invite them to be a part of your
                Village.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="5"
              className={
                expand === "expand6" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand6" ? setExpand("none") : setExpand("expand6");
              }}
            >
              <h2>Is Village free?</h2>
              {expand === "expand6" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Our MVP (minimal viable product) is free. Once we launch our
                full version, there will be a robust free feature-set with the
                option to upgrade for a small fee.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="6"
              className={
                expand === "expand7" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand7" ? setExpand("none") : setExpand("expand7");
              }}
            >
              <h2>
                I’m not one to ask for help, how is this going to make it
                easier?
              </h2>
              {expand === "expand7" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                We often find the need to justify why we need help and can
                easily talk ourselves out of ever asking. Village eliminates
                that by using needs-based messaging so you can get to the point
                of exactly what you need, quickly. You are sending the request
                out to a group of people who have already indicated that they
                want to help you and are waiting for you to just ask!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="7"
              className={
                expand === "expand8" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand8" ? setExpand("none") : setExpand("expand8");
              }}
            >
              <h2>
                What is an MVP and how is it different from your full version?
              </h2>
              {expand === "expand8" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                The MVP or minimal viable product is our most basic version. It
                has the main features of how Village is intended to work but
                doesn’t have all the bells and whistles our full version will
                have (which you’re going to love by the way). It’s also a
                progressive web app which means you use your internet browser to
                access it until our full version is available in the app store.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="8"
              className={
                expand === "expand9" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand9" ? setExpand("none") : setExpand("expand9");
              }}
            >
              <h2>What is “needs-based” messaging?</h2>
              {expand === "expand9" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                Needs-based messaging is a quick way to get to the point of what
                you are needing help with. It eliminates the need for back and
                forth pleasantries and justification. Each request lists what
                you need help with, where and when it’s needed with the option
                to add additional information. The recipient then simply clicks
                either available or unavailable, eliminating the need for
                justification on their end as well.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as="div"
              eventKey="9"
              className={
                expand === "expand10" ? "toggle" : "toggle-border-bottom"
              }
              onClick={() => {
                expand === "expand10"
                  ? setExpand("none")
                  : setExpand("expand10");
              }}
            >
              <h2>
                What is the difference between Friend Finder and Nearby
                Neighbor?
              </h2>
              {expand === "expand10" ? <h3>&#8722;</h3> : <h3>&#43;</h3>}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                Friend finder is to do just that, find a friend. You can search
                people by distance using filters like age, common interests,
                life stage etc to be matched with. Nearby Neighbor is simply
                seeing who is in your area based on distance. You can strike up
                an online chat with your neighbor and develop a relationship
                with them so you can call upon them if you need something like
                watching for a package when you’re gone, help moving a couch or
                offering something like extra turkey dinner.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="shapes-right">
        <div className="shape2"></div>
        <img className="shape3" src={hex}></img>
      </div>
    </div>
  );
};

export default Faq;
