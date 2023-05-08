import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
// import { useAppContext } from "../context/appContext";

import Logo from "./Logo";
// import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  return (
    <Wrapper>
      {/* <div className={"sidebar-container show-sidebar"}> */}
      <div className="content">
        <button className="close-btn">
          <FaTimes />
        </button>
        <header>
          <Logo />
        </header>
        {/* <NavLinks toggleSidebar={toggleSidebar} /> */}
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default SmallSidebar;
