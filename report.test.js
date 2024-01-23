const { sortPages } = require('./report');
const { test, expect } = require('@jest/globals');

test('sortPages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const exprected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
})

test('sortPages 5 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path2': 5,
        'https://wagslane.dev/path8': 4,
        
    }
    const actual = sortPages(input)
    const exprected = [
        ['https://wagslane.dev/path2', 5],
        ['https://wagslane.dev/path8', 4],
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
})