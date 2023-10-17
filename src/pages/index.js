import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="jumbotron p-5 mb-4">Welcome</h1>
      <p>Explore and learn with us.</p>

      <Link href="/login">Login</Link>
    </>
  );
};

export default Home
