<template>
    <div class="about">
        <div class="card">
            <div class="card-title">
                <router-link to="/" class="btn-back">
                    <i class="material-icons">chevron_left</i>
                </router-link>
                <p>{{user.name}}</p>
            </div>
            <Loader v-if="loading" />
            <div class="card-body" v-else>
                <p><b>Id:</b> {{user.id}}</p>
                <p><b>Username:</b> {{user.username}}</p>
                <p><b>Email:</b> {{user.email}}</p>
                <p><b>Address:</b> {{`${user.address.city} ${user.address.street} ${user.address.suite}`}}</p>
                <p><b>Company:</b> {{user.company.name}}</p>
            </div>
        </div>
        <div class="card">
            <div class="card-title">
                <p>To Do's</p>
            </div>
            <Loader v-if="loading" />
            <div class="card-body" v-else>
                <ul>
                    <li v-for="todo in todos">
                        <label class="checkbox">
                            <input type="checkbox" class="checkbox-input" :checked="todo.completed">
                            <span class="checkbox-label">{{todo.title}}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    export default {
        components: {Loader},
        data() {
            return {
                user: {},
                todos: [],
                loading: true
            }
        },
        async mounted() {
            const ID = this.$route.params.id;
            const reqUser = await this.$axios.get(`${this.API}/users/${ID}`);
            const reqTod = await this.$axios.get(`${this.API}/todos?userId=${ID}`);
            this.user = reqUser.data;
            this.todos = reqTod.data;
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        margin-top: 30px;
        padding-bottom: 20px;
    }
    .card {
        position: relative;
        border-radius: 5px;
        padding: 30px;
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);
        margin: 20px 0;
        &-title {
            display: flex;
            align-items: center;
            p {
                font-size: 18px;
                font-weight: bold;
                margin-left: 20px;
            }
        }
        &-body {
            padding: 0 10px;
        }
    }
    ul {
        list-style: none;
        padding: 0;
    }
    .checkbox {
        display: inline-block;
        position: relative;
        margin: 0 0 10px;
        font-size: 14px;
        line-height: 24px;

        &-input {
            position: absolute;
            top: 4px;
            left: 0;
            width: 16px;
            height: 16px;
            opacity: 0;
            z-index: 0;
        }
        &-label {
            display: block;
            padding: 0 0 0 24px;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                top: 4px;
                left: 0;
                width: 12px;
                height: 12px;
                background-color: transparent;
                border: 2px solid $border-color;
                border-radius: 2px;
                z-index: 1;
                transition: all .28s cubic-bezier(.4, 0, .2, 1);
                transition-property: background-color, border-color;
            }

            &:after {
                content: '';
                position: absolute;
                top: 5px;
                left: 5px;
                width: 4px;
                height: 10px;
                border-bottom: 2px solid transparent;
                border-right: 2px solid transparent;
                transform: rotate(45deg);
                z-index: 2;
                transition: border-color .28s cubic-bezier(.4, 0, .2, 1);
            }
        }
        &-input:checked + &-label {
            &:before {
                background-color: $checked-color;
                border-color: $checked-color;
            }

            &:after {
                border-color: #ffffff;
            }
        }
    }
</style>
