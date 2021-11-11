<template>
<div>

    <!--================ Start Header Area =================-->
    <Header></Header>
    <!--================ End Header Area =================-->
    <router-view></router-view>
    <!--================ End Testimonial Area =================-->

    <!--================ Start Newsletter Area =================-->
    <Newsletter></Newsletter>
    <!--================ End Newsletter Area =================-->

    <!--================Footer Area =================-->
    <Footer></Footer>

</div>
</template>

<script>
    import Header from "@/components/Fontend/Header";
    import Newsletter from "@/components/Fontend/Newsletter";
    import Footer from "@/components/Fontend/Footer";
    export default {
        name: "Master",
        components: {Header,Newsletter,Footer},

    }
</script>

<style scoped>

</style>