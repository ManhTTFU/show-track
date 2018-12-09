<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="track-left">
            <h1 class="track-show">Track your shows
              <br>automatically
            </h1>
            <p class="track-content">With ShowTrackr you can track your favorite TV shows
              <br>automatically, so you never loose track of
              <br>your TV shows ever again. 🍿
            </p>
            <div class="input-group mb-3">
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
            <div>
              <p>Compatible with</p>
              <div>
                <img class="img-fluid" src="../assets/img/netflix.png">
                <img class="img-fluid" src="../assets/img/apple.png">
                <img class="img-fluid" src="../assets/img/android.png">
                <img class="img-fluid" src="../assets/img/windows.png">
                <img class="img-fluid" src="../assets/img/synology.png">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="group-3">
            <img class="img-fluid group-3" src="../assets/img/Group-3.png">
          </div>
          <div class="iphone">
            <img class="img-fluid" src="../assets/img/iphone-x-mockup.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.track-left {
  margin-top: 120px;
  .track-show {
    font-size: 70px;
    line-height: 60px;
    margin-bottom: 30px;
  }
  .track-content {
    font-size: 21px;
    margin-bottom: 30px;
  }
}
input.form-control {
  max-width: 45%;
  height: 50px;
}
.input-group-text {
  background-color: #540cfa;
  color: #fff;
}
.group-3 {
  position: relative;
  height: 100%;
  left: 132px;
  max-width: 100%;
}
.iphone {
  top: 36px;
  left: 90px;
  position: absolute;
}
</style>
