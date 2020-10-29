const { platform } = require('os');
const path = require('path');

exports.resolve = dir =>
{
	return path.join(__dirname, '..', dir)
}