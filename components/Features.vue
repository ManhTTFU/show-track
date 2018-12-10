<template>
  <div class="features">
    <div class="container">
      <div class="row">
        <div v-for="feature in features" :key="feature.id" class="col-md-4 text-center">
          <img :src="require(`~/assets/img/${feature.img}`)" class="img-fluid">
          <p>{{ feature.title }}</p>
          <p>Track your favorite shows automatically without switching between apps.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// import { reverseString } from '~/core/utils'

@Component({
  data() {
    return {
      features: [
        {
          img: 'youtube.png',
          title: 'Automated tracking'
        },
        {
          img: 'smart.png',
          title: 'Machine learning'
        },
        {
          img: 'machine.png',
          title: 'Smart notifications'
        }
      ]
    };
  }
})
export default class Feature extends Vue {
  public input = 'TypeScript';
  // get reversed(): string {
  //   return reverseString(this.input)
  // }
}
</script>
