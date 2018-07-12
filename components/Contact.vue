<template>
    <div>
        <box :ini_top="250" :ini_left="20" :ini_h="300" :ini_y="300" :ini_x="100">
            <div slot="header">コンタクト</div>
            <div slot="content">
                <div class="contact">
                    <form name="contact" method="POST" netlify>
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
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

    .send-btn {
        color: #347e7c;
        background-color: #95a5a6;
        border-color: #95a5a6;

        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 10px 15px;
        font-size: 15px;
        line-height: 1.42857;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }


</style>


