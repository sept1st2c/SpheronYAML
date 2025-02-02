"use client";
import { useState } from "react";
import React from "react";
import { Menu, User } from "lucide-react";
import ChatbotPage from "../chatbot/page";
import YamlEditor from "../components/YamlEditor";

const Header = () => (
  <header className="border-b border-gray-200">
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-3">
        <Menu className="h-6 w-6" />
        <div className="flex items-center">
          <img
            src="/api/placeholder/24/24"
            alt="Console Logo"
            className="h-6"
          />
          <span className="ml-2 font-semibold">Console</span>
        </div>
      </div>

      <nav className="flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span className="text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              width="12px"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="white"
                stroke="rgb(92, 92, 102)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"
              ></path>
            </svg>
          </span>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="rgb(92, 92, 102)"
                d="M4.529 9.333A2.75 2.75 0 0 1 7.26 6.25h9.538a2.75 2.75 0 0 1 2.737 3.015l-.124 1.289a5.75 5.75 0 0 1-5.724 5.196h-3.283a5.75 5.75 0 0 1-5.708-5.054zM7.26 7.75a1.25 1.25 0 0 0-1.241 1.401l.166 1.364a4.25 4.25 0 0 0 4.219 3.735h3.283a4.25 4.25 0 0 0 4.23-3.84l.125-1.29a1.25 1.25 0 0 0-1.244-1.37z"
                clipRule="evenodd"
              ></path>
              <path
                fill="rgb(92, 92, 102)"
                fillRule="evenodd"
                d="M3.272 4.818a.75.75 0 0 1 .91-.546l.466.117a3.63 3.63 0 0 1 2.564 2.374.75.75 0 0 1-1.424.474 2.13 2.13 0 0 0-1.504-1.393l-.466-.116a.75.75 0 0 1-.546-.91M15.5 17.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8.5 17.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span>Marketplace</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="w-5 h-5"
            >
              <path
                fill="rgb(92, 92, 102)"
                d="M9.998 2a.36.36 0 0 0-.174.043L7.227 3.49l2.771 1.51 2.782-1.5-2.608-1.456A.36.36 0 0 0 9.998 2m-3.13 2.087v.988L3.566 6.912a.35.35 0 0 0-.174.304v3l-1.054.587 2.793 1.5 2.76-1.511-2.586-1.446a.37.37 0 0 0-.348 0l-.87.478V7.423L6.87 5.88v1.108c0 .126.063.243.173.304l2.609 1.446v-3.13zm6.26.021-2.782 1.5v3.13l2.608-1.446a.34.34 0 0 0 .174-.304V5.88l2.782 1.543v2.412l-.87-.489a.37.37 0 0 0-.347 0l-2.597 1.446 2.77 1.51 2.761-1.51-1.021-.576v-3a.34.34 0 0 0-.174-.304l-3.304-1.837zm-4.868 7.27-2.782 1.533v3.13l.456-.25 3.89 2.162c.108.063.24.063.348 0l3.89-2.162.457.25v-3.13l-2.782-1.522v2.902c0 .126.064.243.174.304l1.434.793-3.347 1.859-3.347-1.858 1.435-.794a.34.34 0 0 0 .174-.304zm9.737 0-2.782 1.533v3.13l2.608-1.446a.34.34 0 0 0 .174-.304zM2 11.411v2.88c0 .126.064.243.174.304l2.608 1.446v-3.13z"
              ></path>
            </svg>
          </span>
          <span>Models</span>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              className="w-5 h-5"
            >
              <path
                fill="rgb(92, 92, 102)"
                d="M3 1a2 2 0 0 0-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2V3a2 2 0 0 0-2-2zm0 4h14v12H3zm5 2.793L4.793 11 8 14.207l1-1L6.793 11 9 8.793zm4 0-1 1L13.207 11 11 13.207l1 1L15.207 11z"
              ></path>
            </svg>
          </span>
          <span>Playground</span>
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <span className="text-gray-900">$ 0.00</span>
        <button className="bg-black text-white px-4 py-1.5 rounded text-sm font-medium">
          Deposit
        </button>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Documentation
        </a>
        <User className="h-6 w-6" />
      </div>
    </div>

    <div className="bg-black text-white py-1 overflow-hidden w-screen">
      <div className="flex w-max animate-marquee space-x-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 px-4">
                <div className="flex items-center space-x-1">
                  <span className="text-green-400 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path fill="#76B900" d="M23.5 4H9v16h14.5z"></path>
                      <path
                        fill="#FAFAFA"
                        d="M9 8.84c.26-.025.525-.045.785-.035 2.475 0 3.95 1.925 3.95 1.925l-2.015 1.695c-.9-1.51-1.215-2.175-2.72-2.355zm0 5.52c.365.12.76.18 1.15.18 2.94 0 5.675-3.8 5.675-3.8S13.29 7.285 9.42 7.41c-.14 0-.28.01-.42.015v-1.15l.42-.025c5.38-.185 8.89 4.41 8.89 4.41s-4.025 4.9-8.22 4.9c-.365 0-.735-.035-1.09-.095zm.975 3.685a9 9 0 0 1-.975-.05v-1.22c.295.035.61.06.905.06 3.91 0 6.735-1.995 9.47-4.35.455.365 2.31 1.245 2.695 1.63-2.6 2.18-8.66 3.93-12.095 3.93"
                      ></path>
                      <path
                        fill="#76B900"
                        d="M9 14.359v1.116c-3.61-.646-4.612-4.403-4.612-4.403S6.123 9.154 9 8.84v1.22h-.008c-1.509-.183-2.694 1.23-2.694 1.23s.67 2.38 2.702 3.069"
                      ></path>
                    </svg>
                  </span>
                  <span>rtx6000-ada</span>
                  <span className="bg-white px-1 rounded text-black text-xs font-bold">
                    x16
                  </span>
                  <span>$0.85/hr</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    <style jsx global>{`
      /* Remove any body padding and margin */
      body,
      html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-marquee {
        animation: marquee 200s linear infinite;
      }
    `}</style>
  </header>
);

