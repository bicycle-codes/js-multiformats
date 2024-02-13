import { webcrypto as crypto } from 'crypto'
import { coerce } from '../bytes.js'
import { from } from './hasher.js'

export const sha1 = from({
  name: 'sha-1',
  code: 0x11,
  encode: async (input) => coerce(
    await crypto.subtle.digest('SHA-1', input)
  )
})
