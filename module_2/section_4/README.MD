# SolDev - MODULE 2 Section 4 
## Using custom onchain programs

### All the files explained
WIP

### Issues with this section
1. Why is the challenge requiring use of System.transfer() function to send money when this section is about interacting with On-chain programs? Challenge should have something to do with interacting with On-chain programs. IMO this challenge should be assigned after module_2 section_3
2. [Solution link](https://github.com/Unboxed-Software/solana-ping-client) provided leads to code that is covered in the lab and NOT IN THE CHALLENGE. Hence, making this NOT a solution!

### NOTE TO SELF
1. "When working with non-native programs" what does mean? On-Chain programs vs Reading/Writing to the network directly.
2. What is the lab program truly doing? Is just sending a "transaction" with some "instruction" qualify as an ping/interaction?
    **Answer:** Yes, as the web3.Transaction() OR web3.TransactionInstruction() constructors create "transactions" which is how everything interacts in Solana Blockchain. [Reference](https://solana.com/docs/clients/javascript-reference#transaction)
3. Is there a way to tell an On-Chain program from an user on the blockchain (Solana Explorer)
4. What is a "seed" in the image provided in [soldev](https://www.soldev.app/course/intro-to-custom-on-chain-programs)