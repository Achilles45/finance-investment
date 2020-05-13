<template>
  <div class="process" id="process">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>HOW WE MAKE IT POSSIBLE</h3>
                  <p class="intro">We engage in various high-interest yeilding opportunities to enables us provide value to our investors</p>
              </div>
               <div class="col-md-3"></div>
          </div>
          <div class="row">
              <!-- <div class="col-md-1"></div> -->
              <div class="col-md-5 pt-4">
                  <div class="content d-flex">
                      <div class="icons">
                          <!-- <i class="fa fa-cubes"></i> -->
                      </div>
                      <div class="text">
                          <!-- <h4>Crowdfunding</h4>
                          <hr> -->
                          <p>The company deals with various high growth and secured investment opportunities. Some of the products and services we deal on includes</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Skill Acquisition Trainings on Paints, Cosmetics, Beverages, Agricultural Products, Household/Chemical Products and Bee Keeping</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Import & Export of Agro Allied Products</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Foodstuffs exportation</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp;  Forex Trading</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; General Online Investments/CryptoTradings</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Online/Offline seminars and Expositions</p>
                      </div>
                  </div><br>
                  <!-- <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-clone"></i>
                      </div>
                      <div class="text">
                          <h4>Maturity & Payout</h4>
                          <p>That's the product we deal on that makes us generate the money to pay investors in three days time and also the promo package for new members in the platform.</p>
                      </div>
                  </div> -->
              </div>
               <div class="col-md-6 pt-4">
                  <img src="../assets/images/process2.jpg" class="img-fluid process__img" alt="">
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                    <p class="intro">These are some of the product we deal on that helps the company generate quick returns to pay investors in three days time and also the promo package for new members in the platform. Want to grow your money, give us a try today!</p>
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
.process{
    padding: 4rem 0;
    h3{
        font-weight: bolder;
        color: $primary-color;
        padding-bottom: .5rem;
        font-size: 2rem;
        opacity: .6;
    }
    .intro{
        color: #627081;
        font-size: .9rem;
        opacity: .6;
    }
    .process__img{
        border-radius: 5px;
    }
    .content{
        .icons{
            // padding-right: 2rem;
            font-size: 2rem;
            color: $primary-color;
        }
        .text{
            h4{
                font-weight: bold;
                padding-bottom: .5rem;
                color: #2b2b2b;
            }
            p{
                color: #627081;
                font-size: .9rem;
                opacity: .8;
                line-height: 1.8;
            }
        }
    }
     p{
        color: #627081;
        font-size: .95rem;
        // opacity: .8;
        line-height: 1.8;
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .process{
        h3{
            font-size: 1.8rem !important;
        }
    }
}
</style>