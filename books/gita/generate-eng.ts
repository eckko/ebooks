import {readFileSync, writeFileSync} from 'node:fs';
import { join } from 'node:path';

const CHAPTER = '1'
const structure = readFileSync(join(__dirname, 'md', `structure.md`), 'utf8');
const original = readFileSync(join(__dirname, 'txt', `sans.txt`), 'utf8').split(/\n\n\n\n\n/);
const sandhi = readFileSync(join(__dirname, 'txt', `sandhi.txt`), 'utf8').split(/\n\n\n\n\n/);
const hindi = readFileSync(join(__dirname, 'txt', `hindi.txt`), 'utf8').split(/\n\n\n\n\n/);
const eng = readFileSync(join(__dirname, 'txt', `eng.txt`), 'utf8').split(/\n\n\n\n\n/);

const generate = () => {
    console.log(original.length, sandhi.length, hindi.length, eng.length);


    let data = []
    for (let i = 0; i < 18; i++) {
        data = []
        const toc = structure[i].split(/\n/);
        const sansArray = original[i].split(/\n/);
        const sandhiArray = sandhi[i].split(/\n/);
        const hindiArray = hindi[i].split(/\n/);
        const engArray = eng[i].split(/\n/);
        data.push(`# अध्याय ${i+1}`);
        data.push('| संख्या | संस्कृत श्लोक | हिंदी अनुवाद |');
        data.push('|---|---|---|');
        for (let j = 0; j < sandhiArray.length; j++) {
            const line = `| ${i+1}._${j+1}_ | **${sansArray[j]}**<br/><br/>_**${sandhiArray[j]}**_ | ${hindiArray[j]}<br/><br/>_${engArray[j]}_ |`;
            data.push(line)
        }
        writeFileSync(join(__dirname, 'md', `ch${String(i+1).padStart(2, '0')}.md`), data.join('\n'));
    }

}
generate()