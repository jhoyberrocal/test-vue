<template>
    <header class="toolbar">
        <div class="toolbar-title">
            <i class="material-icons">notes</i>
            <p>Dashboard</p>
        </div>
        <div class="toolbar-user">
            <img src="../assets/user.jpg" alt="Marlene Sasoeur">
            <p>Marlene Sasoeur</p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .toolbar {
        max-width: 100%;
        background: #ffffff;
        box-shadow: 0 4px 4px rgba(43, 45, 55, 0.0105441);
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px 0 40px;
        color: #74798C;
        &-title {
            display: flex;
            align-items: center;
            i {
                color: #A0A5BA;
                margin-right: 17px;
            }
        }
        &-user {
            display: flex;
            align-items: center;
            img {
                width: 30px;
                height: 30px;
                margin-right: 20px;
                border-radius: 50%;
            }
        }
    }
</style>