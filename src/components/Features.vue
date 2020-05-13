<template>
  <div class="features">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h2>FEATURES THAT MAKES US STANDOUT</h2>
                  <p>We have consistently delivered amazing results to our investors. Join us now</p>
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <div class="border__image">
                      <img src="../assets/images/half-maze-gray.png" class="border__img" alt="">
                  </div>
                  <img src="../assets/images/chart.svg" class="icons" alt="">
                  <h3>Growth Opportunities</h3>
                  <p>We provide you access to investments and high growth opportunies that are exclusively out of reach for most people, ranging from agricultural trade, cryptocurrencies to real estate and others.</p>
                  <router-link to="/signup" class="card__btn">Get Started <i class="fa fa-arrow-right"></i></router-link><br>
              </div>
               <div class="card__content">
                    <div class="border__image">
                      <img src="../assets/images/half-maze-green.png" class="border__img" alt="">
                  </div>
                  <img src="../assets/images/safe.svg" class="icons" alt="">
                  <h3>Safe & Secured</h3>
                  <p>All our systems are built with bank grade security to make sure all transactions on any of our platforms are safe for our users. We and our fund partners maintain quality security systems.</p>
                   <router-link to="/signup" class="card__btn">Get Started <i class="fa fa-arrow-right"></i></router-link><br>
              </div>
               <div class="card__content">
                    <div class="border__image">
                      <img src="../assets/images/half-maze-orange.png" class="border__img" alt="">
                  </div>
                  <img src="../assets/images/support.svg" class="icons" alt="">
                  <h3>24/7 Support</h3>
                  <p>We have a top notch customer support and satisfaction department that respond to all your queries in realtime. If you ever feel stuck, use the live chat widget below.</p>
                   <router-link to="/signup" class="card__btn">Get Started <i class="fa fa-arrow-right"></i></router-link><br>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.features{
    background: #F6F7FF;
    padding: 5rem 0;
    h2{
        font-weight: bolder;
        color: $primary-color;
        text-transform: capitalize;
         opacity: .6;
    }
    p{
        color: #627081;
        padding-top: 1rem;
        font-size: .9rem;
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
        .card__content{
            background-color: #fff;
            background-clip: border-box;
            // border: 1px solid rgba(0, 0, 0, .125);
            border-radius: .25rem;
            position: relative;
            padding: 2rem 2rem;
            .border__image{
                position: absolute;
                bottom:0;
                right: 0;
                .border__img{
                    max-width: 100px;
                    height: auto;
                }
            }
            .icons{
                max-width: 60px;
                height: auto;
            }
            h3{
                font-size: 1.2rem;
                font-weight: bold;
                padding-top: 2rem;
                padding-bottom: 1rem;
                color: $primary-color;
                line-height: 1.5;
                 opacity: .6;
            }
            p{
                color: #627081;
                font-size: .82rem;
                opacity: .7;
                padding-bottom: 2rem;
                line-height: 1.9;
            }
            .card__btn{
                border-radius: 3px;
                text-decoration: none;
                font-weight: bold;
                background: transparent;
                color: $primary-color;
                opacity: .4;
                font-size: .8rem;
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .features{
        h2{
            font-size: 1.6rem !important;
            line-height: 1.5;
        }
        p{
            font-size: .9rem;
        }
    }
}
</style>