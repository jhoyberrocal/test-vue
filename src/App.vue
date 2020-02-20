<template>
    <div id="app">
        <Nav />
        <div class="main-container">
            <Toolbar />
            <router-view/>
        </div>
    </div>
</template>

<script>
  import Nav from '@/components/Nav';
  import Toolbar from '@/components/Toolbar';

  export default {
    name: 'Home',
    components: {
      Nav, Toolbar
    }
  }
</script>

<style lang="scss">
    #app {
        position: relative;
        font-family: $font;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $tx-color;
        background: #F5F6FA;
        font-size: 14px;
    }
    .main-container {
        position: relative;
        margin-left: 250px;
        min-height: 100vh;
        padding: 0 36px;
    }
</style>
