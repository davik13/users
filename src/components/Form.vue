<template>
  <form
    class="card shadow w-50 mx-auto"
    @submit.prevent="saveForm"
  >
    <div class="card-body p-5">
      <img
        :src="user.avatarUrl || baseImage"
        alt="profile"
        class="img-fluid rounded mx-auto d-block mb-5"
        style="margin-top: -100px"
      >

      <hr>

      <div class="row">
        <div class="col-md-12 col-lg-6 col-sm-12">
          <label class="mt-2">Nom</label>
          <input
            v-model="user.lastName"
            class="form-control"
            type="text"
          >
          <label class="mt-2">email</label>
          <input
            v-model="user.email"
            class="form-control"
            type="email"
          >
          <label class="mt-2">Age</label>
          <input
            v-model="user.birthDate"
            class="form-control"
            type="date"
          >
           <label class="mt-2">Phone</label>
          <input class="form-control" type="text" v-model="user.phone">
        </div>
        <div class="col-md-12 col-lg-6 col-sm-12">
          <label class="mt-2">Prenom</label>
          <input
            v-model="user.firstName"
            class="form-control"
            type="text"
          >
          <label class="mt-2">Genre</label>
          <input
            v-model="user.gender"
            class="form-control"
            type="text"
          >
          <label class="mt-2">Détails</label>
          <textarea
            v-model="user.details"
            class="form-control"
          />
        </div>
      </div>

      <div class="text-center mt-5">
        <button
          type="submit"
          class="btn btn-primary "
        >
          SAVE
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditForm',
  props: ['initialValues', 'addClasses'],
  data() {
    return {
      user: this.initialValues,
      baseImage: 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png',
    };
  },
  beforeMount() {
    this.checkIfInitialValuesExist();
  },
  methods: {
    saveForm() {
      this.$emit('submit', this.user);
    },
    checkIfInitialValuesExist() {
      if (this.initialValues === undefined) {
        this.user = {
          lastName: '',
          firstName: '',
          birthDate: '',
          phone: '',
          gender: '',
          details: '',
          email: '',
          avatarUrl: 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png',
        };
      }
    },
  },
};
</script>
