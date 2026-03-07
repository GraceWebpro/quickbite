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
import { Helmet } from 'react-helmet'

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

      <Helmet>
        <title>QuickBite | Fast Food Ordering React Template</title>
        <meta
          name="description"
          content="QuickBite is a modern React and Tailwind CSS food ordering UI template designed for restaurants, cloud kitchens, and delivery startups."
        />
        <meta property="og:title" content="QuickBite Food Ordering Template" />
        <meta property="og:description" content="Modern React + Tailwind food ordering UI template." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
      </Helmet>
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
