import React from 'react';
import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';


function About(){

  const ServiceCard = ({ imgSrc, title, desc }) => {
    return (
      <div className='md:flex justify-center mt-8'>
      <div className="md:flex items-center space-x-4 text-blue-700">
         <img
          src={imgSrc}
          width="560px"
          height="560px"
          alt="features"
          className="p-4"
        />
  
        <div className='mt-4'>
          <h1 className='text-4xl text-blue-900 font-bold'>HSBC Music Festival</h1>
          <p className='text-blue-600 text-2xl m-4'>
On June 21, 2024, two bands will rock the<br/> festival tent in Urdorf - the SWISS Band and<br/> the Stubete Gäng. As a customer, you benefit<br/> from a 20% online discount.</p>
          <div className='flex mt-4'>
          <p className='m-4'>Discover more</p>
          <FaArrowRight className="text-blue-500 w-10 cursor m-4" size={20}/>
  
          </div>
  
          </div>
       
       
      </div>
      </div>
    );
  };

    return(
        // <Layouts  showNavbar={AdainNavBar} showFooter={Footer}>

        <>
        <NavBar imageSrc="/bank.png"/>
            <div className='md:flex justify-end mt-14 w-full bg-white'>
                  <div className="md:container w-full bg-black md:m-10 p-4">


                <div className="md:flex items-center space-x-4 text-blue-700">
                  <div className="md:flex-1">
                  <h1 className="text-4xl md:text-4xl font-bold text-white">
                  HSBC
                      </h1>
                      
                      <p className="text-white mt-10">
                     
                        As HSBC main partner for media literacy,<br/> we want to support parents. Our partnership<br/> enables free parent events in the canton of Zurich. <br/>Everyone benefits from this.
                      </p>

                      <button className="border-4 border-white m-10 p-4 text-white">Learn More</button>
                  </div>


                  


                 

                  <div className="md:relative w-full flex-1">
                  <Image src="/chat.svg" alt='chat-bubbles' width={450} height={450} className="object-cover  w-full flex-none"/>

                  </div>
                </div>


                </div>
              </div>


              <ServiceCard
            imgSrc='/chat.svg'
            title="Media contacts"
           
          />



          
<div className='md:flex justify-end mt-8'>
<div className="md:container md:w-full bg-blue-100 md:m-10 p-4">

<div className="md:flex items-center space-x-4 text-blue-700">
<Image src="/workers.svg" className="-translate-y-34" alt='chat-bubbles' width={450} height={450}/>
<div className="flex-1">
<h1 className='text-4xl md:text-4xl font-bold text-blue-700'>What interests you today?</h1>
<div className="grid grid-cols-2 gap-4 mt-8">

                  <p className="font-bold text-2xl">Information and media</p>
                  <p className="font-bold text-2xl">Jobs and careers</p>
                  <p className="font-bold text-2xl">Sponsorship</p>
                  <p className="font-bold text-2xl">Sustainability</p>

                  <p className="font-bold text-2xl">Investor relations</p>
                  <p className="font-bold text-2xl">Our performance mandate</p>

                
                
              </div>
  </div>
</div>



          



               



            </div>
            </div>

<Footer/>
      

              </>
            
        // </Layouts>
    );
}

export default About;