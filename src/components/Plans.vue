<template>
  <div class="plans">
      <div class="container">
          <div class="row">
              <div class="col-12 text">
                  <h1>INVESTMENT PLANS</h1>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>BASIC</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: &#8358;10,000<br>Maximum Deposit: &#8358;60,000</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal Process</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 5 Days Maturity</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>STANDARD</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: &#8358;70,000<br>Maximum Deposit: &#8358;400,000</h6>
                  <div class="card__details">
                    <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal Process</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 5 Days Maturity</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>PREMIUM</h4>
                  </div>
                   <h6 class="text-center pt-4 pb-4">Minimum Deposit: &#8358;500,000<br>Maximum Deposit: &#8358;800,000</h6>
                  <div class="card__details">
             <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal Process</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 5 Days Maturity</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>PROMO PLAN</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: &#8358;50,000<br>Maximum Deposit: &#8358;1,000,000</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">CUSTOM MADE BONUS</span></p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal Process</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24 Hours Maturity</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
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
.plans{
    padding: 3rem 0;
      background: $primary-color;
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center;
    background-position: fixed;
    color: #fff;
    .text{
        h1{
            font-weight: bold;
        }
        hr{
            background: #fff;
            opacity: .4;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 25px;
        margin-top: 2rem;
        margin-bottom: 3rem;
         hr{
            background: #fff;
            opacity: .4;
        }
        .card__content{
            border: .5px solid $secondary-color;
            h6{
                color: #fff;
                text-transform: uppercase;
                font-size: .7rem;
                opacity: .8;
                font-weight: bold;
                border-bottom: 1px solid $secondary-color;
                line-height: 2;
            }
            .heading{
                background: $secondary-color;
                padding: .8rem;
               h4{
                    color: #fff;
                    font-weight: bold;

               }
            }
            .card__details{
                padding: 1rem 2rem;
                .fa-check-square{
                    margin-right: 1.1rem;
                    color: #fff;
                }
                p{
                    font-size: .8rem;
                    // opacity: .8;
                }
                .bonus{
                    color: #fff;
                }
            }
            .bottom{
                padding-top: 3rem;
                padding-bottom: 3rem;
                .plans__btn{
                    background: $secondary-color;
                    font-weight: normal;
                    padding: .8rem 2rem;
                    border-radius: 2px;
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h1{
            font-size: 1.3rem;
        }
    }
}
</style>