import React from 'react';
import ReactDOM from 'react-dom';
import { celo, cusd, ceur } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, HTTPGateway } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [
    new HTTPGateway("https://alfajores-forno.celo-testnet.org", "44787"),
  ],
  assets: [celo, cusd, ceur],
});

const BurnerWallet = () =>
  <ModernUI
    title="Celo Alfajores Wallet"
    core={core}
    plugins={[]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
