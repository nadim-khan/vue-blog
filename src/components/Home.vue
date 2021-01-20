<template>

    <div>
        <h3>Custom Components</h3>
        <Ninput  :label="`Text`" :type="'text'"  @change="getCheckedVal($event)"/>
        <Ninput  :label="`Checkbox`" :type="'checkbox'" @change="getCheckedVal($event)"/>
        <Ninput  :label="`Number`" :type="'number'" @change="getCheckedVal($event)"/>
        <Ninput  :label="`Date`" :type="'date'" @change="getCheckedVal($event)"/>
        <Ninput  :label="`Color`" :type="'color'" @change="getCheckedVal($event)"/>
    </div>
</template>
<script>
    import Ninput from '../custom/checkbox'
    export default {
        name:'Home', 
        components:{
            Ninput
        },
        methods:{
            getCheckedVal(val){
                alert(val)
            }
        }
    }
    
</script>

<style scoped>
</style>