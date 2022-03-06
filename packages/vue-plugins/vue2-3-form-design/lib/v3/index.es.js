/*!
* vue2-3-form-design v1.0.0
* 2022年3月Thu Mar 03 2022 16:05:45 GMT+0800 (中国标准时间)
* 制作
*/
import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
import { ref } from "vue-demi";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const a = ref(1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "\u6D4B\u8BD5\u6253\u5305" + toDisplayString(a.value), 1);
    };
  }
});
export { _sfc_main as default, _sfc_main as formDesign };
