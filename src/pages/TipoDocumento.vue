<template>
  <div>
    <modal
      :show.sync="miModalYNVisible"
      id="miModalYN"
      :centered="false"
      :show-close="true"
    >
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <card class="card">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h4 slot="header" class="card-title">ATENCION</h4>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="col-md-12 pr-md-1">
                  ¿Confirma que desea eliminar el registro?
                  <br /><br />
                </div>
              </div>
            </div>

            <div
              class="row"
              style="justify-content: flex-end; margin-right: 10px"
            >
              <base-button
                slot="footer"
                type="info"
                fill
                @click="miModalYNVisible = false"
              >
                NO
              </base-button>
              <base-button
                slot="footer"
                type="danger"
                fill
                @click="confirmarEliminar()"
              >
                ELIMINAR
              </base-button>
            </div>
          </card>
        </div>
      </div>
    </modal>

    <modal
      :show.sync="miModalVisible"
      id="miModal"
      :centered="false"
      :show-close="true"
    >
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <card class="card">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h4 slot="header" class="card-title" v-if="esCrear">
                  Crear registro
                </h4>
                <h4 slot="header" class="card-title" v-if="esModificar">
                  Editar registro
                </h4>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="col-md-12 pr-md-1">
                  <base-input
                    label="ID"
                    placeholder="ID"
                    v-model="txtID"
                    id="txtID"
                    disabled
                  >
                  </base-input>

                  <base-input
                    label="NOMBRE"
                    placeholder="NOMBRE"
                    v-model="txtNOMBRE"
                    id="txtNOMBRE"
                  >
                  </base-input>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6"></div>
              <div class="col-lg-6 col-md-6 text-right">
                <base-button
                  slot="footer"
                  type="success"
                  fill
                  v-if="esModificar"
                  @click="eventoModificarRegistro()"
                >
                  <i class="fas fa-pencil-alt"></i> Modificar
                </base-button>
                <base-button
                  slot="footer"
                  type="info"
                  fill
                  v-if="esCrear"
                  @click="eventoCrearRegistro()"
                >
                  <i class="far fa-save text-white"></i>
                  Crear registro
                </base-button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </modal>

    <div class="row">
      <div class="col-6">
        <card>
          <h4 slot="header" class="card-title">Registros existentes</h4>
          <div class="table-responsive">
            <table class="table tablesorter">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="registro in resultado" :key="registro.ID">
                  <td>
                    {{ registro.ID }}
                  </td>
                  <td>
                    {{ registro.NOMBRE }}
                  </td>
                  <td class="td-actions">
                    <base-button
                      type="link"
                      aria-label="edit button"
                      v-on:click="editarRegistro(registro.ID, registro.NOMBRE)"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </base-button>
                  </td>
                  <td class="td-actions">
                    <base-button
                      type="link"
                      aria-label="edit button"
                      v-on:click="borrarRegistro(registro.ID, registro.NOMBRE)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </base-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <base-button
              slot="footer"
              type="primary"
              fill
              v-on:click="crearRegistro()"
            >
              <i class="fas fa-plus-circle"></i> Crear registro</base-button
            >

            <base-button
              slot="footer"
              type="success"
              fill
              v-on:click="exportarExcel()"
            >
              <i class="tim-icons icon-cloud-download-93"></i> Exportar a
              Excel</base-button
            >
          </div>
        </card>
      </div>

      <div class="col-lg-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Gráfico estadístico</h5>
            <h4 slot="header" class="card-title">
              Cantidad de Registros por categoría
            </h4>
            <h3 class="card-title">
              <i class="fas fa-list text-info"></i>
              {{ lblTotal }}
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              chart-id="blue-bar-chart"
              :chart-data="blueBarChart.chartData"
              :gradient-stops="blueBarChart.gradientStops"
              :extra-options="blueBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import BarChart from "@/components/Charts/BarChart";

import NotificationTemplate from "./Notifications/NotificationTemplate";
import Modal from "@/components/Modal"; //rc95 13/08/2021 20:41

import * as chartConfigs from "@/components/Charts/config";
import config from "@/config";
import BaseInput from "../components/Inputs/BaseInput.vue";

