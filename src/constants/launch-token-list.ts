import { ChainId } from 'dfy-sdk'
import { BigNumber } from 'ethers'

export interface LaunchTokenList {
  contractAddress: string
  title: string
  imageTokenUrl: string
  proposalContent: string
  proposalContentEng?: string
  available: boolean,
  divider?: BigNumber
}

const BSC_TESTNET_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {
  '0x4E594F2c103Dbd8865C849AcB92b91Cb42BFaA99': {
    contractAddress: '0x4E594F2c103Dbd8865C849AcB92b91Cb42BFaA99',
    title: 'LaunchpadWei',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: true,
    divider: BigNumber.from(10).pow(18)
  },
  // '0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9': {
  //   contractAddress: '0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9',
  //   title: 'Token AAA',
  //   imageTokenUrl: '/images/tokens/busd-square.jpg',
  //   proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
  //   available: true
  // },
  // '0x26665b3fc595c0E35931901CcCeA6FDE1Af8138c': {
  //   contractAddress: '0x26665b3fc595c0E35931901CcCeA6FDE1Af8138c',
  //   title: 'Token AAATEST',
  //   imageTokenUrl: '/images/tokens/usdc-square.jpg',
  //   proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
  //   available: true
  // },
}

const BSC_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {
  // '0xe7BB9720cE2736c477e3cBBa15617f79f08a8686': {
  //   contractAddress: '0xe7BB9720cE2736c477e3cBBa15617f79f08a8686',
  //   title: 'Swap MT เป็น BTC #3 (บนเครื่อข่าย BSC)',
  //   imageTokenUrl: '/images/tokens/mt-token.png',
  //   proposalContent: '<p style="text-indent: 25px;">#MT3 โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p> <p class="my-5 text-center">* ใครมี MT ได้รับ BTC ทุกคน *</p> <p class="mb-3" style="text-indent: 25px;">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p> <div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div> <ul class="list-disc list-inside"> <li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT3 ได้ตั้งแต่วันที่ 10 ตุลาคม 2564 เวลา 12.00 น. - วันที่ 20 ตุลาคม 2564 เวลา 12.00 น.</li> <li>นำ MT3 มาเคลมเพื่อรับ BTCB ได้ตั้งแต่วันที่ 25 ตุลาคม 2564 เวลา 0.00 น. - วันที่ 31 ตุลาคม 2564 เวลา 23.59 น.<br>**กรณีไม่กดเคลมเหรียญ BTCB ภายในเวลาที่กำหนด เหรียญจะถูกนำคืนเข้าบริษัท</li> <li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 1 พฤศจิกายน 2564 เวลา 0.00 น. สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 20 ธันวาคม 2564 เวลา 00.01 น. (โดยเหรียญจะถูกล็อคไว้ 60 วัน ภายใน Vault)</li> </ul> <p class="mt-5">หมายเหตุ :&nbsp;</p> <ol class="list-decimal list-inside"> <li>โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</li> <li>ให้สิทธิเฉพาะผู้ซื้อเหรียญ MVP ผ่านการซื้อหน้าเวป (<a href="https://mvcaravan.com/mvpcoin/">https://mvcaravan.com/mvpcoin/</a>), DEX หรือ Exchange (Bitmart, P2PB2B) ทั้งระบบ BSC Chain และ Bitkub Chain</li> <li>MT3 ขอสงวนสิทธิผู้ได้เหรียญจาก Airdrop, Marketing, Company Reserve ของบริษัทฯ เข้าร่วมประมูลโครงการดังกล่าว</li> </ol> <p><br></p> <div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MT Token ลงใน MetaMask</div> <div style="text-indent: 25px;">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="text-center my-3">0xf9800ba96038aacea81734d2ff40b7bc8358545d</div> <p>(สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</p>',
  //   proposalContentEng: '<p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The wait is Over.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">From the successful 1BTC pool sharing.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The return of the Hottest stake of all time.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reference from the 1st and 2nd MT campaign, the return of staking on BTC is approximately at 10%</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Joining the 3rd MT campaign</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Starting from 10 October (12:00PM (Noon time) GMT+7) &mdash; 20 October 2021 (12:00PM (Noon time) GMT+7)&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Condition:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&ldquo;Bitcoin Pool Sharing (MT) for HODL participants&rdquo;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-Staking MVP to redeem MT on BTC pool to earn&amp;claim the passive income from BTC only BSC Chain***</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(MVP will be locked for 60 days in Vault)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to join:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Stake MVP on https://mvp.dfy.asia/pool</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Select MVP for BTC (BTCB)</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">**MVP can be deposited as needed, receive MT at the rate of 1 MVP : 1 MT</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to Claim:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Claim MT to redeem BTC (25&ndash;31 October 2021 )</span></p> <p dir="ltr" style="line-height:1.38;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">***</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Warning</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">: In case the participant does not claim &ldquo;BTC&rdquo; within the specified time, both MT and &ldquo;BTC&rdquo; will be returned to the company. On 1 November 2021 MT will be burned from the system</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Claim your MVP back on &ldquo;20 December 2021&rdquo;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Add MT token to wallets:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Manually add token using token address provided below</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MT Address:&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">0xf9800ba96038aacea81734d2ff40b7bc8358545d</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Remark:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity available only for MVP coin on Binance Smart Chain**</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity is reserved to the group of MVP coin through,(https://mvcaravan.com/mvpcoin/), DEX or Exchange (Bitmart, P2PB2B), and BSC Chain and Bitkub Chain.</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- MT3 reserves the right to the coin winners from the Company&rsquo;s Airdrop, Marketing, Company Reserve to participate in the auction for the project. Marketing, Management and Company Reserve cannot participate.</span></p>',
  //   available: true,
  //   divider: BigNumber.from(10).pow(18)
  // },
  // '0x7E5BFd437F95F691310b151CB29D65355f6E2993': {
  //   contractAddress: '0x7E5BFd437F95F691310b151CB29D65355f6E2993',
  //   title: 'Swap MT เป็น BTC #2 (บนเครื่อข่าย BSC)',
  //   imageTokenUrl: '/images/tokens/mt-token.png',
  //   proposalContent: '<p class="mt-3"><p class="text-lg mb-2 font-bold">Swap MT เป็น BTC #2 (บนเครื่อข่าย BSC)</p><p style="text-indent: 25px">#MT2 โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p class="my-5 text-center">* ใครมี MT ได้รับ BTC ทุกคน *</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT2 ได้ตั้งแต่วันที่ 29 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 31 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT2 มาเคลมเพื่อรับ BTCB ได้ตั้งแต่วันที่ 6 กันยายน 2564 เวลา 0.00 น. - วันที่ 10 กันยายน 2564 เวลา 23.59 น. กรณีไม่กดเคลมเหรียญ BTCB ภายในเวลาที่กำหนด เหรียญจะถูกนำคืนเข้าบริษัท</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 11 กันยายน 2564 เวลา 0.00 น.</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 14 ตุลาคม 2564 (โดยเหรียญจะถูกล็อคไว้ 45 วัน ภายใน Vault)</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p><p class="mt-8"><div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MT Token ลงใน MetaMask</div><div style="text-indent: 25px">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="text-center my-3">0xf9800ba96038aacea81734d2ff40b7bc8358545d</div> (สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</div></p></p>',
  //   available: true,
  //   divider: BigNumber.from(10).pow(18)
  // },
  // '0xEE63a82277d81208C3B5E47BB63161851318ABd3': {
  //   contractAddress: '0xEE63a82277d81208C3B5E47BB63161851318ABd3',
  //   title: 'Swap MT เป็น BTC #2 (Coming soon)',
  //   imageTokenUrl: '/images/tokens/mt-token.png',
  //   proposalContent: '<p class="mt-3"><p class="text-lg mb-2 font-bold">Swap MT เป็น BTC (บนเครื่อข่าย BSC)</p><p style="text-indent: 25px">โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p class="my-5 text-center">*** ใครมี MT ได้รับ BTC ทุกคน ***</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT ได้ตั้งแต่วันที่ 15 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 16 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT มาเคลมเพื่อรับ BTC ได้ตั้งแต่วันที่ 19 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 22 สิงหาคม 2564 เวลา 12.00 น.</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 23 สิงหาคม 2564</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 15 กันยายน 2564 เวลา 0.01 น. เป็นต้นไป</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p></p>',
  //   available: false,
  //   divider: BigNumber.from(10).pow(18)
  // },
}

const XCHAIN_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {}

const MATIC_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {}

const BKC_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {}

// use for list token each chain ID
export const launchTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_LAUNCH_TOKEN_LIST,
  [ChainId.XCHAIN]: XCHAIN_LAUNCH_TOKEN_LIST,
  [ChainId.MATIC]: MATIC_LAUNCH_TOKEN_LIST,
  [ChainId.BSC]: BSC_LAUNCH_TOKEN_LIST,
  [ChainId.BKC]: BKC_LAUNCH_TOKEN_LIST
}