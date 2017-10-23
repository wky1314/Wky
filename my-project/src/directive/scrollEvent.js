let isScrollEvent = () => {
    let [
        scrollTop,
        winHeight,
        bodyHeight
    ] = [
        (document.documentElement.scrollTop),
        (window.outerHeight),
        (document.body.clientHeight)
    ]
console.log(bodyHeight,scrollTop,winHeight)
    if (bodyHeight-scrollTop <= winHeight+50) {
        return true
    } else {
        return false
    }
}

let scrollEventFn = ''

export default {
    inserted (el, binding) {
        scrollEventFn = (e)=>{
            if (isScrollEvent()){
                binding.value()
            }
        }
        document.addEventListener('scroll', scrollEventFn, false)
    },
    unbind () {
        document.removeEventListener('scroll', scrollEventFn)
    }
}
  