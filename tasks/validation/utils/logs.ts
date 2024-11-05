import { networkConfig } from '#/common/configuration'

const tokens: { [key: string]: string } = {
  [networkConfig['1'].tokens.USDC!.toLowerCase()]: 'USDC',
  [networkConfig['1'].tokens.USDT!.toLowerCase()]: 'USDT',
  [networkConfig['1'].tokens.USDP!.toLowerCase()]: 'USDP',
  [networkConfig['1'].tokens.BUSD!.toLowerCase()]: 'BUSD',
  [networkConfig['1'].tokens.FRAX!.toLowerCase()]: 'FRAX',
  [networkConfig['1'].tokens.MIM!.toLowerCase()]: 'MIM',
  [networkConfig['1'].tokens.eUSD!.toLowerCase()]: 'eUSD',
  [networkConfig['1'].tokens.aDAI!.toLowerCase()]: 'aDAI',
  [networkConfig['1'].tokens.aUSDC!.toLowerCase()]: 'aUSDC',
  [networkConfig['1'].tokens.aUSDT!.toLowerCase()]: 'aUSDT',
  [networkConfig['1'].tokens.aBUSD!.toLowerCase()]: 'aBUSD',
  [networkConfig['1'].tokens.aUSDP!.toLowerCase()]: 'aUSDP',
  [networkConfig['1'].tokens.aWETH!.toLowerCase()]: 'aWETH',
  [networkConfig['1'].tokens.cDAI!.toLowerCase()]: 'cDAI',
  [networkConfig['1'].tokens.cUSDC!.toLowerCase()]: 'cUSDC',
  [networkConfig['1'].tokens.cUSDT!.toLowerCase()]: 'cUSDT',
  [networkConfig['1'].tokens.cUSDP!.toLowerCase()]: 'cUSDP',
  [networkConfig['1'].tokens.cETH!.toLowerCase()]: 'cETH',
  [networkConfig['1'].tokens.cWBTC!.toLowerCase()]: 'cWBTC',
  [networkConfig['1'].tokens.fUSDC!.toLowerCase()]: 'fUSDC',
  [networkConfig['1'].tokens.fUSDT!.toLowerCase()]: 'fUSDT',
  [networkConfig['1'].tokens.fFRAX!.toLowerCase()]: 'fFRAX',
  [networkConfig['1'].tokens.fDAI!.toLowerCase()]: 'fDAI',
  [networkConfig['1'].tokens.AAVE!.toLowerCase()]: 'AAVE',
  [networkConfig['1'].tokens.stkAAVE!.toLowerCase()]: 'stkAAVE',
  [networkConfig['1'].tokens.COMP!.toLowerCase()]: 'COMP',
  [networkConfig['1'].tokens.WETH!.toLowerCase()]: 'WETH',
  [networkConfig['1'].tokens.WBTC!.toLowerCase()]: 'WBTC',
  [networkConfig['1'].tokens.RSR!.toLowerCase()]: 'RSR',
  [networkConfig['1'].tokens.CRV!.toLowerCase()]: 'CRV',
  [networkConfig['1'].tokens.CVX!.toLowerCase()]: 'CVX',
  [networkConfig['1'].tokens.ankrETH!.toLowerCase()]: 'ankrETH',
  [networkConfig['1'].tokens.frxETH!.toLowerCase()]: 'frxETH',
  [networkConfig['1'].tokens.sfrxETH!.toLowerCase()]: 'sfrxETH',
  [networkConfig['1'].tokens.stETH!.toLowerCase()]: 'stETH',
  [networkConfig['1'].tokens.wstETH!.toLowerCase()]: 'wstETH',
  [networkConfig['1'].tokens.rETH!.toLowerCase()]: 'rETH',
  [networkConfig['1'].tokens.cUSDCv3!.toLowerCase()]: 'cUSDCv3',
  [networkConfig['1'].tokens.DAI!.toLowerCase()]: 'DAI',
  [networkConfig['1'].tokens.aEthUSDC!.toLowerCase()]: 'aEthUSDC',
  [networkConfig['1'].tokens.saEthUSDC!.toLowerCase()]: 'saEthUSDC',
  [networkConfig['1'].tokens.aEthPyUSD!.toLowerCase()]: 'aEthPyUSD',
  [networkConfig['1'].tokens.saEthPyUSD!.toLowerCase()]: 'saEthPyUSD',
  [networkConfig['1'].tokens.cUSDCv3!.toLowerCase()]: 'cUSDCv3',
  [networkConfig['8453'].tokens.WETH!.toLowerCase()]: 'WETH',
  [networkConfig['8453'].tokens.wstETH!.toLowerCase()]: 'wstETH',
  [networkConfig['8453'].tokens.RSR!.toLowerCase()]: 'RSR',
  ['0xaa91d24c2f7dbb6487f61869cd8cd8afd5c5cab2'.toLowerCase()]: 'mrp-aUSDT',
  ['0x60C384e226b120d93f3e0F4C502957b2B9C32B15'.toLowerCase()]: 'saUSDC',
  ['0x21fe646D1Ed0733336F2D4d9b2FE67790a6099D9'.toLowerCase()]: 'saUSDT',
  ['0xf579F9885f1AEa0d3F8bE0F18AfED28c92a43022'.toLowerCase()]: 'cUSDCVault',
  ['0x4Be33630F92661afD646081BC29079A38b879aA0'.toLowerCase()]: 'cUSDTVault',
  ['0xfBD1a538f5707C0D67a16ca4e3Fc711B80BD931A'.toLowerCase()]: 'wcUSDCv3',
  ['0x3BECE5EC596331033726E5C6C188c313Ff4E3fE5'.toLowerCase()]: 'stkcvxeUSDFRAXBP',
  ['0x83f20f44975d03b1b09e64809b757c47f942beea'.toLowerCase()]: 'sDAI',
  ['0xa8157BF67Fd7BcDCC139CB9Bf1bd7Eb921A779D3'.toLowerCase()]: 'saUSDC',
  ['0x684AA4faf9b07d5091B88c6e0a8160aCa5e6d17b'.toLowerCase()]: 'saUSDT',
  ['0xe176A5ebFB873D5b3cf1909d0EdaE4FE095F5bc7'.toLowerCase()]: 'saEthPyUSD',
  ['0x81697e25DFf8564d9E0bC6D27edb40006b34ea2A'.toLowerCase()]: 'stkcvxeUSDFRAXBP',
  ['0x8e33D5aC344f9F2fc1f2670D45194C280d4fBcF1'.toLowerCase()]: 'stkcvxeUSDFRAXBP',
  ['0x093cb4f405924a0c468b43209d5e466f1dd0ac7d'.toLowerCase()]: 'saEthUSDC',
  ['0x27F2f159Fe990Ba83D57f39Fd69661764BEbf37a'.toLowerCase()]: 'wcUSDCv3',
  ['0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F'.toLowerCase()]: 'eUSD',
  ['0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8'.toLowerCase()]: 'ETH+',
  ['0xaCdf0DBA4B9839b96221a8487e9ca660a48212be'.toLowerCase()]: 'hyUSD (mainnnet)',
  ['0xFc0B1EEf20e4c68B3DCF36c4537Cfa7Ce46CA70b'.toLowerCase()]: 'USDC+',
  ['0x0d86883FAf4FfD7aEb116390af37746F45b6f378'.toLowerCase()]: 'USD3',
  ['0x78da5799CF427Fee11e9996982F4150eCe7a99A7'.toLowerCase()]: 'rgUSD',
  ['0xCc7FF230365bD730eE4B352cC2492CEdAC49383e'.toLowerCase()]: 'hyUSD (base)',
  ['0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff'.toLowerCase()]: 'bsdETH',
  ['0xfE0D6D83033e313691E96909d2188C150b834285'.toLowerCase()]: 'iUSDC',
  ['0xC9a3e2B3064c1c0546D3D0edc0A748E9f93Cf18d'.toLowerCase()]: 'Vaya',
  ['0x641B0453487C9D14c5df96d45a481ef1dc84e31f'.toLowerCase()]: 'MAAT',
  ['0x093c07787920eb34a0a0c7a09823510725aee4af'.toLowerCase()]: 'wcUSDCv3',
  ['0xa694f7177c6c839c951c74c797283b35d0a486c8'.toLowerCase()]: 'wcUSDCv3 (base)',
  ['0x53f1df4e5591ae35bf738742981669c3767241fa'.toLowerCase()]: 'wcUSDCv3 (base)',
  ['0x6f6f81e5e66f503184f2202d83a79650c3285759'.toLowerCase()]: 'saBasUSDC (base)',
  ['0x184460704886f9f2a7f3a0c2887680867954dc6e'.toLowerCase()]: 'saBasUSDC (base)',
  ['0xA35b1B31Ce002FBF2058D22F30f95D405200A15b'.toLowerCase()]: 'ETHx',
}

export const logToken = (tokenAddress: string) => {
  return tokens[tokenAddress.toLowerCase()]
    ? tokens[tokenAddress.toLowerCase()]
    : tokenAddress.toLowerCase()
}
