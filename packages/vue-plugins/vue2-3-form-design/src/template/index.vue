<script lang='ts' setup>
import { ref } from 'vue'

</script>
<template>
  <div class="formDesign--container">
    <!-- 左侧 -->
    <div class="comp--container">
      <div class="comp-list-container">组件列表</div>
    </div>
    <!-- 中间 -->
    <div class="content--container" />
    <!-- 右侧设置区 -->
    <div class="setting--container" />
  </div>
</template>

<style lang='scss' scoped>
.formDesign--container {
  display: flex;
  .comp--container {
    width: 250px;
    padding: 8px 0;
    width: 100%;
    height: 100%;
  }
}
</style>