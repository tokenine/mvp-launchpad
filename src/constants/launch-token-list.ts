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

const BSC_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {}

const XCHAIN_LAUNCH_TOKEN_LIST: { [key: string]: LaunchTokenList } = {
  '0': {
    contractAddress: '0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9',
    title: 'Token AAA',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: false
  },
}

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