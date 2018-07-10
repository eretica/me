<template>
        <no-ssr>
            <vue-draggable-resizable  @dragging="onDragging" :isActive="true" :minw="200" :minh="300"  :w="width" :h="height" v-on:resizing="resize" v-on:dragging="resize" :parent="true" :sticks="['tm', 'mr', 'bm', 'ml', 'tl', 'tr', 'br', 'bl']">
                <div class="window">
                    <div class="titlebar" style="position: relative">
                        <div class="buttons" style="position: absolute;">
                            <div class="close">
                                <a class="closebutton" href="#" @click="delete_emit"><span><strong>x</strong></span></a>
                            </div>
                            <div class="minimize">
                                <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                            </div>
                            <div class="zoom">
                                <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                            </div>
                        </div>
                        <div style="text-align: center;" >
                            <slot name="header"></slot>
                        </div>
                    </div>
                    <div class="content">
                        <slot name="content"></slot>
                    </div>
                </div>
            </vue-draggable-resizable>
        </no-ssr>
</template>

<script>
    export default {
        name: 'Box_mac',
        props: {
            'init_id': {type: Number},
            'ini_top': {type: Number},
            'ini_left': {type: Number}
        },
        data () {
            return {
                id: this.init_id,
                head: this.ini_head,
                content: this.ini_content,
                width: 400,
                height: 400,
                top: this.ini_top,
                left: this.ini_left
            }
        },
        components: {
            'VueDraggableResizable': () => import('vue-drag-resize')
        },
        created: function () {
        },
        methods: {
            resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            },
            delete_emit: function () {
                this.$emit('delete', this.id);
            },
            onDragging() {
                // todo this bad
                this.$parent.$emit('dragging');
            }
        }
    }
</script>

<style>
    .vdr-stick {
        opacity: 0;
    }

    .vdr-stick-ml, .vdr-stick-mr {
        top: 0 !important;
        height: 100% !important;
    }

    .vdr-stick-tm, .vdr-stick-bm {
        left: 0!important;
        width: 100% !important;
    }

    .vdr.active:before {
        content: none!important;
    }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* ©2015 Johannes Jakob
      Made with <3 in Germany */

    body {
        background: #ecf0f1;
        color: #000;
        font-family: HelveticaNeue, 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;
    }

    /* window BEGIN */

    a {
        text-decoration: none;
    }

    span {
        line-height: 9px;
        vertical-align: 50%;
    }

    .window {
        background: #fff;
        /*width: 30vw;*/
        /*height: 40vh;*/
        width: auto;
        height: 100%;
        margin: auto;
        /*margin-top: 12.5vh;*/
        border: 1px solid #acacac;
        border-radius: 6px;
        box-shadow: 0px 0px 20px #acacac;
    }

    .titlebar {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));
        background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
        background: linear-gradient(top, #ebebeb, #d5d5d5);
        color: #4d494d;
        font-size: 11pt;
        line-height: 20px;
        text-align: center;
        width: 100%;
        height: 20px;
        border-top: 1px solid #f3f1f3;
        border-bottom: 1px solid #b1aeb1;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        cursor: default;
    }

    .buttons {
        padding-left: 8px;
        padding-top: 3px;
        float: left;
        line-height: 0px;
    }

    .buttons:hover a {
        visibility: visible;
    }

    .close {
        background: #ff5c5c;
        font-size: 9pt;
        width: 11px;
        height: 11px;
        border: 1px solid #e33e41;
        border-radius: 50%;
        display: inline-block;
    }

    .close:active {
        background: #c14645;
        border: 1px solid #b03537;
    }

    .close:active .closebutton {
        color: #4e0002;
    }

    .closebutton {
        color: #820005;
        visibility: hidden;
        cursor: default;
    }

    .minimize {
        background: #ffbd4c;
        font-size: 9pt;
        line-height: 11px;
        margin-left: 4px;
        width: 11px;
        height: 11px;
        border: 1px solid #e09e3e;
        border-radius: 50%;
        display: inline-block;
    }

    .minimize:active {
        background: #c08e38;
        border: 1px solid #af7c33;
    }

    .minimize:active .minimizebutton {
        color: #5a2607;
    }

    .minimizebutton {
        color: #9a5518;
        visibility: hidden;
        cursor: default;
    }

    .zoom {
        background: #00ca56;
        font-size: 9pt;
        line-height: 11px;
        margin-left: 6px;
        width: 11px;
        height: 11px;
        border: 1px solid #14ae46;
        border-radius: 50%;
        display: inline-block;
    }

    .zoom:active {
        background: #029740;
        border: 1px solid #128435;
    }

    .zoom:active .zoombutton {
        color: #003107;
    }

    .zoombutton {
        color: #006519;
        visibility: hidden;
        cursor: default;
    }

    .content {
        padding: 10px;
    }

    /* window END */

    /* content BEGIN */

    h3 {
        margin-top: 0px;
    }

    /* content END */
</style>
