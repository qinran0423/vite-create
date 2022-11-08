import { defineComponent } from 'vue'
import style from './index.module.scss'

export default defineComponent({
  name: 'VHeader',
  setup() {
    return () => {
      return <div class={style.headertop}>This is Header</div>
    }
  }
})
