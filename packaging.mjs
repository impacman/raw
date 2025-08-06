import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const folderPath = './out/';
const exceptionFiles = ['404.html', 'index.html'];

const processHTMLFile = async (filePath) => {
  try {
    const fileName = path.basename(filePath, '.html');
    const parentFolder = path.dirname(filePath);
    const folderDir = path.join(parentFolder, fileName);

    if (!fs.existsSync(folderDir)) await fs.promises.mkdir(folderDir, { recursive: true });

    const newFilePath = path.join(folderDir, 'index.html');
    await fs.promises.rename(filePath, newFilePath);

    const data = {
      fileName: chalk.green(fileName),
      folderDir: chalk.yellow(folderDir),
      moved: chalk.white('successfully'),
      renamed: chalk.white('renamed'),
    };

    console.log(`The file ${data.fileName}.html has been ${data.moved} & ${data.renamed} to the folder ${data.folderDir}/index.html`);
  } catch (error) {
    console.log(`An error occurred while processing the file ${filePath}:`, error);
  }
};

const traverseDirectory = async (directoryPath) => {
  try {
    const items = await fs.promises.readdir(directoryPath);

    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const stats = await fs.promises.stat(itemPath);

      if (stats.isDirectory()) await traverseDirectory(itemPath);
      else if (stats.isFile() && path.extname(item) === '.html' && !exceptionFiles.includes(item)) await processHTMLFile(itemPath);
    }
  } catch (error) {
    console.error(chalk.red(`An error occurred while traversing the directory ${directoryPath}:`), error);
  }
};

traverseDirectory(folderPath);
