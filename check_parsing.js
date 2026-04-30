
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const code = fs.readFileSync('pages/index.js', 'utf8');
try {
  parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  console.log('✓ Babel parsed OK');
} catch (e) {
  console.log('ERROR:', e.message);
  if (e.loc) console.log('Line:', e.loc.line, 'Col:', e.loc.column);
}
