import React from 'react';
import ReactDOM from 'react-dom';
import { celo, cusd, ceur } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, HTTPGateway } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
import './config.js'
import config from './config.js';

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [
    new HTTPGateway(config.network.alfajores.rpc, config.network.alfajores.chainId),
  ],
  assets: [config.network.alfajores.tokens.celo, config.network.alfajores.tokens.cusd, config.network.alfajores.tokens.ceur],
});

const BurnerWallet = () =>
  <ModernUI
    title="Celo Alfajores Wallet"
    core={core}
    plugins={[]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
