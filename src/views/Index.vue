<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <!-- <Hero /> -->
    <Banner />
    <Features />
    <Process />
    <Intro />
    <!-- <Features /> -->
    <!-- <Process /> -->
    <!-- <Pricing /> -->
    <Gallery />
    <Testimonial />
    <!-- <AppBanner /> -->
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Features from '@/components/Features.vue'
import Process from '@/components/Process.vue'
// import Pricing from '@/components/Pricing.vue'
import Gallery from '@/components/Gallery.vue'
import Testimonial from '@/components/Testimonial.vue'
import AppBanner from '@/components/AppBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Hero,
    Topbar,
    Navbar,
    Banner,
    Intro,
    Features,
    Process,
    // Pricing,
    Gallery,
    Testimonial,
    AppBanner,
    Footer
  }
}
</script>
