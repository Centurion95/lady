<template>
  <div>
    <div class="container">
      <div class="header-body text-center">
        <div class="row justify-content-center">
          <div class="text-center" style="margin-bottom: 5px">
            <h1 class="text-login">Bienvenido a Lady!!</h1>
            <p class="text-lead text-login">
              Un sistema de agendamiento y ficha de cliente.
            </p>
          </div>
          <!-- <div class="text-login">
            <h3 class="text-login"><strong>You can log in with:</strong></h3>
            <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-lg-4 col-md-6 mt-3 ml-auto mr-auto">
        <form @submit.prevent="handleSubmit()">
          <card class="card-login card-white">
            <template slot="header">
              <img src="/img/card-primary.png" alt="" />
              <h1 class="card-title">Login</h1>
            </template>

            <div>
              <base-input
                required
                v-model="email"
                type="email"
                placeholder="Correo"
                addon-left-icon="tim-icons icon-email-85"
              >
              </base-input>
              <validation-error :errors="apiValidationErrors.email" />

              <base-input
                required
                v-model="password"
                placeholder="Contraseña"
                addon-left-icon="tim-icons icon-lock-circle"
                type="password"
              >
              </base-input>
              <validation-error :errors="apiValidationErrors.password" />
            </div>

            <div slot="footer">
              <base-button
                native-type="submit"
                type="primary"
                class="mb-3"
                size="lg"
                block
              >
                Ingresar
              </base-button>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/register">
                    Crear una cuenta
                  </router-link>
                </h6>
              </div>

              <div class="pull-right">
                <h6>
                  <a href="/password/reset" class="link footer-link"
                    >Olvidó su contraseña?</a
                  >
                </h6>
              </div>
            </div>
          </card>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"; //rc95 12/02/2022 17:01 - estamos reemplazando el login original por el artesanal.
import config from "@/config";

import formMixin from "@/mixins/form-mixin";
import ValidationError from "@/components/ValidationError.vue";

export default {
  mixins: [formMixin],
  components: {
    ValidationError,
  },
  data() {
    return {
      url: config.api_url + "/comprobar_login/",
      resultado: null,

      // email: "admin@jsonapi.com",
      // password: "secret",
      
      email: "admin@admin.com",
      password: "admin",

      subscribe: true,
    };
  },
  methods: {
    /*async*/ handleSubmit() {
      // const user = {
      //   data: {
      //     type: "token",
      //     attributes: {
      //       email: this.email,
      //       password: this.password,
      //     },
      //   },
      // };

      // const requestOptions = {
      //   headers: {
      //     Accept: "application/vnd.api+json",
      //     "Content-Type": "application/vnd.api+json",
      //   },
      // };

      try {
        //rc95 12/02/2022 17:01 - estamos reemplazando el login original por el artesanal.
        //await this.$store.dispatch("login", { user, requestOptions });
        axios
          .get(this.url, {
            params: { email: this.email, 
            password: this.password },
          })
          .then((response) => {
            // this.resultado = response.data;
            //this.resultado = response.data.tabla; //rc95 13/08/2021 20:26
            console.log(response.data);
            console.log(response.data.id);
            console.log(response.data.nombre);
            console.log(response.data.correo);
          })
          .catch((e) => {
            alert(e);
            this.$notify({
              message: "Invalid credentials!",
              icon: "tim-icons icon-bell-55",
              type: "danger",
            });
            this.setApiValidation(e.response.data.errors);
          });
        //rc95 12/02/2022 17:01 - hasta aqui..
      } catch (e) {
        this.$notify({
          message: "Invalid credentials!",
          icon: "tim-icons icon-bell-55",
          type: "danger",
        });
        this.setApiValidation(e.response.data.errors);
      }
    },
  },
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
