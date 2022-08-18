import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const WalletCard = ({ color, title, icon, subtitle }) => (
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

const Wallet = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
     

      <div className="flex-1 flex flex-col justify-start items-center">
        <WalletCard
          color="bg-[#F84550]"
        //   title="Security gurantee"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="A blockchain wallet is a cryptocurrency wallet that allows users to manage different kinds of
           cryptocurrencies—for example, Bitcoin or Ethereum. A blockchain wallet helps someone exchange funds easily.
           Transactions are secure, as they are cryptographically signed."
        />
        <WalletCard
          color="bg-[#F84550]"
        //   title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="The wallet is accessible from web devices, including mobile ones, and the privacy and identity of
           the user are maintained. So a blockchain wallet provides all the features that are necessary for safe and
            secure transfers and exchanges of funds between different parties."
        />
        <WalletCard
          color="bg-[#F84550]"
        //   title="Fastest transactions"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="While software runs on a blockchain, a personal blockchain wallet is defined by a randomly
           generated 32 alphanumeric characters called the wallet address, the same way a bank account is defined
            by a bank account number."
        />
      </div>

      <div className="flex-1 flex flex-col justify-start items-end">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Wallet in
          <br />
          Blockchain
        </h1>
        {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p> */}
      </div>

    </div>
  </div>
);

export default Wallet;