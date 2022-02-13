<template>
  <div>
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
              <div class="col-lg-12 col-md-6">
                <h4 slot="header" class="card-title">
                  Vamos a registrar un nuevo servicio!
                </h4>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="col-md-12 pr-md-1">
                  <!-- <base-input
                    label="CLIENTE"
                    placeholder="CLIENTE"
                    v-model="txtCLIENTE"
                    id="txtCLIENTE"
                  >
                  
                  </base-input> -->
                  <label class="control-label"> CLIENTE </label>
                  <div class="form-group input-group">
                    <span class="input-group-prepend"
                      ><div class="input-group-text">
                        <i class="tim-icons icon-single-02"></i></div
                    ></span>
                    <input
                      placeholder="CLIENTE"
                      v-model="txtCLIENTE"
                      id="txtCLIENTE"
                      aria-describedby="addon-right addon-left"
                      class="form-control"
                    />
                  </div>

                  <!-- <base-input
                    label="PRODUCTO / SERVICIO"
                    placeholder="SERVICIO"
                    v-model="txtSERVICIO"
                    id="txtSERVICIO"
                  >
                  </base-input> -->

                  <label class="control-label"> PRODUCTO / SERVICIO </label>
                  <div class="form-group input-group">
                    <span class="input-group-prepend"
                      ><div class="input-group-text">
                        <i class="tim-icons icon-cart"></i></div
                    ></span>
                    <input
                      placeholder="SERVICIO"
                      v-model="txtSERVICIO"
                      id="txtSERVICIO"
                      aria-describedby="addon-right addon-left"
                      class="form-control"
                    />
                  </div>

                  <base-input
                    label="CANTIDAD"
                    placeholder="CANTIDAD"
                    v-model="txtCANTIDAD"
                    id="txtCANTIDAD"
                  >
                  </base-input>

                  <base-button
                    type="primary"
                    fill
                    @click="eventoCrearRegistro()"
                  >
                    <i class="fas fa-plus-circle"></i> Agregar
                  </base-button>

                  <div class="row">
                    <div class="col-12">
                      <card>
                        <h4 slot="header" class="card-title">
                          Registros cargados:
                        </h4>
                        <div class="table-responsive">
                          <table class="table tablesorter">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <th>Producto 1</th>
                                <th>1.500</th>
                                <th>1</th>
                                <th>1.500</th>
                              </tr>
                              <tr>
                                <th>2</th>
                                <th>Producto 2</th>
                                <th>2.500</th>
                                <th>7</th>
                                <th>17.500</th>
                              </tr>
                              <tr>
                                <th>3</th>
                                <th>Producto 3</th>
                                <th>28.200</th>
                                <th>3</th>
                                <th>84.600</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </card>
                    </div>
                  </div>

                  <base-input
                    label="TOTAL"
                    placeholder="TOTAL"
                    v-model="txtTOTAL"
                    id="txtTOTAL"
                    disabled
                  >
                  </base-input>

                  <base-input
                    label="PROXIMA CITA"
                    placeholder="dd/mm/aaaa hh:mm"
                    v-model="txtPROXIMA_CITA"
                    id="txtPROXIMA_CITA"
                  >
                  </base-input>

                  <!-- <base-input
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
                  </base-input> -->
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6"></div>
              <div class="col-lg-6 col-md-6 text-right">
                <base-button
                  slot="footer"
                  type="info"
                  fill
                  color="#2dce89"
                  v-if="esModificar"
                  @click="eventoModificarRegistro()"
                >
                  <i class="tim-icons icon-pencil"></i> Modificar
                </base-button>
                <base-button
                  slot="footer"
                  type="info"
                  fill
                  color="#2dce89"
                  v-if="esCrear"
                  @click="eventoCrearRegistro()"
                >
                  <i class="far fa-save text-white"></i> Crear registro
                </base-button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </modal>

    <modal
      :show.sync="miModal2Visible"
      id="miModal2"
      :centered="false"
      :show-close="true"
    >
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <card class="card">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <h4 slot="header" class="card-title">
                  Vamos a registrar un nuevo cliente!
                </h4>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="col-md-12 pr-md-1">
                  <base-input
                    label="NOMBRE"
                    placeholder="NOMBRE"
                    v-model="txtNOMBRE"
                    id="txtNOMBRE"
                  >
                  </base-input>

                  <base-input
                    label="FECHA NACIMIENTO"
                    placeholder="dd/mm/aaaa"
                    v-model="txtFECHA_NACIMIENTO"
                    id="txtFECHA_NACIMIENTO"
                  >
                  </base-input>

                  <base-input label="SEXO">
                    <div class="form-check form-check-radio mb-3">
                      <label for="Hombre" class="form-check-label"
                        ><input
                          id="Hombre"
                          type="radio"
                          value="Hombre"
                          name="grp_sexo"
                          class="form-check-input" />
                        Hombre
                        <span class="form-check-sign"></span
                      ></label>
                      &nbsp;
                      <label for="Mujer" class="form-check-label"
                        ><input
                          id="Mujer"
                          type="radio"
                          value="Mujer"
                          name="grp_sexo"
                          class="form-check-input" />
                        Mujer
                        <span class="form-check-sign"></span
                      ></label>
                    </div>
                     
                  </base-input>

                  <base-input
                    label="WHATSAPP / NRO CELULAR"
                    placeholder="09XX XXX XXX"
                    v-model="txtWHATSAPP"
                    id="txtWHATSAPP"
                  >
                  </base-input>

                  <div class="form-check mb-3">
                    <label for="publicidad" class="form-check-label"
                      ><input
                        id="publicidad"
                        type="checkbox"
                        class="form-check-input"
                        checked
                      />
                      <span class="form-check-sign"></span>
                      Recibir promociones
                    </label>
                  </div>

                  <base-button
                    slot="footer"
                    type="primary"
                    fill
                    v-if="esCrear"
                    @click="eventoCargarFoto()"
                  >
                    <i class="fas fa-camera"></i> Agregar foto
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6"></div>
              <div class="col-lg-6 col-md-6 text-right">
                <base-button
                  slot="footer"
                  type="info"
                  fill
                  color="#2dce89"
                  v-if="esModificar"
                  @click="eventoModificarRegistro()"
                >
                  <i class="tim-icons icon-pencil"></i> Modificar
                </base-button>
                <base-button
                  slot="footer"
                  type="info"
                  fill
                  color="#2dce89"
                  v-if="esCrear"
                  @click="eventoCrearRegistro2()"
                >
                  <i class="far fa-save text-white"></i> Crear registro
                </base-button>
              </div>
            </div>
          </card>
        </div>
      </div>
    </modal>

    <base-button slot="footer" type="primary" fill v-on:click="crearRegistro()"
      ><i class="fas fa-plus-circle"></i> Registrar Servicio!
    </base-button>

    <base-button slot="footer" type="info" fill v-on:click="crearCliente()"
      ><i class="fas fa-plus-circle"></i> Registrar Cliente
    </base-button>

    <div class="row">
      <div class="col-12">
        <card type="chart">
          <div
            class="btn-group btn-group-toggle"
            :class="isRTL ? 'float-left' : 'float-right'"
            data-toggle="buttons"
          >
            <label
              id="h_tab1"
              class="tablinks btn btn-sm btn-primary btn-simple active"
              @click="openCity('h_tab1', 'tab1')"
            >
              <input type="radio" name="options" autocomplete="off" />
              Hoy
            </label>
            <label
              id="h_tab2"
              class="tablinks btn btn-sm btn-primary btn-simple"
              @click="openCity('h_tab2', 'tab2')"
            >
              <input type="radio" name="options" autocomplete="off" />
              Ésta semana
            </label>
            <label
              id="h_tab3"
              class="tablinks btn btn-sm btn-primary btn-simple"
              @click="openCity('h_tab3', 'tab3')"
            >
              <input type="radio" name="options" autocomplete="off" />
              Éste mes
            </label>
          </div>
          <!-- Tab links -->
          <!-- <div class="tab">
            <button
              id="h_tab1"
              class="tablinks"
              @click="openCity('h_tab1', 'tab1')"
            >
              Hoy
            </button>
            <button
              id="h_tab2"
              class="tablinks"
              @click="openCity('h_tab2', 'tab2')"
            >
              Ésta semana
            </button>
            <button
              id="h_tab3"
              class="tablinks"
              @click="openCity('h_tab3', 'tab3')"
            >
              Éste mes
            </button>
          </div> -->

          <!-- Tab content -->
          <div id="tab1" class="tabcontent" style="display: block">
            <h3>Hoy</h3>
            <p>No hay citas para hoy!</p>
          </div>

          <div id="tab2" class="tabcontent">
            <h3>Ésta semana</h3>
            <p>No hay citas para ésta semana!</p>
          </div>

          <div id="tab3" class="tabcontent">
            <h3>Éste mes</h3>
            <p>No hay citas para éste mes!</p>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import NotificationTemplate from "./Notifications/NotificationTemplate";
