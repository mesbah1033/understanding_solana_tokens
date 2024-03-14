import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import "dotenv/config"
import base58 from "bs58";
import { getKeypairFromEnvironment, airdropIfRequired } from "@solana-developers/helpers";

// extracting payer keypair from env
const payer = getKeypairFromEnvironment('SECRET_KEY')


// establishing connection with devnet
const connection = new web3.Connection(web3.clusterApiUrl('devnet'))

// checking for balance in current payer (our) address
const currentBalanceInLamports = await connection.getBalance(payer.publicKey);
const currentBalanceInSOL = currentBalanceInLamports / LAMPORTS_PER_SOL;
console.log("current account balance: " + currentBalanceInSOL + " SOL and " + currentBalanceInLamports + " LAMPS")


// # only use the following if balance is low
// const newBalance = await airdropIfRequired(
//     connection,
//     payer.publicKey,
//     0.5 * LAMPORTS_PER_SOL,
//     1 * LAMPORTS_PER_SOL,
//   );