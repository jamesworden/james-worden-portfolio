const fs = require('fs-extra');
const path = require('path');

exports.onPreBootstrap = () => {
	const sourcePath = path.join(__dirname, 'node_modules', 'prismjs', 'themes');
	const destinationPath = path.join(__dirname, 'static', 'prismjs-themes');
	copyFiles(sourcePath, destinationPath);
};

function copyFiles(sourcePath, destinationPath) {
	fs.ensureDirSync(destinationPath);
	fs.copySync(sourcePath, destinationPath);
	console.info(`Copied files from ${sourcePath} to ${destinationPath}.`);
}
