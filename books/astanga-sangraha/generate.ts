import {readFileSync, writeFileSync} from 'node:fs';
import { join } from 'node:path';

const original = readFileSync(join(__dirname, 'txt', 'ch06.txt'), 'utf8').split(/\n\n\n\n\n/);
const sandhi = readFileSync(join(__dirname, 'txt', 'ch06-sandhi.txt'), 'utf8').split(/\n\n\n\n\n/);
const hindi = readFileSync(join(__dirname, 'txt', 'ch06-hindi.txt'), 'utf8').split(/\n\n\n\n\n/);

const generate = () => {
    console.log(original.length, sandhi.length, hindi.length);

    let data = []
    for (let i = 48; i < 50; i++) {
        data = []
        const sandhiArray = sandhi[i].split(/\n/);
        const hindiArray = hindi[i].split(/\n/);
        data.push(`# अध्याय ${i+1}`);
        data.push('| संख्या | संस्कृत श्लोक | हिंदी अनुवाद |');
        data.push('|---|---|---|');
        for (let j = 0; j < sandhiArray.length; j++) {
            const line = `| 6.${i+1}._${j+1}_ | **${sandhiArray[j]}** | ${hindiArray[j]} |`;
            data.push(line)
        }
        writeFileSync(join(__dirname, 'md', `ch06.${String(i+1).padStart(2, '0')}.md`), data.join('\n'));
    }

}
generate()