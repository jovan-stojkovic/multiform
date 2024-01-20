import { Link } from "react-router-dom";

const Third = () => {
  return (
    <>
      <div className="page-container">
        <div className="headline">
          <h1>Pick Add-ons</h1>
          <p className="headline-desc">
            Add-ons help enhance your gaming experience.
          </p>
        </div>

        <div className="options">
          <div className="option">
            <input
              type="checkbox"
              id="option-one"
              name="Online service"
              value={"$1/mo"}
            />
            <div className="option-text-container">
              <p className="option-headline">Online service</p>
              <p className="option-desc">Access to multiplayer games</p>
            </div>
            <p className="price">$1/mo</p>
          </div>

          <div className="option">
            <input
              type="checkbox"
              id="option-two"
              name="Larger storage"
              value={"$2/mo"}
            />
            <div className="option-text-container">
              <p className="option-headline">Larger storage</p>
              <p className="option-desc">Extra 1TB of cloud storage</p>
            </div>
            <p className="price">$2/mo</p>
          </div>

          <div className="option">
            <input
              type="checkbox"
              id="option-three"
              name="Customizable profile"
              value={"$2/mo"}
            />
            <div className="option-text-container">
              <p className="option-headline">Customizable profile</p>
              <p className="option-desc">Custom theme on your profile</p>
            </div>
            <p className="price">$2/mo</p>
          </div>
        </div>

        <Link className="back-button" to="/second">
          Go Back
        </Link>

        <Link className="next-button" to="/fourth">
          Next Step
        </Link>
      </div>
    </>
  );
};

export default Third;
