import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <span className="text-blue-600">A</span>DAIN
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              People Technology possibilities
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/profile.php?id=100091835923247"
                target="_blank"
              >
                <FaFacebook size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              
             
              <Link href="https://twitter.com/QuickmedNG?s=09" target="_blank">
                <FaTwitter size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.instagram.com/quickmed_ng/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
              >
                <FaInstagram size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/About"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                <Link
                  href="/About"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Vision
                </Link>
                <Link
                  href="/About"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Mission
                </Link>
                <Link
                  href="/About"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our Team
                </Link>
              </nav>
            </div>
            
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                
                <Link
                  href="/terms"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                
               
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2023 Adain  All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;