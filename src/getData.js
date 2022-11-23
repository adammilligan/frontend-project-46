import fs from 'fs';

const getData = (fullPath) => fs.readFileSync(fullPath, 'utf-8');

export default getData;
