const { switchVersion, loadModule } = require('./utils');
// 在安装完这个包的时候，需要检查当前的环境，如果是vue2,那么则使用vue2的包，反之使用vue3的包
const Vue = loadModule('vue');
if (!Vue || typeof Vue.version !== 'string') {
	console.warn('[vue3-sketch-ruler] Vue is not found. Please run "npm install vue" to install.');
} else if (Vue.version.startsWith('2.')) {
	switchVersion(2);
} else if (Vue.version.startsWith('3.')) {
	switchVersion(3);
} else {
	console.warn(`[vue3-sketch-ruler] Vue version v${Vue.version} is not suppported.`);
}
