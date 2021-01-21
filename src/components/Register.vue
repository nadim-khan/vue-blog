<template>
    <div class="login"> 
        <b-card>
            <b-card-text>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Name:"
                        label-for="input-1"
                    >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="text"
                    placeholder="Enter Name"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                    >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Status:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.status"
                    :options="status"
                    required
                    ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
                    <b-form-select
                    id="input-3"
                    v-model="form.gender"
                    :options="gender"
                    required
                    ></b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
  export default {
      name:'Register',
    data() {
      return {
        form: {
          email: '',
          password: '',
          status:null,
          gender:null
        },
        status: [{ text: 'Select Status', value: null }, 'Active', 'Inactive', 'Busy', 'New Joiner'],
        gender: [{ text: 'Select Gender', value: null }, 'Male', 'Female', 'Other'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$emit('loginSuccess','proceed');
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
    .login{
        display: flex;
        justify-content: center;
    }
</style>>