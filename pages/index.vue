<template>
  <div>
    <Header/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '../components/Header.vue';
// import { reverseString } from '~/core/utils'

@Component({
  components: {
    Header
  }
})
export default class extends Vue {
  public input = 'TypeScript';

  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
