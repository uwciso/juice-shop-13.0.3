/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {
  waitInMs,
  sleep, waitForAngularRouteToBeVisited, waitForLogIn, waitForDevTools
} from '../helpers/helpers'
import { type ChallengeInstruction } from '../'

export const ViewBasketInstruction: ChallengeInstruction = {
  name: atob('VmlldyBCYXNrZXQ='),
  hints: [
    {
      text: atob('VGhpcyBjaGFsbGVuZ2UgaXMgYWJvdXQgKipIb3Jpem9udGFsIFByaXZpbGVnZSBFc2NhbGF0aW9uKiosIG1lYW5pbmcgeW91IGFyZSBzdXBwb3NlZCB0byBhY2Nlc3MgZGF0YSB0aGF0IGRvZXMgbm90IGJlbG9uZyB0byB5b3VyIG93biBhY2NvdW50IGJ1dCB0byBhbm90aGVyIHVzZXIncy4='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(18000)
    },
    {
      text: atob('VG8gc3RhcnQgdGhpcyBjaGFsbGVuZ2UsIHlvdSdsbCBoYXZlIHRvIGxvZyBpbiBmaXJzdC4='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      unskippable: true,
      resolved: waitForLogIn()
    },
    {
      text: atob('Rmlyc3QsIGdvIHRvIHRoZSBfWW91ciBCYXNrZXRfIHBhZ2UgdG8gdmlldyB5b3VyIG93biBzaG9wcGluZyBiYXNrZXQuIEl0J3MgbGlrZWx5IHRvIGJlIGVtcHR5LCBpZiB5b3UgZGlkbid0IGFkZCBhbnl0aGluZyB5ZXQu'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited('basket')
    },
    {
      text: atob('VG8gcGFzcyB0aGlzIGNoYWxsZW5nZSwgeW91IHdpbGwgbmVlZCB0byBwZWVrIGludG8gYW5vdGhlciB1c2VyJ3MgYmFza2V0IHdoaWxlIHJlbWFpbmluZyBsb2dnZWQgaW4gd2l0aCB5b3VyIG93biBhY2NvdW50Lg=='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(8000)
    },
    {
      text: atob('SWYgdGhlIGFwcGxpY2F0aW9uIHN0b3JlcyBhIHJlZmVyZW5jZSB0byB0aGUgYmFza2V0IHNvbWV3aGVyZSBpbiB0aGUgYnJvd3NlciwgdGhhdCBtaWdodCBiZSBhIHBvc3NpYmxlIGF0dGFjayB2ZWN0b3Iu'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(12000)
    },
    {
      text: atob('T3BlbiB0aGUgYnJvd3NlcidzIF9EZXZlbG9wbWVudCBUb29sc18gYW5kIGxvY2F0ZSB0aGUgX1Nlc3Npb24gU3RvcmFnZV8gdGFiLiBTaW1pbGFyIHRvIGNvb2tpZXMsIGl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGRhdGEgaW4ga2V5L3ZhbHVlIHBhaXJzIGZvciBlYWNoIHdlYnNpdGUu'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitForDevTools()
    },
    {
      text: atob('TG9vayBvdmVyIHRoZSBuYW1lcyBvZiB0aGUgdXNlZCBzZXNzaW9uIGtleXMuIERvIHlvdSBzZWUgc29tZXRoaW5nIHRoYXQgbWlnaHQgYmUgcmVsYXRlZCB0byB0aGUgc2hvcHBpbmcgYmFza2V0PyBUcnkgc2V0dGluZyBpdCB0byBhIGRpZmZlcmVudCB2YWx1ZSE='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      unskippable: true,
      async resolved () {
        const bid = sessionStorage.getItem('bid')
        while (true) {
          if (sessionStorage.getItem('bid') !== bid) {
            break
          }
          await sleep(100)
        }
      }
    },
    {
      text: atob('R3JlYXQsIHlvdSBoYXZlIGNoYW5nZWQgdGhlIGBiaWRgIHZhbHVlIHdoaWNoIG1pZ2h0IGJlIHNvbWUgSUQgZm9yIHRoZSBzaG9wcGluZyBiYXNrZXQh'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(8000)
    },
    {
      text: atob('Tm93LCBnbyB0byBhbnkgb3RoZXIgc2NyZWVuIGFuZCB0aGVuIGJhY2sgdG8gX1lvdXIgQmFza2V0Xy4gSWYgbm90aGluZyBoYXBwZW5zIHlvdSBtaWdodCBoYXZlIHNldCBhbiBpbnZhbGlkIG9yIG5vbi1leGlzdGluZyBgYmlkYC4gVHJ5IGFub3RoZXIgaW4gdGhhdCBjYXNlLg=='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      fixtureAfter: true,
      unskippable: true,
      async resolved () {
        const total = sessionStorage.getItem('itemTotal')
        while (true) {
          if (sessionStorage.getItem('itemTotal') !== total) {
            break
          }
          await sleep(100)
        }
      }
    },
    {
      text: "🎉 " + atob('8J+OiSBDb25ncmF0dWxhdGlvbnMhIFlvdSBhcmUgbm93IHZpZXdpbmcgYW5vdGhlciB1c2VyJ3Mgc2hvcHBpbmcgYmFza2V0IQ=='),
      fixture: atob('YXBwLWJhc2tldA=='),
      resolved: waitInMs(15000)
    }
  ]
}
