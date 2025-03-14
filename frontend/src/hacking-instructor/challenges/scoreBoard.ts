/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {
  waitInMs, waitForAngularRouteToBeVisited, waitForDevTools
} from '../helpers/helpers'
import { type ChallengeInstruction } from '../'

export const ScoreBoardInstruction: ChallengeInstruction = {
  name: atob('U2NvcmUgQm9hcmQ='),
  hints: [
    {
      text: atob('VGhpcyBhcHBsaWNhdGlvbiBpcyByaWRkbGVkIHdpdGggc2VjdXJpdHkgdnVsbmVyYWJpbGl0aWVzLiBZb3VyIHByb2dyZXNzIGV4cGxvaXRpbmcgdGhlc2UgaXMgdHJhY2tlZCBvbiBhIF9TY29yZSBCb2FyZF8u'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      unskippable: true,
      resolved: waitInMs(10000)
    },
    {
      text: atob('WW91IHdvbid0IGZpbmQgYSBsaW5rIHRvIGl0IGluIHRoZSBuYXZpZ2F0aW9uIG9yIHNpZGUgYmFyLCB0aG91Z2guIEZpbmRpbmcgdGhlIF9TY29yZSBCb2FyZF8gaXMgaW4gaXRzZWxmIGFjdHVhbGx5IG9uZSBvZiB0aGUgaGFja2luZyBjaGFsbGVuZ2VzLg=='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(12000)
    },
    {
      text: atob('WW91IGNvdWxkIGp1c3Qgc3RhcnQgZ3Vlc3NpbmcgdGhlIFVSTCBvZiB0aGUgX1Njb3JlIEJvYXJkXyBvciBjb21iIHRocm91Z2ggdGhlIGNsaWVudC1zaWRlIEphdmFTY3JpcHQgY29kZSBmb3IgdXNlZnVsIGluZm9ybWF0aW9uLg=='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitInMs(12000)
    },
    {
      text: atob('WW91IGZpbmQgdGhlIEphdmFTY3JpcHQgY29kZSBpbiB0aGUgRGV2VG9vbHMgb2YgeW91ciBicm93c2VyIHRoYXQgd2lsbCBvcGVuIHdpdGggYEYxMmAu'),
      fixture: atob('YXBwLW5hdmJhcg=='),
      resolved: waitForDevTools()
    },
    {
      text: atob('TG9vayB0aHJvdWdoIHRoZSBjbGllbnQtc2lkZSBKYXZhU2NyaXB0IGluIHRoZSBfU291cmNlc18gdGFiIGZvciBjbHVlcy4gT3IganVzdCBzdGFydCBVUkwgZ3Vlc3NpbmcuIEl0J3MgdXAgdG8geW91IQ=='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited(atob('c2NvcmUtYm9hcmQ='))
    },
    {
      text: '🎉' + atob('8J+OiSBDb25ncmF0dWxhdGlvbnMhIFlvdSBmb3VuZCB0aGUgX1Njb3JlIEJvYXJkXyEgR29vZCBsdWNrIGFuZCBoYXBweSBoYWNraW5nIQ=='),
      fixture: atob('YXBwLXNjb3JlLWJvYXJk'),
      resolved: waitInMs(60000)
    }
  ]
}
