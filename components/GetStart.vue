<template>
  <div class="get-start">
    <div class="container">
      <div class="wrapper text-center">
        <p class="title">Get Started</p>
        <p class="title-tracking">Start tracking your TV
          <br>shows for free
        </p>
        <p class="content">In order to start tracking your TV shows, all you have to do is enter
          <br>your email address. Everything else will be taken care of by us. All you
          <br>have to do is sit back, relax and enjoy your TV shows.
        </p>
        <div class="input-group text-center">
          <input
            type="text"
            class="form-control"
            placeholder="your@email.com"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          >
          <div class="input-group-append">
            <span id="basic-addon2" class="input-group-text">Start tracking</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.get-start {
  margin-top: 40px;
  .title {
    font-size: 18px;
    color: #d8d8d8;
  }
  .title-tracking {
    font-size: 60px;
    font-weight: bold;
    line-height: 65px;
  }
  .content {
    font-size: 21px;
  }
  .input-group.text-center {
    /* max-width: 50%; */
    display: flex;
    text-align: center;
    /* align-items: center; */
    justify-content: center;
    margin-top: 60px;
  }
  input.form-control {
    max-width: 40%;
    height: 50px;
  }
  .input-group-text {
    background-color: #540cfa;
    color: #fff;
    font-weight: bold;
  }
}
</style>
