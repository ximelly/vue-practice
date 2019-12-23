<template>
  <div id="app">
    <div>
      <router-link to="/form">form</router-link> |
      <router-link to="/list">list</router-link> |
      <router-link to="/lifeCycle">lifeCycle</router-link> |
      <router-link to="/addRouters">addRouters</router-link> |
      <router-link to="/add">add</router-link> |
      <router-link to="/nofound">nofound</router-link>
    </div>
    <router-view/>
  </div>
</template>