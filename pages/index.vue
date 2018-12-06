<template>
  <div>
    <Header/>
    <Information/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '../components/Header.vue';
import Information from '../components/Information.vue';
// import { reverseString } from '~/core/utils'

@Component({
  components: {
    Header,
    Information
  }
})
export default class extends Vue {
  public input = 'TypeScript';

  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
