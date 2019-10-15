<template>
    <div class="cate-box">
        <div class="cate-loader" v-for="(item, index) in counts" :key="index">
            <content-loader
                :height="134"
                :width="125"
                :speed="2"
                primaryColor="#d4d4d4"
                secondaryColor="#ecebeb"
            >
                <rect x="47" y="17" rx="0" ry="0" width="28" height="14" /> 
                <rect x="38.5" y="46" rx="0" ry="0" width="46" height="46" /> 
                <rect x="0" y="128.27" rx="0" ry="0" width="125" height="1" />
            </content-loader>
        </div>
    </div>
</template>

<script>
import {
  ContentLoader
} from 'vue-content-loader'
export default {
  name: 'cate-loading',
  props: {
    counts: {
      type: Number,
      default: 3
    }
  },
  components: {
      ContentLoader
  }
}
</script>

<style lang='scss'>
    .cate-box{
        display: flex;
    }
    .cate-loader{
        width: 142px;
        height: 146px;
        margin-right: 20px;
        margin-top: 50px;
    }
</style>
