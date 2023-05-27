import React from "react";
import Book1 from "../../../assets/img/book1.jpeg";
import Tech1 from "../../../assets/img/tech2.jpg";
import Tech2 from "../../../assets/img/hacka.jpg";

const Footer = () => (
  <section>
    <div className="flex flex-col justify-center align-center p-10 bg-[#E3F4F4]">
      <h1 className="customFont m-10 text-xl lg:m-20 lg:text-2xl">
        Other Stuff
      </h1>
      <div className="lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row">
        <div className="shadowbox flex flex-col align-center w-fit h-fit mt-4">
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border border-black border-b-2">
            <img
              src={Book1}
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Tech Talk"
            />
          </div>
          <hr />
          <div>
            <p className="p-4">
              <a
                className="no-underline hover:underline"
                href="https://www.packtpub.com/product/a-blueprint-for-production-ready-web-applications/9781803248509"
                target="_blank"
              >
                Quart Async Framework | Book Reviewer
              </a>
            </p>
          </div>
        </div>
        <div className="shadowbox flex flex-col align-center w-fit h-fit mt-4">
          <div className="flex flex-row align-center border border-black">
            <div class="relative max-w-xs lg:max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src={Tech1}
                class="max-w-xs lg:max-w-xl transition duration-300 ease-in-out hover:scale-150"
                alt="Tech Talk"
              />
            </div>
          </div>
          <div>
            <p className="p-4">
              <a
                className="no-underline hover:underline"
                href="https://docs.google.com/presentation/d/10zHL72s9JVvrioXTJWKVb7N-P_k6mPSUtVIoGeLbfUU/edit?usp=sharing
"
                target="_blank"
              >
                Tech Talk On CDC using Kafka by @ME
              </a>
            </p>
          </div>
        </div>
        <div className="shadowbox flex flex-col align-center w-fit h-fit mt-4">
          <div className="flex flex-row align-center border border-black ">
            <div class="relative max-w-xs  lg:max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src={Tech2}
                class=" max-w-sm lg:max-w-lg transition duration-300 ease-in-out hover:scale-150"
                alt="hackathon"
              />
            </div>
          </div>
          <div>
            <p className="p-4">Credgenics Hackathon</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
