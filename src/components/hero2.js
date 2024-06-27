import React from "react";
import Link from "next/link";


function Hero(){
    return(
        <div className="grid md:grid-cols-2 mt-10">
           
            <div className="md:container w-full mt-10" 
              style={{
                backgroundImage: 'url(/woman.jpg)', // Replace with your image path
                backgroundSize: 'cover', // This makes the image cover the entire div
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat',
                width: '650px' // Prevents the image from repeating
              }}
            >

            <div className="bg-white w-80 m-10 p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left">International Banking Solutions</h1>
               <p className="text-black">HBS can support your finacial need anywhere around the world .</p>

               <button className="md:text-base hover:bg-black text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-red-500">
          <Link href="/">
            Learn More
          </Link>
        </button>
            </div>

            </div>


            <div className="">
            <div className="bg-gray-700 h-80">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">Our commitment</h1>
               <p className="text-white">Curtain up on our commitment With over 400 commitments, we take part in regional development and coexistence. Experience culture, sport and nature experiences in our beautiful canton with a discount of up to 50%.</p>
               <hr/>

               <p className="text-white">Earn more with our competitive CD rates <br/> 4.80% APY 12-month CD.</p>
               <p className="text-white">4.80% APY 12-month CD</p>
            </div>
            </div>
        </div>
    );
}

export default Hero;