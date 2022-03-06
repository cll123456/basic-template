const { switchVersion } = require('./utils');

const version = process.argv[2];
// 判断版本，如果是vue2,切换到vue3,反之则切换到vue3
if (version.toString() === '2') {
	switchVersion(2);
	console.log(`[vue3-sketch-ruler] Switched for Vue 2 `);
} else if (version.toString() === '3') {
	switchVersion(3);
	console.log(`[vue3-sketch-ruler] Switched for Vue 3 `);
} else {
	console.warn(`[vue3-sketch-ruler] expecting version "2" or "3" but got "${version}"`);
	process.exit(1);
}
