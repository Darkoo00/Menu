import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import HeadlineCards from "./components/Headline";
import Food from './components/Food'
import Category from "./components/Category";
export default function App() {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  );
}
