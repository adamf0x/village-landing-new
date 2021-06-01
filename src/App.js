import logo from "./logo.svg";
import Navigation from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import womenOnCouch from "./images/women-on-couch.png";
import womenInKitchen from "./images/women-in-kitchen.png";
import menInGarden from "./images/men-in-garden.png";
import Explanation from "./Explanation";

function App() {
  return (
    <>
    <Navigation></Navigation>
      <div className="app-container">
        <div className="item-a">
          <Hero />
        </div>
        <div className="item-b">
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
            flavourText={
              "Feeling a little more private? Don't worry, we got you! Easily manage your public and private info and share as little or as much as you'd like."
            }
            shapesConfig={2}
          />
        </div>
        <div className="item-e">
          <Explanation
            header={"The Story"}
            text={`Village’s mission is to rebuild local communities so we can all get a
            little more support when we need it. No one knows the power of this
            like our Founder Ashley. Listen to her story to understand the
            inspiration for Village and how one little surprise can change
            everything.`}
            type={'video'}
          />
        </div>
        <div className="item-f">
          <Explanation
            header={`Taking a Look at Village`}
            text={`Village helps people come together.`}
            type={"image"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
