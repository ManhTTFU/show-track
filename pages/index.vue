<template>
  <div>
    <Header/>
    <Information/>
    <Features/>
    <Getstart/>
    <Platform/>
    <Community/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '../components/Header.vue';
import Information from '../components/Information.vue';
import Features from '../components/Features.vue';
import Getstart from '../components/GetStart.vue';
import Community from '../components/Community.vue';
import Platform from '../components/Platform.vue';
// import { reverseString } from '~/core/utils'

@Component({
  components: {
    Header,
    Information,
    Features,
    Getstart,
    Community,
    Platform
  }
})
export default class extends Vue {
  public input = 'TypeScript';

  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
