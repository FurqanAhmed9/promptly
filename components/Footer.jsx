"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full mt-96 ">
        <div className="grid mb-7 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex mt-4">
            <Footer.Brand
              className="logo_footer text-lg"
              alt="Promptly Logo"
              href="/"
              src="/assets/images/logo.svg"
            />
            <p className="logo_text_footer mt-3">Promptly</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="font-satochi text-xl">
              <Footer.Title className="font-satochi text-xl" title="About" />
              <Footer.LinkGroup className="font-satochi text-sm" col>
                <Footer.Link href="/">Promptly</Footer.Link>
                {/* <Footer.Link href="#">
                  
                </Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="font-satochi text-xl"
                title="Follow us"
              />
              <Footer.LinkGroup className="font-satochi text-sm" col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="font-satochi text-xl" title="Legal" />
              <Footer.LinkGroup className="font-satochi text-sm" col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full my-5 text-xl sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright by=" Promptly™" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
