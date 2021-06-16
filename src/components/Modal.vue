<template>
  <div
    id="myModal"
    class="modal"
    style="display: block;"
    @close="closeModal"
  >
    <div class="modal-dialog modal-xl shadow-lg modal-dialog-scrollable">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">
            Créer un utilisateur
          </h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            @click="closeModal"
          >
            ×
          </button>
        </div>
        <!-- Modal body -->
        <div style="padding-top: 5rem">
          <Form @submit="createUser" />
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Form from './Form.vue';

export default {
  name: 'Modal',
  components: { Form },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit('closemodal');
    },
    async createUser(userCreated) {
      try {
        await axios.post('https://ynov-front.herokuapp.com/api/users', userCreated);
        this.$emit('notification', {
          type: 'success',
          message: "L'utilisateur a bien été créer.",
        });
        this.$emit('closemodal');
        this.fetchUsers(userCreated);
      } catch (e) {
        this.$emit('notification', {
          type: 'danger',
          message: e.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.modal{
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.modal-dialog{
  background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
}
.modal-footer{
  padding: 10px 20px 20px;
}
/* .modal-body {
  padding-top: 5rem;
  overflow-y: scroll;
} */
</style>
