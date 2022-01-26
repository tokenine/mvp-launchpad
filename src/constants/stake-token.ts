import { ChainId } from 'metaverse-sdk'

export interface StakeTokenList {
    changeToken?: boolean
    showOnActiveTab: boolean
    contractAddress: string
    title: string
    detailImage?: string
    imageTokenUrl: string
    proposalContent: string
    proposalContentEng?: string
    available: boolean
    label?: string
    extraHeader?: string
    isHasClaimDate?: boolean
    isHasStartDate?: boolean
    showTotalDonate?: string
    stakeByToken?: {
        address: string
        name: string
        symbol: string
    }
    stakeToken?: {
        address: string
        name: string
        symbol: string
    }
    rewardPointToken?: {
        address: string
        name: string
        symbol: string
    }
    showThankStake?: boolean
}
// 0xF2059c93Bb02c43237099a4006548b47B55cDc1f
const BSC_TESTNET_STAKE_LIST: { [key: string]: StakeTokenList } = {
    '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce': {
        showOnActiveTab: true,
        contractAddress: '0xfB4895beE86cd82a1fFdDBe7D5Fca524eFa550ce',
        title: 'MVP Social Giving',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        proposalContent:
            '<p class="mb-3">MVP Social Giving | Stake for society.<br> ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) </p>',
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
        proposalContent:
            '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
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
    comingsoon: {
        showOnActiveTab: true,
        contractAddress: 'comingsoon',
        title: '(Private)',
        imageTokenUrl: '/images/tokens/usdc-square.jpg',
        proposalContent:
            '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
        available: false
    }
}

const BSC_STAKE_LIST: { [key: string]: StakeTokenList } = {
    '0xeC4D23e19d57DEBDD161ceb2C55762414eAb09db': {
        showOnActiveTab: true,
        contractAddress: '0xeC4D23e19d57DEBDD161ceb2C55762414eAb09db',
        title: 'SELF-QUARANTINE #6<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>MVP Social Giving | Stake For Society #6</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">โครงการ #MD6 ของขวัญส่งท้ายปี อิ่มท้อง อิ่มบุญ สำหรับผู้ถือเหรียญ MVP &nbsp;เริ่ม 1-28 ธันวาคม 2564 ระยะเวลาใช้งาน MD 1-28 ธันวาคม 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>รายละเอียด</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญ MVP Coin จะได้รับเหรียญ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญสามารถนำเหรียญ MD ไปแลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป จนถึงวันที่ 28 ธันวาคม 2564 เมื่อครบกำหนดเหรียญ MD จะถูก Burn ออกจากระบบทั้งหมด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้ผู้ถือเหรียญ MVP Coin สามารถนำเหรียญไป Stake ได้ทั้ง 3 Chain ได้แก่ &nbsp;BKC , BSC และ MetaChain</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญ MD สามารถนำเหรียญมาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>หมายเหตุ:&nbsp;</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-เหรียญ MD ที่ใช้แลกในโครงการทั้ง 6 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากเหรียญมีระยะเวลาในการใช้งานของโครงการแตกต่างกัน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 31 ธันวาคม 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 ธันวาคม &nbsp;2564 เวลา 23.59 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- เหรียญ MD จะถูก Burn ออกจากระบบทั้งหมดในวันที่ 29 ธันวาคม 2564</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เวลา 00.01 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ทีมงาน MD หยุดให้บริการทุกวันอาทิตย์ และวันหยุดนักขัตฤกษ์ ได้แก่</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันจันทร์ที่ 6 ธันวาคม 2564 ชดเชยวันคล้ายพระราชสมภพ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันศุกร์ที่ 10 ธันวาคม 2564 วันพระราชทานรัฐธรรมนูญ</span></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#6',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xeC4D23e19d57DEBDD161ceb2C55762414eAb09db',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0x6AB2345b52477AB40815d064Dbdae838f46793b3': {
        showOnActiveTab: true,
        contractAddress: '0x6AB2345b52477AB40815d064Dbdae838f46793b3',
        title: 'SELF-QUARANTINE #5<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MVP Social Giving | Stake For Society #5</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">โครงการ #MD5 สินค้าเพิ่มขึ้นตามคำเรียกร้อง &nbsp;เริ่ม 1-28 พฤศจิกายน 2564 ระยะเวลาใช้งาน MD 1-28 พฤศจิกายน 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 พฤศจิกายน 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">รายละเอียด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">และสามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 พฤศจิกายน 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป ได้จนถึงวันที่ 28 พฤศจิกายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1 Pool คือ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&bull; Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 5 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 พฤศจิกายน 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 พฤศจิกายน &nbsp;2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span style="font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 5 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 พฤศจิกายน 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารได้ถึงวันที่ 27 พฤศจิกายน 2564 และแลกสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 พฤศจิกายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</span>&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วิธีการเพิ่ม MD Token ลงใน MetaMask</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain หรือ Bitkub Chain จากนั้นคลิก Add Token ใส่ Token Address:</span></p> <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">BKC: 0x9c882a7004D4bB7E5fa77856625225EA29619323</span></p> <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">BSC: 0x7e78a9b7c688c5b8152df3f50f6f32e983f28ac8</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</span></p> <p><br></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#5',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x6AB2345b52477AB40815d064Dbdae838f46793b3',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0xABe28Bb22d1Dc2FE1A2455eDBB477f9935Ec869A': {
        showOnActiveTab: true,
        extraHeader: 'MVP WE ARE HODL 3',
        contractAddress: '0xABe28Bb22d1Dc2FE1A2455eDBB477f9935Ec869A',
        title: 'Stake MVP for BTC 3',
        imageTokenUrl: '/images/tokens/mt-token.png',
        detailImage: '/images/tokens/mt-token.png',
        proposalContent:
            '<p style="text-indent: 25px;">#MT3 โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p> <p class="my-5 text-center">* ใครมี MT ได้รับ BTC ทุกคน *</p> <p class="mb-3" style="text-indent: 25px;">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p> <div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div> <ul class="list-disc list-inside"> <li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT3 ได้ตั้งแต่วันที่ 10 ตุลาคม 2564 เวลา 12.00 น. - วันที่ 20 ตุลาคม 2564 เวลา 12.00 น.</li> <li>นำ MT3 มาเคลมเพื่อรับ BTCB ได้ตั้งแต่วันที่ 25 ตุลาคม 2564 เวลา 0.00 น. - วันที่ 31 ตุลาคม 2564 เวลา 23.59 น.<br>**กรณีไม่กดเคลมเหรียญ BTCB ภายในเวลาที่กำหนด เหรียญจะถูกนำคืนเข้าบริษัท</li> <li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 1 พฤศจิกายน 2564 เวลา 0.00 น. สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 20 ธันวาคม 2564 เวลา 23.59 น. (โดยเหรียญจะถูกล็อคไว้ 60 วัน ภายใน Vault)</li> </ul> <p class="mt-5">หมายเหตุ :&nbsp;</p> <ol class="list-decimal list-inside"> <li>โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</li> <li>ให้สิทธิเฉพาะผู้ซื้อเหรียญ MVP ผ่านการซื้อหน้าเวป (<a href="https://mvcaravan.com/mvpcoin/">https://mvcaravan.com/mvpcoin/</a>), DEX หรือ Exchange (Bitmart, P2PB2B) ทั้งระบบ BSC Chain และ Bitkub Chain</li> <li>MT3 ขอสงวนสิทธิผู้ได้เหรียญจาก Airdrop, Marketing, Company Reserve ของบริษัทฯ เข้าร่วมประมูลโครงการดังกล่าว</li> </ol> <p><br></p> <div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MT Token ลงใน MetaMask</div> <div style="text-indent: 25px;">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="text-center my-3">0xf9800ba96038aacea81734d2ff40b7bc8358545d</div> <p>(สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</p>',
        proposalContentEng:
            '<p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The wait is Over.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">From the successful 1BTC pool sharing.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The return of the Hottest stake of all time.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reference from the 1st and 2nd MT campaign, the return of staking on BTC is approximately at 10%</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Joining the 3rd MT campaign</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Starting from 10 October (12:00PM (Noon time) GMT+7) &mdash; 20 October 2021 (12:00PM (Noon time) GMT+7)&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Condition:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&ldquo;Bitcoin Pool Sharing (MT) for HODL participants&rdquo;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-Staking MVP to redeem MT on BTC pool to earn&amp;claim the passive income from BTC only BSC Chain***</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(MVP will be locked for 60 days in Vault)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to join:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Stake MVP on https://mvp.dfy.asia/pool</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Select MVP for BTC (BTCB)</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">**MVP can be deposited as needed, receive MT at the rate of 1 MVP : 1 MT</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to Claim:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Claim MT to redeem BTC (25&ndash;31 October 2021 )</span></p> <p dir="ltr" style="line-height:1.38;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">***</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Warning</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">: In case the participant does not claim &ldquo;BTC&rdquo; within the specified time, both MT and &ldquo;BTC&rdquo; will be returned to the company. On 1 November 2021 MT will be burned from the system</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Claim your MVP back on &ldquo;20 December 2021&rdquo;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Add MT token to wallets:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Manually add token using token address provided below</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MT Address:&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">0xf9800ba96038aacea81734d2ff40b7bc8358545d</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Remark:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity available only for MVP coin on Binance Smart Chain**</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity is reserved to the group of MVP coin through,(https://mvcaravan.com/mvpcoin/), DEX or Exchange (Bitmart, P2PB2B), and BSC Chain and Bitkub Chain.</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- MT3 reserves the right to the coin winners from the Company&rsquo;s Airdrop, Marketing, Company Reserve to participate in the auction for the project. Marketing, Management and Company Reserve cannot participate.</span></p>',
        available: true,
        isHasClaimDate: true,
        isHasStartDate: true,
        label: '#3',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xABe28Bb22d1Dc2FE1A2455eDBB477f9935Ec869A',
            name: 'Stake MVPBTC ',
            symbol: 'ST-MVPB'
        },
        rewardPointToken: {
            address: '0xf9800ba96038aacea81734d2ff40b7bc8358545d',
            name: 'MVP TEST',
            symbol: 'MT'
        }
    },
    '0x3a05D48b541902F4E39519A855D77739dD5bA8cD': {
        showOnActiveTab: true,
        contractAddress: '0x3a05D48b541902F4E39519A855D77739dD5bA8cD',
        title: 'SELF-QUARANTINE #4<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3"><p>MVP Social Giving | Stake For Society #4</p> <p>โครงการ #MD4 ครั้งใหม่จะเริ่ม 1-28 ตุลาคม 2564 ระยะเวลาใช้งาน MD 1-28 ตุลาคม 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 ตุลาคม 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</p> <p><br></p> <p><strong>รายละเอียด</strong></p> <p>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</p> <p><br></p> <p>และสามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 ตุลาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป ได้จนถึงวันที่ 28 ตุลาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ</p> <p><br></p> <p><strong>ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1 Pool คือ</strong></p> <p>&bull; Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</p> <p>ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</p> <p><br></p> <p>เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย</p> <p><br></p> <p>หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 4 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 ตุลาคม 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 ตุลาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#4',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x3a05D48b541902F4E39519A855D77739dD5bA8cD',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0x028aADb50b311E372350C4A63F0aE61094C535a2': {
        showOnActiveTab: false,
        contractAddress: '0x028aADb50b311E372350C4A63F0aE61094C535a2',
        title: 'SELF-QUARANTINE #3<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #3 ขยายโครงการ MVP Social Giving I Stake For Society #3 ครั้งใหม่จะเริ่ม 1-28 กันยายน 2564 ระยะเวลาใช้งาน MD 1-28 กันยายน 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 กันยายน 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้จนถึงวันที่ 28 กันยายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน หรืออัตราคิดลด 0.25% จนเสร็จสิ้นกิจกรรม <br/><br/>ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1  Pool คือ  <br/>• Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน ทุก ๆ 10% ที่จะได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ) <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 3 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 และ MVP Social Giving I Stake For Society ระหว่างวันที่ 1-14 สิงหาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป หรือ วันที่ 15 สิงหาคม 2564 เป็นต้นไป สำหรับผู้ร่วมกิจกรรมครั้งที่ 3 สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 กันยายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ <p style="text-indent: 25px">ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ จนเสร็จสิ้นกิจกรรม<p class="mt-8"><div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MD Token ลงใน MetaMask</div><div style="text-indent: 25px">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain หรือ Bitkub Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="mt-3">BKC: 0x9c882a7004D4bB7E5fa77856625225EA29619323</div> <div class="mb-3">BSC: 0x7e78a9b7c688c5b8152df3f50f6f32e983f28ac8</div> (สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</div></p></p></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#3',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x028aADb50b311E372350C4A63F0aE61094C535a2',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0x30aD01DAc5761658AFCD26242ffaf25b004426d8': {
        showOnActiveTab: false,
        extraHeader: 'MVP WE ARE HODL 2',
        contractAddress: '0x30aD01DAc5761658AFCD26242ffaf25b004426d8',
        title: 'Stake MVP for BTC 2',
        imageTokenUrl: '/images/tokens/mt-token.png',
        detailImage: '/images/tokens/mt-token.png',
        proposalContent:
            '<p class="mt-3"><p style="text-indent: 25px">#MT2 โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p class="my-5 text-center">* ใครมี MT ได้รับ BTC ทุกคน *</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT2 ได้ตั้งแต่วันที่ 29 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 31 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT2 มาเคลมเพื่อรับ BTCB ได้ตั้งแต่วันที่ 6 กันยายน 2564 เวลา 0.00 น. - วันที่ 10 กันยายน 2564 เวลา 23.59 น. กรณีไม่กดเคลมเหรียญ BTCB ภายในเวลาที่กำหนด เหรียญจะถูกนำคืนเข้าบริษัท</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 11 กันยายน 2564 เวลา 0.00 น.</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 14 ตุลาคม 2564 (โดยเหรียญจะถูกล็อคไว้ 45 วัน ภายใน Vault)</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p><p class="mt-8"><div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MT Token ลงใน MetaMask</div><div style="text-indent: 25px">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="text-center my-3">0xf9800ba96038aacea81734d2ff40b7bc8358545d</div> (สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</div></p></p>',
        available: true,
        isHasClaimDate: true,
        isHasStartDate: true,
        label: '#2',
        stakeByToken: {
            address: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x30aD01DAc5761658AFCD26242ffaf25b004426d8',
            name: 'Stake MVPBTC ',
            symbol: 'ST-MVPB'
        },
        rewardPointToken: {
            address: '0xf9800ba96038aacea81734d2ff40b7bc8358545d',
            name: 'MVP TEST',
            symbol: 'MT'
        }
    },
    '0x394b5bddDfc2Fa1edb9ff8c818b71D4F7ffF0115': {
        showOnActiveTab: false,
        extraHeader: 'MVP WE ARE HODL',
        contractAddress: '0x394b5bddDfc2Fa1edb9ff8c818b71D4F7ffF0115',
        title: 'Stake MVP for BTC',
        imageTokenUrl: '/images/tokens/mt-token.png',
        detailImage: '/images/tokens/mt-token.png',
        proposalContent:
            '<p class="mt-3"><p style="text-indent: 25px">โครงการเอาใจสาย HODL แบบเต็มๆ โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test) ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</p><p class="my-5 text-center">*** ใครมี MT ได้รับ BTC ทุกคน ***</p><p style="text-indent: 25px" class="mb-3">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</p><div class="text-lg mb-1 font-bold">เงื่อนไขและข้อกำหนด</div><ul class="list-disc list-inside"><li>เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT ได้ตั้งแต่วันที่ 15 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 16 สิงหาคม 2564 เวลา 12.00 น.</li><li>นำ MT มาเคลมเพื่อรับ BTC ได้ตั้งแต่วันที่ 19 สิงหาคม 2564 เวลา 12.00 น. - วันที่ 22 สิงหาคม 2564 เวลา 12.00 น.</li><li>เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 23 สิงหาคม 2564</li><li>สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 15 กันยายน 2564 เวลา 0.01 น. เป็นต้นไป</li></ul><p class="mt-5">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Binance Smart Chain เท่านั้น</p></p>',
        available: true,
        isHasClaimDate: true,
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
        }
    },
    '0xd072c9fEE63159Bb0Eb750AD974B2827a3364BFB': {
        showOnActiveTab: false,
        contractAddress: '0xd072c9fEE63159Bb0Eb750AD974B2827a3364BFB',
        title: 'SELF-QUARANTINE #2<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #2 (siren) ขยายโครงการMVP Social Giving I Stake For Society #2 ครั้งใหม่จะเริ่ม 1-14 สิงหาคม 2564  ระยะเวลาใช้งาน MD 2-25 สิงหาคม 2564 โดยผู้ถือเหรียญ  MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 สิงหาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆได้จนถึงวันที่ 25 สิงหาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br/><br/>มี 2 Pool ให้เลือกคือ  <br/>• Social-Donation  : มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)  <br/>• Self-Quarantine  : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 2 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน (siren) MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป  โดยเหรียญ MD ยังคงสามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 31 กรกฎาคม 2564  เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p>',
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
        }
    },
    '0x9b98646315CC7677CE02a3cCf580c80f36ACA4ff': {
        changeToken: true,
        showOnActiveTab: true,
        contractAddress: '0x9b98646315CC7677CE02a3cCf580c80f36ACA4ff',
        title: 'MVP to MEV',
        imageTokenUrl: '/images/tokens/mev-circle.png',
        proposalContent:
            '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
        available: true
    }
}

const BKC_STAKE_LIST: { [key: string]: StakeTokenList } = {
    '0x69874922464f4D13e4f8ec787078def5628B27DA': {
        showOnActiveTab: true,
        contractAddress: '0x69874922464f4D13e4f8ec787078def5628B27DA',
        title: 'SELF-QUARANTINE #6<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>MVP Social Giving | Stake For Society #6</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">โครงการ #MD6 ของขวัญส่งท้ายปี อิ่มท้อง อิ่มบุญ สำหรับผู้ถือเหรียญ MVP &nbsp;เริ่ม 1-28 ธันวาคม 2564 ระยะเวลาใช้งาน MD 1-28 ธันวาคม 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>รายละเอียด</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญ MVP Coin จะได้รับเหรียญ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญสามารถนำเหรียญ MD ไปแลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป จนถึงวันที่ 28 ธันวาคม 2564 เมื่อครบกำหนดเหรียญ MD จะถูก Burn ออกจากระบบทั้งหมด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้ผู้ถือเหรียญ MVP Coin สามารถนำเหรียญไป Stake ได้ทั้ง 3 Chain ได้แก่ &nbsp;BKC , BSC และ MetaChain</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญ MD สามารถนำเหรียญมาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>หมายเหตุ:&nbsp;</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-เหรียญ MD ที่ใช้แลกในโครงการทั้ง 6 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากเหรียญมีระยะเวลาในการใช้งานของโครงการแตกต่างกัน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 31 ธันวาคม 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 ธันวาคม &nbsp;2564 เวลา 23.59 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- เหรียญ MD จะถูก Burn ออกจากระบบทั้งหมดในวันที่ 29 ธันวาคม 2564</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เวลา 00.01 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ทีมงาน MD หยุดให้บริการทุกวันอาทิตย์ และวันหยุดนักขัตฤกษ์ ได้แก่</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันจันทร์ที่ 6 ธันวาคม 2564 ชดเชยวันคล้ายพระราชสมภพ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันศุกร์ที่ 10 ธันวาคม 2564 วันพระราชทานรัฐธรรมนูญ</span></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#6',
        stakeByToken: {
            address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x69874922464f4D13e4f8ec787078def5628B27DA',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0xebC1aEf281ec1B8e31d44BdE16F80b64Fd7f7508': {
        showOnActiveTab: true,
        contractAddress: '0xebC1aEf281ec1B8e31d44BdE16F80b64Fd7f7508',
        title: 'SELF-QUARANTINE #5<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MVP Social Giving | Stake For Society #5</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">โครงการ #MD5 สินค้าเพิ่มขึ้นตามคำเรียกร้อง &nbsp;เริ่ม 1-28 พฤศจิกายน 2564 ระยะเวลาใช้งาน MD 1-28 พฤศจิกายน 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 พฤศจิกายน 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">รายละเอียด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">และสามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 พฤศจิกายน 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป ได้จนถึงวันที่ 28 พฤศจิกายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1 Pool คือ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&bull; Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 5 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 พฤศจิกายน 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 พฤศจิกายน &nbsp;2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span style="font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 5 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 พฤศจิกายน 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารได้ถึงวันที่ 27 พฤศจิกายน 2564 และแลกสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 พฤศจิกายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</span>&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วิธีการเพิ่ม MD Token ลงใน MetaMask</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain หรือ Bitkub Chain จากนั้นคลิก Add Token ใส่ Token Address:</span></p> <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">BKC: 0x9c882a7004D4bB7E5fa77856625225EA29619323</span></p> <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">BSC: 0x7e78a9b7c688c5b8152df3f50f6f32e983f28ac8</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</span></p> <p><br></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#5',
        stakeByToken: {
            address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xebC1aEf281ec1B8e31d44BdE16F80b64Fd7f7508',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0xD6b34eb785baDe9F7C5F2D19E784Ced6c9d91262': {
        showOnActiveTab: true,
        contractAddress: '0xD6b34eb785baDe9F7C5F2D19E784Ced6c9d91262',
        title: 'SELF-QUARANTINE #3<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3"><p>MVP Social Giving | Stake For Society #4</p> <p>โครงการ #MD4 ครั้งใหม่จะเริ่ม 1-28 ตุลาคม 2564 ระยะเวลาใช้งาน MD 1-28 ตุลาคม 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 ตุลาคม 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</p> <p><br></p> <p><strong>รายละเอียด</strong></p> <p>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</p> <p><br></p> <p>และสามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 ตุลาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป ได้จนถึงวันที่ 28 ตุลาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ</p> <p><br></p> <p><strong>ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1 Pool คือ</strong></p> <p>&bull; Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</p> <p>ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</p> <p><br></p> <p>เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย</p> <p><br></p> <p>หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 4 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 30 ตุลาคม 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 ตุลาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#4',
        stakeByToken: {
            address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xD6b34eb785baDe9F7C5F2D19E784Ced6c9d91262',
            name: 'Stake MDD',
            symbol: 'ST-MDD'
        },
        rewardPointToken: {
            address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
            name: 'Token MD',
            symbol: 'MD'
        }
    },
    '0xE4ABd8F271F390f85232d0fc5a3a281Fa843C260': {
        showOnActiveTab: false,
        contractAddress: '0xE4ABd8F271F390f85232d0fc5a3a281Fa843C260',
        title: 'SELF-QUARANTINE #3<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #3 ขยายโครงการ MVP Social Giving I Stake For Society #3 ครั้งใหม่จะเริ่ม 1-28 กันยายน 2564 ระยะเวลาใช้งาน MD 1-28 กันยายน 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 กันยายน 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้จนถึงวันที่ 28 กันยายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน หรืออัตราคิดลด 0.25% จนเสร็จสิ้นกิจกรรม <br/><br/>ในครั้งนี้มี Pool กิจกรรมให้เลือกเพียง 1  Pool คือ  <br/>• Self-Quarantine : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน ทุก ๆ 10% ที่จะได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ) <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 3 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 และ MVP Social Giving I Stake For Society ระหว่างวันที่ 1-14 สิงหาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป หรือ วันที่ 15 สิงหาคม 2564 เป็นต้นไป สำหรับผู้ร่วมกิจกรรมครั้งที่ 3 สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 กันยายน 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ <p style="text-indent: 25px">ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ จนเสร็จสิ้นกิจกรรม </p><p class="mt-8"><div class="text-lg mb-1 font-bold">วิธีการเพิ่ม MD Token ลงใน MetaMask</div><div style="text-indent: 25px">เปิดแอพฯ MetaMask แล้วเลือก Network เป็น Binance Smart Chain หรือ Bitkub Chain จากนั้นคลิก Add Token ใส่ Token Address:</div> <div class="mt-3">BKC: 0x9c882a7004D4bB7E5fa77856625225EA29619323</div> <div class="mb-3">BSC: 0x7e78a9b7c688c5b8152df3f50f6f32e983f28ac8</div> (สามารถก๊อปปี้ไปวางได้) หาก Token Address ถูกต้องค่าต่างๆ ในช่อง Token Symbol และ Token of precision จะปรากฏโดยอัตโนมัติ ให้คลิก Add Token เป็นอันเสร็จเรียบร้อย</div></p></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#3',
        stakeByToken: {
            address: '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xE4ABd8F271F390f85232d0fc5a3a281Fa843C260',
            name: 'Stake MDD',
            symbol: 'ST-MDD'
        },
        rewardPointToken: {
            address: '0x9c882a7004D4bB7E5fa77856625225EA29619323',
            name: 'Token MD',
            symbol: 'MD'
        }
    },
    '0x266A8eF144Ae716fA91B70211a62d334E3eF75E8': {
        showOnActiveTab: false,
        contractAddress: '0x266A8eF144Ae716fA91B70211a62d334E3eF75E8',
        title: 'SELF-QUARANTINE #2<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mt-3">ขยายเวลาโครงการ MVP Social Giving #2 (siren) ขยายโครงการMVP Social Giving I Stake For Society #2 ครั้งใหม่จะเริ่ม 1-14 สิงหาคม 2564  ระยะเวลาใช้งาน MD 2-25 สิงหาคม 2564 โดยผู้ถือเหรียญ  MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 สิงหาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป สามารถนำเหรียญ MD แลกอาหารและสินค้าอุปโภคต่าง ๆ ได้จนถึงวันที่ 25 สิงหาคม 2564 เมื่อครบกำหนดเหรียญจะถูก Burn ออกจากระบบ <br/> รายละเอียด <br/>ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br/><br/>มี 2 Pool ให้เลือกคือ  <br/>• Social-Donation  : มอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)  <br/>• Self-Quarantine  : สามารถนำเหรียญ MD มาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน <br/><br/> เนื่องด้วยสถานการณ์ COVID-19 ยังคงรุนแรงอยุ่ต่อเนื่อง โดยทีมบริหารจะเริ่มโครงการใหม่อีกครั้ง เพื่อสนับสนุนเจ้าหน้าที่อาสาสมัครและบุคลากรทางการแพทย์ และเพื่อให้ทุกคนอยู่บ้านอย่างปลอดภัย <br/><br/> หมายเหตุ: เหรียญ MD ที่ใช้แลกในโครงการทั้ง 2 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากมีระยะเวลาของโครงการแตกต่างกัน (siren) MVP Social Giving I Stake For Society ระหว่างวันที่ 14-25 กรกฎาคม 2564 ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 26 กรกฎาคม 2564 เวลา 21.30 น. เป็นต้นไป  โดยเหรียญ MD ยังคงสามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 31 กรกฎาคม 2564  เมื่อครบกำหนดเหรียญจะถูก Burn ทั้งหมดออกจากระบบ</p>',
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
        }
    },
    '0xE2a5304fD47c06d6DB04F5B21790A8d5FC08eb4f': {
        showOnActiveTab: false,
        contractAddress: '0xE2a5304fD47c06d6DB04F5B21790A8d5FC08eb4f',
        title: 'SELF-QUARANTINE<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p class="mb-3"></p>ร่วมเป็นส่วนหนึ่งในการช่วยเหลือบุคลากรทางการแพทย์ อาสาสมัคร และตอบแทนตัวเองที่ช่วยกักตัวระหว่างช่วง Lockdown (12-26 กรกฎาคม 2564) ทีมงานขอเชิญชวนนำ MVP Coin ฝาก (Stake) 14 วัน เพื่อรับเหรียญ MD (MVP Donation) ตามรายละเอียดดังนี้ <br> • ผู้ฝากเหรียญจะได้รับ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 14 วัน หรืออัตราคิดลด 0.5% จนเสร็จสิ้นกิจกรรม <br>  สามารถนำเหรียญ MD มาแลกเซ็ตอาหารต่างๆ ตามรายละเอียด พร้อมจัดส่งถึงบ้าน <br> เมื่อครบกำหนด (26 กรกฎาคม 2564) ผู้ถือเหรียญสามารถ Unstake เหรียญ MVP Coin คืนได้ "เต็มจำนวน" ส่วน MD สามารถใช้งาน ถึงวันที่ 31 กรกฎาคม 2564 หลังจากนั้นเหรียญจะหมดอายุ และถูก Burn ทั้งหมดออกจากระบบในวันที่ 1 สิงหาคม 2564 <br><br>หมายเหตุ<br>- กิจกรรมนี้ไม่ใช่การลงทุนเป็นการร่วมสนุกสำหรับผู้ที่มีเหรียญ MVP ภายในระยะเวลาหนึ่ง และ ผู้ที่มีเหรียญต้องศึกษาและทำความเข้าใจในกระบวนการ stake ก่อนเข้าร่วมกิจกรรม',
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
        }
    }
}

const META_STAKE_LIST: { [key: string]: StakeTokenList } = {
    '0xA3c784e114Cb470Af56bA244E123534Ed7b2c514': {
        showOnActiveTab: true,
        extraHeader: 'MVP WE ARE HODL 4',
        contractAddress: '0xA3c784e114Cb470Af56bA244E123534Ed7b2c514',
        title: 'Stake MVP for BTC 4',
        imageTokenUrl: '/images/tokens/mt-token.png',
        detailImage: '/images/tokens/mt-token.png',
        proposalContent:
            '<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp;#MT4 โครงการเอาใจสาย HODL โดยท่านสามารถนำเหรียญ MVP มาทำการ Stake เพื่อรับเหรียญ MT (MVP Test)&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในอัตรา 1 : 1 และสามารถนำเหรียญ MT ไปเคลมในระบบเพื่อรับเหรียญ BTC ในสัดส่วนที่ทางบริษัทกำหนด</span></p> <p><br></p> <p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">* ใครมี MT ได้รับ BTC ทุกคน *</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">งานนี้ยิ่ง Stake มากก็มีสิทธิ์ในรับ BTC มากขึ้นไปด้วย แบบนี้สาย HODL ไม่ควรพลาด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>เงื่อนไขและข้อกำหนด</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp;เริ่มนำเหรียญ MVP มา Stake เพื่อรับ MT4 ได้ตั้งแต่วันที่ 15 มกราคม 2565 เวลา 13.00 น. - วันที่ 19 มกราคม 2565 เวลา 13.00 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp;นำ MT4 มาเคลมเพื่อรับ BTCB ได้ตั้งแต่วันที่ 24 มกราคม 2565 เวลา 10.00 น. - วันที่ 28 มกราคม 2565 เวลา 23.59 น.</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> **กรณีไม่กดเคลมเหรียญ BTCB ภายในเวลาที่กำหนด เหรียญจะถูกนำคืนเข้าบริษัท</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp;เหรียญ MT ทั้งหมดจะถูกเบิร์นทิ้ง ในวันที่ 29 มกราคม 2565 เวลา 10.00 น .</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp;สามารถ Unstake เพื่อรับ MVP คืนได้วันที่ 28 กุมภาพันธ์ 2565 เวลา 10.00 น. (โดยเหรียญจะถูกล็อคไว้ 45 วัน ภายใน Vault)</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">หมายเหตุ : โครงการนี้เฉพาะผู้ถือเหรียญ MVP บนเครือข่าย Meta Chain เท่านั้น</span></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p> <p><br></p> <p><br></p>',
        // proposalContentEng:
        //     '<p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The wait is Over.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">From the successful 1BTC pool sharing.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The return of the Hottest stake of all time.</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reference from the 1st and 2nd MT campaign, the return of staking on BTC is approximately at 10%</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Joining the 3rd MT campaign</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Starting from 10 October (12:00PM (Noon time) GMT+7) &mdash; 20 October 2021 (12:00PM (Noon time) GMT+7)&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Condition:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&ldquo;Bitcoin Pool Sharing (MT) for HODL participants&rdquo;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-Staking MVP to redeem MT on BTC pool to earn&amp;claim the passive income from BTC only BSC Chain***</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(MVP will be locked for 60 days in Vault)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to join:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Stake MVP on https://mvp.dfy.asia/pool</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Select MVP for BTC (BTCB)</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">**MVP can be deposited as needed, receive MT at the rate of 1 MVP : 1 MT</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">How to Claim:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1. Claim MT to redeem BTC (25&ndash;31 October 2021 )</span></p> <p dir="ltr" style="line-height:1.38;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">***</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Warning</span><span style="font-size:9pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">: In case the participant does not claim &ldquo;BTC&rdquo; within the specified time, both MT and &ldquo;BTC&rdquo; will be returned to the company. On 1 November 2021 MT will be burned from the system</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2. Claim your MVP back on &ldquo;20 December 2021&rdquo;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Add MT token to wallets:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Manually add token using token address provided below</span></p> <p dir="ltr" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MT Address:&nbsp;</span><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">0xf9800ba96038aacea81734d2ff40b7bc8358545d</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Remark:</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity available only for MVP coin on Binance Smart Chain**</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- This activity is reserved to the group of MVP coin through,(https://mvcaravan.com/mvpcoin/), DEX or Exchange (Bitmart, P2PB2B), and BSC Chain and Bitkub Chain.</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- MT3 reserves the right to the coin winners from the Company&rsquo;s Airdrop, Marketing, Company Reserve to participate in the auction for the project. Marketing, Management and Company Reserve cannot participate.</span></p>',
        available: true,
        isHasClaimDate: true,
        isHasStartDate: true,
        label: '#4',
        stakeByToken: {
            address: '0x9737e3Be617d482cFCF013358e1DEB188aB63E0B',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0xA3c784e114Cb470Af56bA244E123534Ed7b2c514',
            name: 'Stake MVPBTC ',
            symbol: 'ST-MVPB'
        },
        rewardPointToken: {
            address: '0x536D044432a17688d886EdA93bDcB44a0898fCF8',
            name: 'MVP TEST',
            symbol: 'MT'
        }
    },
    '0x58e50d0152072111FB3f9b61368CcE1aCEf1d9A4': {
        showOnActiveTab: true,
        contractAddress: '0x58e50d0152072111FB3f9b61368CcE1aCEf1d9A4',
        title: 'SELF-QUARANTINE #7<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">MD #7 ของขวัญปีใหม่สำหรับผู้ถือเหรียญ MVP</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ของขวัญปีใหม่สำหรับผู้ถือเหรียญ MVP Coin เริ่มวันที่ 5-29 มกราคม 2565 ระยะเวลาใช้งาน MD วันที่ 5-29 มกราคม 2565 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 25 วัน เพื่อรับเหรียญ MD ได้ตั้งแต่วันที่ 5 มกราคม 2565 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>รายละเอียด</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญ MVP Coin จะได้รับเหรียญ MD ในอัตรา 6.25% ของ MVP Coin ที่นำมาฝากครบ 25 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญสามารถนำเหรียญ MD ไปแลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 5 มกราคม 2565 ตั้งแต่เวลา 10.00 น. เป็นต้นไป จนถึงวันที่ 29 มกราคม 2565 เมื่อครบกำหนดเหรียญ MD จะถูก Burn ออกจากระบบทั้งหมด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">และสำหรับผู้ที่สนใจ Donate สามารถโอนเหรียญเพื่อบริจาคได้ที่ Wallet 0x20B116026E10757197752C524A47e7C580f6B896</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้ผู้ถือเหรียญ MVP Coin สามารถนำเหรียญไป Stake ได้เฉพาะ Meta Chain เท่านั้น</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วิธี Bridge จาก BSC Chain &gt; Meta Chain - </span><a href="https://bridge.metachain.asia/bridge"></a><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><a href="https://bridge.metachain.asia/bridge">https://bridge.metachain.asia/bridge</a></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">**สามารถกดรับเหรียญ Meta ฟรี ได้ที่ </span><a href="https://faucet.metachain.asia/"></a><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><a href="https://faucet.metachain.asia/">https://faucet.metachain.asia/</a></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">**ผู้ถือเหรียญที่นำมา stake จะได้รับทันที 1 Meta ต่อ 1 Wallet</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญ MD สามารถนำเหรียญมาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>หมายเหตุ:&nbsp;</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-เหรียญ MD ที่ใช้แลกในโครงการทั้ง 7 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากเหรียญมีระยะเวลาในการใช้งานของโครงการแตกต่างกัน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 31 มกราคม 2565 เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 29 มกราคม 2565 เวลา 23.59 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- เหรียญ MD จะถูก Burn ออกจากระบบทั้งหมดในวันที่ 30 มกราคม 2565 เวลา 00.01 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ทีมงาน MD หยุดให้บริการทุกวันอาทิตย์ และวันหยุดนักขัตฤกษ์</span></p>',
        available: true,
        label: '#7',
        stakeByToken: {
            address: '0x9737e3Be617d482cFCF013358e1DEB188aB63E0B',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x58e50d0152072111FB3f9b61368CcE1aCEf1d9A4',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x4F9Bb119FD364479ffff56d616B86a248315BD27',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0x2BF17a12a4cA86ddBea7e33AadF2676Fcb6E83b0': {
        showOnActiveTab: true,
        contractAddress: '0x2BF17a12a4cA86ddBea7e33AadF2676Fcb6E83b0',
        title: 'SELF-QUARANTINE #6<br>แลกเหรียญ MD',
        imageTokenUrl: '/images/tokens/stake-for-society.png',
        detailImage: '/images/MVP-to-MD.png',
        proposalContent:
            '<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>MVP Social Giving | Stake For Society #6</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">โครงการ #MD6 ของขวัญส่งท้ายปี อิ่มท้อง อิ่มบุญ สำหรับผู้ถือเหรียญ MVP &nbsp;เริ่ม 1-28 ธันวาคม 2564 ระยะเวลาใช้งาน MD 1-28 ธันวาคม 2564 โดยผู้ถือเหรียญ MVP Coin ฝาก (Stake) 28 วัน เพื่อรับเหรียญ MD (MVP Donation) ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 00.01 น. เป็นต้นไป&nbsp;</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>รายละเอียด</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ฝากเหรียญ MVP Coin จะได้รับเหรียญ MD ในอัตรา 7% ของ MVP Coin ที่นำมาฝากครบ 28 วัน โดยอัตราคิดลด 0.25% ต่อวัน หรืออัตราลดเฉลี่ยชั่วโมงละ 0.01% โดยประมาณ ตามกลไกของระบบ Block Chain จนเสร็จสิ้นกิจกรรม</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญสามารถนำเหรียญ MD ไปแลกอาหารและสินค้าอุปโภคต่าง ๆ ได้ตั้งแต่วันที่ 1 ธันวาคม 2564 ตั้งแต่เวลา 10.00 น. เป็นต้นไป จนถึงวันที่ 28 ธันวาคม 2564 เมื่อครบกำหนดเหรียญ MD จะถูก Burn ออกจากระบบทั้งหมด</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ในครั้งนี้ผู้ถือเหรียญ MVP Coin สามารถนำเหรียญไป Stake ได้ทั้ง 3 Chain ได้แก่ &nbsp;BKC , BSC และ MetaChain</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ผู้ถือเหรียญ MD สามารถนำเหรียญมาแลกเซ็ตอาหาร สินค้าอุปโภค และเครื่องใช้ไฟฟ้าต่าง ๆ พร้อมจัดส่งถึงบ้าน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ทุก ๆ 10% ที่ได้รับจากการ Stake จะถูกหักเพื่อนำไปบริจาคมอบอาหารและเครื่องดื่มตามเมนูที่กำหนด โดยใช้มูลค่าตาม MD ทั้งหมดที่มีในช่วงเวลานั้น ให้กับบุคลากรทางการแพทย์ และอาสาสมัคร ฯลฯ (ดูรายละเอียดหน่วยงานได้ตามประกาศ)</span></p> <p><br></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><strong>หมายเหตุ:&nbsp;</strong></span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-เหรียญ MD ที่ใช้แลกในโครงการทั้ง 6 ครั้ง เป็นเหรียญเดียวกัน แต่ไม่สามารถใช้ร่วมกันได้ เนื่องจากเหรียญมีระยะเวลาในการใช้งานของโครงการแตกต่างกัน&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ผู้ที่นำเหรียญ MVP เข้ามา Stake ไว้ในโครงการ สามารถเริ่ม Unstake เหรียญ MVP Coin คืนได้ตั้งแต่วันที่ 31 ธันวาคม 2564 เวลา 00.01 &nbsp;น. เป็นต้นไป&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- สามารถแลกสั่งอาหารและสินค้าอุปโภคบริโภคได้ถึงวันที่ 28 ธันวาคม &nbsp;2564 เวลา 23.59 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- เหรียญ MD จะถูก Burn ออกจากระบบทั้งหมดในวันที่ 29 ธันวาคม 2564</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">เวลา 00.01 น.&nbsp;</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- ทีมงาน MD หยุดให้บริการทุกวันอาทิตย์ และวันหยุดนักขัตฤกษ์ ได้แก่</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันจันทร์ที่ 6 ธันวาคม 2564 ชดเชยวันคล้ายพระราชสมภพ</span></p> <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">วันศุกร์ที่ 10 ธันวาคม 2564 วันพระราชทานรัฐธรรมนูญ</span></p>',
        available: true,
        showTotalDonate: '0xcd64a1fb76085f6184c1a8592f44dcf713ead517',
        label: '#6',
        stakeByToken: {
            address: '0x9737e3Be617d482cFCF013358e1DEB188aB63E0B',
            name: 'MVP COIN',
            symbol: 'MVP'
        },
        stakeToken: {
            address: '0x2BF17a12a4cA86ddBea7e33AadF2676Fcb6E83b0',
            name: 'Stake MD',
            symbol: 'ST-MD'
        },
        rewardPointToken: {
            address: '0x4F9Bb119FD364479ffff56d616B86a248315BD27',
            name: 'Token MD',
            symbol: 'MD'
        },
        showThankStake: true
    },
    '0x70173C556183F17D4CE9690D44b77F7a1D476929': {
        changeToken: true,
        showOnActiveTab: true,
        contractAddress: '0x70173C556183F17D4CE9690D44b77F7a1D476929',
        title: 'MVP to MEV',
        imageTokenUrl: '/images/tokens/mev-circle.png',
        proposalContent:
            '<p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p><p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>',
        available: true
    }
}

// use for list token each chain ID
export const stakeTokenListByChainId: { [key: string]: any } = {
    [ChainId.BSC_TESTNET]: BSC_TESTNET_STAKE_LIST,
    [ChainId.BSC]: BSC_STAKE_LIST,
    [ChainId.BKC]: BKC_STAKE_LIST,
    [ChainId.META]: META_STAKE_LIST
}
