import Signer from '@burner-wallet/core/signers/Signer'

interface CeloLocalSignerOptions {
  privateKey?: string;
  saveKey?: boolean;
}

export default class CeloLocalSigner extends Signer {
  constructor(props?: CeloLocalSignerOptions);
}
