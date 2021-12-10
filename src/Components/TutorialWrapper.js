import React, { useEffect } from "react";

function TutorialWrapper({ navigation, navigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [navigation]);
  return (
    <div className="Tutorial">
      <div onClick={() => navigate("")} className="backhome">
        &bull; Go back to Homepage
      </div>
      {navigation === "wallet" && <WalletTutorial navigate={navigate} />}
      {navigation === "bid" && <BidTutorial navigate={navigate} />}
      {navigation === "walletMobile" && (
        <WalletMobileTutorial navigate={navigate} />
      )}
      {navigation === "bidMobile" && <BidMobileTutorial navigate={navigate} />}
    </div>
  );
}

export default TutorialWrapper;

function WalletTutorial({ navigate }) {
  return (
    <div>
      <h2>
        - This tutorial is for <span className="tutorial-span">desktop</span>,
        if you want to do this on your mobile phone, follow{" "}
        <a onClick={() => navigate("walletMobile")}>this tutorial</a> instead
      </h2>
      <div style={{ marginBottom: 40 }}></div>
      <h1 className="tutorial-h1">1) Download Temple Wallet</h1>
      <div className="tutorial-div">
        To join the crypto world, you will first need to create a wallet to hold
        your cryptocurrencies, specifically you will want to create a XTZ
        (Tezos) wallet
      </div>
      <div className="tutorial-div">
        First download the Tezos Temple Wallet{" "}
        <a
          href="https://templewallet.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . This is a browser extension, you will find it at the top right of your
        browser under your extensions.
      </div>
      <div className="tutorial-div">
        Now when the extension is installed, another browser tab will pop up
        with the options to Import existing Wallet or Create a new Wallet
      </div>
      <div className="tutorial-div">
        Click on Create a new Wallet and make a password to protect said wallet,
        make sure to keep this password in a safe place. Click on Create
      </div>
      <div className="tutorial-div">
        Click on Create a new Wallet and make a password to protect said wallet,
        make sure to keep this password in a safe place. Accept the terms and
        click on Create
      </div>
      <div className="tutorial-div">
        You will then see a screen to reveal your seed phrase, click on the
        PROTECTED gray rectangle to reveal your seed phrase. Make sure you store
        this seed phrase on a very secure location, perhaps on a real piece of
        paper, as this is the only way to recover your wallet and assets.
      </div>
      <div className="tutorial-div">
        Select the checkbox for I made a Seed Phrase Backup once you have
        recorded it somewhere safe and click on Continue. You will need to
        confirm your Seed Phrase on the next screen, so keep it close by.
      </div>
      <div className="tutorial-div">
        That's it! Your Temple Wallet is properly set up, now you need to add
        some Tezos to it
      </div>
      <h1 className="tutorial-h1">2) Buy crypto (Bitso or Binance)</h1>
      <div className="tutorial-div">
        For the next step, you will need to convert fiat currency (MXN, USD,
        EUR, etc..) into crytpo currency
      </div>
      <div className="tutorial-div">
        For this, you will need to use an Exchange. If you live in Mexico, the
        best options for you would be Bitso or Binance
      </div>
      <div className="tutorial-div">
        On both of those exchanges you will need to validate your personal
        information with them, they might ask you to submit a picture of one of
        your legal documents, like a drivers license, passport or INE
      </div>
      <div className="tutorial-div">
        This verification step can take some time, so you will want to be
        already set up by the time our collecton goes live!
      </div>
      <h3>Bitso</h3>
      <div className="tutorial-div">
        Unfortunately, Bitso doesn't support XTZ (Tezos) just yet, however it's
        very simple to buy another cryptocurrency and then convert it into XTZ
        (Tezos) through your Temple wallet, here are the steps:
      </div>
      <div className="tutorial-div">
        There are a few cryptos supported by the Temple wallet to convert into
        XTZ (Tezos). Here's the full list: BTC, ETH, XMR, 1INCH, AR, AVAX, AXS,
        CELO, LINK, COMP, ATOM, CRV, DOGE, EPS, EOS, FTM, FLOW, KAVA, KSM, LTC,
        MKR, NEAR, CAKE, DOT, QUICK, RENBTC, SHIB, SOL, SUSHI, LUNA, USDTERC20,
        UNI, XVS, YFI
      </div>
      <div className="tutorial-div">
        The best from the list when you're coming from Bitso is LTC, as you will
        only pay something like 2 cents for the transaction!
      </div>
      <div className="tutorial-div">
        First select the MXN option to deposit money into your Bitso account
      </div>
      <div className="tutorial-div">
        Then select the "Convert" option under your MXN and select LTC from the
        options
      </div>
      <div className="tutorial-div">
        Buy as much LTC as you want to convert to XTZ (Tezos). At the time of
        writing this: 1 LTC = $154.44 USD = 32.67 XTZ (Tezos)
      </div>
      <div className="tutorial-div">
        Once you have your LTC ready in Bitso, you can move on to step 3 of the
        tutorial
      </div>
      <h3>Binance</h3>
      <div className="tutorial-div">
        You can buy XTZ (Tezos) directly from Binance!
      </div>
      <div className="tutorial-div">
        If you have other cryptos on your Binance account, it's very simple to
        trade it into XTZ (Tezos). Just go into the Trade section of the app and
        convert it!
      </div>
      <div className="tutorial-div">
        You can also purchase XTZ (Tezos) directly from your credit card, find
        the big button in the Binance homepage "Credit/Debit Card". Enter your
        card information, pay, and that's it!
      </div>
      <div className="tutorial-div">
        Once you have your XTZ ready in Binance, you can move on to step 3 of
        the tutorial
      </div>
      <h1 className="tutorial-h1">
        3) Buy or transfer into Tezos on your temple wallet
      </h1>
      <div className="tutorial-div">
        Time to get your XTZ (Tezos) out of the exchange and into your Temple
        wallet so you can buy some NFTs
      </div>
      <div className="tutorial-div">
        Use the section below that describes the current state you're in with
        your exchange
      </div>
      <h3>I used Bitso, and I have LTC now </h3>
      <div className="tutorial-div">
        Open up your Temple wallet, remember that it's a browser extension, you
        can find it at the top right of your browser under your extensions
      </div>
      <div className="tutorial-div">
        Click on the Buy button with a shopping cart icon. You will land into a
        screen that lets you convert cryptocurrencies into XTZ (Tezos)
      </div>
      <div className="tutorial-div">
        Select LTC and input the amount of LTC you wish to transfer.
      </div>
      <div className="tutorial-div">
        You will then see a screen that shows an address for you to deposit your
        LTC. Go into Bitso, select your LTC and click on "Send". You will want
        to select the Litecoin Network, not the internal Bitso network.
      </div>
      <div className="tutorial-div">
        Now just paste the LTC address that Temple provided for you to transfer
        to. You will see your XTZ (Tezos) on your Temple wallet as soon as the
        transaction completes, this can take from 2 to 30 minutes.
      </div>
      <h3>I used Binance, and I have XTZ now </h3>
      <div className="tutorial-div">
        Great! Now go into your assets in Binance, select XTZ (Tezos) and click
        on Withdraw. Select the Tezos Network, and it will ask you for an
        address to send the XTZ (Tezos) into, this will be your Temple wallet
        address
      </div>
      <div className="tutorial-div">
        Go into your Temple wallet, find your wallet address, it will be on top
        of your current Tezos balance. Click on your address to automatically
        copy it, now go into Binance and just paste it
      </div>
      <div className="tutorial-div">
        Once you complete the transaction in Binance, wait from 1 to 5 minutes
        to see your Tezos arrive at your temple wallet
      </div>

      <h2 style={{ margin: 40 }}>
        Now you're good to go! Jump into the{" "}
        <a onClick={() => navigate("bid")}>next section</a> of the tutorial to
        be able to buy NFTs on the Objkt Marketplace
      </h2>
    </div>
  );
}

