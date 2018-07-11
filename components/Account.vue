<template>
    <div>
        <box :ini_top="300 + 10.5" :ini_left="10 + 10.5">
            <div slot="header">アカウント</div>
            <div slot="content">
                <h1>
                    フリーのペチパー
                </h1>
                <div class="links">
                    <a href="https://twitter.com/dona_sunday" target="_blank" class="button--twitter">
                        Twitter
                    </a>
                    <a href="https://github.com/eretica/" target="_blank" class="button--github">
                        GitHub
                    </a>
                    <a href="https://qiita.com/eretica" target="_blank" class="button--qiita">
                        Qiita
                    </a>
                    <a href="https://ja-jp.facebook.com/manaimasahiro" target="_blank" class="button--facebook">
                        FaceBook
                    </a>

                    <a href="https://ja-jp.facebook.com/manaimasahiro" target="_blank" class="button--facebook">
                        FaceBook
                    </a>

                    <a href="https://ja-jp.facebook.com/manaimasahiro" target="_blank" class="button--facebook">
                        FaceBook
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


