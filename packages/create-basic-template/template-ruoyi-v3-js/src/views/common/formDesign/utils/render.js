
import { h } from 'vue';  
import { ElInput, ElFormItem, ElInputNumber } from 'element-plus'
function renderCompByConfig(h, config, props, modelValue) { 
  // 自动生成prop
  const p = props || Date.now().toString(16);
  switch (config.label) { 
    
    case '单行文本':
      return h(
        ElFormItem,
        {
          label: config.label,
          prop: p,
          labelWidth: config.labelWidth,
          required: config.required,
          style: config.style
        },
        () => h(
          ElInput,
          {
            modelValue: modelValue,
            'onInput': value => this.$emit('update:modelValue', value),
            'onChange': value => this.$emit('update:modelValue', value),
            placeholder: config.placeholder,
            clearable: config.clearable,
            maxlength: config.maxlength,
            readonly: config.readonly,
            disabled: config.disabled,
          }
        )
      );
    case '多行文本':
      return h(
        ElFormItem,
        {
          label: config.label,
          prop: p,
          labelWidth: config.labelWidth,
          required: config.required,
          style: config.style
        },
        () => h(
          ElInput,
          {
            modelValue: modelValue,
            'onInput': value => this.$emit('update:modelValue', value),
            placeholder: config.placeholder,
            clearable: config.clearable,
            maxlength: config.maxlength,
            readonly: config.readonly,
            disabled: config.disabled,
            autosize: config.autosize,
            type: config.type,
            showWordLimit: config.showWordLimit
          }
        )
      );
    case '密码':
      return h(
        ElFormItem,
        {
          label: config.label,
          prop: p,
          labelWidth: config.labelWidth,
          required: config.required,
          style: config.style
        },
        () => h(
          ElInput,
          {
            modelValue: modelValue,
            'onInput': value => this.$emit('update:modelValue', value),
            placeholder: config.placeholder,
            clearable: config.clearable,
            maxlength: config.maxlength,
            readonly: config.readonly,
            disabled: config.disabled,
            type: config.type,
            showWordLimit: config.showWordLimit,
            showPassword: true
          }
        )
      );
    case '计数器':
      return h(
        ElFormItem,
        {
          label: config.label,
          prop: p,
          labelWidth: config.labelWidth,
          required: config.required,
          style: config.style
        },
        () => h(
          ElInputNumber,
          {
            modelValue: modelValue,
            'onChange': value => this.$emit('update:modelValue', value),
            min: config.min,
            max: config.max,
            step: config.step,
            stepStrictly: config.stepStrictly,
            precision: config.precision,
            controlsPosition: config.controlsPosition,
            disabled: config.disabled,
          }
        )
      );
  }
}

export default {
  render() { 
    return renderCompByConfig.call(this, h,  this.config, this.labelProps, this.modelValue)
  },
  props: ['config', 'labelProps', 'modelValue'],
  emits: ['update:modelValue']
}