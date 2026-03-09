import hex2 from "./images/hex2.png";

const SectionTwo = (props) => {
  return props.slant !== "opposite" ? (
    <div className="sectionTwo-container-outer" id="your-people">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
      </div>
      <div className="sectionTwo-image-container">
        <img className="sectionTwo-shape-1" src={hex2} />
        <div className="sectionTwo-shape-2" />
        <div className="sectionTwo-image-background" />
        <img className="sectionTwo-image" src={props.imageSource} />
      </div>
    </div>
  ) : (
    <div className="sectionTwo-container-outer-opposite">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
        {props.type == "signup" && (
          <div className="signup-container">
            <Signup />
          </div>
        )}
      </div>
      <div className="sectionTwo-image-container">
        <div className="sectionTwo-image-background" />
        <img className="sectionTwo-image" src={props.imageSource} />
      </div>
    </div>
  );
};

export const Signup = (props) => {
  return props.buttonColour !== "light" ? (
    <div className="mailchimp-light-container">
      <form className="mailchimp-form" action="" method="POST">
       <input type="hidden" name="u" value="cc2921b149dcf4cba76383047"/>
        <input type="hidden" name="id" value="04d8e5472d"/>
        <input name="MERGE0" id="MERGE0" type="email" required={true} placeholder="Sign up for our newsletter!"></input>
        <button>Subscribe!</button>
      </form>
    </div>
  ) : (
    <div className="light-button">
      <form className="mailchimp-form-light" action="" method="POST">
       <input type="hidden" name="u" value="cc2921b149dcf4cba76383047"/>
        <input type="hidden" name="id" value="04d8e5472d"/>
        <input name="MERGE0" id="MERGE0" type="email" required={true} placeholder="Sign up for our newsletter!"></input>
        <button>Subscribe!</button>
      </form>
    </div>
  );
};

export default SectionTwo;
