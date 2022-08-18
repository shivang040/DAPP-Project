import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const SolidityCard = ({ color, title, icon, subtitle }) => (
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

const Solidity = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          What is
          <br />
          Solidity
        </h1>
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling
        </p> */}
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <SolidityCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Solidity is an object-oriented programming language created specifically by the Ethereum Network
           team for constructing and designing smart contracts on Blockchain platforms."
        />

        <SolidityCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="It's used to create smart contracts that implement business logic and generate a chain of transaction records in the blockchain system.
          It acts as a tool for creating machine-level code and compiling it on the Ethereum Virtual Machine (EVM)."
        />

        <SolidityCard
          color="bg-[#2952E3]"
          // title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Solidity is currently the core language on Ethereum and other private blockchains operating on competing platforms, such as Monax and
           its Hyperledger Burrow blockchain which uses Tendermint for consensus. "
        />


      </div>
    </div>
  </div>
);

export default Solidity;