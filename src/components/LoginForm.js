import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = () => {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // if (email === "aiman@gmail.com" && password === "aiman@123") {
    //   router.push("/dashboard");
    // } else {
    //   alert("Invalid username or password. Login Failed!");
    //   }

    try {
      const response = await axios.post(`/api/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        // User is authenticated
        router.push("/dashboard");
      } else {
        alert("Invalid username or password. Login Failed!");
      }
    } catch (error) {
      console.error("Login error:", error);

      alert("Invalid username or password. Login Failed!");
    }
  };

  return (
    <div className="container col-md-4 offset-md-4 pb-5">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-4 p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <input
          type="password"
          className="form-control mb-4 p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn  btn-block btn-primary">
            Submit
            {/* {loading ? <SyncOutlined spin /> : "Submit"} */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
