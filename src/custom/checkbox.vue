<template>
  <b-container fluid>
    <b-row class="col-sm-6 "  :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ label }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input @change="$emit('change', $event.target.value)" :id="`type-${type}`" :type="type" :state="true"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
    export default {
        name:'Ninput',
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean,
            label:String,
            type:String
        },
        
    }
</script>
<style scoped>

</style>