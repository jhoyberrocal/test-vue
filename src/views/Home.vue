<template>
    <div class="home">
        <button class="btn-primary" type="button">
            <i class="material-icons">add</i>
            <span>Add new user</span>
        </button>
        <div class="spacer"></div>
        <div class="card">
            <div class="card-title">
                <p>Users</p>
                <i class="material-icons">more_horiz</i>
            </div>
            <div class="card-body">
                <Loader v-if="loading"/>
                <table class="table" v-else>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users">
                        <td>{{user.id}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{`${user.address.city} ${user.address.street}`}}</td>
                        <td>{{user.company.name}}</td>
                        <td>
                            <router-link :to="`/users/${user.id}/todos`" class="nowrap">View todos</router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    export default {
        name: 'Home',
        data() {
            return {
                loading: true,
                users: []
            }
        },
        components: {Loader},
        async mounted() {
            const req = await this.$axios.get(`${this.API}/users`);
            this.users = req.data;
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        margin-top: 30px;
        padding-bottom: 40px;
    }

    .spacer {
        height: 20px;
        width: 100%;
    }

    .card {
        border-radius: 5px;
        padding: 30px;
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);

        &-body {
            max-width: 100%;
            overflow: auto;
        }

        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;

            i {
                color: #A0A5BA;
            }
        }
    }

    .table {
        width: 100%;
        border-collapse: collapse;

        th {
            color: #9B9EAC;
            line-height: 24px;
            font-size: 14px;
            font-weight: normal;
            padding: 20px 10px;
        }

        tbody {
            tr {
                &:nth-child(odd) {
                    background: #F5F6FA;
                }
                td {
                    padding: 20px 10px;
                }
            }
        }
    }
    .nowrap {
        white-space: nowrap;
    }
</style>
