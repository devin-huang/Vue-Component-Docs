import DateRange from './date-range'
import FilterPopop from './filter-popop'
import FilterSelect from './filter-select'
import Input from './input'
import Page from './page'
import SstFilter from './filter-2'
import InputCheck from './InputCheck'
import FunTable from './fun-table'

const components = [
  DateRange,
  FilterPopop,
  FilterSelect,
  Input,
  Page,
  SstFilter,
  InputCheck,
  FunTable
]

const install = Vue => {
  components.map(com => {
    Vue.component(com.name, com)
  })
}

export default {
  install,
  ...components
}
