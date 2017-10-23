
import Loading from '@/components/Loading'
export default {
  install (Vue, options) {
    const VueLoading = Vue.extend(Loading)
    let loading = new VueLoading()
    loading.$mount()
    document.querySelector('body').appendChild(loading.$el)
    Vue.prototype.$loading = {
      show: () => {
        loading.show()
      },
      hide: () => {
        loading.hide()
      }
    }
   }
}