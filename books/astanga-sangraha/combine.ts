import {readFileSync, writeFileSync} from 'node:fs';
import { join } from 'node:path';

const combine = () => {
    let data: string[] = []
    for (let i = 0; i < 40; i++) {
        const file = readFileSync(join(__dirname, 'txt', `ch01.${String(i + 1).padStart(2, '0')}.txt`), 'utf8');
        console.log(file)
        data = data.concat(file);
        data.push('\n\n\n\n');
    }
    writeFileSync(join(__dirname, 'txt', `ch01.txt`), data.join('\n'));

}
combine()