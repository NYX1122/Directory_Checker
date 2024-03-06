import fs from 'fs/promises';

export default async function (directory) {
  try {
    await fs.access(directory, fs.constants.F_OK);
    console.log('Directory_Checker verified that directory exists:');
    console.log(directory);
    return true;
  } catch {
    console.log('Directory_Checker verified that directory does not exist:');
    console.log(directory);
    return false;
  }
}
