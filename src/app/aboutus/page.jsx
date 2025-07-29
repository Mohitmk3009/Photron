// App.js
import React from 'react';
import Header from '../components/Header';
import AboutUsPage from '../components/AboutUsPage';
import Footer from '../components/Footer';
// You would typically import icons from 'lucide-react' if you were using them.
// For this example, we'll use simple text or inline SVGs if needed.

const page = () => {
  return (
    <div >
      {/* Main Content Area */}
      <Header />
      <AboutUsPage/>
      <Footer />
    </div>
  );
};

export default page;
