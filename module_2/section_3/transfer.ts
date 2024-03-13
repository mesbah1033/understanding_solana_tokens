import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Setting up INTAKE of RECIEVER public key 
const suppliedToPubkey = process.argv[2] || null;
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}


// Supplying RECIEVER public key to the program
console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
const toPubkey = new PublicKey(suppliedToPubkey);


// Checking RECIEVER BALANCE of RECIEVER BEFORE TRANSACTION
const prevBalanceInLamports = await connection.getBalance(toPubkey);
const prevBalanceInSOL = prevBalanceInLamports / LAMPORTS_PER_SOL;
console.log("balance BEFORE transaction: " + prevBalanceInSOL + " SOL and " + prevBalanceInLamports + " LAMPS")


// Supplying SENDER (our) public key to the program
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);


// TRANSTACION function to send money
const transaction = new Transaction();
const LAMPORTS_TO_SEND = 50000;
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});
transaction.add(sendSolInstruction);
const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);


// Logging the OUTPUT
console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} LAMPORTS to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}!`);


// Checking RECIEVER BALANCE of AFTER BEFORE TRANSACTION
// const pubKey = new PublicKey("HUZu4xMSHbxTWbkXR6jkGdjvDPJLjrpSNXSoUFBRgjWs");
// console.log("pubkey: " + pubKey)
// const connection = new Connection(clusterApiUrl("devnet"));
const currentBalanceInLamports = await connection.getBalance(toPubkey);
const currentBalanceInSOL = currentBalanceInLamports / LAMPORTS_PER_SOL;
console.log("balance AFTER transaction: " + currentBalanceInSOL + " SOL and " + currentBalanceInLamports + " LAMPS")



// FEES charged in SOL
const YOUR_MESSAGE = transaction.compileMessage();
const feeOBJ = await connection.getFeeForMessage(YOUR_MESSAGE)
const feesInSOL = feeOBJ.value
// const feesInUSD = feesInSOL*150.71
console.log("Fees in SOL: " + feesInSOL + " SOL")

// CHANGE in balance in USD and SOL
const changeInSOL = prevBalanceInSOL - currentBalanceInSOL
const changeInUSD = changeInSOL*150.71 //HARD CODING the conversion. Don't want to use CoinGecko API
console.log("CHANGE in balance in USD " + changeInUSD + " and "+ changeInSOL + " SOL")