import Modal from "@/components/Modal"; //rc95 13/08/2021 21:56
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./Dashboard/TaskList";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";

export default {
  components: {
    LineChart,
    BarChart,
    TaskList,
    UserTable,
    Modal,
  },
  data() {
    return {
      miModalVisible: false,
      miModal2Visible: false,

      txtID: null,
      txtNOMBRE: null,

      txtCLIENTE: null,
      txtPRODUCTO: null,
      txtCANTIDAD: null,
      txtSERVICIO: null,
      txtTOTAL: null,
      txtPROXIMA_CITA: null,

      txtFECHA_NACIMIENTO: null,
      txtWHATSAPP: null,

      esModificar: null,
      esCrear: null,

      bigLineChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [{}],
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
  methods: {
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

    crearCliente() {
      this.esModificar = false;
      this.esCrear = true;

      this.txtID = null;
      this.txtNOMBRE = null;

      this.miModal2Visible = true;
    },

    eventoCrearRegistro() {
      this.notifyVue("Se ha registrado el servicio", "info");

      this.miModalVisible = false;
      //to-do: aqui refrescar la vista
    },

    eventoCrearRegistro2() {
      this.notifyVue("Se ha creado el cliente", "info");

      this.miModal2Visible = false;
      //to-do: aqui refrescar la vista
    },

    eventoCargarFoto() {
      alert("to-do: funcion para cargar foto");

      //to-do
    },

    eventoModificarRegistro() {
      alert("modificado: " + this.txtNOMBRE);

      this.miModalVisible = false;
      //to-do: aqui refrescar la vista
    },

    borrarRegistro(ID_REGISTRO, NOMBRE_REGISTRO) {
      if (
        confirm(
          "¿Confirma que desea eliminar el registro: " + NOMBRE_REGISTRO + "?"
        )
      ) {
        // alert("hecho");
        //to-do: aqui refrescar la vista
      }
    },

    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      };
      // this.$refs.bigChart.updateGradients(chartData);
      // this.bigLineChart.chartData = chartData;
      // this.bigLineChart.activeIndex = index;
    },

    //rc95 16/08/2021 21:08 - https://www.w3schools.com/howto/howto_js_tabs.asp
    openCity(headerName, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      document.getElementById(headerName).className += " active";
      // evt.currentTarget.className += " active";
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
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    this.initBigChart(0);
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = "en";
      this.$rtl.disableRTL();
    }
  },
};
</script>
<style>
/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  /* border: 1px solid #ccc; */
  border-top: none;
}
</style>
