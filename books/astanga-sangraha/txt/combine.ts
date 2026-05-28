// import sans from '../txt/ch01.txt';
// import hindi from '../txt/ch01-hindi.txt';

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const sans = readFileSync(join(__dirname, 'ch01.txt'), 'utf8').split(/\r?\n/);
const hindi = readFileSync(join(__dirname, 'ch01-hindi.txt'), 'utf8').split(/\r?\n/);

const combine = () => {
    console.log('combine', sans[1], hindi[1]);

    for (let i = 8; i < 138; i++) {
        console.log(`| 1.1._${i-7}_ | **${sans[i]}** | ${hindi[i]} |`);
    }
}
combine()