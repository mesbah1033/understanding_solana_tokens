import {
    SystemProgram,
    PublicKey
  } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";


// establishing CONNECTION
const web3 = require("@solana/web3.js");
let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");


// extracting SENDER (our) ADDRESS
const senderKeypair = getKeypairFromEnvironment('SECRET_KEY')
console.log(
  `✅ Loaded our own keypair`
);
console.log(
    `Address of Sender(our): ${senderKeypair.publicKey}`
);


// setting up RECEIVER ADDRESS - this is the string used in terminal 6Rp7L2W5U4TpSmsMWk12Qqo2zoxxSTzM2miPuBbAh34p
const inputPublicKey = process.argv[2] || null;
if (!inputPublicKey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}
const receiverPublicKey = new PublicKey(inputPublicKey);
console.log(
    `Address of Receiever: ${receiverPublicKey}`
  );


// create INSTRUCTION - will need system.transfer to transfer funds
const LAMPORTS_TO_SEND = 15000
const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: receiverPublicKey,
    lamports: LAMPORTS_TO_SEND,
  });


// create and run TRANSACTION
let transaction = new web3.Transaction();
transaction.add(sendSolInstruction);


// confirm TRANSACTION and create TRANSACTION SIGNATURE
const transactionSignature = await web3.sendAndConfirmTransaction(connection, transaction, [senderKeypair])


// logging output
console.log(`Transaction completed here is the Transaction Signature: ${transactionSignature}`)
console.log(`You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`)
