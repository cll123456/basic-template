<script lang="ts" setup>
import type { Ref } from 'vue-demi';
import { ref, defineProps, defineEmits } from 'vue-demi';
import type { ElForm } from 'element-plus';
import { ElFormItem, ElDialog, ElRow, ElCol, ElInput, ElRadioGroup, ElRadioButton } from 'element-plus'


const props = defineProps<{
  showFileName: string,
  visible: boolean
}>()

type fromDataType = {
  fileName: undefined | string;
  type: string;
}
const emits = defineEmits<{
  (event: 'update:visible', visible: boolean): void
  (event: 'confirm', formData: fromDataType): void
}>();

const formData: Ref<fromDataType> = ref({
  fileName: undefined,
  type: 'file'
})
//  规则
const rules = ref({
  fileName: [{
    required: true,
    message: '请输入文件名',
    trigger: 'blur'
  }],
  type: [{
    required: true,
    message: '生成类型不能为空',
    trigger: 'change'
  }]
})

const elFormRef = ref<InstanceType<typeof ElForm>>();

const typeOptions = ref([{
  label: '页面',
  value: 'file',
  disabled: false,
}, {
  label: '弹窗',
  value: 'dialog',
  disabled: false,
}])
/**
 * 打开
 */
const onOpen = () => {
  if (props.showFileName) {
    formData.value.fileName = `${+new Date()}.vue`
  }
}
/**
 * 关闭页面
 */
const onClose = () => {
  emits('update:visible', false)
}
/**
 * 确认
 */
const handelConfirm = () => {
  elFormRef.value?.validate(valid => {
    if (!valid) return
    emits('confirm', formData.value)
    onClose()
  })
}
</script>


<template>
  <div>
    <el-dialog
      :model-value="visible"
      width="500px"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      @open="onOpen"
      @close="onClose"
    >
      <el-row :gutter="15">
        <el-form
          ref="elFormRef"
          :model="formData"
          :rules="rules"
          size="default"
          label-width="100px"
        >
          <el-col :span="24">
            <el-form-item
              label="生成类型"
              prop="type"
            >
              <el-radio-group v-model="formData.type">
                <el-radio-button
                  v-for="(item, index) in typeOptions"
                  :key="index"
                  :label="item.value"
                  :disabled="item.disabled"
                >
                  {{ item.label }}
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-if="props.showFileName"
              label="文件名"
              prop="fileName"
            >
              <el-input
                v-model="formData.fileName"
                placeholder="请输入文件名"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

      <template #footer>
        <el-button @click="onClose">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="handelConfirm"
        >
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

