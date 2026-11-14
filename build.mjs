import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'projects', 'research', 'styles.css', 'favicon.svg', 'assets', 'sitemap.xml', 'robots.txt']) {
  await cp(new URL(`./${entry}`, import.meta.url), new URL(`./dist/${entry}`, import.meta.url), { recursive: true });
}
const publicResume = 'neeraj_cv_applied_ai_engineer.pdf';
await mkdir(new URL('./dist/resume/', import.meta.url), { recursive: true });
await cp(new URL(`./resume/${publicResume}`, import.meta.url), new URL(`./dist/resume/${publicResume}`, import.meta.url));
console.log('Static site written to dist/');
