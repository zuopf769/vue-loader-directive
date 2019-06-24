<template>
  <div id="app">
    <p>loading组件</p>
    <div class="loading-wrap">
      <loading :visible="true"></loading>
    </div>
    <p>loader指令</p>
    <div class="loading-wrap" v-loader="status">
    </div>
    <div class="loading-wrap loader-wrap2" v-loader="status2">
    </div>
    <p style="margin-top: 10px;">tableLoader指令</p>
    <div class="table-responsive table-scroll" style="margin-top: 30px;">
        <table class="table uix-table table-stripe" v-table-loader="isLoading" loader-height="400">
            <thead>
            <tr>
                <th>项目1</th>
                <th>项目2</th>
                <th>项目3</th>
                <th>项目4</th>
                <th>项目5</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in [1,2,3,4,5]" :key="item">
                <td>{{item}}项目1</td>
                <td>{{item}}项目2</td>
                <td>{{item}}项目3</td>
                <td>{{item}}项目4</td>
                <td>{{item}}项目5</td>
            </tr>
            </tbody>
        </table>
      </div>
      <div class="table-responsive table-scroll" style="margin-top: 30px;">
        <table class="table uix-table table-stripe" v-table-loader="isLoading2">
            <thead>
            <tr>
                <th>项目1</th>
                <th>项目2</th>
                <th>项目3</th>
                <th>项目4</th>
                <th>项目5</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in [1,2,3,4,5]" :key="item">
                <td>{{item}}项目1</td>
                <td>{{item}}项目2</td>
                <td>{{item}}项目3</td>
                <td>{{item}}项目4</td>
                <td>{{item}}项目5</td>
            </tr>
            </tbody>
        </table>
      </div>
       <div class="table-responsive table-scroll" style="margin-top: 30px;">
        <table class="table uix-table table-stripe" v-table-loader="isLoading3">
            <thead>
            <tr>
                <th>项目1</th>
                <th>项目2</th>
                <th>项目3</th>
                <th>项目4</th>
                <th>项目5</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in [1,2,3,4,5]" :key="item">
                <td>{{item}}项目1</td>
                <td>{{item}}项目2</td>
                <td>{{item}}项目3</td>
                <td>{{item}}项目4</td>
                <td>{{item}}项目5</td>
            </tr>
            </tbody>
        </table>
      </div>
      
  </div>
</template>

<script>
import Loading from './components/Loading'

export default {
  name: 'app',
  data: function() {
    return {
        status: 1,
        status2: 1,
        isLoading: 1,
        isLoading2: 1,
        isLoading3: 1
    }
  },
  mounted() {
    setTimeout(() => {
      this.status = 2;
      this.status2 = -1;
      this.isLoading = 0;
      this.isLoading2 = -1;
      this.isLoading3 = 2;
    }, 200);
  },
  components: {
    Loading
  }
}
</script>

<style lang="less">

@import './style/pc/common';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loading-wrap{
  position: relative;
  width: 80%;
  height: 200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, .1);
  border-radius: 10px;
}

.loader-wrap2 {
  margin-top: 10px;
}
</style>
