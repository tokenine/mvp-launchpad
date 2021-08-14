import { ChainId } from 'dfy-sdk'

export interface StakeTokenList {
  showOnActiveTab: boolean
  contractAddress: string
  title: string
  detailImage?: string,
  imageTokenUrl: string
  proposalContent: string
  available: boolean
  label?: string
  extraHeader?: string
  stakeByToken?: {
    address: string
    name: string
    symbol: string
  }
  stakeToken?: {
    address: string
    name: string
    symbol: string
  },
  rewardPointToken?: {
    address: string
    name: string
    symbol: string
  }
}
// 0xF2059c93Bb02c43237099a4006548b47B55cDc1f
const BSC_TESTNET_STAKE_LIST: { [key: string]: StakeTokenList } = {
  '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce': {
    showOnActiveTab: true,
    contractAddress: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce',
    title: 'MVP Social Giving',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    proposalContent: '<p class="mb-3">MVP Social Giving | Stake for society.<br> ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) </p>',
    available: true,
    stakeByToken: {
      address: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23',
      name: 'TokenA',
      symbol: 'TKA'
    },
    stakeToken: {
      address: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce',
      name: 'MVPS1 Stake',
      symbol: 'ST-MVPS1'
    },
    rewardPointToken: {
      address: '0x85f79fCE8a5890F76a684DD99818ac980de23Ed8',
      name: 'MVP special 1',
      symbol: 'MVPS1'
    }
  },
  '0xF2059c93Bb02c43237099a4006548b47B55cDc1f': {
    showOnActiveTab: true,
    contractAddress: '0xF2059c93Bb02c43237099a4006548b47B55cDc1f',
    title: 'TokenA (New)',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: true,
    stakeByToken: {
      address: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23',
      name: 'TokenA',
      symbol: 'TKA'
    },
    stakeToken: {
      address: '0xF2059c93Bb02c43237099a4006548b47B55cDc1f',
      name: 'MVPS1 Stake',
      symbol: 'ST-MVPS1'
    },
    rewardPointToken: {
      address: '0x85f79fCE8a5890F76a684DD99818ac980de23Ed8',
      name: 'MVP special 1',
      symbol: 'MVPS1'
    }
  },
  'comingsoon': {
    showOnActiveTab: true,
    contractAddress: 'comingsoon',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdc-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: false
  },
}

const BSC_STAKE_LIST: { [key: string]: StakeTokenList } = {
  '0xd072c9fEE63159Bb0Eb750AD974B2827a3364BFB': {
    showOnActiveTab: true,
    contractAddress: '0xd072c9fEE63159Bb0Eb750AD974B2827a3364BFB',
    title: 'SELF-QUARANTINE #2<br>แลกเหรียญ MD',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #2 (siren) ขยายโครงการMVP Social Giving I Stake For Society #2 ครั้งใหม่จะเริ่ม 1-14 สิงหาคม 2564  ระยะเวลาใช้งาน MD 2-25 สิงหาคม 2564 โดยผู้ถือเหรียญ  MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 สิงหาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆได้จนถึงวันที่ 25 สิงหาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br/><br/>มี 2 Pool ให้เลือกคือ  <br/>• Social-Donation  : มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)  <br/>• Self-Quarantine  : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 2 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน (siren) MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป  โดยเหรียญ MD ยังคงสามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 31 กรกฎาคม 2564  เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p>',
    available: true,
    label: '#2',
    stakeByToken: {
      address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0xd072c9fEE63159Bb0Eb750AD974B2827a3364BFB',
      name: 'Stake MD',
      symbol: 'ST-MD'
    },
    rewardPointToken: {
      address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
      name: 'Token MD',
      symbol: 'MD'
    },
  },
  '0x394b5bddDfc2Fa1edb9ff8c818b71D4F7ffF0115': {
    showOnActiveTab: false,
    extraHeader: 'MVP WE ARE HODL',
    contractAddress: '0x394b5bddDfc2Fa1edb9ff8c818b71D4F7ffF0115',
    title: 'Stake MVP for BTC',
    imageTokenUrl: '/images/tokens/mt-token.png',
    detailImage: '/images/tokens/mt-token.png',
    proposalContent: '<p class="mt-3"><p style="text-indent: 25px">โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT ได้ตั้งแต่วันที่ 15 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 16 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT มาเคลมเพื่อรับ BTC ได้ตั้งแต่วันที่ 19 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 22 สิงหาคม 2564 เวลา 12.00 น.</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 23 สิงหาคม 2564</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 15 กันยายน 2564 เวลา 0.01 น. เป็นต้นไป</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p></p>',
    available: true,
    stakeByToken: {
      address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0x394b5bddDfc2Fa1edb9ff8c818b71D4F7ffF0115',
      name: 'Stake MVPBTC ',
      symbol: 'ST-MVPB'
    },
    rewardPointToken: {
      address: '0xf9800ba96038aacea81734d2ff40b7bc8358545d',
      name: 'MVP TEST',
      symbol: 'MT'
    },
  }
}

