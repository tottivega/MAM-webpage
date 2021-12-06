import React, { useState, useEffect } from "react";
const ethereum = window.ethereum;

export default EthereumIntegration = () => {
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [integrationState, setIntegrationState] = useState();

  useEffect(() => {
    const connect = async () => {
      if (!ethereum) return setIntegrationState("noWeb3");
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        if (!account) return setIntegrationState("noAccount");
        setAccount(account);

        const chain = await ethereum.request({ method: "eth_chainId" });
        if (chain !== undefined) return setChainId(chain);
        else return setIntegrationState("noChain");
      } catch (error) {
        setIntegrationState("noAccess");
      }
    };

    connect();

    ethereum.on("accountsChanged", (accounts) => {
      if (accounts?.[0]) setAccount(accounts[0]);
    });
    ethereum.on(
      "chainChanged",
      (_chainId) => _chainId !== undefined && setChainId(_chainId)
    );
  }, []);

  if (integrationState === "noWeb3")
    return <div>Looks like your browser doesn't support web3</div>;
  if (integrationState === "noAccount")
    return <div>For some reason we couldn't find your account</div>;
  if (integrationState === "noChain")
    return (
      <div>
        For some reason we couldn't access the blockchain your wallet is
        connected to
      </div>
    );
  if (integrationState === "noAccess")
    return (
      <div>
        Seems like you did not allow us to connect to your wallet, that's fine!
      </div>
    );

  return (
    <div>
      Account: {account || "unknown"}, Chain: {getChain(chainId)}
    </div>
  );
};

function getChain(hexValue) {
  const chainId = Number(hexValue);
  if (chainId === 137) return "Polygon MATIC";
  if (chainId === 1) return "Ethereum ETH";
  return "unknown chain";
}