const Instructions = () => (
  <div className="space-y-6 w-3/4 py-6">
    <h2 className="text-gray1 text-lg font-semibold flex items-center justify-between">
      Playground Instructions:
      <a href="#" className="text-black text-xs font-thin hover:underline">
        Learn about ICL →
      </a>
    </h2>
    <ol className="space-y-4 list-decimal pl-4 text-gray1">
      <li>
        Enter your deployment configuration in the required{" "}
        <span className="font-semibold text-gray1">YAML</span> format.
      </li>
      <li>
        Make sure you have enough test ETH in your wallet to cover the testing
        and deployment.{" "}
        <a href="#" className="font-semibold underline">
          Get ETH from Faucet
        </a>{" "}
        or use Arbitrum Sepolia ETH and{" "}
        <a href="#" className="text-gray1 font-semibold underline">
          bridge
        </a>{" "}
        it to the Spheron Chain to complete your registration.
      </li>
      <li>
        Check out{" "}
        <a href="#" className="text-gray1 font-semibold underline">
          provider.spheron.network
        </a>{" "}
        or{" "}
        <a href="#" className="text-gray1 font-semibold underline">
          fizz.spheron.network
        </a>{" "}
        to see the available GPUs and deployment regions.
      </li>
      <li>
        Click{" "}
        <span className="font-semibold text-gray1">"Start Deployment"</span> to
        start your deployment and see the output in real-time.
      </li>
    </ol>

    <div className="mt-8">
      <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
        <img
          src="/api/placeholder/640/360"
          alt="Video Thumbnail"
          className="rounded-lg"
        />
      </div>
      <p className="mt-2 text-gray-600">
        Checkout this guide to know how to use playground to deploy on GPU.
      </p>
    </div>
  </div>
);

const SpheronInterface = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleStartChat = () => {
    setShowChatbot(true); // Show the chatbot when the button is clicked
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-3 py-8">
        <div className="flex justify-between items-start space-x-8">
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Test Your Application in Real-Time
                </h1>
                <p className="text-gray-600 mt-1">
                  Configure your deployment using the YAML CLI
                </p>
              </div>
              <button className="bg-black text-white px-7 py-2.5 rounded font-medium mb-4">
                Start Deployment
              </button>
            </div>
            <YamlEditor />
          </div>

          {/* <div className="w-1/3">
            <button className="w-full bg-black text-white px-6 py-2.5 rounded font-medium mb-4">
              Start Deployment
            </button>
            <button className="w-full border border-gray-300 px-6 py-2.5 rounded font-medium mb-8">
              Get Sample YAML
            </button>
            
          </div> */}
          <div className="w-2/3">
            <button
              className=" bg-black text-white px-7 py-2.5 rounded font-medium mb-4"
              onClick={handleStartChat}
            >
              Start Chat
            </button>
            {showChatbot && <ChatbotPage />}
            <Instructions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpheronInterface;
