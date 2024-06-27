import React from 'react';
import Link from 'next/link';
import {FaFacebook, FaLinkedinIn, FaTwitter, FaInstagramSquare} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className="border-t border-blu-600 border-neutral-200 bg-black mt-20  px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-white">
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm">
              <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Help area
                </Link>

                

                
              </nav>
            </div>
            <div>
              <p className="font-medium">Sponsorship</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm ">
                <Link
                  href="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  zoo
                </Link>
                

                
               
              </nav>
            </div>
            <div>
              <p className="font-medium">Newsletter</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Customer magazine ZH
                </Link>
                

                
              </nav>
            </div>
            <div>
              <p className="font-medium">Partner</p>
              <nav className="flex text-xs font-medium flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  AXA

                </Link>
                
              </nav>
            </div>


          

            


           


          </div>
        </div>
        
      </div>


      <section className="w-full border-t md:grid grid-cols-2 gap-4 border-blue-500 bg-black ">
        <div className="mt-4">
        <p className="leading-loose tracking-tighter line-clamp-3 text-center leading-normal text-2xl text-white">© Hsd 1995 - 2024</p>         
        </div>


           
      </section>
    </footer>
  );
};

export default Footer;