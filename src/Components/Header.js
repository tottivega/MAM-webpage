import React, { Component, useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
const ethereum = window.ethereum;

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        {/* Go back to first commit and fix navigation */}

        <div className="row banner">
          <div className="banner-text">
            <Fade top>
              <h1
                className="responsive-headline"
                style={{ color: "black", marginTop: 48 }}
              >
                Mexican Art Machine
              </h1>
            </Fade>
            <div style={{ marginTop: -120 }}>
              <img
                src="https://i.imgur.com/iiMBfzg.png"
                style={{ objectFit: "cover", objectPosition: "20% 10%" }}
              />
            </div>
            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

const EthereumIntegration = () => {
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
      Account: {account}, Chain: {getChain(chainId)}
    </div>
  );
};

function getChain(hexValue) {
  const chainId = Number(hexValue);
  if (chainId === 137) return "Polygon MATIC";
  if (chainId === 1) return "Ethereum ETH";
  return "unknown chain";
}
