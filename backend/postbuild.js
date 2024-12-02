const fs = require('fs-extra');

// Copy migrations folder to dist
fs.copySync('migrations', 'dist/migrations', {
  overwrite: true,
  errorOnExist: true
});

console.log('Migrations copied to dist/migrations');
