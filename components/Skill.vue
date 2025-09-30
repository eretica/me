<template>
    <div>
        <box :ini_top="250" :ini_left="20" :ini_h="500" :ini_y="300" :ini_x="0">
            <div slot="header">スキル</div>
            <div slot="content">
                <div class="skills">
                    <div class="skill-kind">Backend Languages</div>
                    <div class="skill-box">Rails</div>                  
                    <div class="skill-box">PHP</div>

                    <hr>

                    <div class="skill-kind">Backend Technologies</div>
                    <div class="skill-box">Laravel</div>                  
                    <div class="skill-box">Symfony</div>
                    <div class="skill-box">CodeIgniter</div>
                    <div class="skill-box">RDB</div>

                    <hr>

                    <div class="skill-kind">Frontend Languages</div>
                    <div class="skill-box">TypeScript</div>

                    <hr>

                    <div class="skill-kind">Frontend Technologies</div>
                    <div class="skill-box">React</div>
                    <div class="skill-box">Backbone</div>
                    <div class="skill-box">Vue</div>
                    <div class="skill-box">CSS3</div>
                    <div class="skill-box">HTML5</div>
                    <div class="skill-box">Jquery</div>

                    <hr>

                    <div class="skill-kind">Tools</div>
                    <div class="skill-box">Terraform</div>
                    <div class="skill-box">Git</div>
                    <div class="skill-box">Docker</div>
                    <div class="skill-box">Vagrant</div>
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
        methods: {

        }
    }
</script>

<style scoped>
    /*inline {*/
        /*display: inline-block;*/
    /*}*/

    .skill-kind {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 700;
        font-size: 20px;
        color: #89baec;
        letter-spacing: 1px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .skill-box {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #c5866b;
        color: #c5866b;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
        margin-top: 5px;
    }

    .skill-box:hover {
        color: #fff;
        background-color: #c5866b;
        /*background-color: #fff;*/
    }
</style>


