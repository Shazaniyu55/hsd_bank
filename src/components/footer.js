import React from 'react';
import {FiPhoneCall} from 'react-icons/fi'



const Footer = () => {
  return (
    <footer className=" bg-[#6C6C6C] mt-20 h-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-white">
            <div className={`flex-2 justify-self-center pl-2 tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0`}>
            <div className="space-x-4 text-lg">
            <ul className={`md:px-20 mb-4 mt-2 items-center pr-20 font-medium text-sm justify-center space-y-4 md:flex md:space-x-10 md:space-y-0`}>
                
            <li className={`text-sm `}>
                    <div className="flex items-center">
                      <FiPhoneCall className='mr-2' size={20} />
                      <p className="">Contact</p>

                    </div>
                  </li>

            </ul>
            </div>
              
            </div>
            <div>
              <p className="font-medium">Sponsorship</p>
              
            </div>
            <div>
              <p className="font-medium">Newsletter</p>
             
            </div>
            <div>
              <p className="font-medium">Partner</p>
              
            </div>


            

            


           


          </div>
        </div>
        
      </div>


      
    </footer>
  );
};

export default Footer;