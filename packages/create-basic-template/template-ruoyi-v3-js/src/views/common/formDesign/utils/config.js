export const formConf = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true
}

// 容器组件
export const containerComponents = [
  {
    label: '表单组件',
  },
  {
    label: '栅格组件'
  }
]

//  输入组件
export const inputComponents = [
  {
    label: '单行文本',
    tag: 'el-input',
    tagIcon: 'input',
    placeholder: '我是单行文本,可以用于任何的表单输入',
    defaultValue: '',
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    showWordLimit: false,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/input.html'
  },
  {
    label: '多行文本',
    tag: 'el-input',
    tagIcon: 'textarea',
    type: 'textarea',
    placeholder: '我是多行文本，可以用于大文本的输入',
    defaultValue: '',
    span: 24,
    labelWidth: null,
    autosize: {
      minRows: 4,
      maxRows: 4
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/input.html#%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC'
  },
  {
    label: '密码',
    tag: 'el-input',
    tagIcon: 'password',
    placeholder: '请输入',
    defaultValue: '123',
    span: 24,
    'show-password': true,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    type: 'password',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/input.html#%E5%AF%86%E7%A0%81%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86'
  },
  {
    label: '计数器',
    tag: 'el-input-number',
    tagIcon: 'number',
    defaultValue: 1,
    span: 24,
    labelWidth: null,
    min: undefined,
    max: undefined,
    step: undefined,
    stepStrictly: false,
    precision: undefined,
    controlsPosition: '',
    disabled: false,
    required: true,
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/input-number.html'
  }
]
// 选择性组件
export const selectComponents = [
  {
    label: '下拉选择',
    tag: 'el-select',
    tagIcon: 'select',
    placeholder: '请选择',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    required: true,
    filterable: false,
    multiple: false,
    options: [{
      label: '选项一',
      value: 1
    }, {
      label: '选项二',
      value: 2
    }],
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/select.html'
  },
  {
    label: '级联选择',
    tag: 'el-cascader',
    tagIcon: 'cascader',
    placeholder: '请选择',
    defaultValue: [],
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    props: {
      props: {
        multiple: false
      }
    },
    'show-all-levels': true,
    disabled: false,
    clearable: true,
    filterable: false,
    required: true,
    options: [{
      id: 1,
      value: 1,
      label: '选项1',
      children: [{
        id: 2,
        value: 2,
        label: '选项1-1'
      }]
    }],
    dataType: 'dynamic',
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
    separator: '/',
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/cascader.html'
  },
  {
    label: '单选框组',
    tag: 'el-radio-group',
    tagIcon: 'radio',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: {},
    optionType: 'default',
    border: false,
    size: 'medium',
    disabled: false,
    required: true,
    options: [{
      label: '选项一',
      value: 1
    }, {
      label: '选项二',
      value: 2
    }],
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/radio.html'
  },
  {
    label: '多选框组',
    tag: 'el-checkbox-group',
    tagIcon: 'checkbox',
    defaultValue: [],
    span: 24,
    labelWidth: null,
    style: {},
    optionType: 'default',
    border: false,
    size: 'medium',
    disabled: false,
    required: true,
    options: [{
      label: '选项一',
      value: 1
    }, {
      label: '选项二',
      value: 2
    }],
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/checkbox.html'
  },
  {
    label: '开关',
    tag: 'el-switch',
    tagIcon: 'switch',
    defaultValue: false,
    span: 24,
    labelWidth: null,
    style: {},
    disabled: false,
    required: true,
    'active-text': '',
    'inactive-text': '',
    'active-color': null,
    'inactive-color': null,
    'active-value': true,
    'inactive-value': false,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/switch.html'
  },
  {
    label: '滑块',
    tag: 'el-slider',
    tagIcon: 'slider',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    disabled: false,
    required: true,
    min: 0,
    max: 100,
    step: 1,
    'show-stops': false,
    range: false,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/slider.html'
  },
  {
    label: '时间选择',
    tag: 'el-time-picker',
    tagIcon: 'time',
    placeholder: '请选择',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    required: true,
    'picker-options': {
      selectableRange: '00:00:00-23:59:59'
    },
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss',
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/time-picker.html'
  },
  {
    label: '时间范围',
    tag: 'el-time-picker',
    tagIcon: 'time-range',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    required: true,
    'is-range': true,
    'range-separator': '至',
    'start-placeholder': '开始时间',
    'end-placeholder': '结束时间',
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss',
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/time-picker.html#%E4%BB%BB%E6%84%8F%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4'
  },
  {
    label: '日期选择',
    tag: 'el-date-picker',
    tagIcon: 'date',
    placeholder: '请选择',
    defaultValue: null,
    type: 'date',
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    required: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/date-picker.html'
  },
  {
    label: '日期范围',
    tag: 'el-date-picker',
    tagIcon: 'date-range',
    defaultValue: null,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    type: 'daterange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    disabled: false,
    clearable: true,
    required: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/date-picker.html#%E9%80%89%E6%8B%A9%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4'
  },
  {
    label: '评分',
    tag: 'el-rate',
    tagIcon: 'rate',
    defaultValue: 0,
    span: 24,
    labelWidth: null,
    style: {},
    max: 5,
    'allow-half': false,
    'show-text': false,
    'show-score': false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/rate.html'
  },
  {
    label: '颜色选择',
    tag: 'el-color-picker',
    tagIcon: 'color',
    defaultValue: null,
    labelWidth: null,
    'show-alpha': false,
    'color-format': '',
    disabled: false,
    required: true,
    size: 'medium',
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/color-picker.html'
  },
  {
    label: '上传',
    tag: 'el-upload',
    tagIcon: 'upload',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    defaultValue: null,
    labelWidth: null,
    disabled: false,
    required: true,
    accept: '',
    name: 'file',
    'auto-upload': true,
    showTip: false,
    buttonText: '点击上传',
    fileSize: 2,
    sizeUnit: 'MB',
    'list-type': 'text',
    multiple: false,
    regList: [],
    changeTag: true,
    document: 'https://element-plus.gitee.io/zh-CN/component/upload.html'
  }
]
// 布局组件
export const layoutComponents = [
  {
    layout: 'rowFormItem',
    tagIcon: 'row',
    type: 'default',
    justify: 'start',
    align: 'top',
    label: '行容器',
    layoutTree: true,
    children: [],
    document: 'https://element-plus.gitee.io/zh-CN/component/layout.html#%E5%9F%BA%E7%A1%80%E5%B8%83%E5%B1%80'
  },
  {
    layout: 'colFormItem',
    label: '按钮',
    changeTag: true,
    labelWidth: null,
    tag: 'el-button',
    tagIcon: 'button',
    span: 24,
    default: '主要按钮',
    type: 'primary',
    icon: 'el-icon-search',
    size: 'medium',
    disabled: false,
    document: 'https://element-plus.gitee.io/zh-CN/component/button.html'
  }
]

// 组件rule的触发方式，无触发方式的组件不生成rule
export const trigger = {
  'el-input': 'blur',
  'el-input-number': 'blur',
  'el-select': 'change',
  'el-radio-group': 'change',
  'el-checkbox-group': 'change',
  'el-cascader': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  'el-rate': 'change'
}
