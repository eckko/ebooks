// import sans from '../txt/ch01.txt';
// import hindi from '../txt/ch01-hindi.txt';

import {readFileSync, writeFileSync} from 'node:fs';
import { join } from 'node:path';

const original = readFileSync(join(__dirname, 'ch03.txt'), 'utf8').split(/\n\n\n\n\n/);
const sandhi = readFileSync(join(__dirname, 'ch03-sandhi.txt'), 'utf8').split(/\n\n\n\n\n/);
const hindi = readFileSync(join(__dirname, 'ch03-hindi.txt'), 'utf8').split(/\n\n\n\n\n/);

const combine = () => {
    console.log(original.length, sandhi.length, hindi.length);

    let data = []
    for (let i = 0; i < original.length; i++) {
        data = []
        const sandhiArray = sandhi[i].split(/\n/);
        const hindiArray = hindi[i].split(/\n/);
        data.push(`# अध्याय ${i+1}`);
        data.push('| संख्या | संस्कृत श्लोक | हिंदी अनुवाद |');
        data.push('|---|---|---|');
        for (let j = 0; j < sandhiArray.length; j++) {
            const line = `| ${j+1} | **${sandhiArray[j]}** | ${hindiArray[j]} |`;
            data.push(line)
        }
        writeFileSync(join(__dirname, `ch03.${String(i+1).padStart(2, '0')}.md`), data.join('\n'));
    }

}
combine()