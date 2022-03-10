<script setup>
import { ref, h, watchEffect, watch, computed } from 'vue';
import CompList from './CompList.vue';
import Draggable from './../dragComp/index'
import RenderComp from './utils/render';
import { } from '@element-plus/icons-vue'

// 表单模型
const formModel = ref({});
// 表单规则
const formRules = ref({});
// 组件数据
const totalComps = ref([]);


// 给当前的表单加上属性
watchEffect(() => {
  if (totalComps.value.length) {
    const keysArr = Object.keys(formModel.value);
    totalComps.value.forEach(p => {
      if (!keysArr.includes(p.labelProps)) {
        formModel.value[p.labelProps] = p.config.defaultValue;
      }
    })
  } else {
    formModel.value = {}
  }
})

// 当前选中的组件，需要标记为选中状态
const chooseComp = (id) => {
  totalComps.value.forEach(p => {
    if (p.labelProps === id) {
      p.currentChoose = true;
    }
    p.currentChoose = false;
  })
}


</script>
<template>
  <div class="formDesign--container">
    <!-- 左侧 -->
    <div class="comp--container">
      <div class="comp-list-container">
        <comp-list :formModel="formModel" @chooseCurrent="chooseComp" />
      </div>
    </div>
    <!-- 中间 -->
    <div class="content--container">
      <el-form ref="formRef" :model="formModel" label-width="100px" :rules="formRules">
        <draggable
          class="my-drag--container"
          :list="totalComps"
          :sort="true"
          draggable=".list-group--item"
          group="componentsGroup"
          item-key="id"
        >
          <div
            v-for="(comp, i) in totalComps"
            class="list-group--item"
            :class="comp.currentChoose ? 'current-comp--style' : ''"
            :key="comp.key"
          >
            <render-comp
              :config="comp.config"
              :labelProps="comp.labelProps"
              v-model:modelValue="formModel[comp.labelProps]"
            ></render-comp>
          </div>
        </draggable>
      </el-form>
    </div>
    <!-- 右侧设置区 -->
    <div class="setting--container">右侧内容</div>
  </div>
</template>

<style lang='scss' scoped>
.formDesign--container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .comp--container {
    width: 250px;
    padding: 8px 0;
    box-sizing: border-box;
    height: 100%;
  }
  .content--container {
    width: calc(100% - 550px);
    height: 100%;

    .my-drag--container {
      padding: 20px 5px 10px 0px;
      width: 100%;
      height: calc(100vh - 16px);
      overflow: auto;
      border: 1px solid #abcdef;
      border-radius: 5px;

      .list-group--item {
        cursor: move;
      }

      .current-comp--style {
        border: 3px solid #68c79c;
        box-sizing: border-box;
        position: relative;
      }
    }
  }

  .setting--container {
    width: 300px;
    height: 100%;
  }
}
</style>