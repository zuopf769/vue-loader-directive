import Vue from 'vue';
import TableLoader from './index.vue';

const TableLoaderConstructor = Vue.extend(TableLoader);

const tableLoaderDirective = {};

// 从loading状态到其他状态时间间隔小于loadingTime就loadingTime后才改变状态
function timeoutHandle(el, startTimer, endTimer, callback) {
    el.timer && clearTimeout(el.timer);
    let timer = 0;
    if((endTimer - startTimer) < el.loadingTime) {
        timer = el.loadingTime;
    }
    el.timer  = setTimeout(callback, timer);
}

// 隐藏table，显示loader
function showLoader(el, binding) {
    el.thead.style.display = el.theadDisplayType;
    if (el.noThead === 'true') {
        el.thead.style.display = 'none';
    }
    el.tbody.style.display = 'none';
    el.instance.status = binding.value;
}

// 隐藏loader，显示table
function showTalbe(el) {
    el.instance.status = 0;
    el.thead.style.display = el.theadDisplayType;
    el.tbody.style.display = el.tbodyDisplayType;
}

tableLoaderDirective.install = Vue => {

    Vue.directive('TableLoader', {
        bind: function(el, binding, vnode) {

            el.thead = el.children[0];
            el.tbody = el.children[1];

            el.theadDisplayType = getComputedStyle(el.thead).display;
            el.tbodyDisplayType = getComputedStyle(el.tbody).display;
           
            // 设置loading的时间
            el.loadingTime = el.getAttribute('loader-time') || 500;
            // 设置loading时不显示<thead>
            el.noThead = el.getAttribute('no-thead') || 'false';
            // 设置loader的默认高度
            let loaderHeight = parseInt(el.getAttribute('loader-height'), 10) || 300;

            const loader = new TableLoaderConstructor({
                el: document.createElement('div')
            });
            el.instance = loader;
            loader.status = binding.value;
            loader.height = loaderHeight;

            el.appendChild(loader.$el);
            // 一般用法是1 -> 0|-1|2
            if (binding.value === 1) {
                el.startTimer = new Date().getTime();
                showLoader(el, binding);
            }
        },
        update: function(el, binding) {
            if (binding.oldValue !== binding.value) {
                // 0表示已加载成功
                if (binding.value === 0) {
                    el.endTimer = new Date().getTime();
                    timeoutHandle(el, el.startTimer, el.endTimer, () => {
                        showTalbe(el);
                    });
                } else if (binding.value === 1) {
                    // 不是一般用法的1 -> 0|-1|2
                    // 例如刚开始的从0状态到loading状态
                    el.startTimer = new Date().getTime();
                    showLoader(el, binding);
                }
                else {
                    // 从loading状态到-1或2的状态
                    el.endTimer = new Date().getTime();
                    timeoutHandle(el, el.startTimer, el.endTimer, () => {
                        showLoader(el, binding);
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

export default tableLoaderDirective;
