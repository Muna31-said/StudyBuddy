import { Label, Button, Container, Row, Col } from "reactstrap";
import { useState } from "react";
//import * as yup from "yup";
//import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
// Import the useSelector and useDispatch from react-redux.
import { useDispatch } from "react-redux";

import { registerUser } from "../Features/UserSlice";

const Register = () => {
  // Create the state variables required for all the data from the form.
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // Declare a variable for the useDispatch.
  const dispatch = useDispatch();

  // ✅ Handle form submission
  const handleRegister = () => {
    try {
      // You can handle the form submission here

      const userData = {
        name: name,
        email: email,
        password: password,
      };
      alert("Registered.");
      dispatch(registerUser(userData)); // Dispatch an action to add a new user by passing the user data to the Redux store
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={4}>
          <h1 className="mt-3 mb-3">Register Form</h1>
          {/* Use the register function to register all form elements */}
          {/* Display an error message display for each validation error encountered. */}
          <form onSubmit={handleRegister}>
            <section>
              <div className="form-group mb-3">
                <Label>Student Name</Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter student name..."
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
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
              <Button color="primary" className="button">
                Register
              </Button>
            </section>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
