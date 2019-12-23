<template>
  <div id="app">
    <div>
      <router-link to="/form">form</router-link> |
      <router-link to="/list">list</router-link> |
      <router-link to="/nofound">nofound</router-link>
    </div>
    <router-view/>
  </div>
</template>