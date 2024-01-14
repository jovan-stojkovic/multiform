import { Link } from "react-router-dom";

const Second = () => {
  return (
    <>
      <div className="page-container">
        <div className="headline">
          <h1>Select your plan</h1>
          <p className="headline-desc">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="selectors">
          <button className="single-selector">
            <img src="/src/assets/images/icon-arcade.svg" alt="arcade" />
            <div className="selector-text">
              <p className="selector-title">Arcade</p>
              <p className="selector-price">$9/mo</p>
              <p className="selector-hidden">2 months free</p>
            </div>
          </button>

          <button className="single-selector">
            <img src="/src/assets/images/icon-advanced.svg" alt="advanced" />
            <div className="selector-text">
              <p className="selector-title">Advanced</p>
              <p className="selector-price">$12/mo</p>
              <p className="selector-hidden">2 months free</p>
            </div>
          </button>

          <button className="single-selector">
            <img src="/src/assets/images/icon-pro.svg" alt="pro" />
            <div className="selector-text">
              <p className="selector-title">Pro</p>
              <p className="selector-price">$15/mo</p>
              <p className="selector-hidden">2 months free</p>
            </div>
          </button>
        </div>

        <div className="toggle-container">
          <p className="monthly">Monthly</p>
          <label htmlFor="checkbox" className="switch">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="slider"></span>
          </label>
          <p className="yearly">Yearly</p>
        </div>

        <div className="buttons">
          <Link className="back-button" to="/">
            Go Back
          </Link>

          <Link className="next-button" to="/third">
            Next Step
          </Link>
        </div>
      </div>
    </>
  );
};

export default Second;