export default {
  components: {
    BarChart,
    Modal,
  },
  data() {
    BaseInput;
    return {
      url: config.api_url + "/traer_tipo_documentos/",
      url_insert: config.api_url + "/crear_tipo_documento/",
      url_update: config.api_url + "/editar_tipo_documento/",
      url_delete: config.api_url + "/eliminar_tipo_documento/",
      resultado: null,

      lblTotal: "6.500 Gs",

      miModalVisible: false,
      miModalYNVisible: false,

      txtID: null,
      txtNOMBRE: null,

      esModificar: null,
      esCrear: null,

      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Cantidad",
              data: [],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  created() {
    this.actualizarPantalla();
  },
  methods: {
    actualizarPantalla() {
      axios
        .get(this.url, "")
        .then((response) => {
          // this.resultado = response.data;
          this.resultado = response.data.tabla; //rc95 13/08/2021 20:26
          // console.log(response.data);

          //rc95 13/08/2021 20:16
          this.blueBarChart = {
            extraOptions: chartConfigs.barChartOptions,
            chartData: {
              labels: response.data.titulos,
              datasets: [
                {
                  label: "Cantidad",
                  fill: true,
                  borderColor: config.colors.info,
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  data: response.data.cantidades,
                },
              ],
            },
            gradientColors: config.colors.primaryGradient,
            gradientStops: [1, 0.4, 0],
          };
          this.lblTotal = response.data.total;
        })
        .catch((e) => {
          alert(e);
        });
    },

    editarRegistro(ID_REGISTRO, NOMBRE_REGISTRO) {
      this.esModificar = true;
      this.esCrear = false;

      this.txtID = ID_REGISTRO;
      this.txtNOMBRE = NOMBRE_REGISTRO;

      this.miModalVisible = true;
    },

    crearRegistro() {
      this.esModificar = false;
      this.esCrear = true;

      this.txtID = null;
      this.txtNOMBRE = null;

      this.miModalVisible = true;
    },

    //rc95 13/02/2022 10:48
    exportarExcel() {
      alert("generar excel");
    },

    eventoCrearRegistro() {
      try {
        axios
          .get(this.url_insert, {
            params: { nombre: this.txtNOMBRE },
          })
          .then((response) => {
            this.notifyVue("Se ha creado el registro", "info");
            this.miModalVisible = false;

            this.actualizarPantalla();
          })
          .catch((e) => {
            alert(e);
            this.notifyVue("Ocurrió un error", "danger");
          });
      } catch (e) {
        alert(e);
        this.notifyVue("Ocurrió un error", "danger");
      }
    },

    eventoModificarRegistro() {
      try {
        axios
          .get(this.url_update, {
            params: { id_registro: this.txtID, nombre: this.txtNOMBRE },
          })
          .then((response) => {
            this.notifyVue("Se ha modificado el registro", "info");
            this.miModalVisible = false;

            this.actualizarPantalla();
          })
          .catch((e) => {
            alert(e);
            this.notifyVue("Ocurrió un error", "danger");
          });
      } catch (e) {
        alert(e);
        this.notifyVue("Ocurrió un error", "danger");
      }
    },

    borrarRegistro(ID_REGISTRO, NOMBRE_REGISTRO) {
      this.miModalYNVisible = true;
      this.txtID = ID_REGISTRO; //rc95 12/02/2022 21:04
    },

    confirmarEliminar() {
      try {
        axios
          .get(this.url_delete, {
            params: { id_registro: this.txtID },
          })
          .then((response) => {
            this.notifyVue("Se ha eliminado el registro", "info");
            this.miModalYNVisible = false;

            this.actualizarPantalla();
          })
          .catch((e) => {
            alert(e);
            this.notifyVue("Ocurrió un error", "danger");
          });
      } catch (e) {
        alert(e);
        this.notifyVue("Ocurrió un error", "danger");
      }
    },

    //rc95 16/08/2021 22:26
    notifyVue(texto, tipo) {
      //type: ["", "info", "success", "warning", "danger"],
      this.$notify({
        component: NotificationTemplate,
        icon: "tim-icons icon-alert-circle-exc",
        horizontalAlign: "right",
        verticalAlign: "top",
        type: tipo,
        timeout: 0,
        message: texto,
        timeout: 2500,
      });
    },
  },
};
</script>
<style>
</style>
