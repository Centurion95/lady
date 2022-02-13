<template>
  <div class="wrapper">
    <side-bar :background-color="backgroundColor">
      <template slot="links">
        <sidebar-link
          to="/dashboard"
          :name="$t('sidebar.dashboard')"
          icon="far fa-calendar-check"
        />
        <!-- <sidebar-link to="#" :name="$t('sidebar.examples')" icon='fab fa-vuejs fa-2x'/>
        <sidebar-link to="/examples/user-profile" :name="$t('sidebar.userProfile')" class="ml-5"/>
        <sidebar-link to="/examples/user-management/list-users" :name="$t('sidebar.userManagement')" class="ml-5" /> -->
        <sidebar-link
          to="/estado"
          :name="$t('sidebar.tabla_estado')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/rol"
          :name="$t('sidebar.tabla_rol')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/empresa"
          :name="$t('sidebar.tabla_empresa')"
          icon="tim-icons icon-settings-gear-63"
        />

        <sidebar-link
          to="/usuario"
          :name="$t('sidebar.tabla_usuario')"
          icon="tim-icons icon-settings-gear-63"
        />

        <sidebar-link
          to="/pago_usuario"
          :name="$t('sidebar.tabla_pago_usuario')"
          icon="tim-icons icon-settings-gear-63"
        />

        <sidebar-link
          to="/tipo_documento"
          :name="$t('sidebar.tabla_tipo_documento')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/tipo_ticket"
          :name="$t('sidebar.tabla_tipo_ticket')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/persona"
          :name="$t('sidebar.tabla_persona')"
          icon="tim-icons icon-single-02"
        />

        <sidebar-link
          to="/proveedor"
          :name="$t('sidebar.tabla_proveedor')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/producto"
          :name="$t('sidebar.tabla_producto')"
          icon="fas fa-list"
        />

        <sidebar-link
          to="/cliente"
          :name="$t('sidebar.tabla_cliente')"
          icon="fas fa-list"
        />

        <!-- <sidebar-link
          class="sidebar-normal"
          :to="{ name: 'tabla', params: { nombre_tabla: 'ESTADO' } }"
          name="ESTADOS"
          icon="fas fa-list"
        />
        <sidebar-link
          :to="{ name: 'tabla', params: { nombre_tabla: 'ROL' } }"
          name="ROLES"
          icon="fas fa-list"
        /> -->

        <!-- <sidebar-link
          to="/icons"
          :name="$t('sidebar.icons')"
          icon="tim-icons icon-atom"
        />
        
        <sidebar-link
          to="/notifications"
          :name="$t('sidebar.notifications')"
          icon="tim-icons icon-bell-55"
        />
        <sidebar-link
          to="/profile"
          :name="$t('sidebar.userProfile')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/table-list"
          :name="$t('sidebar.tableList')"
          icon="tim-icons icon-puzzle-10"
        />
        <sidebar-link
          to="/typography"
          :name="$t('sidebar.typography')"
          icon="tim-icons icon-align-center"
        /> -->

        <sidebar-link
          to="/reports"
          :name="$t('sidebar.reports')"
          icon="tim-icons icon-paper"
        />

        <sidebar-link
          to="/graphics"
          :name="$t('sidebar.graphics')"
          icon="tim-icons icon-chart-pie-36"
        />

        <sidebar-link
          to="/about"
          :name="$t('sidebar.about')"
          icon="tim-icons icon-alert-circle-exc"
        />
      </template>
    </side-bar>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<style type="text/css">
.collapse-move {
  transition: transform 0.3s ease-in-out;
}
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import SidebarShare from "./SidebarSharePlugin";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "vue",
      mostrar: false,
    };
  },
  methods: {
    boton: function () {
      if (this.mostrar == true) this.mostrar = false;
      else this.mostrar = true;
    },

    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },

    //rc95 17/08/2021 00:48 - https://www.w3schools.com/w3css/w3css_sidebar.asp (ACCORDION)
    myAccFunc() {
      var x = document.getElementById("demoAcc");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
      } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
          x.previousElementSibling.className.replace(" w3-green", "");
      }
    },
  },
};
</script>
