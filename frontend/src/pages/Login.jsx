import { useState } from "react"; // useState is a React hook used to store and update local state within the component
import { useDispatch } from "react-redux"; // useDispatch allows this component to send actions to the Redux store
import axios from "axios"; // Axios is used to make HTTP requests to the backend server
import { login } from "../slices/authSlice"; // Importing the 'login' action creator from the authSlice (part of Redux Toolkit slice)
import { useNavigate } from "react-router-dom"; // useNavigate provides programmatic navigation (like redirecting to a new page)

const Login = () => {
  // Local state to track the value of the email input field
  const [email, setEmail] = useState("");

  // Local state to track the value of the password input field
  const [password, setPassword] = useState("");

  // useDispatch returns the Redux dispatch function, which is used to send actions to the Redux store
  const dispatch = useDispatch();

  // useNavigate returns a navigation function used to redirect the user after login
  const navigate = useNavigate();

  // This function is triggered when the login form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form behavior, which would refresh the page

    try {
      // Send a POST request to the backend API with the email and password
      // The object { email, password } is extracted from local component state
      const { data } = await axios.post("http://localhost:4000/api/auth/login", { email, password });

      // If the response is successful, the server sends back data (typically including a JWT token)

      // Dispatch the 'login' action with the token to store it in Redux state
      // This updates the global auth state, which can be used throughout the app to check if the user is logged in
      dispatch(login(data.token));

      // After successful login, redirect the user to the homepage using React Router's navigate
      navigate("/");
    } catch (error) {
      // If the API call fails (wrong credentials, network error, etc.), show an alert
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> {/* When the form is submitted, it triggers handleSubmit */}
        {/* Input for user's email. Every keystroke updates the 'email' state */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} // Update the email state as user types
        />

        {/* Input for user's password. Every keystroke updates the 'password' state */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} // Update the password state as user types
        />

        {/* Button to submit the form. Triggers handleSubmit on click */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; // Export the Login component so it can be used in other parts of the app
