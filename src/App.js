import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import MemesList from "./components/MemesList";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Meme />
      <MemesList/>
    </div>
  );
}
