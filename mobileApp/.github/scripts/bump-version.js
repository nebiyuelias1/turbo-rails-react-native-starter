// filepath: .github/scripts/bump-version.js
const fs = require('fs');
const path = require('path');

const appJsonPath = path.resolve(__dirname, '../../app.json'); // Path to app.json from the script's location

try {
  const appJsonString = fs.readFileSync(appJsonPath, 'utf-8');
  const appConfig = JSON.parse(appJsonString);

  if (!appConfig.expo || !appConfig.expo.version) {
    console.error('Error: expo.version not found in app.json');
    process.exit(1);
  }

  let currentVersion = appConfig.expo.version;
  console.log('Current version:', currentVersion);

  const versionParts = currentVersion.split('.');
  if (versionParts.length !== 3) {
    console.error('Error: Version format must be major.minor.patch (e.g., 1.0.4)');
    process.exit(1);
  }

  let [major, minor, patch] = versionParts.map(Number);
  patch++; // Increment the patch version

  const newVersion = `${major}.${minor}.${patch}`;
  appConfig.expo.version = newVersion;
  console.log('New version:', newVersion);

  fs.writeFileSync(appJsonPath, JSON.stringify(appConfig, null, 2) + '\n');
  console.log('app.json updated successfully with new version.');

  // Output the new version for GitHub Actions
  // This uses the GITHUB_OUTPUT environment file method
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `new_version=${newVersion}\n`);
  }

} catch (error) {
  console.error('Failed to bump version:', error);
  process.exit(1);
}