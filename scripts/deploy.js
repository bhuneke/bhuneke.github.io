const ghPages = require('gh-pages');
const path = require('path');

// Path to build
const buildPath = path.join(__dirname, '../build');

const options = {
  branch: 'master',             // Push build to master branch
  dotfiles: true,               // Include any files starting with a dot
  message: 'Create new build',  // Set commit message
};

ghPages.publish(buildPath, options, (err) => {
  console.error(err);
});
