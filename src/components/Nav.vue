<template>
    <div id="nav">
        <div class="nav-head">
            <p>System</p>
        </div>
        <ul class="nav-links">
            <li>
                <i class="material-icons">
                    supervisor_account
                </i>
                <router-link to="/">Users</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
    #nav {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100vh;
        height: 100vh;
        width: 245px;
        background: #ffffff;
        box-shadow: 4px 0 4px rgba(43, 45, 55, 0.01);
    }

    .nav-head {
        color: #000000;
        text-align: left;
        padding: 17px 21px 20px 30px;
        font-size: 24px;
        p {
            margin: 10px 0;
            font-weight: bold;
        }
    }
    .nav-links {
        list-style: none;
        margin: 0;
        padding: 10px 21px 20px 30px;
        font-weight: bold;
        li {
            display: flex;
            align-items: center;
            i {
                color: #3B5CE7;
                margin-right: 30px;
            }
        }
        a {
            text-decoration: none;
            color: #000000;
            font-size: 14px;
        }
    }
</style>