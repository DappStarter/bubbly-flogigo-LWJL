require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rebel random undo harvest derive slot gift'; 
let testAccounts = [
"0x1595f12f12abff951f8a665ed33d68fadabd03beb3407a260c7c104ccff685af",
"0x07c7fcaa2bbc21a9a54995bf2a0dc7133ce7185f52fca17794f729ebd814e9c5",
"0xa156328600a657b55f14aa770b16140d0478a875f39409c148ea7a79f00e96a7",
"0x28e1aaa5b66d9eeddfac071cc6f084384864705ecbcd5d981ef8f0fe7c0260c0",
"0x79ba53af9ad1bdd5ef801c22324eb00c6bd96effe335f0f207bcf306d1da5591",
"0xf2598cb12d40ca1b65da7bf87888ba935a9675b896c96c3b51d1bfb681e6624a",
"0x19b3c59d662c41bfebc792683a0841759e6011597abaa51a6acfccca700636f9",
"0x0e928bb5073c1f925a134deb23c0153e01d3037a58ecc4705290f793d0d62f70",
"0x74223e3af8522a33e39676420543b790c418569564ba248d0a4a71c70e98b1fc",
"0x2ea1c9186e30e8f8da6cf2134e3dc7031de95510207c3195c329b97a4edd472b"
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

