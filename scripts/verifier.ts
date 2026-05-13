// @ts-nocheck
import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'
import {JSDOM} from 'jsdom'
/* eslint-disable @ts-ignore */
const html = readFileSync(
    resolve(process.cwd(), '..', 'books/astanga-hridayam/src/chapter4.html'),
    'utf8'
)

const verify = () => {
    const dom = new JSDOM(html)
    const document = dom.window.document

    if(!Array.isArray(document.querySelectorAll('section'))) {
        console.log('No issues found')
    }

    [...document.querySelectorAll('section')]
        .filter((section) => /^\d+(?:\.\d+)?$/.test(section.id))
        .forEach((e) => {
            Array.from(e.children).some((child) => child.tagName === 'H2' && child.textContent?.trim() === `📜 श्लोक ${e.id}`) || console.log(`Missing 📜 श्लोक ${e.id} for section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🔹 पदच्छेद और शब्दार्थ`) || console.log(`Missing 🔹 पदच्छेद और शब्दार्थ for section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🔹 सरल अर्थ`) || console.log(`Missing 🔹 सरल अर्थ section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🔹 विस्तृत व्याख्या (पुस्तकानुसार)`) || console.log(`Missing 🔹 विस्तृत व्याख्या (पुस्तकानुसार) for section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🔹 अतिरिक्त संदर्भ (पुस्तक में संकेतित भाव)`) || console.log(`Missing 🔹 अतिरिक्त संदर्भ for section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🔹 मुख्य सिद्धांत`) || console.log(`Missing 🔹 मुख्य सिद्धांत for section ${e.id}`)
            Array.from(e.children).some((child) => child.tagName === 'H3' && child.textContent?.trim() === `🧠 Memorisation version`) || console.log(`Missing 🧠 Memorisation version for section ${e.id}`)
        })
}

verify()