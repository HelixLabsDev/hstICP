git clone git@github.com:HelixLabsDev/hstICP.git && cd hstICP
npm install
nano .env
  paste the followings:
    API_URL="https://eth-sepolia.g.alchemy.com/v2/your-api-key"
    PRIVATE_KEY="your private key"
    ETHERSCAN_API_KEY="your api key"
open HelixStakedICP.js file:
  change the defaultAdmin and minter address
npx hardhat compile
npx hardhat ignition deploy ignition/modules/HelixStakedICP.js --network ethereum_sepolia --verify