const BKC_STAKE_LIST: { [key: string]: StakeTokenList } = {
  '0x266A8eF144Ae716fA91B70211a62d334E3eF75E8': {
    showOnActiveTab: true,
    contractAddress: '0x266A8eF144Ae716fA91B70211a62d334E3eF75E8',
    title: 'SELF-QUARANTINE #2<br>แลกเหรียญ MD',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #2 (siren) ขยายโครงการMVP Social Giving I Stake For Society #2 ครั้งใหม่จะเริ่ม 1-14 สิงหาคม 2564  ระยะเวลาใช้งาน MD 2-25 สิงหาคม 2564 โดยผู้ถือเหรียญ  MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 สิงหาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้จนถึงวันที่ 25 สิงหาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br/><br/>มี 2 Pool ให้เลือกคือ  <br/>• Social-Donation  : มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)  <br/>• Self-Quarantine  : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 2 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน (siren) MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป  โดยเหรียญ MD ยังคงสามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 31 กรกฎาคม 2564  เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p>',
    available: true,
    label: '#2',
    stakeByToken: {
      address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0x266A8eF144Ae716fA91B70211a62d334E3eF75E8',
      name: 'Stake MD',
      symbol: 'ST-MD'
    },
    rewardPointToken: {
      address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
      name: 'Token MD',
      symbol: 'MD'
    },
  },
  '0xE2a5304fD47c06d6DB04F5B21790A8d5FC08eb4f': {
    showOnActiveTab: false,
    contractAddress: '0xE2a5304fD47c06d6DB04F5B21790A8d5FC08eb4f',
    title: 'SELF-QUARANTINE<br>แลกเหรียญ MD',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mb-3"></p>ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br>  สามารถนำเหรียญ MD มาแลกเซ็ตอาหารต่างๆ ตามรายละเอียด พร้อมจัดส่งถึงบ้าน <br> เมื่อครบกำหนด (26 กรกฎาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 31 กรกฎาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 1 สิงหาคม 2564 <br><br>หมายเหตุ<br>- กิจกรรมนี้ไม่ใช่การลงทุนเป็นการร่วมสนุกสำหรับผู้ที่มีเหรียญ MVP ภายในระยะเวลาหนึ่ง และ ผู้ที่มีเหรียญต้องศึกษาและทำความเข้าใจในกระบวนการ stake ก่อนเข้าร่วมกิจกรรม',
    available: true,
    label: '#1',
    stakeByToken: {
      address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0xE2a5304fD47c06d6DB04F5B21790A8d5FC08eb4f',
      name: 'Stake MD',
      symbol: 'ST-MD'
    },
    rewardPointToken: {
      address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
      name: 'Token MD',
      symbol: 'MD'
    },
  },
}

// use for list token each chain ID
export const stakeTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_STAKE_LIST,
  [ChainId.BSC]: BSC_STAKE_LIST,
  [ChainId.BKC]: BKC_STAKE_LIST
}
