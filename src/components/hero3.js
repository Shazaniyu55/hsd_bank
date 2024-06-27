import React from 'react';
import Image from 'next/image';


const AcademyCard2 = () => {



  return (
    <div className="md:bg-white py-12">
      <div className="md:container mx-auto">
        <div className="md:flex justify-center items-center">
            
          {/* Card 1 */}
          <div className="md:w-full sm:w-1/4 md:w-1/4 lg:w-1/8 px-4 mb-8">
          
            <div className="md:rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/america.jpeg'
              alt='academy'
              className="rounded-lg w-full h-40"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-2xl mb-4">Coming To  America</h3>
              <p className="text-gray-600 ">
              What You Need to Know to Get Your Financial House in Order </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/4 md:w-1/8 lg:w-1/8 px-4 mb-8">
          
          <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
            <div className="mb-4 relative">
            <Image src='/fit.jpeg'
            alt='academy'
            className="rounded-lg w-full h-40"
            width={200} height={100}/>
              
              {/* Gradient Effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                }}
              ></div>
            </div>
            <h3 className="text-2xl mb-4">Help</h3>
            <p className="text-gray-600 ">
            Find the answers to customer service questions about your account, online banking, security, and more.            </p>
          </div>
        </div>

          {/* Card 3 */}
          
          {/**card 4 */}
           
        </div>
      </div>

      
    </div>
  );
};

export default AcademyCard2;