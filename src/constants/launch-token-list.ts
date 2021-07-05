export interface LaunchTokenList {
  contractAddress: string
  title: string
  imageTokenUrl: string
  proposalContent: string
  available: boolean
}

export const launchTokenList: { [key: string]: LaunchTokenList } = {
  '0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9': {
    contractAddress: '0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9',
    title: 'Token AAA',
    imageTokenUrl: '/images/tokens/busd-square.jpg',
    proposalContent: '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
    available: true
  },
  'commingsoon1': {
    contractAddress: 'commingsoon1',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdc-square.jpg',
    proposalContent: '',
    available: false
  },
  'commingsoon2': {
    contractAddress: 'commingsoon2',
    title: '(Private)',
    imageTokenUrl: '/images/tokens/usdt-square.jpg',
    proposalContent: '',
    available: false
  }
}