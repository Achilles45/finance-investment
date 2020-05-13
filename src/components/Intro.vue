<template>
  <div class="intro">
     <div class="container">
          <div class="row">
          <div class="col-md-6">
              <img src="../assets/images/office.jpeg" class="img-fluid img" alt="">
          </div>
          <div class="col-md-6">
              <h2>Who We Are</h2>
              <hr>
              <p>Finance Investment Company is created for sustainability and logevity because we know how best to trade with your money. We are not here just for few days like others who come promising heaven and vanish out in no time. Those who are sincere and real will see the good intentions behind the policy module. Take it one at a time to prolong enjoyment as is the best option than eating  one day in short time.</p>
              <router-link to="/signup" class="intro__btn">Get Started</router-link>
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
.intro{
    padding: 5rem 0;
    h2{
        font-weight: bold;
        color: $primary-color;
        font-size: 1.5rem;
        opacity: .6;
    }
    p{
        line-height: 2;
        padding-top: 1rem;
        color: #627081;
        font-size: .89rem;
        opacity: .9;
        padding-bottom: 2rem;
    }
    .img{
        border-radius: 5px;
    }
    .intro__btn{
        background-color: $secondary-color;
        color: #fff;
        padding: 1.1rem 3rem;
        text-decoration: none;
        border-radius: 4px;
        font-size: .9rem;
    }
}
</style>