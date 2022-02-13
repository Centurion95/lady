// import Vue from 'vue';
// import Router from 'vue-router';

// import DashboardLayout from '../layout/starter/SampleLayout.vue';
// import Starter from '../layout/starter/SamplePage.vue';

// rc95 05/06/2021 12:47
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';
import Starter from '@/pages/Dashboard.vue';

const Dashboard_bkp = () => import(/* webpackChunkName: "common" */ "@/pages/Dashboard_bkp.vue");

const Estado = () => import(/* webpackChunkName: "common" */ "@/pages/Estado.vue");
const Rol = () => import(/* webpackChunkName: "common" */ "@/pages/Rol.vue");
const Empresa = () => import(/* webpackChunkName: "common" */ "@/pages/Empresa.vue");
const Tabla = () => import(/* webpackChunkName: "common" */ "@/pages/Tabla.vue");
const About = () => import(/* webpackChunkName: "common" */ "@/pages/About.vue");
const Reports = () => import(/* webpackChunkName: "common" */ "@/pages/Reports.vue");
const Graphics = () => import(/* webpackChunkName: "common" */ "@/pages/Graphics.vue");
const TipoDocumento = () => import(/* webpackChunkName: "common" */ "@/pages/TipoDocumento.vue");
const TipoTicket = () => import(/* webpackChunkName: "common" */ "@/pages/TipoTicket.vue");
const Proveedor = () => import(/* webpackChunkName: "common" */ "@/pages/Proveedor.vue");
const Persona = () => import(/* webpackChunkName: "common" */ "@/pages/Persona.vue");

const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Vue.use(Router);

// export default new Router({
  const routes = [
  // routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          components: { default: Starter }
        },
        {
          path: "dashboard_bkp",
          name: "dashboard_bkp",
          component: Dashboard_bkp
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "notifications",
          name: "notifications",
          component: Notifications
        },
        {
          path: "icons",
          name: "icons",
          component: Icons
        },
        {
          path: "estado",
          name: "estado",
          component: Estado
        },
        {
          path: "rol",
          name: "rol",
          component: Rol
        },
        {
          path: "empresa",
          name: "empresa",
          component: Empresa
        },
        {
          path: "tabla",
          name: "tabla",
          component: Tabla
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "reports",
          name: "reports",
          component: Reports
        },
        {
          path: "graphics",
          name: "graphics",
          component: Graphics
        },
        {
          path: "tipo_documento",
          name: "tipo_documento",
          component: TipoDocumento
        },
        {
          path: "tipo_ticket",
          name: "tipo_ticket",
          component: TipoTicket
        },
        {
          path: "proveedor",
          name: "proveedor",
          component: Proveedor
        },
        {
          path: "persona",
          name: "persona",
          component: Persona
        },
        {
          path: "maps",
          name: "maps",
          component: Maps
        },
        {
          path: "typography",
          name: "typography",
          component: Typography
        },
        {
          path: "table-list",
          name: "table-list",
          component: TableList
        }
      ]
    },
    { path: "*", component: NotFound },
  ]
// });
;



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;