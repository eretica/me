<template>
  <section class="container">
    <div>
      <app-logo/>

      <div class="contents" ref="contens" id="contents">
        <div id="account-1">
          <account @dragging="insertBefore('account-1')" class="js-content"></account>
        </div>
        <div id="account-2">
          <account @dragging="insertBefore('account-2')" class="js-content"></account>
        </div>

        <div id="account-3">
          <account @dragging="insertBefore('account-3')" class="js-content"></account>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import Account from '@/components/Account.vue'

import { mapMutations } from 'vuex'

export default {
    components: {
        AppLogo,
        Account
    },
    computed: {
        list () { return this.$store.state.list },
    },
    methods: {
        insertBefore(aa) {
            document.getElementById("contents").parentNode.insertBefore(document.getElementById(aa), document.getElementById("contents"));
        },
    }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
