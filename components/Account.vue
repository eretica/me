<template>
    <div>
        <box :ini_top="250" :ini_left="20" :ini_h="150" :ini_y="100" :ini_x="0">
            <div slot="header">アカウント</div>
            <div slot="content">
                <div class="links">
                    <a href="https://twitter.com/dona_sunday" target="_blank" class="button--twitter">
                        <span><i class="fa fa-twitter fa-lg"></i></span> Twitter
                    </a>
                    <a href="https://github.com/eretica/" target="_blank" class="button--github">
                        <span><i class="fa fa-github fa-lg"></i></span> GitHub
                    </a>
                    <a href="https://qiita.com/eretica" target="_blank" class="button--qiita">
                        <span><i class="fa fa-search fa-lg"></i></span> Qiita
                    </a>
                    <a href="https://ja-jp.facebook.com/manaimasahiro" target="_blank" class="button--facebook">
                        <span><i class="fa fa-facebook fa-lg"></i></span> FaceBook
                    </a>
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


