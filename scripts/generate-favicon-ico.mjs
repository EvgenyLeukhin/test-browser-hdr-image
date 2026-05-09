import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const out = path.join(publicDir, 'favicon.ico');

const buf = await pngToIco([
  path.join(publicDir, 'favicon-16x16.png'),
  path.join(publicDir, 'favicon-32x32.png'),
  path.join(publicDir, 'favicon-48x48.png'),
]);

await fs.writeFile(out, buf);
