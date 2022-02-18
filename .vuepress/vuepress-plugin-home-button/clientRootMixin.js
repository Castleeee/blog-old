import Btn from "./Btn";
import Vue from "vue";

export default {
    updated() {
        // 防止阻塞
        setTimeout(() => {
                var el=document.getElementsByClassName("hero")[0]
                let ComponentClass = Vue.extend(Btn)
                let instance = new ComponentClass()
                instance.code = el.innerText
                instance.$mount()
                el.classList.add('hero')
                el.appendChild(instance.$el)
            })
    }
}
