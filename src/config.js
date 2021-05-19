const ERC20Asset = require('@burner-wallet/assets').ERC20Asset;
const NativeAsset = require('@burner-wallet/assets').NativeAsset;

let chainId_mainnet = "42220"
let chainId_alfajores = "44787"

let cusd = {
    id: 'cusd',
    name: 'cUSD',
    usdPrice: 1,
    icon: 'https://gist.githubusercontent.com/critesjosh/0eea0afa90bee14f870177e83808e916/raw/4f92f5159e5cc5d47d93fb55467d3eb53959cefd/celo-dollar.svg',
}

let ceur = {
    id: 'ceur',
    name: 'cEUR',
    icon: 'https://gist.githubusercontent.com/critesjosh/12756c79203dba7fec3db8db7823d949/raw/b81aa864d79eadd52749868b0a395b638c97eaf4/celo-euro.svg',  
}

let celo = {
    id: 'celo',
    name: 'CELO',
    icon: 'https://gist.githubusercontent.com/critesjosh/40cb6177040f0b9847d6d9418afca068/raw/75b79daff74dab026a4764422890ad2559e2466b/celo-circle.svg',
}

export default {
    network: {
        mainnet: {
            "rpc": "https://forno.celo.org",
            "chainId": chainId_mainnet,
            tokens: {
                celo: new NativeAsset({
                    ...celo,
                    network: chainId_mainnet,
                }),
                cusd: new ERC20Asset({
                    ...cusd,
                    network: chainId_mainnet,
                    address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
                  }),
                ceur: new ERC20Asset({
                    ...ceur,
                    network: chainId_mainnet,
                    address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
                })
            }
        },
        alfajores: {
            "rpc": "https://alfajores-forno.celo-testnet.org",
            "chainId": chainId_alfajores,
            tokens: {
                celo: new NativeAsset({
                    ...celo,
                    network: chainId_alfajores
                }),
                cusd: new ERC20Asset({
                    ...cusd,
                    network: chainId_alfajores,
                    address: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'
                  }),
                ceur: new ERC20Asset({
                    ...ceur,
                    network: chainId_alfajores,
                    address: '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F'
                })
            }
        }
    }
}