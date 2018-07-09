<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        me
      </h1>
      <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->

      <!--<img src="@/static/logo.svg">-->

        <box v-for="(data, n) in list" :key="n"
             :init_id="n"
             :ini_name="data.title"
             :ini_top="300 + 10.5 * n"
             :ini_left="10 + 10.5 * n"

        />
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import Box from '@/components/Box.vue'

import { mapMutations } from 'vuex'

export default {
    components: {
        AppLogo,
        Box
    },
    computed: {
        list () { return this.$store.state.list }
    },
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
