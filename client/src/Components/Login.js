import { Label, Button, Container, Row, Col } from "reactstrap";
import { useState } from "react";
//import * as yup from "yup";
//import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
// Import the useSelector and useDispatch from react-redux.
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Features/UserSlice";

const Login = () => {
  // Create the state variables required for all the data from the form.
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users?.user);
  const isSuccess = useSelector((state) => state.users?.isSuccess);

  // ✅ Handle form submission
  const handleLogin = (e) => {
    if (e) e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isSuccess, user, navigate]);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={4}>
          <h1 className="mt-3 mb-3">Login Form</h1>
          {/* Use the Login function to Login all form elements */}
          {/* Display an error message display for each validation error encountered. */}
          <form>
            <section>
              <div className="form-group mb-3">
                <Label>Email</Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email..."
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <Label>password</Label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password..."
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <Button
                color="primary"
                className="button"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </Button>
            </section>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
