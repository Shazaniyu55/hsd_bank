import React from 'react';
import Image from 'next/image';


const AcademyCard = () => {



  return (
    <div className="md:bg-white py-12 mt-5">
      <div className="md:container mx-auto">
        <div className="md:flex justify-center items-center">
            
          {/* Card 1 */}
          <div className="md:w-full sm:w-1/8 md:w-1/8 lg:w-1/4 px-4 mb-8">
          
            <div className="md:rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/clcok.jpeg'
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
              <h3 className="text-2xl mb-4">Access the world with one account</h3>
              <p className="text-gray-600 ">
              Make online transactions in eight different currencies from the convenience of the HSBC Mobile Banking App with your Global Money Account.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/8 px-4 mb-8">
          
          <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
            <div className="mb-4 relative">
            <Image src='/app.jpeg'
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
            <h3 className="text-2xl mb-4">Access the world with one account</h3>
            <p className="text-gray-600 ">
            Make online transactions in eight different currencies from the convenience of the HSBC Mobile Banking App with your Global Money Account.
            </p>
          </div>
        </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/8 px-4 mb-8">
          
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <Image src='/tik.jpeg'
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
              <h3 className="text-2xl mb-4">Access the world with one account</h3>
              <p className="text-gray-600 ">
              Make online transactions in eight different currencies from the convenience of the HSBC Mobile Banking App with your Global Money Account.
              </p>
            </div>
          </div>
          {/**card 4 */}
           
        </div>
      </div>

      
    </div>
  );
};

export default AcademyCard;