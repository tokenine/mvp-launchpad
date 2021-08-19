import { ChainId } from 'dfy-sdk'
import { BigNumber } from 'ethers'

export interface LaunchTokenList {
  contractAddress: string
  title: string
  imageTokenUrl: string
  proposalContent: string
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
  '0xEE63a82277d81208C3B5E47BB63161851318ABd3': {
    contractAddress: '0xEE63a82277d81208C3B5E47BB63161851318ABd3',
    title: 'Swap MT เป็น BTC (บนเครื่อข่าย BSC)',
    imageTokenUrl: '/images/tokens/mt-token.png',
    proposalContent: '<p class="mt-3"><p class="text-lg mb-2 font-bold">Swap MT เป็น BTC (บนเครื่อข่าย BSC)</p><p style="text-indent: 25px">โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p class="my-5 text-center">*** ใครมี MT ได้รับ BTC ทุกคน ***</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT ได้ตั้งแต่วันที่ 15 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 16 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT มาเคลมเพื่อรับ BTC ได้ตั้งแต่วันที่ 19 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 22 สิงหาคม 2564 เวลา 12.00 น.</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 23 สิงหาคม 2564</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 15 กันยายน 2564 เวลา 0.01 น. เป็นต้นไป</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p></p>',
    available: true,
    divider: BigNumber.from(10).pow(18)
  },
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