function BidTutorial({ navigate }) {
  return (
    <div>
      <h2>
        - This tutorial is for <span className="tutorial-span">desktop</span>,
        if you want to buy NFTs on Objkt on your mobile phone instead, follow{" "}
        <a onClick={() => navigate("bidMobile")}>this tutorial</a> instead
      </h2>
      <h2>
        - If you haven't set up your Temple Wallet and added funds to it, you
        will want to follow{" "}
        <a onClick={() => navigate("wallet")}>this tutorial</a> first.
      </h2>
      <h1 className="tutorial-h1">
        1) Connect your Temple wallet to the Objkt Marketplace
      </h1>
      <div className="tutorial-div">
        Go into{" "}
        <a
          href="https://www.objkt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          objkt.com
        </a>
      </div>
      <div className="tutorial-div">
        At the top right of the objkt web page you will find a "sync" button.
        Click on it and select Temple Wallet
      </div>
      <div className="tutorial-div">
        A little window will pop up from your Temple Wallet to allow the
        connection. Click on Connect. On the next step, click on Sign.
      </div>
      <div className="tutorial-div">
        You are now connected to the objkt marketplace!
      </div>
      <div className="tutorial-div">
        Once we launch our collection, you will be able to click on any of the
        art pieces directly on the collection section in our webpage to go into
        the objkt marketplace for the selected art piece.
      </div>
      <div className="tutorial-div">
        If the objkt NFT you selected is marked for auction (all the pieces of
        our collection will be auctioned), you will see a green button "At
        auction for xx Tezos". Click on that button, on the next screen you will
        see an input, type the number of Tezos you want to bid, and then click
        on Place Bid
      </div>
      <div className="tutorial-div">
        A window from Temple will pop up asking you to confirm the bid offer,
        and will charge you a fee of around 1 cent to place the bid.
      </div>
      <div className="tutorial-div">
        Once you confirm the transaction, your bid is live! If the auction ends
        and you're the top bid, you will recieve your NFT and rewards on your
        Temple Wallet!
      </div>
      <div className="tutorial-div">
        You can see your NFTs on your Temple Wallet under the Colletions tab at
        the bottom of your wallet.
      </div>
    </div>
  );
}

