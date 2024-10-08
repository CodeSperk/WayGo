import React from 'react';
import WhyChooseUs from '../Components/WhyChooseUs';
import Testimonial from '../Components/Testimonial';
import Consult from '../Components/Consult';
import OurServices from '../Components/OurServices/OurServices';
import Banner from '../Components/Banner/banner';
import AboutShuttle from '../Components/AboutShuttle/About';
import HotDeal from './HotDeal/page';

const Page = () => {
  return (
    <div className="flex  flex-col gap-10">

      <div className=' '>
        <Banner />

      </div>

      <main>
        {/* About shuttle section */}
        <section>
          <HotDeal />
          <AboutShuttle />
        </section>
        <WhyChooseUs />
        <OurServices />
        <Testimonial />
        <Consult/>
      </main>
    </div>
  );
};

export default Page;
