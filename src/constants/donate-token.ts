import { ChainId } from 'dfy-sdk'
import { StakeTokenList } from './stake-token'

export interface DonateTokenList extends StakeTokenList {
  detailImage?: string,
  thankWord?: {
    title?: string
    content: string
  },
  acceptDonateWallet?: string
}

const BSC_TESTNET_LAUNCH_TOKEN_LIST: { [key: string]: DonateTokenList } = {
  '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce': {
    contractAddress: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce',
    title: 'Stake TokenA',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
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
    },
    thankWord: {
      title: 'Thank You',
      content: 'ขอบคุณที่ร่วมกันบริจาค {{token}} จำนวน {{amount}} เหรียญ ขอให้ท่านประสบความสำเร็จในสิ่งที่หวังและสุขภาพแข็งแรง ทางเราจะนำไปช่วยเหลือบุคลากรทางการแพทย์และอาสาสมัครให้เกิดประโยชน์สูงสุด'
    },
    acceptDonateWallet: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce'
  },
  'comingsoon': {
    contractAddress: 'comingsoon',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdc-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: false
  },
}

const BSC_LAUNCH_TOKEN_LIST: { [key: string]: DonateTokenList } = {}

const BKC_LAUNCH_TOKEN_LIST: { [key: string]: DonateTokenList } = {
  '0xf8F5123D019d0a150227b04384D189f2c82Ad9De': {
    contractAddress: '0xf8F5123D019d0a150227b04384D189f2c82Ad9De',
    title: 'SOCIAL GIVING<br>บริจาคเพื่อบุคลากรทางการแพทย์',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mb-3">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br> •  มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ <div class="mb-2">1) สมาคมศิษเก่าจุฬา <br> 📍 ให้ รพ.สนาม  ม.ธรรมศาสตร์</div><div class="mb-2">2) ชุมชนคลองเตย (คุณนินจา)<br> 📍 ให้ผู้ป่วยโควิดชุมชนคลองเตย </div><div class="mb-2">3) รพ.กลาง <br> 📍 ให้ผู้ป่วยโควิดใน รพ.สนาม</div><div class="mb-2">4) รพ.ธรรมศาสตร์ (คุณนงเยาว์) <br> 📍 ให้ผู้ป่วยโควิด ในรพ.สนาม ม.ธรรมศาสตร์</div><div class="mb-2">5) รพ.ราชพิพัฒน์ <br> 📍 ให้ผู้ป่วยโควิดและบุคลากรทางการแพทย์ ใน รพ.สนาม</div><div class="mb-2">6) มูลนิธิร่วมกตัญญู <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนามระแวกใกล้เคียง</div><div class="mb-2">7) เพจอีจัน <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนาม </div><div class="mb-2">8) เพจเราต้องรอด (คุณได๋) <br> 📍 ให้ผู้ป่วยโควิด  อาสาสมัคร</div><div class="mb-2">9) รพ.พระมงกุฎ (มูลนิธิพระมงกุฎ) <br> 📍 ให้ผู้ป่วยโควิด และบุคลากรทางการแพทย์ใน รพ.สนาม</div> <br> เมื่อครบกำหนด (26 กรกฎาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 31 กรกฎาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 1 สิงหาคม 2564</p>',
    available: true,
    stakeByToken: {
      address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0xf8F5123D019d0a150227b04384D189f2c82Ad9De',
      name: 'Stake MDD',
      symbol: 'ST-MDD'
    },
    rewardPointToken: {
      address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
      name: 'Token MD',
      symbol: 'MD'
    },
    thankWord: {
      title: 'Thank You',
      content: 'ขอบคุณที่ร่วมกันบริจาค {{token}} จำนวน {{amount}} เหรียญ ขอให้ท่านประสบความสำเร็จในสิ่งที่หวังและสุขภาพแข็งแรง ทางเราจะนำไปช่วยเหลือบุคลากรทางการแพทย์และอาสาสมัครให้เกิดประโยชน์สูงสุด'
    },
    acceptDonateWallet: '0xcD64a1fb76085F6184C1A8592f44DcF713EAD517'
  },
}

// use for list token each chain ID
export const donateTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_LAUNCH_TOKEN_LIST,
  [ChainId.BSC]: BSC_LAUNCH_TOKEN_LIST,
  [ChainId.BKC]: BKC_LAUNCH_TOKEN_LIST
}