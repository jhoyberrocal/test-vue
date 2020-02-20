<template>
    <div class="loader">
        <div class="material-spinner"></div>
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style lang="scss" scoped>
    .loader {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .material-spinner {
        height: 20px;
        min-height: 20px;
        width: 20px;
        border-radius: 100px;
        border: 3px transparent solid;
        border-top: 3px #3F51B5 solid;
        animation: material-spinner 2.8s infinite;
    }

    @keyframes material-spinner {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(360deg);
        }
        50% {
            transform: rotate(720deg);
        }
        75% {
            transform: rotate(1080deg);
        }
        100% {
            transform: rotate(1440deg);
        }
    }
</style>