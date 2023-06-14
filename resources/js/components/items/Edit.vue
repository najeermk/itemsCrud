<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Item</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                <button type="submit" class="btn btn-primary">Update</button>
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
    name:"update-item",
    data(){
        return {
            item:{
                name:"",
                quantity:"",
                price:"",
                description:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showItem()
    },
    methods:{
        async showItem(){
            await this.axios.get(`/api/item/${this.$route.params.id}`).then(response=>{
                const { name, quantity, price, description } = response.data
                this.item.name = name
                this.item.quantity = quantity
                this.item.price = price
                this.item.description = description
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/item/${this.$route.params.id}`,this.item).then(response=>{
                this.$router.push({name:"itemDisplay"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>