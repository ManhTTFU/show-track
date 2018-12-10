<template>
  <div>
    <Header/>
    <Information/>
    <Features/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '../components/Header.vue';
import Information from '../components/Information.vue';
import Features from '../components/Features.vue';
// import { reverseString } from '~/core/utils'

@Component({
  components: {
    Header,
    Information,
    Features
  }
})
export default class extends Vue {
  public input = 'TypeScript';

  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
