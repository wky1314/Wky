export default {
  inserted (el, binging) {
    document.title = binging.value
  },
  update (el, binging) {
    document.title = binging.value
  }
}
