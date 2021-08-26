import logo from "./logo.svg";
import Navigation from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import SectionTwo, { Signup } from "./SectionTwo";
import Faq from "./Faq";
import Team from "./TeamMembers";
import womenOnCouch from "./images/women-on-couch.png";
import menInGarden from "./images/men-in-garden.png";
import Explanation from "./Explanation";
import olderWoman from "./images/older-woman.png";
import groupOfPeople from "./images/group-of-people.png";
import family from "./images/family.png";
import Footer from "./Footer";
import { React, useEffect, useState } from "react";
import useWindowDimensions from "./GetWindowDimensions";
import { Button, Modal } from "react-bootstrap";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CurbitHero from "./CurbitHero";
import CurbitSection1 from "./CurbitSection1";
import CurbitSection2 from "./CurbitSection2";
import Partners from "./Partners";
import MamasLogo from "./images/Mamas-Logo-01.png";
import KarisLogo from "./images/karis-society.png";
import HiSLogo from "./images/HiS-Logo-Transparent-2015-05-05-1-1.png";

function App() {
  const { width, height } = useWindowDimensions();
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, [Hero, Navigation]);

  const [downloadModal, setDownloadModal] = useState(false);
  const openDownloadModal = () => {
    console.log("here");
    setDownloadModal(true);
  };

  const closeDownloadModal = () => {
    setDownloadModal(false);
  };

  return loading ? (
    <div className="loading">
      <svg
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <path
          fill="#ef7432"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  ) : (
    <Router>
      {downloadModal && (
        <Modal
          show={downloadModal}
          onHide={closeDownloadModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="bootstrap-modal"
        >
          <div className="buttons">
            <p>Download now for FREE</p>
            <div className="inner-buttons">
              <Button>
                <a href="https://apps.apple.com/ca/app/village/id1549408764">
                  <img src={appStoreButon} width={150}></img>
                </a>
              </Button>
              <Button>
                <a href="http://play.google.com/store/apps/details?id=co.atomic47.village.android">
                  <img src={googlePlayButton} width={150}></img>
                </a>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <Navigation openDownloadModal={openDownloadModal}></Navigation>
      <Switch>
        <div className="app-container">
          <Route path="/" exact>
            <div className="item-a">
              <Hero />
            </div>
            <div className="item-b" id="your-community">
              <Section
                header={"The Real Social Network"}
                text={`It's time for less likes and more life. Know your neighbours, find
                      friends, give and get support when and where it's needed. The Village
                      App is about true connection and showing up. There’s no comment
                      section, wall posts or fake internet popularity points.`}
                imageSource={womenOnCouch}
                button
                shapesConfig={1}
              />
            </div>
            {/* <div className="divider"></div>
            <div className="divider"></div> */}
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="item-c" id="your-people">
              <SectionTwo
                header={"Just Ask!"}
                text={`You’re busy and asking for help can sometimes be a lot of work but your
            people want to help and The Village App makes it easier than ever to ask. No more long explanations,
            group messages or awkward texts. Life is better when we come together.`}
                imageSource={family}
              />
            </div>
            <div className="item-d" id="no-trolls">
              <Section
                header={"Troll Free!"}
                text={`With all the negativity circulating online, it can be easy to forget
            that good people are all around us. Village creates a safe community by helping
            you learn about the great folks in your neighbourhood!`}
                imageSource={groupOfPeople}
                flavourText={
                  "Feeling a little more private? Don't worry, we got you! Easily manage your public and private info and share as little or as much as you'd like."
                }
                shapesConfig={2}
              />
            </div>
            <div className="item-e" id="our-story">
              <Explanation
                header={"The Story"}
                text={`Village’s mission is to rebuild local communities so we can all get a
            little more support when we need it. No one knows the power of this
            like our Founder Ashley. Listen to her story to understand the
            inspiration for Village and how one little surprise can change
            everything.`}
                type={"video"}
              />
            </div>
            <div className="item-f" id="the-app">
              <Explanation
                header={`Taking a Look at Village`}
                text={`Village helps people come together.`}
                type={"image"}
              />
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="item-g" id="try-it">
              <SectionTwo
                header={"Jump In! Plenty of room!"}
                text={`Join our mailing list and never miss a beat as we grow communities everywhere.`}
                imageSource={olderWoman}
                slant={"opposite"}
                type="signup"
              />
            </div>
            <div className="item-h" id="faq">
              <Faq />
            </div>
            <div className="item-i" id="team">
              <Team />
            </div>
            <div className="item-j">
              <Footer />
            </div>
          </Route>
          <Route path="/events" exact>
            <div className="events-container">
              <CurbitHero></CurbitHero>
              <CurbitSection2
                noPicture
                headerText={"How To Participate"}
              ></CurbitSection2>
              <CurbitSection2 headerText={"Rules"}></CurbitSection2>
              <Partners
                partners={[
                  {
                    logo: MamasLogo,
                    name: "Mamas For Mamas",
                    addressline1: "1735 Dolphin Ave Unit 120,",
                    addressline2: "Kelowna, BC, V1Y 8A6",
                    addressline3: "(236) 420-0075",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                    needs:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                  },
                  {
                    logo: KarisLogo,
                    name: "Karis Support Society",
                    addressline1: "550 Rowcliffe Ave,",
                    addressline2: "Kelowna, BC, V1Y 5Y9",
                    addressline3: "(250) 860-9507",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                    needs:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                  },
                  {
                    logo: HiSLogo,
                    name: "Hands In Service",
                    addressline1: "1889 Springfield Rd. #206,",
                    addressline2: "Kelowna, BC, V1Y 5V5",
                    addressline3: "(250) 861-5465",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                    needs:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla efficitur nisl quis suscipit. Praesent venenatis blandit interdum. Nulla facilisi.",
                  },
                ]}
              ></Partners>
              <div className="curbit-disclaimer">
                <h1>Disclaimer</h1>
                <h3>
                  <i>
                    By participating in this event you are agreeing to the rules
                    above. The Village App and it’s partners hold no
                    responsibility for damages incurred during the event or for
                    lost or stolen property. Illegal, expired or recalled items,
                    alcohol, tobacco and firearms are not permitted to be given
                    away at this event. Participate at your own risk.
                  </i>
                </h3>
              </div>
              <div className="item-j">
                <Footer />
              </div>
            </div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
