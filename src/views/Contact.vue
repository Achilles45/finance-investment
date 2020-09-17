<template>
  <div class="contact">
      <Topbar />
      <Navbar />
      <div class="contact__heading">
        <div class="container">
          <h1>Contact Us</h1>
          <p>Reach out to us today if you have any problem with our platform</p>
        </div>
      </div>
      <div class="contact__details">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4>We have top notch customer support team!</h4>
              <hr><br>
              <div class="box1 d-flex">
                <i class="fa fa-phone"></i>
                <p>+2347037104283</p>
              </div>
               <div class="box2 d-flex">
                <i class="fa fa-envelope"></i>
                <p>financialinvestment943@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  components:{
    Topbar,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.contact__heading{
  background: linear-gradient(rgba(4,9,30,.9), rgba(4,9,30,.9)), url('../assets/images/banner4.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  color: #fff;
  padding: 7rem 0;
  h1{
    font-weight: 900;
  }
  p{
    font-size: .9rem;
    opacity: .8;
  }
}
.contact__details{
  padding: 4rem 0;
  .box1, .box2{
  .fa-phone, .fa-envelope{
    // background: blue;
    color: #404040;
    font-size: 1.5rem;
    margin-right: 2rem;
  }
  }
}
</style>