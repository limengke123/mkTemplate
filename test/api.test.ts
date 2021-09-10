import {
  getRandomPoem
} from '../src/api'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

jest.mock('axios')


describe('handle api',function () {
  it('should ', async function () {
    const result = await getRandomPoem()
    expect(result).toEqual({
      status: 1,
      msg: '古诗获取成功！',
      data: {
        id: 1165,
        subject: '弹歌',
        dynasty: '先秦',
        author: '无名氏',
        content: '断竹续竹。飞土逐肉。'
      },
      timestamp: 1626707867256
    })
  })
})
