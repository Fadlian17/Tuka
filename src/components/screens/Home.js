import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";
import FreshStories from "../parts/FreshStories";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
