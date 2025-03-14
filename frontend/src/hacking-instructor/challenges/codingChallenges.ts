/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {
  waitInMs, waitForElementToGetClicked, waitForAngularRouteToBeVisited
} from '../helpers/helpers'
import { type ChallengeInstruction } from '../'

export const CodingChallengesInstruction: ChallengeInstruction = {
  name: atob('Q29kaW5nIENoYWxsZW5nZXM='),
  hints: [
    {
      text: atob('VG8gZG8gdGhlIHR1dG9yaWFsIG9uIF9Db2RpbmcgQ2hhbGxlbmdlc18sIHlvdSBoYXZlIHRvIGZpbmQgYW5kIHZpc2l0IHRoZSBfU2NvcmUgQm9hcmRfIGZpcnN0LiBPbmNlIHRoZXJlLCB5b3UgaGF2ZSB0byBjbGljayB0aGUgdHV0b3JpYWwgYnV0dG9uIGZvciB0aGUgX1Njb3JlIEJvYXJkXyBjaGFsbGVuZ2UgdG8gcHJvY2VlZC4='),
      fixture: atob('YXBwLW5hdmJhcg=='),
      fixtureAfter: true,
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited(atob("c2NvcmUtYm9hcmQ=")) // FIXME The tutorial does not progress automatically. Workaround ^^^^^^^^^^^^^^^^ instruction above should be removed when fixed.
    },
    {
      text: atob('TWFueSBKdWljZSBTaG9wIGhhY2tpbmcgY2hhbGxlbmdlcyBjb21lIHdpdGggYW4gYXNzb2NpYXRlZCBfQ29kaW5nIENoYWxsZW5nZV8gd2hpY2ggd2lsbCB0ZWFjaCB5b3UgbW9yZSBhYm91dCB0aGUgdW5kZXJseWluZyB2dWxuZXJhYmlsaXR5IG9uIHNvdXJjZSBjb2RlIGxldmVsLg=='),
      fixture: atob('I1Njb3JlXFwgQm9hcmRcXC5zb2x2ZWQ='),
      resolved: waitInMs(15000)
    },
    {
      text: atob('WW91IGNhbiBsYXVuY2ggYSBDb2RpbmcgQ2hhbGxlbmdlIHZpYSB0aGUgYDw+YC1idXR0b24uIENsaWNrIHRoZSBvbmUgZm9yIHRoZSBfU2NvcmUgQm9hcmRfIGNoYWxsZW5nZSBub3cu'),
      fixture: atob('I2NvZGluZ0NoYWxsZW5nZVR1dG9yaWFsQnV0dG9u'),
      unskippable: true,
      resolved: waitForElementToGetClicked('#Score\\ Board\\.codingChallengeButton')
    },
    {
      text: atob('QWxsIENvZGluZyBDaGFsbGVuZ2VzIHRha2UgcGxhY2UgaW4gYSBtb2RhbCBkaWFsb2cgbGlrZSB0aGlzLiBUaGV5IGNvbnNpc3Qgb2YgdHdvIHBhcnRzLCBvbmUgZm9yIGZpbmRpbmcgYW5kIG9uZSBmb3IgZml4aW5nIHRoZSB2dWxuZXJhYmlsaXR5IGluIHRoZSBjb2RlLg=='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      resolved: waitInMs(15000)
    },
    {
      text: atob('VGhlIGNvZGUgc25pcHBldCBiZWxvdyBzaG93cyBhIHBhcnQgb2YgdGhlIGFjdHVhbCBhcHBsaWNhdGlvbiBzb3VyY2UgY29kZSByZXRyaWV2ZWQgaW4gcmVhbC10aW1lLg=='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      resolved: waitInMs(10000)
    },
    {
      text: atob('WW91IHdpbGwgYWx3YXlzIGdldCBhIHNuaXBwZXQgdGhhdCBpcyBpbnZvbHZlZCBpbiB0aGUgc2VjdXJpdHkgdnVsbmVyYWJpbGl0eSBvciBmbGF3IGJlaGluZCB0aGUgY29ycmVzcG9uZGluZyBoYWNraW5nIGNoYWxsZW5nZS4gSW4gdGhpcyBjYXNlLCB5b3Ugc2VlIHRoZSByb3V0aW5nIGNvZGUgdGhhdCBleHBvc2VzIGFsbCBkaWFsb2dzLCBpbmNsdWRpbmcgdGhlIHN1cHBvc2VkbHkgIndlbGwtaGlkZGVuIiBTY29yZSBCb2FyZC4='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      resolved: waitInMs(20000)
    },
    {
      text: atob('Rm9yIHRoZSAiRmluZCBJdCIgcGFydCBvZiB0aGlzIGNvZGluZyBjaGFsbGVuZ2UsIHRpY2sgdGhlIGJveCBvbiBhbGwgbGluZXMgb2YgY29kZSB0aGF0IHlvdSB0aGluayBhcmUgcmVzcG9uc2libGUgZm9yIGV4cG9zaW5nIHRoZSBTY29yZSBCb2FyZC4gV2hlbiBkb25lLCBjbGljayB0aGUgX1N1Ym1pdF8gYnV0dG9uLg=='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      fixtureAfter: true,
      unskippable: true,
      resolved: waitForElementToGetClicked('#line114')
    },
    {
      text: 'That\'s the one! Click the _Submit_ button proceed.',
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      fixtureAfter: true,
      unskippable: true,
      resolved: waitForElementToGetClicked('#findItSubmitButton')
    },
    {
      text: '🎊' + atob('ISBZb3UgbWFkZSBpdCBoYWxmLXdheSB0aHJvdWdoISBJbiBwaGFzZSB0d28geW91IGFyZSBub3cgcHJlc2VudGVkIHdpdGggc2V2ZXJhbCBmaXggb3B0aW9ucy4gWW91IG11c3Qgc2VsZWN0IHRoZSBvbmUgd2hpY2ggeW91IHRoaW5rIGlzIHRoZSAqKmJlc3QgcG9zc2libGUqKiBmaXggZm9yIHRoZSBzZWN1cml0eSB2dWxuZXJhYmlsaXR5Lg=='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      resolved: waitInMs(10000)
    },
    {
      text: atob('VGhpcyBjb2RpbmcgY2hhbGxlbmdlIGlzIGEgYml0ICJzcGVjaWFsIiwgYmVjYXVzZSB0aGUgU2NvcmUgQm9hcmQgaXMgY3J1Y2lhbCBmb3IgcHJvZ3Jlc3MgdHJhY2tpbmcgYW5kIGFjdHMgYXMgYSBodWIgZm9yIHRoZSBvdGhlciBjaGFsbGVuZ2VzLiBLZWVwIHRoYXQgaW4gbWluZCB3aGVuIHBpY2tpbmcgdGhlIF9Db3JyZWN0IEZpeF8gZnJvbSB0aGUgb3B0aW9ucyBfRml4IDFfLCBfMl8gYW5kIF8zXy4='),
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      fixtureAfter: true,
      unskippable: true,
      resolved: waitForElementToGetClicked('#fixItSubmitButton')
    },
    {
      text: 'If you did\'nt get the answer right, just try again until the confetti cannon fires. Then click _Close_ to end the coding challenge and return to the Score Board.',
      fixture: atob('I2NvZGUtc25pcHBldA=='),
      fixtureAfter: true,
      unskippable: true,
      resolved: waitForElementToGetClicked('#fixItCloseButton')
    }
  ]
}
