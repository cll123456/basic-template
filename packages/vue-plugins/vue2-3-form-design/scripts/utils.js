const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname, '..', 'lib');
/**
 * 加载模块
 * @param {*} name 
 * @returns 
 */
function loadModule(name) {
	try {
		return require(name);
	} catch (e) {
		return undefined;
	}
}

/**
 * 赋值文件到指定目录
 * @param {*} name 
 * @param {*} version 
 */
function copy(name, version) {
	const src = path.join(dir, `v${version}`, name);
	const dest = path.join(dir, name);
	const content = fs.readFileSync(src, 'utf-8');
	try {
		fs.unlinkSync(dest);
	} catch (error) {}
	fs.writeFileSync(dest, content, 'utf-8');
}

/**
 * 切换版本
 * @param {*} version 
 */
function switchVersion(version) {
	copy('index.cjs.js', version);
	copy('index.es.js', version);
	copy('index.umd.js', version);
	copy('style.css', version);
}

module.exports.loadModule = loadModule;
module.exports.switchVersion = switchVersion;
