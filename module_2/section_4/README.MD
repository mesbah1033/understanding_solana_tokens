# SolDev - MODULE 2 Section 4 
## Using custom onchain programs

### How to run in terminal (once in the correct directory)
npx esrun \[filename\] \[optional: input\]

### All the files explained
WIP

### Issues with this section
1. Why is the challenge requiring use of System.transfer() function to send tokens when this section is about interacting with On-chain programs? Challenge should have something to do with interacting with On-chain programs. IMO this challenge should be assigned after module_2 section_3
2. [Solution link](https://github.com/Unboxed-Software/solana-ping-client) provided leads to code that is covered in the lab and NOT IN THE CHALLENGE. Hence, making this NOT a solution!

### NOTE TO SELF
1. "When working with non-native programs" what does it mean? Onchain programs vs Reading/Writing to the network directly.

    **Answer:** Onchain programs are non-native programs (e.g. Ping Counter that we used in MODULE 2 Section 4 lab) that can be published on the blockchain by anyone. Native programs (e.g. System Program that we used to transfer tokens) on the other hand, are deployed into the core of the network and are part of the [cluster](). [Reference for the above answer](https://solana.com/docs/core/programs)

2. What is the lab program truly doing? Is just sending a "transaction" with some "instruction" qualify as an ping/interaction?
    
    **Answer:** Yes, as the web3.Transaction() OR web3.TransactionInstruction() constructors create "transactions" which is how everything interacts in Solana Blockchain. [Reference](https://solana.com/docs/clients/javascript-reference#transaction)

3. Is there a way to tell an On-Chain program from an user on the blockchain (Solana Explorer)

    **Answer:** Yes, programs are marked *executable: yes* on the Solana Explorer UI.
    	![Program Acct](assets/Program Account.png)
        ![User Acct](assets/User Account.png) 

4. What is a "seed" in the image provided in [soldev](https://www.soldev.app/course/intro-to-custom-on-chain-programs)

    **Answer** Seeds are essentially strings that are used for finding program addresses. WIP - why is seed being used in the image provided in SolDev MODULE 2 Section 4 
