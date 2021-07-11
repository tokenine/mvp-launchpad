import { ChainId } from 'dfy-sdk'

export interface StakeTokenList {
  contractAddress: string
  title: string
  imageTokenUrl: string
  proposalContent: string
  available: boolean
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
const BSC_TESTNET_LAUNCH_TOKEN_LIST: { [key: string]: StakeTokenList } = {
  '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce': {
    contractAddress: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce',
    title: 'MVP Social Giving',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
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
    contractAddress: 'comingsoon',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdc-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: false
  },
}

const BSC_LAUNCH_TOKEN_LIST: { [key: string]: StakeTokenList } = {}

const BKC_LAUNCH_TOKEN_LIST: { [key: string]: StakeTokenList } = {}

// use for list token each chain ID
export const stakeTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_LAUNCH_TOKEN_LIST,
  [ChainId.BSC]: BSC_LAUNCH_TOKEN_LIST,
  [ChainId.BKC]: BKC_LAUNCH_TOKEN_LIST
}