const { normalizeURL, getURLsFromHTML } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeURL strip protocal', () => {
    const input = 'https://hakamshakir.com/path';
    const actual = normalizeURL(input);
    const excpected = 'hakamshakir.com/path';
    expect(actual).toEqual(excpected);

});

test('normalizeURL trailing /', () => {
    const input = 'https://hakamshakir.com/path/';
    const actual = normalizeURL(input);
    const excpected = 'hakamshakir.com/path';
    expect(actual).toEqual(excpected);

});

test('normalizeURL capitals', () => {
    const input = 'https://hakamSHAKIR.com/path';
    const actual = normalizeURL(input);
    const excpected = 'hakamshakir.com/path';
    expect(actual).toEqual(excpected);

});

test('normalizeURL strip http', () => {
    const input = 'http://hakamSHAKIR.com/path';
    const actual = normalizeURL(input);
    const excpected = 'hakamshakir.com/path';
    expect(actual).toEqual(excpected);

})

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://hakamshakir.com/path/">
    HakamShakir Blog
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://hakamshakir.com/path/";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const excpected = 'https://hakamshakir.com/path/';
    expect(actual).toEqual(excpected);

})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="/path/">
    HakamShakir Blog
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://hakamshakir.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const excpected = 'https://hakamshakir.com/path/';
    expect(actual).toEqual(excpected);

})

test('getURLsFromHTML both', () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://hakamshakir.com/path1/">
         HakamShakir Blog1
    </a>
    <a href="https://hakamshakir.com/path2/">
        HakamShakir Blog2
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://hakamshakir.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const excpected = ['https://hakamshakir.com/path1/', 'https://hakamshakir.com/path2/'];
    expect(actual).toEqual(excpected);

})

test('getURLsFromHTML invalid', () => {
    const inputHTMLBody = `
    <html>
    <body>
    <a href="https://hakamshakir.com/path1/">
         HakamShakir Blog1
    </a>
    <a href="https://hakamshakir.com/path2/">
        HakamShakir Blog2
    </a>
    </body>
    </html>
    `
    const inputBaseURL = "https://hakamshakir.com";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const excpected = '';
    expect(actual).toEqual(excpected);

})

