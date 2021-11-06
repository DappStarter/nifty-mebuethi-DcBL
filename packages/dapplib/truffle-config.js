require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strategy razor mean protect inner drive equal genius'; 
let testAccounts = [
"0xc70269f4319986de6e9cc0d7d71f29cdbf07f79368b6c34af04155fb794000ef",
"0x9e30451d52f944d86e9624f65201b34b126dd6105f2c19f9e3f0983bfdc64182",
"0x0e5835bb146d386b00dc82a738cc8a0512a0063a663a9f76bc3fdf52990cbd8c",
"0xb87ab6111bfc6ef51faa71714d0ed793378ecee174d9e2a1b0c6118980101217",
"0x9b4b64be0e7e0bc528bf3d67dbf6e2588b39f0302f65213795bfd58d22137c40",
"0xeffc2fd136b5452114d165e6cf788412c0952508e714420ab9ce7d1ac128be53",
"0x1bc759f2b8d0dcbab9353ed1a6d217ed02898a33ebc8207ee98177e5ddb9360b",
"0xf3cfef4cc4083d9863ea70d3462a104760ad2ad0eddbb64075a23fb9fded6f79",
"0x42072961bd8cc915cdc1d88e8b30d339e8f7931c312b9762fb0ced48038eb76d",
"0xc00ff0542729fca9d53e16f316336f1c225a9492927eb045f8fcefcb455a15e6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

