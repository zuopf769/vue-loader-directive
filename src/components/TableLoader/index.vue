<template>
    <tbody v-if="status !== 0">
        <tr>
            <td colspan="100%" class="loader-td">
                <div class="xc-loader-wrap" :style="{height: height + 'px'}">
                    <loading :visible="showLoading" v-if="status === 1"></loading>
                    <div class="error-tip" v-else>
                        <span class="error-text">{{ text }}</span>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<style lang="less" scoped src="./TableLoader.less"></style>

<script>
import Loading from '../Loading';
import { statusMap } from '../constant';

export default {
    name: 'TableLoader',
    data: function() {
        return {
            status: 0,
            height: 300
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
