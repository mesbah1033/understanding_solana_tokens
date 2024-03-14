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


// #### only use the following if balance is low
// const newBalance = await airdropIfRequired(
//     connection,
//     payer.publicKey,
//     0.5 * LAMPORTS_PER_SOL,
//     1 * LAMPORTS_PER_SOL,
//   );


// setting up addresses that our script will interact with
const PING_PROGRAM_ADDRESS = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa')
const PING_PROGRAM_DATA_ADDRESS =  new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod')
const programId = new web3.PublicKey(PING_PROGRAM_ADDRESS)
const pingProgramDataId = new web3.PublicKey(PING_PROGRAM_DATA_ADDRESS)


// creating the instruction object 
const instruction = new web3.TransactionInstruction({
  keys: [
    {
      pubkey: pingProgramDataId,
      isSigner: false,
      isWritable: true
    },
  ],
  programId
})


// creating the instruction object 
const transaction = new web3.Transaction()


// running the script - added INSTRUCTION into a TRANSACTION and sent it using...
transaction.add(instruction)


// ...sendAndConfirmTransaction function - this function returns a Signature string after a succesful run
const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer]
)


// logging outputs
console.log(`✅ Transaction completed! Signature is ${signature}`)
console.log(`You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)
