/**
 * 返回console对象
 * @returns 
 */
function getConsole() {
  if (typeof window !== 'undefined') {
    return window.console
  }
  return global.console
}
const console = getConsole()

/**
 * 缓存结果
 * @param {*} fn 
 * @returns 
 */
function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const regex = /-(\w)/g
/**
 * camelize: 连字符转驼峰
 */
const camelize = cached((str) =>
  str.replace(regex, (_, c) => (c ? c.toUpperCase() : ''))
)

/**
 * 删除节点
 * @param {*} node 
 */
function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node)
  }
}

/**
 * 插入节点
 * @param {*} fatherNode 
 * @param {*} node 
 * @param {*} position 
 */
function insertNodeAt(fatherNode, node, position) {
  const refNode =
    position === 0
      ? fatherNode.children[0]
      : fatherNode.children[position - 1].nextSibling
  fatherNode.insertBefore(node, refNode)
}

export { insertNodeAt, camelize, console, removeNode }