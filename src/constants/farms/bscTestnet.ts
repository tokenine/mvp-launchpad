// 0xd84633909b3d11aded06122c6265ca699098704c DFY
const farms: { [key: string]: any } = {
  '0': {
    type: 'masterchefv1',
    pid: 0,
    masterchefAddress: '',
    pairAddress: '0xEFBd7858cd7a6932592573616F51dEdC487B55DD', // lp address
    symbol: 'TKA-TKB',
    poolType: 'LP',
    tokenReward: {
      address: '0xd84633909b3d11adEd06122C6265cA699098704c',
      name: 'DfyToken',
      symbol: 'DFY'
    },
    token0: {
      address: '0xecafc0f1e5448868a08d89fa99e1d2a0694aee23',
      name: 'TokenA',
      symbol: 'TKA',
      imageUrl: '/images/tokens/usdt-square.jpg'
    },
    token1: {
      address: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46',
      name: 'TokenB',
      symbol: 'TKB',
      imageUrl: '/images/tokens/busd-square.jpg'
    }
  },
  '1': {
    type: 'masterchefv1',
    pid: 1,
    masterchefAddress: '',
    pairAddress: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46', // lp address
    symbol: 'TKB',
    poolType: 'SST', // single stake token (SST)
    tokenReward: {
      address: '0xd84633909b3d11adEd06122C6265cA699098704c',
      name: 'DfyToken',
      symbol: 'DFY'
    },
    token0: {
      address: '0xecafc0f1e5448868a08d89fa99e1d2a0694aee23',
      name: 'TokenA',
      symbol: 'TKA',
      imageUrl: '/images/tokens/usdt-square.jpg'
    },
    token1: null
  },
  '2': {
    type: 'masterchefv1',
    pid: 2,
    masterchefAddress: '',
    pairAddress: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46', // lp address
    symbol: 'TKB',
    poolType: 'SST', // single stake token (SST)
    tokenReward: {
      address: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23',
      name: 'TokenA',
      symbol: 'TKA'
    },
    token0: {
      address: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46',
      name: 'TokenB',
      symbol: 'TKB',
      imageUrl: '/images/tokens/busd-square.jpg'
    },
    token1: null
  }    
}

// type example minichefv2, masterchefv1, masterchefv2

export default farms