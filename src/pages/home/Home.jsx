import React from 'react';
import NavigationBar from '../../components/navbar/NavigationBar';
import Herosection from '../../components/herosection/Herosection';
import TestimonialSection from '../../components/testimonials/Testimonials';
import NewsletterFooter from '../../components/news/NewsLetterFooter';

const Home =()=>{
  return(
    <>
    <NavigationBar/>
    <Herosection/>
    <TestimonialSection/>
    <NewsletterFooter/>

    </>
  )
}
export default Home