/**
 * Created By shli on 2018/10/15
 */

/**
 *  Page.install = Vue => {
 *    Vue.component(Page.name, Page
 *  }
 */
import FunTable from './component'

Object.defineProperty(FunTable, 'install', {
  writable: false,
  enumerable: true,
  configurable: false,
  value(Vue, options) {
    Vue.component(FunTable.name, FunTable)
  }
})

export default FunTable
