<template>
  <div class="information">
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
            <div class="product">
              <p>Compatible with</p>
              <div>
                <img class="img-fluid net-flix" src="../assets/img/netflix.png">
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
.information {
  margin-bottom: 100px;
}
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
  .product {
    margin-top: 120px;
    p {
      color: #979797;
      text-transform: uppercase;
      font-size: 15px;
    }
    img {
      margin-left: 22px;
    }
    .net-flix {
      margin-left: 0;
    }
  }
}
input.form-control {
  max-width: 60%;
  height: 50px;
}
.input-group-text {
  background-color: #540cfa;
  color: #fff;
  font-weight: bold;
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

@media (max-width: 576px) {
  .track-left {
    margin-top: 20px;
    .track-show {
      font-size: 42px;
      line-height: 40px;
    }
    .track-content {
      font-size: 18px;
    }
    .product {
      margin-top: 30px;
      margin-bottom: 30px;
      img {
        margin-left: 10px;
      }
      .net-flix {
        margin-left: 5px;
      }
    }
  }
  .group-3 {
    position: relative;
    height: 100%;
    left: 75px;
    max-width: 100%;
  }
  .iphone {
    top: 36px;
    left: 15px;
    position: absolute;
    display: flex;
    align-items: center;
  }
}
</style>
