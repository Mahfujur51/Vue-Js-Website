<template>
    <div>
        <header class="header_area">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <router-link class="navbar-brand logo_h" :to="{name:'Home'}"><img src="fontend/img/logo.png" alt=""></router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav justify-content-end" id="menu">
                                <li class="nav-item"><router-link class="nav-link" :to="{name:'Home'}">Home</router-link></li>
                                <li class="nav-item"><router-link class="nav-link"  :to="{name:'About'}">About</router-link></li>
                                <li class="nav-item"><router-link class="nav-link" :to="{name:'Service'}">Services</router-link></li>
                                <li class="nav-item"><router-link class="nav-link" :to="{name:'Portfolio'}">Portfolio</router-link></li>
                                <li class="nav-item"><router-link class="nav-link" :to="{name:'Blog'}"> Blog</router-link></li>
                                <li class="nav-item"><router-link class="nav-link" :to="{name:'Contact'}"> Contact Us</router-link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
   #menu .router-link-exact-active{
       color: rebeccapurple;
   }

</style>