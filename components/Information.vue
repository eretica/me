<template>
    <div>
        <box :ini_top="250" :ini_left="20" :ini_h="300" :ini_y="200" :ini_x="100">
            <div slot="header">インフォメーション</div>
            <div slot="content">
                <div class="information">
                    <p>フリーランス</p>
                    <p>28歳</p>
                    <p>福岡</p>
                    <p>eretica.m@gmail.com</p>
                </div>
            </div>
        </box>
    </div>
</template>

<script>
    import Box from '@/components/Box.vue'

    export default {
        components: {
            Box,
        },
        computed: {
            age () { return this.calcAge()},
        },
        methods: {
            calcAge () {
                let birth = new Date('07/20/1995');
                let now = new Date();
                let beforeBirth = ((() => {birth.setDate(now.getDate());birth.setMonth(now.getMonth()); return birth.getTime()})() < birth.getTime()) ? 0 : 1;
                return now.getFullYear() - birth.getFullYear() - beforeBirth;
            }
        }
    }
</script>

<style scoped>
    /*inline {*/
        /*display: inline-block;*/
    /*}*/

    p {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 700;
        font-size: 20px;
        color: #89baec;
        letter-spacing: 1px;
        padding-top: 10px;
    }


</style>


