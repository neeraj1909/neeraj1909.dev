import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'projects', 'research', 'styles.css', 'favicon.svg', 'resume']) {
  await cp(new URL(`./${entry}`, import.meta.url), new URL(`./dist/${entry}`, import.meta.url), { recursive: true });
}
console.log('Static site written to dist/');
