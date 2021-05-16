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
    new HTTPGateway(config.network.mainnet.rpc, config.network.mainnet.chainId),
  ],
  assets: [config.network.mainnet.tokens.celo, config.network.mainnet.tokens.cusd, config.network.mainnet.tokens.ceur],
});

const BurnerWallet = () =>
  <ModernUI
    title="Celo Burner Wallet"
    core={core}
    plugins={[]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