function WalletMobileTutorial({ navigate }) {
  return (
    <div>
      <h2>
        - This tutorial is for <span className="tutorial-span">mobile</span>, if
        you want to do this on your desktop computer, follow{" "}
        <a onClick={() => navigate("wallet")}>this tutorial</a> instead
      </h2>
      <h1 className="tutorial-h1">1) Download Airgap Vault</h1>
      <div className="tutorial-div">
        To join the crypto world, you will first need to create a wallet to hold
        your cryptocurrencies, specifically you will want to create a XTZ
        (Tezos) wallet
      </div>
      <div className="tutorial-div">
        On mobile you will need to download two different apps to get securely
        set up.
      </div>
      <div className="tutorial-div">
        First download the Airgap Vault app from the appstore
      </div>
      <div className="tutorial-div">
        Open your Airgap Vault app and click on "Let's Go" to get past their
        security disclaimer, don't worry we will follow their security
        guidelines in this tutorial
      </div>
      <div className="tutorial-div">
        Next click on the red Generate button. It will ask you for permission to
        use your camera and microphone, grant the permission and move to the
        next screen
      </div>
      <div className="tutorial-div">
        On this next screen, the app will use a combination of video, sound,
        movement and touch to generate a completely random and secure recovery
        phrase. So go ahead and move your phone around, make some noise, and
        make random moves on the selected section for touch.
      </div>
      <div className="tutorial-div">
        Once you're done and are looking at your recovery phrase, you will want
        to write it down, this recovery phrase is your only way to recover your
        account if you ever lose it. Best practice is to write it down in paper
        and not in a text file on your computer.
      </div>
      <div className="tutorial-div">
        On the next screen you will need to input your recovery phrase to ensure
        you've written it down somewhere safe.
      </div>
      <div className="tutorial-div">
        After that you will need to input a label for your recovery phrase, this
        doesn't matter, feel free to choose whatever you want. Optionally you
        can add a passphrase to add an extra security measure.
      </div>
      <div className="tutorial-div">
        You're finally inside the Airgap Vault, next step is to download the
        Airgap Wallet to generate your Tezos address to be able to use it
      </div>

      <h1 className="tutorial-h1">2) Download Airgap Wallet</h1>
      <div className="tutorial-div">
        Download the Airgap Wallet and open it. You will see the same security
        prompt you saw on the Airgap Vault. Click on "Let's Go"
      </div>
      <div className="tutorial-div">
        In the Accounts section of the app, click on the + button. On some
        phones the button can say "Add Tokens" instead of a + sign
      </div>
      <div className="tutorial-div">
        Select Tezos XTZ and click next until you see the "Open Vault" button.
      </div>
      <div className="tutorial-div">
        Once you press that button, it will launch your Airgap Vault app on a
        screen showing a bunch of cryptocurrencies, select Tezos XTZ from the
        list if it isn't already, then just click on Create.
      </div>
      <div className="tutorial-div">
        That's it! You have securely generated your very own Tezos address on
        the Airgap Wallet app
      </div>

      <h1 className="tutorial-h1">3) Buy XTZ (Tezos) in Binance</h1>
      <div className="tutorial-div">
        For the next step, you will need to convert fiat currency (MXN, USD,
        EUR, etc..) into crytpo currency
      </div>
      <div className="tutorial-div">
        For this, you will need to use an Exchange. If you live in Mexico, the
        best option for you would be Binance
      </div>
      <div className="tutorial-div">
        On Binance you will need to validate your personal information with
        them, they might ask you to submit a picture of one of your legal
        documents, like a drivers license, passport or INE
      </div>
      <div className="tutorial-div">
        This verification step can take some time, so you will want to be
        already set up by the time our collecton goes live!
      </div>
      <h3>Binance</h3>
      <div className="tutorial-div">
        If you have other cryptos on your Binance account, it's very simple to
        trade it into XTZ (Tezos). Just go into the Trade section of the Binance
        app and convert it!
      </div>
      <div className="tutorial-div">
        You can also purchase XTZ (Tezos) directly from your credit card, find
        the big button in the Binance homepage "Credit/Debit Card". Enter your
        card information, pay, and that's it!
      </div>
      <div className="tutorial-div">
        Once you have your XTZ ready in Binance, you can move on to step 3 of
        the tutorial
      </div>
      <h1 className="tutorial-h1">
        3) Transfer XTZ (Tezos) to your Airgap Wallet app
      </h1>
      <div className="tutorial-div">
        Time to get your XTZ (Tezos) out of the exchange and into your Temple
        wallet so you can buy some NFTs
      </div>
      <div className="tutorial-div">
        Go into your assets in Binance, select XTZ (Tezos) and click on
        Withdraw. Select the Tezos Network, and it will ask you for an address
        to send the XTZ (Tezos) into, this will be your Airgap Wallet address
      </div>
      <div className="tutorial-div">
        Go into your Airgap Wallet app, find your wallet address, click on it.
        After that you can press the 3 dot menu at the top right and select
        "Copy address", now go into Binance and just paste it
      </div>
      <div className="tutorial-div">
        Once you complete the transaction in Binance, wait from 1 to 5 minutes
        to see your Tezos arrive at your temple wallet
      </div>

      <h2 style={{ margin: 40 }}>
        Now you're good to go! Jump into the{" "}
        <a onClick={() => navigate("bidMobile")}>next section</a> of the
        tutorial to be able to buy NFTs on the Objkt Marketplace
      </h2>
    </div>
  );
}

