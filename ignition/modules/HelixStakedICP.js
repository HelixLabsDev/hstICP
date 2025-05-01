const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const defaultAdmin = "0x3989BCC4a9A4E356265AcC658fB10Dfb3a86ddd7";
const minter = "0xf9bb58B6725e7e62E5786b6f670FBfB1a52d48aD";

module.exports = buildModule("HelixStakedICPModule", (m) => {
  const hstICP = m.contract("HelixStakedICP", [defaultAdmin, minter]);
  return { hstICP };
});
