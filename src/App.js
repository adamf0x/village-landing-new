import logo from "./logo.svg";
import Navigation from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
<<<<<<< HEAD
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

function App() {
  const { width, height } = useWindowDimensions();
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, [Hero, Navigation]);
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
    <>
      <Navigation></Navigation>
=======
import SectionTwo from "./SectionTwo";
import womenOnCouch from "./images/women-on-couch.png";
import womenInKitchen from "./images/women-in-kitchen.png";
import menInGarden from "./images/men-in-garden.png";
import Explanation from "./Explanation";

function App() {
  return (
    <>
    <Navigation></Navigation>
>>>>>>> master
      <div className="app-container">
        <div className="item-a">
          <Hero />
        </div>
<<<<<<< HEAD
        <div className="item-b" id="your-community">
=======
        <div className="item-b">
>>>>>>> master
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
<<<<<<< HEAD
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
=======
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="item-c">
          <SectionTwo
            header={"Just Ask!"}
            text={`You’re busy and asking for help can sometimes be a lot of work but your 
            people want to help and The Village App makes it easier than ever to ask. No more long explanations, 
            group messages or awkward texts. Life is better when we come together.`}
            imageSource={womenInKitchen}
          />
        </div>
        <div className="item-d">
          <Section
            header={"Troll Free!"}
            text={`With all the negativity circulating online, it can be easy to forget 
            that good people are all around us. Village creates a safe community by helping 
            you learn about the great folks in your neighbourhood!`}
            imageSource={menInGarden}
>>>>>>> master
            flavourText={
              "Feeling a little more private? Don't worry, we got you! Easily manage your public and private info and share as little or as much as you'd like."
            }
            shapesConfig={2}
          />
        </div>
<<<<<<< HEAD
        <div className="item-e" id="our-story">
=======
        <div className="item-e">
>>>>>>> master
          <Explanation
            header={"The Story"}
            text={`Village’s mission is to rebuild local communities so we can all get a
            little more support when we need it. No one knows the power of this
            like our Founder Ashley. Listen to her story to understand the
            inspiration for Village and how one little surprise can change
            everything.`}
<<<<<<< HEAD
            type={"video"}
          />
        </div>
        <div className="item-f" id="the-app">
=======
            type={'video'}
          />
        </div>
        <div className="item-f">
>>>>>>> master
          <Explanation
            header={`Taking a Look at Village`}
            text={`Village helps people come together.`}
            type={"image"}
          />
        </div>
<<<<<<< HEAD
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
=======
>>>>>>> master
      </div>
    </>
  );
}

export default App;
