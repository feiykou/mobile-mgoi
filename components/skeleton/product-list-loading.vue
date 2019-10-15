<template>
    <ul class="product-list">
        <li v-for="(item, index) in counts" :key="index">
            <content-loader
                :height="371"
                :width="222"
                :speed="2"
                primaryColor="#d4d4d4"
                secondaryColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="222" height="222" /> 
                <rect x="0" y="242.27" rx="0" ry="0" width="190" height="16" /> 
                <rect x="0" y="268.27" rx="0" ry="0" width="53" height="16" /> 
                <rect x="0" y="300.27" rx="0" ry="0" width="110" height="16" /> 
                <rect x="0" y="335.27" rx="0" ry="0" width="234" height="51" />
            </content-loader>
        </li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<script>
import {
  ContentLoader,
} from 'vue-content-loader'
export default {
    props: {
        counts: {
            type: Number,
            default: 8
        }
    },
    components: {
        ContentLoader
    }
}
</script>

<style lang="scss" scoped>
    .product-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 310px;
            margin-bottom: 69px;
        }
    }
</style>
