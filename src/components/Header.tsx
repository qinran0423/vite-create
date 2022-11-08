import { defineComponent } from 'vue'
import style from './index.module.scss'
import logoSrc from '@assets/vue.svg'

export default defineComponent({
  name: 'VHeader',
  setup() {
    return () => {
      return (
        <div class={style.headertop}>
          This is Header
          <img src={logoSrc} alt="" />
        </div>
      )
    }
  }
})
