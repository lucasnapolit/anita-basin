const fs = require('fs');
const path = require('path');

// Busca el primer archivo .json en la carpeta de reportes
const reportsDir = path.join(__dirname, 'cypress', 'reports', 'html', '.jsons');
const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.json'));
if (files.length === 0) {
  console.error('No mochawesome JSON report found!');
  process.exit(1);
}

let totalTests = 0;
let totalFailed = 0;

for (const file of files) {
  const report = JSON.parse(fs.readFileSync(path.join(reportsDir, file), 'utf8'));
  if (report && report.stats) {
    totalTests += report.stats.tests || 0;
    totalFailed += report.stats.failures || 0;
  }
}

if (totalTests === 0) {
  console.error('No tests found in mochawesome report!');
  process.exit(1);
}

const failPercent = (totalFailed / totalTests) * 100;
console.log(`Total tests: ${totalTests}, Failed: ${totalFailed}, Fail %: ${failPercent.toFixed(2)}`);

if (failPercent >= 33) {
  console.error('❌ More than 33% of tests failed!');
  process.exit(1);
} else {
  console.log('✅ Less than 33% of tests failed.');
}
