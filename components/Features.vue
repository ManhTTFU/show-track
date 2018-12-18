<template>
  <div class="features">
    <div class="container">
      <div class="logo text-center">
        <p>Features</p>
        <p class="customized">Build and customized
          <br>for your habits
        </p>
        <p>
          ShowTrackr’s built-in machine learning and context-aware features<br>guarantee that all the notifications and recommendations are always<br>delivered to you in the perfect moment.
        </p>
      </div>
      <div class="row">
        <div v-for="feature in features" :key="feature.id" class="col-md-4 text-center">
          <img :src="require(`~/assets/img/${feature.img}`)" class="img-fluid">
          <p class="feature-title">{{ feature.title }}</p>
          <p>{{ feature.content }}</p>
          <div class="learn-more">
            <div>
              <p>Learn more</p>
            </div>
            <div class="img-left">
              <img class="img-fluid" src="../assets/img/left.png">
            </div>
          </div>
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
          title: 'Automated tracking',
          content:
            'Track your favorite shows automatically without switching between apps.'
        },
        {
          img: 'smart.png',
          title: 'Machine learning',
          content:
            'Track your favorite shows automatically without switching between apps.'
        },
        {
          img: 'machine.png',
          title: 'Smart notifications',
          content:
            'Track your favorite shows automatically without switching between apps.'
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
<style lang="scss" scoped>
.logo {
  margin-bottom: 30px;
  .customized {
    font-size: 60px;
    font-weight: bold;
    line-height: 65px;
  }
}
.feature-title {
  font-weight: bold;
}
.learn-more {
  display: flex;
  flex-direction: row;
  justify-content: center;
  p {
    color: #6198f8;
  }
  .img-left {
    margin-left: 10px;
  }
}
@media (max-width: 576px) {
  .logo {
    .customized {
      font-size: 42px;
      line-height: 40px;
    }
  }
  .learn-more {
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      color: #6198f8;
    }
    .img-left {
      margin-left: 10px;
    }
  }
}
</style>
