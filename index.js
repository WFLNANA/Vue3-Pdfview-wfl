/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-10-14 14:39:42
 * @LastEditTime: 2021-10-14 15:35:52
 */
import Vue3PdfviewWfl from './vue3-pdfview-wfl.vue';
const install = (Vue) => {
  if (install.installed) return
  Vue.component('vue3-pdfview-wfl', Vue3PdfviewWfl)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
export {
  Vue3PdfviewWfl
}