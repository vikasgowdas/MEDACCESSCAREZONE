import Wrapper from "../assets/wrappers/BigSidebar";
// import NavLinks from "./NavLinks";
import Logo from "../components/Logo";

const BigSidebar = () => {
  return (
    <Wrapper>
      {/* <div className={"sidebar-container show-sidebar"}> */}
      <div className="content">
        <header>
          <Logo />
        </header>
        {/* <NavLinks /> */}
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default BigSidebar;
