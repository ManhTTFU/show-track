<template>
  <div class="community">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="community-right">
            <p class="title">Community</p>
            <p class="sub-title">We believe in the<br>power of community</p>
            <p class="c-content">Our goal is to create a product and service that you’re<br>satisfied with and use it every day. This is why we’re<br>constantly working on our services to make it better<br>every day and really listen to what our users has to say.</p>
            <button type="button" class="btn btn-primary">Read more testimonials</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-columns">
            <div v-for="commuinity in communities" :key="commuinity.id" class="card">
              <div class="card-body">
                <div class="information-top">
                  <div class="community-left">
                    <div>
                      <img :src="require(`~/assets/img/${commuinity.img}`)" class="img-fluid">
                    </div>
                    <div class="wrap-community-name">
                      <p>Patrick Martin</p>
                    </div>
                  </div>
                  <div>
                    <img :src="require(`~/assets/img/${commuinity.twiiter}`)" class="img-fluid">
                  </div>
                </div>
                <p class="card-text">{{ commuinity.content }}</p>
                <p class="card-text-date">{{ commuinity.date }}</p>
              </div>
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
      communities: [
        {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
        },
       {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'Track your favorite shows automatically without switching between apps.Track your favorite shows automatically without switching between apps.Track your favorite shows automatically without switching between apps.'
        },
        {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
        },
        {
          img: 'Oval-3.png',
          twiiter : 'Shape-twt.png',
          date: 'Jan 18,2018',
          content:
            'Track your favorite shows automatically without switching between apps.'
        },
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
.community {
  background-color: #000000;
  margin-top: 50px;
}
.community-right {
  margin-top: 100px;
  .title {
    color: #fff;
  }
  .sub-title {
    font-size: 50px;
    line-height: 55px;
    font-weight: bold;
    color: #fff;
  }
  .c-content {
    color: #fff;
    font-size: 15px;
  }
}
.card {
  background-color: #141414;
  .information-top {
    display: flex;
    justify-content: space-between;
    .community-left {
      display: flex;
      .wrap-community-name {
        margin-left: 10px;
        margin-top: 5px;
        p {
          color: #fff;
          font-size: 13px;
        }
      }
    }
  }
  .card-text {
    font-size: 13px;
    color: #fff;
    margin-top: 5px;
  }
  .card-text-date {
    color:#fff;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 30px;
  }
}
@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
    column-count: 2;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    grid-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
</style>
