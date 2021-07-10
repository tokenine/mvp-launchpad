import { ChainId } from 'dfy-sdk'

export interface DonateToken {
  destinationAddress: string
  proposalContent: string
  acceptToken: {
    address: string
    name: string
    symbol: string
    decimals: number
  }
}

const BSC_TESTNET_DONATE: DonateToken = {
  destinationAddress: '0x7CE094Bea0e0adF53641310DB1193028D7F7b19a',
  proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
  acceptToken: {
    address: '0xecafc0f1e5448868a08d89fa99e1d2a0694aee23',
    name: 'TokenA',
    symbol: 'TKA',
    decimals: 18
  }
}

export const donateDetailByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_DONATE,
}