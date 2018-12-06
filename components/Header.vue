<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-show-track navbar-light">
        <a class="navbar-brand nav-title" href="#">ShowTrack</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"/>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Get Started</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div>
              <button class="btn-login btn-lg my-2 my-sm-0" type="submit">Login</button>
            </div>
            <div>
              <button class="btn-start btn-lg my-2 my-sm-0" type="submit">Get Started</button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// import { reverseString } from '~/core/utils'

@Component
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #f5f5f5;
  .nav-title {
    color: #ba68c8;
  }
}
.nav-link {
  color: #263238;
}
.btn-login {
  color: #fff;
  margin-right: 10px;
  background-color: #540cfa;
  border: #540cfa;
}
.btn-start {
  background-color: #540cfa;
  color: #fff;
}
</style>

