import { describe, expect, it } from 'vitest'

import dayjs from 'dayjs'
import lunar from '../src'

dayjs.extend(lunar)

describe('should', () => {
  const day = dayjs('2010-10-20')

  it('default format', () => {
    expect(day.lunar()).toEqual('二〇一〇年九月十三')
  })

  it('format - YYYY-MM-DD', () => {
    expect(day.lunar('YYYY-MM-DD')).toEqual('2010-09-13')
  })

  it('format - YY-M-D', () => {
    expect(day.lunar('YY-M-D')).toEqual('10-9-13')
  })

  it('format - YYYY/MM/DD', () => {
    expect(day.lunar('YYYY/MM/DD')).toEqual('2010/09/13')
  })

  it('format - DD/MM/YYYY', () => {
    expect(day.lunar('DD/MM/YYYY')).toEqual('13/09/2010')
  })

  it('chinese format - 年月日', () => {
    expect(day.lunar('年月日')).toEqual('二〇一〇年九月十三')
  })

  it('chinese format - 月日', () => {
    expect(day.lunar('月日')).toEqual('九月十三')
  })

  it('chinese format - 日', () => {
    expect(day.lunar('日')).toEqual('十三')
  })
})
