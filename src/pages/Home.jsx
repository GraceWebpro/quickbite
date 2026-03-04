import React, { useEffect, useState, useMemo } from 'react'
import Hero from '../components/sections/Hero'
import Testimonials from '../components/sections/Testimonials'
import MenuSection from '../components/sections/MenuSection'
import HowItWorks from '../components/sections/HowItWorks'
import CategoriesSection from '../components/sections/Categories'
import PeopleNearYou from '../components/sections/PeopleNearYou'
import DeliveryEstimate from '../components/sections/DeliveryEstimate'
import FinalCTA from '../components/sections/FinalCTA'
import AboutPremium from '../components/sections/AboutPremium'
import BrowseMealsPreview from '../components/sections/BrowseMealsPreview'
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../components/hooks/useScrollSpy";
import { mealsData } from "../data/meals";


function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredMeals = useMemo(() => {
    if (selectedCategory === "all") return mealsData;

    return mealsData.filter(
      (meal) => meal.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div>
      <main>
        <Hero />
        <HowItWorks />
        <CategoriesSection
          meals={mealsData} 
          onSelect={setSelectedCategory} 
        />        
        <MenuSection />
        <PeopleNearYou />
        <BrowseMealsPreview />
        <AboutPremium />
        <Testimonials />
        <DeliveryEstimate />
        <FinalCTA />
      </main>
    </div>
  )
}

export default Home
