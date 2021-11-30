import { ChainId } from 'metaverse-sdk'
import { StakeTokenList } from './stake-token'

export interface DonateTokenList extends StakeTokenList {
  thankWord?: {
    title?: string
    content: string
  },
  acceptDonateWallet?: string
}

const BSC_TESTNET_STAKE_DONATE_LIST: { [key: string]: DonateTokenList } = {
  '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce': {
    showOnActiveTab: true,
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
    showOnActiveTab: true,
    contractAddress: 'comingsoon',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdc-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: false
  },
}

const BSC_STAKE_DONATE_LIST: { [key: string]: DonateTokenList } = {
  '0xcEa0A66Dd14D80723930749c00393493F176EAac': {
    showOnActiveTab: true,
    contractAddress: '0xcEa0A66Dd14D80723930749c00393493F176EAac',
    title: 'SOCIAL GIVING #2<br>บริจาคเพื่อบุคลากรทางการแพทย์',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mb-3">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br> •  มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ <div class="mb-2">1) สมาคมศิษเก่าจุฬา <br> 📍 ให้ รพ.สนาม  ม.ธรรมศาสตร์</div><div class="mb-2">2) ชุมชนคลองเตย (คุณนินจา)<br> 📍 ให้ผู้ป่วยโควิดชุมชนคลองเตย </div><div class="mb-2">3) รพ.กลาง <br> 📍 ให้ผู้ป่วยโควิดใน รพ.สนาม</div><div class="mb-2">4) รพ.ธรรมศาสตร์ (คุณนงเยาว์) <br> 📍 ให้ผู้ป่วยโควิด ในรพ.สนาม ม.ธรรมศาสตร์</div><div class="mb-2">5) รพ.ราชพิพัฒน์ <br> 📍 ให้ผู้ป่วยโควิดและบุคลากรทางการแพทย์ ใน รพ.สนาม</div><div class="mb-2">6) มูลนิธิร่วมกตัญญู <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนามระแวกใกล้เคียง</div><div class="mb-2">7) เพจอีจัน <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนาม </div><div class="mb-2">8) เพจเราต้องรอด (คุณได๋) <br> 📍 ให้ผู้ป่วยโควิด  อาสาสมัคร</div><div class="mb-2">9) รพ.พระมงกุฎ (มูลนิธิพระมงกุฎ) <br> 📍 ให้ผู้ป่วยโควิด และบุคลากรทางการแพทย์ใน รพ.สนาม</div> <br> เมื่อครบกำหนด (20 สิงหาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 20 สิงหาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 20 สิงหาคม 2564</p> <br>หมายเหตุ<br>- กิจกรรมนี้ไม่ใช่การลงทุนเป็นการร่วมสนุกสำหรับผู้ที่มีเหรียญ MVP ภายในระยะเวลาหนึ่ง และ ผู้ที่มีเหรียญต้องศึกษาและทำความเข้าใจในกระบวนการ stake ก่อนเข้าร่วมกิจกรรม',
    available: true,
    label: '#2',
    stakeByToken: {
      address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0xcEa0A66Dd14D80723930749c00393493F176EAac',
      name: 'Stake MDD',
      symbol: 'ST-MDD'
    },
    rewardPointToken: {
      address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
      name: 'Token MD',
      symbol: 'MD'
    },
    thankWord: {
      title: 'Thank You',
      content: 'ขอบคุณที่ร่วมกัน Stake {{token}} จำนวน {{amount}} เหรียญและร่วมบริจาค MD ขอให้ท่านประสบความสำเร็จในสิ่งที่หวังและสุขภาพแข็งแรง ทางเราจะนำไปช่วยเหลือบุคลากรทางการแพทย์และอาสาสมัครให้เกิดประโยชน์สุงสุด'
    },
    acceptDonateWallet: '0xcD64a1fb76085F6184C1A8592f44DcF713EAD517'
  },
}

