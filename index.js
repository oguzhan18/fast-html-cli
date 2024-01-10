#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name');
  process.exit(1);
}

const htmlContent = '<!DOCTYPE html>\n<html>\n<head>\n<title></title>\n</head>\n<body>\n <h1>New HTML File</h1></body>\n</html>';
const filePath = path.join(process.cwd(), `${fileName}.html`);

fs.writeFileSync(filePath, htmlContent);
console.log(`${fileName} created`);
