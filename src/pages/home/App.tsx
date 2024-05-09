import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import CustomButton from '../../components/Button/Button';
import FAQs from '../../components/FAQs/FAQs';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function navigation() {
    navigate('/register');
  }
  return (
    <>
      <Header />
      <div className="covered-by-your-grace-regular text-2xl mx-auto w-40 mt-10" style={{
        color: '#2DA950'
      }}  >
        Success Stories
      </div>
      <div className='mx-auto w-96 text-4xl mt-2 text-center font-semibold'>Every success journey we’ve encountered.</div>

      {/* Main  */}
      <div className="mt-20 flex justify-center relative" style={{ height: '500px' }} >



        {/* Image and Boxes Container w */}
        <div className='h-full flex relative justify-center items-center' style={{ width: '630px' }}>
          <div className='shadow-xl' style={{ height: '450px', width: '380px' }}>
            <img src="images/girl.png" alt="Image" className="rounded-3xl object-initial w-full h-full" />
          </div>

          {/* Green Box  */}
          <div className='p-6 bottom-0 right-0 text-sm rounded-xl absolute transform shadow-xl hover:scale-110 transition duration-300 ease-in-out' style={{ backgroundColor: '#002E18' }}>
            <div style={{ color: '#A6A3A0' }}>
              <div>
                <span className="text-bold text-4xl text-white">$0.5</span>&nbsp;
                <span className="text-lg">MILLION</span>
              </div>
              <div className='w-44 mt-4'>Reduced client expenses by saving on hiring and employee costs.</div>
            </div>
          </div>
          {/* Rocket Box  */}
          <div className="flex justify-between text-sm absolute bottom-12 left-4 bg-white p-3 rounded-full transform shadow-xl hover:scale-110 transition duration-300 ease-in-out">
            <div className='flex justify-center items-center bg-green-100 mx-2' style={{ borderRadius: '50%', width: '40px', }}>
              <img src="rocket.png" alt="Rocket Logo" width={20} />
            </div>
            <div className='mx-2'>
              <div className="text-xl font-bold">
                10 DAYS
              </div>
              <div style={{ color: '#A6A3A0' }}>
                Staff Development
              </div>
            </div>
          </div>
          {/* Third Box  */}
          <div className=" w-56 p-4 text-sm absolute top-24 left-0 bg-white rounded-3xl transform shadow-xl hover:scale-110 transition duration-300 ease-in-out">
            <div className="mx-2 my-2">
              <div className="text-3xl text-bold">
                40%
              </div>
              <div className="text-sm mt-2" style={{ color: '#A6A3A0' }}>
                Achieved reduction in project execution time by optimising team availability
              </div>
            </div>
            <img src="images/sparkle.png" alt="" width={50} className='absolute top-0 left-0' />
          </div>
        </div>
        {/* Carousel Container  */}
        <div className='relative flex justify-center items-center' style={{ width: '500px' }}>
          <img src="images/square-group.png" className='absolute right-0 top-1/4' alt="Square Group" width={400} />
          <Carousel>
            <div className='font-medium'>Enhance fortune 50 company’s insights teams research capabilities</div>
            <div className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maiores ut repel</div>
            <div className='font-medium'>Wullam temporibus porro debitis dolorem, minima dicta accusanti architecto ad.</div>
          </Carousel>
          <div className="absolute bottom-5 left-12">
            <CustomButton onClick={navigation} varient='primary'>Explore More <img className='inline ml-2' src="images/arrow-right-white.svg" alt="Arrow Right" width={20} /></CustomButton>
          </div>
        </div>
      </div>


      {/* FAQs Section */}
      <div className="mt-24 mb-12">
        <FAQs />
      </div>

      {/* Footer  */}
      <Footer />

    </>
  );
}

export default App;
