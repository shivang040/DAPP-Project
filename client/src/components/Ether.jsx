import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const EtherCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Ether = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What is
          <br />
          Ethereum
        </h1>
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling
        </p> */}
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <EtherCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Ethereum is a decentralized global software platform
           powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether, or ETH."
        />

        <EtherCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ)
           is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market 
           capitalization."
        />
    
        <EtherCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Ethereum can be used by anyone to create any secured digital technology. It has a token designed
           for use in the blockchain network, but it can also be used by participants as a method to pay for work done
            on the blockchain."
        />

      </div>
    </div>
  </div>
);

export default Ether;