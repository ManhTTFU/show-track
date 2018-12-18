<template>
  <div class="platform">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="left-platform">
            <h1 class="title-platform">Easy-to-use interfaces
              <br>on every platform
            </h1>
            <p class="content-platform">Since most of our features work in a completely automated<br>way, you will mainly use our apps to discover new TV shows<br>recommended for you and discuss the most interesting<br>episodes with like-minded people.</p>
            <div class="wrapper-list">
              <div class="customized">
                <div class="cus-img">
                  <img class="img-fluid" src="../assets/img/Shape.png">
                </div>
                <div class="title-dashboard">
                  Customized Dashboard
                </div>
              </div>
              <div class="automatic">
                <div class="cus-img">
                  <img class="img-fluid" src="../assets/img/Shape.png">
                </div>
                <div class="title-automatic">
                  Automatic Day & Night Modes
                </div>
              </div>
              <div class="automatic">
                <div class="cus-img">
                  <img class="img-fluid" src="../assets/img/Shape.png">
                </div>
                <div class="title-automatic">
                  Integrated Chat Platform
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="group-3">
            <img class="img-fluid group-3" src="../assets/img/web-app-mockup.png">
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
.platform {
  margin-top: 40px;
  .left-platform {
    margin-top: 50px;
    .title-platform {
      font-size: 46px;
      line-height: 45px;
      margin-bottom: 30px;
    }
    .content-platform {
      font-size: 18px;
      color: #000000;
      font-weight: 300;
    }
  }
}
.group-3 {
  position: relative;
  left: 65px;
  max-width: 100%;
  display: block;
}
.iphone {
  top: -302px;
  left: -35px;
  position: relative;
}
.customized {
  display: flex;
  flex-direction: row;
  box-shadow: 3px 3px 5px 1px grey;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 300px;
  .cus-img {
    margin-left: 10px;
    align-self: center;
  }
  .title-dashboard {
    align-self: center;
    margin-left: 10px;
    font-weight: bold;
  }
}
.automatic {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  .cus-img {
    margin-left: 10px;
    align-self: center;
  }
  .title-automatic {
    align-self: center;
    margin-left: 10px;
    font-weight: bold;
    color: #bdbdbd;
  }
}

@media (max-width: 576px) {
  .platform {
    margin-top: 40px;
    .left-platform {
      margin-top: 50px;
      .title-platform {
        font-size: 35px;
        margin-bottom: 30px;
      }
      .content-platform {
        font-size: 18px;
        color: #000000;
        font-weight: 300;
      }
    }
  }
  .group-3 {
    position: relative;
    left: 65px;
    max-width: 100%;
    display: none;
  }
  .iphone {
    top: 35px;
    left: 0px;
    position: relative;
  }
}
</style>
