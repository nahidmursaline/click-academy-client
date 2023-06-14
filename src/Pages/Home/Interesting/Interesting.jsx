import React from 'react';
import { Bounce, Flip, Zoom } from 'react-awesome-reveal';
import img from '../../../assets/clickk.jpg'

const Interesting = () => {
    return (
        <div className='my-[80px] '>
            <div className="hero py-[60px]  bg-base-200 px-[40px]">
  <div className="hero-content flex-col lg:flex-row">
    <Zoom duration={1000}>
    <img  src={img} className=" w-[490px] rounded-lg shadow-2xl " />
    </Zoom>
   <Bounce>
   <div className='w-full pl-[30px]'>
      <h1 className="text-5xl font-bold">Best Photography School!</h1>
      <p className="py-6">1. Click Academy's website offers a comprehensive course catalog with diverse photography topics. <br /><br />
2. Interactive learning materials like video tutorials and live webinars engage students in the learning process. <br /><br />
3. The website features a vibrant community section for students to connect and share their work. <br /><br />
4. Experienced instructors provide high-quality education and industry insights. <br /><br />
5. The user-friendly website layout ensures easy navigation and a seamless experience.



</p>
     
    </div>
   </Bounce>
  </div>
</div>
        </div>
    );
};

export default Interesting;