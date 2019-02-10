const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'warm purse thumb soul reopen prison uncle inherit laugh index enroll try',
  'https://rinkeby.infura.io/v3/8a46ec315ece442fb0696d405bc40c0c'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy the contract from account', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface)) //asynchronous operation
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