const BKC_STAKE_DONATE_LIST: { [key: string]: DonateTokenList } = {
  '0x24Ec911502FdD776345EF265bB2FC88C73791761': {
    showOnActiveTab: true,
    contractAddress: '0x24Ec911502FdD776345EF265bB2FC88C73791761',
    title: 'SOCIAL GIVING #2<br>บริจาคเพื่อบุคลากรทางการแพทย์',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mb-3">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br> •  มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ <div class="mb-2">1) สมาคมศิษเก่าจุฬา <br> 📍 ให้ รพ.สนาม  ม.ธรรมศาสตร์</div><div class="mb-2">2) ชุมชนคลองเตย (คุณนินจา)<br> 📍 ให้ผู้ป่วยโควิดชุมชนคลองเตย </div><div class="mb-2">3) รพ.กลาง <br> 📍 ให้ผู้ป่วยโควิดใน รพ.สนาม</div><div class="mb-2">4) รพ.ธรรมศาสตร์ (คุณนงเยาว์) <br> 📍 ให้ผู้ป่วยโควิด ในรพ.สนาม ม.ธรรมศาสตร์</div><div class="mb-2">5) รพ.ราชพิพัฒน์ <br> 📍 ให้ผู้ป่วยโควิดและบุคลากรทางการแพทย์ ใน รพ.สนาม</div><div class="mb-2">6) มูลนิธิร่วมกตัญญู <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนามระแวกใกล้เคียง</div><div class="mb-2">7) เพจอีจัน <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนาม </div><div class="mb-2">8) เพจเราต้องรอด (คุณได๋) <br> 📍 ให้ผู้ป่วยโควิด  อาสาสมัคร</div><div class="mb-2">9) รพ.พระมงกุฎ (มูลนิธิพระมงกุฎ) <br> 📍 ให้ผู้ป่วยโควิด และบุคลากรทางการแพทย์ใน รพ.สนาม</div> <br> เมื่อครบกำหนด (20 สิงหาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 20 สิงหาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 20 สิงหาคม 2564</p> <br>หมายเหตุ<br>- กิจกรรมนี้ไม่ใช่การลงทุนเป็นการร่วมสนุกสำหรับผู้ที่มีเหรียญ MVP ภายในระยะเวลาหนึ่ง และ ผู้ที่มีเหรียญต้องศึกษาและทำความเข้าใจในกระบวนการ stake ก่อนเข้าร่วมกิจกรรม',
    available: true,
    label: '#2',
    stakeByToken: {
      address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
      name: 'MVP COIN',
      symbol: 'MVP'
    },
    stakeToken: {
      address: '0x24Ec911502FdD776345EF265bB2FC88C73791761',
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
      content: 'ขอบคุณที่ร่วมกัน Stake {{token}} จำนวน {{amount}} เหรียญและร่วมบริจาค MD ขอให้ท่านประสบความสำเร็จในสิ่งที่หวังและสุขภาพแข็งแรง ทางเราจะนำไปช่วยเหลือบุคลากรทางการแพทย์และอาสาสมัครให้เกิดประโยชน์สุงสุด'
    },
    acceptDonateWallet: '0xcD64a1fb76085F6184C1A8592f44DcF713EAD517'
  },
  '0xf8F5123D019d0a150227b04384D189f2c82Ad9De': {
    showOnActiveTab: false,
    contractAddress: '0xf8F5123D019d0a150227b04384D189f2c82Ad9De',
    title: 'SOCIAL GIVING<br>บริจาคเพื่อบุคลากรทางการแพทย์',
    imageTokenUrl: '/images/tokens/stake-for-society.png',
    detailImage: '/images/MVP-to-MD.png',
    proposalContent: '<p class="mb-3">ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br> •  มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ <div class="mb-2">1) สมาคมศิษเก่าจุฬา <br> 📍 ให้ รพ.สนาม  ม.ธรรมศาสตร์</div><div class="mb-2">2) ชุมชนคลองเตย (คุณนินจา)<br> 📍 ให้ผู้ป่วยโควิดชุมชนคลองเตย </div><div class="mb-2">3) รพ.กลาง <br> 📍 ให้ผู้ป่วยโควิดใน รพ.สนาม</div><div class="mb-2">4) รพ.ธรรมศาสตร์ (คุณนงเยาว์) <br> 📍 ให้ผู้ป่วยโควิด ในรพ.สนาม ม.ธรรมศาสตร์</div><div class="mb-2">5) รพ.ราชพิพัฒน์ <br> 📍 ให้ผู้ป่วยโควิดและบุคลากรทางการแพทย์ ใน รพ.สนาม</div><div class="mb-2">6) มูลนิธิร่วมกตัญญู <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนามระแวกใกล้เคียง</div><div class="mb-2">7) เพจอีจัน <br> 📍 ให้ผู้ป่วยโควิด และ รพ สนาม </div><div class="mb-2">8) เพจเราต้องรอด (คุณได๋) <br> 📍 ให้ผู้ป่วยโควิด  อาสาสมัคร</div><div class="mb-2">9) รพ.พระมงกุฎ (มูลนิธิพระมงกุฎ) <br> 📍 ให้ผู้ป่วยโควิด และบุคลากรทางการแพทย์ใน รพ.สนาม</div> <br> เมื่อครบกำหนด (26 กรกฎาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 31 กรกฎาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 1 สิงหาคม 2564</p> <br>หมายเหตุ<br>- กิจกรรมนี้ไม่ใช่การลงทุนเป็นการร่วมสนุกสำหรับผู้ที่มีเหรียญ MVP ภายในระยะเวลาหนึ่ง และ ผู้ที่มีเหรียญต้องศึกษาและทำความเข้าใจในกระบวนการ stake ก่อนเข้าร่วมกิจกรรม',
    available: true,
    label: '#1',
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
      content: 'ขอบคุณที่ร่วมกัน Stake {{token}} จำนวน {{amount}} เหรียญและร่วมบริจาค MD ขอให้ท่านประสบความสำเร็จในสิ่งที่หวังและสุขภาพแข็งแรง ทางเราจะนำไปช่วยเหลือบุคลากรทางการแพทย์และอาสาสมัครให้เกิดประโยชน์สุงสุด'
    },
    acceptDonateWallet: '0xcD64a1fb76085F6184C1A8592f44DcF713EAD517'
  },
}

// use for list token each chain ID
export const donateTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_STAKE_DONATE_LIST,
  [ChainId.BSC]: BSC_STAKE_DONATE_LIST,
  [ChainId.BKC]: BKC_STAKE_DONATE_LIST
}