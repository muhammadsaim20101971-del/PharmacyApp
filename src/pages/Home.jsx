import React from 'react'
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import CategoryHighlights from "../components/CategoryHighlights";
import WhyChooseUs from '../components/WhyChooseUs';
import BranchLocator from '../components/BranchLocator';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryHighlights />
      <WhyChooseUs />
      <BranchLocator />
      <BlogPreview />
      <Footer />
    </div>
  )
}

export default Home;
