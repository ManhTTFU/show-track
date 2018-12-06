<template>
  <div>
    <input v-model="input">
    {{ input }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// import { reverseString } from '~/core/utils'

@Component
export default class extends Vue {
  public input = 'TypeScript';

  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
