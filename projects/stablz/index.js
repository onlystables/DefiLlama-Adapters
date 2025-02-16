const { staking } = require("../helper/staking");

const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const STABLZ_CANNAVEST_RWA_POOL = "0xa030f3e984A08B5Ada0377A9f4EaAF846E6A2cB0";

async function tvl(_, block, _1, { api }) {
  const bal = await api.call({  abi: 'erc20:totalSupply', target: STABLZ_CANNAVEST_RWA_POOL}) 
  api.add(USDT, bal)
}

module.exports = {
  ethereum: {
    tvl, staking: staking('0xdb6b004e34a7750e30e59e11281fcb0c73666990', '0xA4Eb9C64eC359D093eAc7B65F51Ef933D6e5F7cd')
  },
  methodology: "Gets the TVL in USDT from the Stablz Cannavest (real world asset) smart contract",
};
