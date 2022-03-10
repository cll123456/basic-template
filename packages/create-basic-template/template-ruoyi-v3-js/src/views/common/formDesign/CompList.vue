<script  setup>

import { ref, h } from 'vue'
import { containerComponents, inputComponents, selectComponents } from './utils/config';
import Draggable from './../dragComp/index'

const emits = defineEmits(['chooseCurrent'])

// 容器组件
const containerComps = ref(containerComponents)
// 输入型组件
const inputComps = ref(inputComponents);
// 选择型组件
const selectComps = ref(selectComponents);


const cloneComponent = (e) => {
  const p = Date.now().toString(16);
  emits('chooseCurrent', p);
  return {
    config: e,
    labelProps: p,
    key: p,
    currentChoose: true
  };
}

</script>

<template>
  <div class="components--container">
    <div>
      <div class="title">容器组件</div>
      <draggable
        tag="ul"
        class="components-draggable comp-list"
        :list="containerComps"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneComponent"
      >
        <li v-for="item in containerComps" :key="item.label" class="components-item">
          <a>{{ item.label }}</a>
        </li>
      </draggable>
    </div>
    <div>
      <div class="title">输入型组件</div>
      <draggable
        tag="ul"
        class="components-draggable comp-list"
        :list="inputComps"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneComponent"
      >
        <li v-for="item in inputComps" :key="item.label" class="components-item">
          <a>{{ item.label }}</a>
        </li>
      </draggable>
    </div>
    <div class="title">选择型组件</div>
    <ul class="comp-list">
      <li v-for="item in selectComps" :key="item.label" class="components-item" draggable="true">
        <a>{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scope>
.components--container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .title {
    padding: 8px 12px;
    font-size: 13px;
  }

  .comp-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 2%;

    .components-item {
      font-size: 12px;
      display: block;
      width: 47%;
      line-height: 26px;
      position: relative;
      float: left;
      left: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1%;
      color: #333;
      border: 1px solid #f4f6fc;
      text-align: center;
      user-select: none;

      a {
        display: block;
        cursor: move;
        background: #f4f6fc;
        border: 1px solid #f4f6fc;
      }

      &:hover {
        color: #409eff;
        border: 1px dashed #409eff;
      }
    }
  }
}
</style>