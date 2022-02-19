import Btn from "./Btn";
import Vue from "vue";

export default {
    updated() {
        // 防止阻塞
        setTimeout(() => {
                var el=document.getElementsByClassName("hero")[0]
                if (el===undefined) return;
                let ComponentClass = Vue.extend(Btn)
                let instance = new ComponentClass()
                instance.code = el.innerText
                instance.$mount()
                el.classList.add('hero')
                el.appendChild(instance.$el)

                var el=document.getElementsByClassName("hero")[0]
                if (el===undefined) return;
            })
    }
}
