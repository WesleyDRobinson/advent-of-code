import test from 'ava';
import {checksum, diffsum} from './days/two.js'
import {cipherOne, cipherTwo} from './days/one.js'

test('day two, checksum', t => {
    t.is(checksum([[5, 1, 9, 5]]), 8)
    t.is(checksum([[7, 5, 3]]), 4)
    t.is(checksum([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]), 18)
})

test('day two, diffsum', t => {
    t.is(diffsum([[5, 2, 9, 8]]), 4)
    t.is(diffsum([[9, 7, 4, 3]]), 3)
    t.is(diffsum([[5, 2, 9, 8], [9, 7, 4, 3], [3, 5, 6, 8]]), 9)
})

test('day one, first test', t => {
    t.is(cipherOne(1111), 4)
    t.is(cipherOne(1122), 3)
    t.is(cipherOne(1234), 0)
    t.is(cipherOne(91212129), 9)
});

test('day one, second test', t => {
    t.is(cipherTwo(1111), 4)
    t.is(cipherTwo(1122), 0)
    t.is(cipherTwo(1234), 0)
    t.is(cipherTwo(1212), 6)
    t.is(cipherOne(91212129), 9)
})