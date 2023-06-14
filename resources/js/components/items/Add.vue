<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Item</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="item.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Quantity</label>
                                    <input type="text" class="form-control" v-model="item.quantity">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="text" class="form-control" v-model="item.price">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="item.description">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-item",
    data(){
        return {
            item:{
                name:"",
                quantity:"",
                price:"",
                description:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/item',this.item).then(response=>{
                this.$router.push({name:"ItemDisplay"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>