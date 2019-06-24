<template>
    <div class="xc-loader-wrap" v-if="status !== 0">
        <loading :visible="showLoading" v-if="status === 1"></loading>
        <div class="error-tip" v-else>
            <span class="error-text">{{ text }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped src="./Loader.less"></style>

<script>
import Loading from '../Loading';
import { statusMap } from '../constant';

export default {
    name: 'Loader',
    data: function() {
        return {
            status: 0
        }
    },
    computed: {
        showLoading: function () {
            return this.status === 1;
        },
        text: function() {
            return statusMap[this.status + '']
        }
    },
    components: {
        Loading
    }
}
</script>
