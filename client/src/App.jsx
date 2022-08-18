import { Navbar, Welcome, Footer, Dapp, SmartContract, Ether, Wallet, Solidity, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Dapp />
    <SmartContract />
    <Ether />
    <Wallet />
    <Solidity />
    <Transactions />
    <Footer />
  </div>
);

export default App;
