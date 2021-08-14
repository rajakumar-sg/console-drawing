import { print } from './logger/index.js'
import { decorate } from './decorator/index.js'

const specialPrint = decorate(print);
specialPrint('Hello')