<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"ItemsAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Items</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Description</th>                            
                                </tr>
                            </thead>
                            <tbody v-if="items.length > 0">
                                <tr v-for="(item,key) in items" :key="key">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>{{ item.price }}</td>
                                    <td>{{ item.description }}</td>
                                    <td>
                                        <router-link :to='{name:"ItemsEdit",params:{id:item.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Items Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"items",
    data(){
        return {
            items:[]
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        async getItems(){
            await this.axios.get('/api/items').then(response=>{
                this.items = response.data
            }).catch(error=>{
                console.log(error)
                this.items = []
            })
        },
        deleteItems(id){
            if(confirm("Are you sure to delete this item ?")){
                this.axios.delete(`/api/item/${id}`).then(response=>{
                    this.getItems()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>