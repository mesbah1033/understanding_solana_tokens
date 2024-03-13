import {
    Connection,
    clusterApiUrl,
    PublicKey,
    LAMPORTS_PER_SOL
  } from "@solana/web3.js";
  import "dotenv/config";
  import { getKeypairFromEnvironment, airdropIfRequired } from "@solana-developers/helpers";


  
//   const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
//   console.log("this is the senderKeypair: " + senderKeypair.publicKey)
//   const newBalance = await airdropIfRequired(
//     connection,
//     senderKeypair.publicKey,
//     1 * LAMPORTS_PER_SOL,
//     0.5 * LAMPORTS_PER_SOL,
//   );

//   console.log("this is the new balance: " + newBalance)



// const {
//     Connection,
//     Keypair,
//     PublicKey,
//     clusterApiUrl,
//     LAMPORTS_PER_SOL,
//   } = require("@solana/web3.js");


// const pubKey = new PublicKey(senderKeypair.publicKey);
const pubKey = new PublicKey("HUZu4xMSHbxTWbkXR6jkGdjvDPJLjrpSNXSoUFBRgjWs");
console.log("pubkey: " + pubKey)
const connection = new Connection(clusterApiUrl("devnet"));
const balanceInLamports = await connection.getBalance(pubKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
console.log("balance BEFORE transaction: " + balanceInSOL)
// const tx = await connection.requestAirdrop(pubKey, 2 * LAMPORTS_PER_SOL);
// await connection.confirmTransaction(tx);
// console.log("balance AFTER transaction: " + balanceInSOL)