function BidMobileTutorial({ navigate }) {
  return (
    <div>
      <h2>
        - This tutorial is for <span className="tutorial-span">mobile</span>, if
        you want to buy NFTs on Objkt on your desktop computer instead, follow{" "}
        <a onClick={() => navigate("bid")}>this tutorial</a> instead
      </h2>
      <h2>
        - If you haven't set up your Airgap Wallet and added funds to it, you
        will want to follow{" "}
        <a onClick={() => navigate("walletMobile")}>this tutorial</a> first.
      </h2>
      <h1 className="tutorial-h1">
        1) Connect your Airgap Wallet to the Objkt Marketplace
      </h1>
      <div className="tutorial-div">
        Go into{" "}
        <a
          href="https://www.objkt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          objkt.com
        </a>
      </div>
      <div className="tutorial-div">
        At the top right of the objkt web page you will find a menu button, open
        it and click on the "sync" button. Select Airgap Wallet, if you don't
        see that option, select "Connect to mobile wallet"
      </div>
      <div className="tutorial-div">
        You will get a prompt to allow the switch to your Airgap Wallet, click
        on Allow
      </div>
      <div className="tutorial-div">
        Your Airgap Wallet will now connect to the beacon network, once ready,
        you will see a prompt to connect. Click on Connect
      </div>
      <div className="tutorial-div">
        Next up it will show another prompt, click on Continue. Which will open
        your Airgap Vault app
      </div>
      <div className="tutorial-div">
        Another prompt will come up now on the Airgap Vault app, click on sign
        message
      </div>
      <div className="tutorial-div">
        From there you will land back at your Airgap Wallet app, after a few
        seconds your wallet will be allowed to connect with the objkt
        marketplace. Go back to the browser with objkt opened on it.
      </div>
      <div className="tutorial-div">
        You are now connected to the objkt marketplace!
      </div>
      <div className="tutorial-div">
        Once we launch our collection, you will be able to click on any of the
        art pieces directly on the collection section in our webpage to go into
        the objkt marketplace for the selected art piece.
      </div>
      <div className="tutorial-div">
        If the objkt NFT you selected is marked for auction (all the pieces of
        our collection will be auctioned), you will see a green button "At
        auction for xx Tezos". Click on that button, on the next screen you will
        see an input, type the number of Tezos you want to bid, and then click
        on Place Bid
      </div>
      <div className="tutorial-div">
        Another prompt will come up from your Airgap Wallet app asking you to
        confirm the bid offer, and will charge you a fee of around 1 cent to
        place the bid.
      </div>
      <div className="tutorial-div">
        Once you confirm the transaction, your bid is live! If the auction ends
        and you're the top bid, you will recieve your NFT and rewards on your
        Airgap Wallet!
      </div>
    </div>
  );
}
