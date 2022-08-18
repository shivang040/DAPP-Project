import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const DappCard = ({ color, title, icon, subtitle }) => (
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

const Dapp = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What are
          <br />
          Decentralized Applications
        </h1>
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling
        </p> */}
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <DappCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A decentralized application (dApp) is a type of distributed open source software application
           that runs on a peer-to-peer (P2P) blockchain network rather than on a single computer."
        />

        <DappCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A decentralised application is an application that can operate autonomously, typically through the use of
             smart contracts, that run on a decentralized computing, blockchain or other distributed ledger system. "
        />

        <DappCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="DApps operate without human intervention and are not owned by any one entity, rather DApps distribute tokens
           that represent ownership.[3][4] These tokens are distributed according to a programmed algorithm to the users of the
            system, diluting ownership and control of the DApp."
        />
    
      </div>
    </div>
  </div>
);

export default Dapp;