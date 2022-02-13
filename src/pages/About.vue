<template>
  <div class="card">
    <div class="card-header">
      <h1 slot="header" class="card-title">Acerca de</h1>
      <div class="table-responsive">
        <p>Aqui se observa el historico de cambios del sistema</p>
      </div>
    </div>

    <div class="card-body">
      <p>Versión 1.0.6 - 13/02/2022 11:00</p>
      <ul>
        <li>
          Se agrega el boton exportar_a_excel en: roles, estados y empresas (no
          funciona todavia)
        </li>
        <li>Ya funciona el insertar, modificar y eliminar de:</li>
        <ul>
          <li>estados</li>
          <li>empresas</li>
          <li>tipo_documento</li>
          <li>tipo_ticket</li>
          <li>proveedor</li>
        </ul>
        <li>Creamos los stored_procedures para todas las vistas!</li>
        <ul>
          <li>select</li>
          <li>insert</li>
          <li>update</li>
          <li>delete</li>
        </ul>
      </ul>

      <p>Versión 1.0.5 - 12/02/2022 21:26</p>
      <ul>
        <li>Ya funciona el insertar, modificar y eliminar de: roles</li>
      </ul>

      <p>Versión 1.0.4 - 12/02/2022 20:00</p>
      <ul>
        <li>Se adapta el LOGIN (aún no funciona)</li>
        <li>Se agrega el módulo de reportes (vacío)</li>
        <li>Se agrega el módulo de gráficos (vacío)</li>
        <li>Se agrega el módulo Acerca_de</li>
      </ul>

      <p>Versión 1.0.3 - 16/08/2021 22:26</p>
      <ul>
        <li>Se agregan los modales para ABM en las vistas</li>
        <li>
          Se agregan los botones en el menu principal, para carga rapida de
          cliente y servicio
        </li>
        <li>Se crean la vistas para empresas</li>
      </ul>

      <p>Versión 1.0.2 - 13/08/2021 19:40</p>
      <ul>
        <li>Se crean las primeras tablas, declaradas en el DER</li>
        <li>Se crean las vistas de estados y roles (vacías)</li>
      </ul>

      <p>Versión 1.0.1 - 27/06/2021 18:20</p>
      <ul>
        <li>
          Se agregan las funcionalidades a la api para consultar estados y roles
        </li>
        <li>Ahora la api deja LOG en txt</li>
      </ul>

      <p>Versión 1.0.0 - 03/06/2021 21:18</p>
      <ul>
        <li>Se crea el proyecto (front+api)</li>
      </ul>
    </div>
    <hr color="white" />
    <div class="card-header">
      <h1 slot="header" class="card-title">Desarrollo</h1>
      <div class="table-responsive">
        <p>Rodrigo Centurión - centu95@hotmail.com</p>
        <p>Villa Elisa, Paraguay</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
