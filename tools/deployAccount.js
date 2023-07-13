
const {Provider,SequencerProvider, stark, constants, ec, CallData, hash, Account } = require('starknet');



// privateKey: 0x35431cc164b7174e5daf4305a6cd39a9d2932c053f0f98a5cc56553be261111
// New OZ account :
// privateKey= 0x35431cc164b7174e5daf4305a6cd39a9d2932c053f0f98a5cc56553be261111
// publicKey= 0x425ccaa21e0402c8822d702ef5be60bc37290858edf96258f6d636aa6a0acb4
// Precalculated account address= 0x2ef44ba5c93dd2d16bb055d62a547af1ceab59a6ae88dac1b20eb0cbebdd1e4
// ✅ New OpenZeppelin account created.
//    address = 0x2ef44ba5c93dd2d16bb055d62a547af1ceab59a6ae88dac1b20eb0cbebdd1e4   
//  txhash:  0x55a9f80520f70073f7d12725a5a6a3f88703711d0e77fa6dac62b572f928be8

async function createAccount() {

    const provider = new Provider({ sequencer: { baseUrl:'https://alpha4.starknet.io'} });


    // const block = await provider.getBlock("latest"); // <- Get latest block
    // console.log(block.block_number);

    
    const privateKey = "0x35431cc164b7174e5daf4305a6cd39a9d2932c053f0f98a5cc56553be261111" // stark.randomAddress();
    console.log("privateKey:", privateKey)
    console.log('New OZ account :\nprivateKey=', privateKey);
    const starkKeyPub = ec.starkCurve.getStarkKey(privateKey);
    console.log('publicKey=', starkKeyPub);


    const OZaccountClassHash = "0x2794ce20e5f2ff0d40e632cb53845b9f4e526ebd8471983f7dbd355b721d5a";  // 内置的账号类型.
    // Calculate future address of the account
    const OZaccountConstructorCallData = CallData.compile({ publicKey: starkKeyPub });
    const OZcontractAddress = hash.calculateContractAddressFromHash(
        starkKeyPub,
        OZaccountClassHash,
        OZaccountConstructorCallData,
        0
    );
    console.log('Precalculated account address=', OZcontractAddress);

    const OZaccount = new Account(provider, OZcontractAddress, privateKey);

    const { transaction_hash, contract_address } = await OZaccount.deployAccount({
        classHash: OZaccountClassHash,
        constructorCalldata: OZaccountConstructorCallData,
        addressSalt: starkKeyPub
    });
    
    await provider.waitForTransaction(transaction_hash);
    console.log('✅ New OpenZeppelin account created.\n   address =', contract_address, transaction_hash);

}

async function getInfo() {
    const provider = new Provider({ sequencer: { baseUrl:'https://alpha4.starknet.io'} });


    const block = await provider.getBlock("latest"); // <- Get latest block
    console.log(block.block_number);

    let txhash = "0x55a9f80520f70073f7d12725a5a6a3f88703711d0e77fa6dac62b572f928be8"
    let tx = await provider.getTransaction(txhash)
    console.log("tx:", tx)
}



getInfo()