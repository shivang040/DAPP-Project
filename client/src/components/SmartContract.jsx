import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const SmartContractCard = ({ color, title, icon, subtitle }) => (
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

const SmartContract = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
     

      <div className="flex-1 flex flex-col justify-start items-center">
        <SmartContractCard
          color="bg-[#F84550]"
        //   title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A Smart Contract (or cryptocontract) is a computer program that directly and automatically 
          controls the transfer of digital assets between the parties under certain conditions."
        />
        <SmartContractCard
          color="bg-[#F84550]"
        //   title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A smart contract works in the same way as a traditional contract while also automatically 
          enforcing the contract. Smart contracts are programs that execute exactly as they are set up(coded, programmed)
           by their creators."
        />
        <SmartContractCard
          color="bg-[#F84550]"
        //   title="Fastest transactions"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="It is intended to automatically execute, 
          control or document legally relevant events and actions according to the terms of a contract or an agreement.
          The objectives of smart contracts are the reduction of need for trusted intermediators, arbitrations costs, 
          fraud losses, as well as the reduction of malicious and accidental exceptions."
        />
      </div>

      <div className="flex-1 flex flex-col justify-start items-end">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Smart Contract
          {/* <br />
          Smart Contract */}
        </h1>
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p> */}
      </div>

    </div>
  </div>
);

export default SmartContract;