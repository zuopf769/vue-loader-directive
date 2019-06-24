import Vue from 'vue';
import Loader from './index.vue';

const LoaderConstructor = Vue.extend(Loader);

const loaderDirective = {}

// 从loading状态到其他状态时间间隔小于loadingTime就loadingTime后才改变状态
function timeoutHandle(el, startTimer, endTimer, callback) {
    el.timer && clearTimeout(el.timer);
    let timer = 0;
    if((endTimer - startTimer) < el.loadingTime) {
        timer = el.loadingTime;
    } 
    el.timer = setTimeout(callback, timer);
}

loaderDirective.install = Vue => {

    Vue.directive('loader', {
        bind: function(el, binding, vnode) {
            // 设置loading的时间
            el.loadingTime = el.getAttribute('loader-time') || 500;
            const loader = new LoaderConstructor({
                el: document.createElement('div')
            });
            el.instance = loader;
            loader.status = binding.value;
            el.appendChild(loader.$el);
            // 一般用法是1 -> 0|-1|2
            if (binding.value === 1) {
                el.startTimer = new Date().getTime();
            }
        },
        update: function(el, binding) {
            if (binding.oldValue !== binding.value) {
                if (binding.value === 1) {
                    el.startTimer = new Date().getTime();
                    el.instance.status = 1;
                } else {
                    el.endTimer = new Date().getTime();
                    timeoutHandle(el, el.startTimer, el.endTimer, () => {
                        el.instance.status = binding.value;
                    });
                }
            }
        },
        unbind: function(el, binding) {
            el.instance && el.instance.$destroy();
            el.timer && clearTimeout(el.timer);
        }
    });
};

export default loaderDirective;
