const fs = require('fs-extra');
const path = require('path');

const copyFile = function() {
    const from = path.join(process.cwd(), 'patch/files', 'ee.js');
    const to = path.join(process.cwd(), "/node_modules/strapi/lib/utils/", "ee.js");

    try {
        fs.copySync(path.join(from), path.join(to));
        console.log('success!')
      } catch (err) {
        console.error(err)
      }
};

module.exports = {
    copyFile,
};