import { NavLink } from "react-router-dom";

const SideComponent = () => {
  return (
    <div className="side">
      <div className="side-container">
        <div className="single-link">
          <NavLink to={"/"}>
            <p className="link-number">1</p>
          </NavLink>
          <div className="single-link-info">
            <p className="step-count">STEP 1</p>
            <p className="step-desc">YOUR INFO</p>
          </div>
        </div>

        <div className="single-link">
          <NavLink to={"/second"}>
            <p className="link-number">2</p>
          </NavLink>
          <div className="single-link-info">
            <p className="step-count">STEP 2</p>
            <p className="step-desc">SELECT PLAN</p>
          </div>
        </div>

        <div className="single-link">
          <NavLink to={"/third"}>
            <p className="link-number">3</p>
          </NavLink>
          <div className="single-link-info">
            <p className="step-count">STEP 3</p>
            <p className="step-desc">ADD-ONS</p>
          </div>
        </div>

        <div className="single-link">
          <NavLink to={"/fourth"}>
            <p className="link-number">4</p>
          </NavLink>
          <div className="single-link-info">
            <p className="step-count">STEP 4</p>
            <p className="step-desc">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
