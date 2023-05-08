import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember, role } = values;

    if (!email || !password || (!isMember && !name && !role)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password, role };
    console.log(currentUser);
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        {/* <Logo /> */}
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {!values.isMember && (
          <div className="form-row">
            <label className="form-label">Role</label>
            <select
              className="form-input"
              name="role"
              value={values.role}
              onChange={handleSelect}
            >
              <option value=""></option>
              <option value="doctor">Doctor</option>
              <option value="user">User</option>
              <option value="parmacy">Parmacy</option>
            </select>
          </div>
          // <FormRow
          //   type="text"
          //   name="role"
          //   value={values.role}
          //   handleChange={handleChange}
          // />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member ?" : "Already a member ?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
