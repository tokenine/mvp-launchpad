import { ChainId } from 'dfy-sdk'
import { StakeTokenList } from './stake-token'

export interface DonateTokenList extends StakeTokenList {
  thankWord?: {
    title: string
    content: string
  }
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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.'
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
export const donateTokenListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_LAUNCH_TOKEN_LIST,
  [ChainId.BSC]: BSC_LAUNCH_TOKEN_LIST,
  [ChainId.BKC]: BKC_LAUNCH_TOKEN_LIST
}