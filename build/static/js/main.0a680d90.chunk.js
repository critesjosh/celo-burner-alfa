(this["webpackJsonpsample-burner-wallet"]=this["webpackJsonpsample-burner-wallet"]||[]).push([[0],{227:function(e,n,t){e.exports=t(649)},243:function(e,n){},266:function(e,n){},268:function(e,n){},333:function(e,n){},649:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(81),r=t.n(a),s=t(216),i=t.n(s),d=t(217),u=t(218),w=t(224),l=t(39),b=t(215).ERC20Asset,k=t(215).NativeAsset,p={id:"cusd",name:"cUSD",usdPrice:1,icon:"https://i.ibb.co/BfvqKQ0/cusd.png"},m={id:"ceur",name:"cEUR",icon:"https://drive.google.com/uc?id=12En3d0eWLuUAy34Yw2BEgKdHW0BoW12s"},g={id:"celo",name:"CELO",icon:"https://drive.google.com/uc?id=1ochzonz8U6iOod_GoMgt_3K8iJ0u7QPc"},E={network:{mainnet:{rpc:"https://forno.celo.org",chainId:"42220",tokens:{celo:new k(Object(l.a)({},g,{network:"42220"})),cusd:new b(Object(l.a)({},p,{network:"42220",address:"0x765DE816845861e75A25fCA122bb6898B8B1282a"})),ceur:new b(Object(l.a)({},m,{network:"42220",address:"0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73"}))}},alfajores:{rpc:"https://alfajores-forno.celo-testnet.org",chainId:"44787",tokens:{celo:new k(Object(l.a)({},g,{network:"44787"})),cusd:new b(Object(l.a)({},p,{network:"44787",address:"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"})),ceur:new b(Object(l.a)({},m,{network:"44787",address:"0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F"}))}}}},f=new i.a({signers:[new d.LocalSigner],gateways:[new u.HTTPGateway(E.network.mainnet.rpc,E.network.mainnet.chainId)],assets:[E.network.mainnet.tokens.cusd,E.network.mainnet.tokens.ceur,E.network.mainnet.tokens.celo]});r.a.render(c.a.createElement((function(){return c.a.createElement(w.a,{title:"Celo Burner Wallet",core:f,plugins:[]})}),null),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.0a680d90.chunk.js.map