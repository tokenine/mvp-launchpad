const farms: { [key: string]: any } = {
  '0': {
    type: 'masterchefv1',
    pid: 0,
    masterchefAddress: '',
    pairAddress: '0xEFBd7858cd7a6932592573616F51dEdC487B55DD', // lp address
    symbol: 'TKA-TKB',
    token0: {
      address: '0xecafc0f1e5448868a08d89fa99e1d2a0694aee23',
      name: 'TokenA',
      symbol: 'TKA',
      imageUrl: ''
    },
    token1: {
      address: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46',
      name: 'TokenB',
      symbol: 'TKB',
      imageUrl: ''
    }
  },
  '1': {
    type: 'masterchefv1',
    pid: 1,
    masterchefAddress: '',
    pairAddress: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46', // lp address
    symbol: 'TKB',
    token0: {
      address: '0xecafc0f1e5448868a08d89fa99e1d2a0694aee23',
      name: 'TokenA',
      symbol: 'TKA',
      imageUrl: ''
    },
    token1: {
      address: '0x83c4cb8bea9e049a0d8df5f5ffc02563801e9e46',
      name: 'TokenB',
      symbol: 'TKB',
      imageUrl: ''
    }
  }   
}

// type example minichefv2, masterchefv1, masterchefv2

export default farms