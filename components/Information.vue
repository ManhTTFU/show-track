<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="track-left">
            <h1 class="track-show">Track your shows
              <br>automatically
            </h1>
            <p>With ShowTrackr you can track your favorite TV shows
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
          </div>
        </div>
        <div class="col-md-6">
          <div class="group-3">
            <img class="img-fluid group-3" src="../assets/img/Group-3.png">
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
    font-size: 50px;
    line-height: 50px;
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
  height: 85%;
  right: -175px;
}
</style>
