import { getRandom } from './macros/rand' assert { type: 'macro' }
import { inc } from './macros/inc' assert { type: 'macro' }

getRandom() === 0.5
inc() === 1
inc() === 2
inc() === 3
