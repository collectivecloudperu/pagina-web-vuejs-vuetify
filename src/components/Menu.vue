<template>
  <v-card
    dark
  >
    <v-toolbar>
    
      <v-app-bar-nav-icon 
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title 
        :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}">
        Mi Proyecto
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn to="/" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/' }" v-show="$vuetify.breakpoint.lgOnly"> 
          Home 
        </v-btn>

        <v-btn to="/nosotros" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/nosotros' }" v-show="$vuetify.breakpoint.lgOnly">
          Nosotros
        </v-btn>

        <v-btn to="/servicios" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/servicios' }" v-show="$vuetify.breakpoint.lgOnly"> 
          Servicios
        </v-btn>

        <v-btn to="/contacto" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/contacto' }" v-show="$vuetify.breakpoint.lgOnly"> 
            Contacto 
        </v-btn> 

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"            
        >
          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/" class="flm">Home</router-link>
            </v-list-item-title>
          </v-list-item>
  
          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/nosotros' }">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/nosotros" class="flm">Nosotros</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/servicios' }">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/servicios" class="flm">Servicios</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-bind:class="{ 'bg-active': $route.path == '/contacto' }">
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/contacto" class="flm">Contacto</router-link>
            </v-list-item-title>
          </v-list-item>
  
        </v-list-item-group>
      </v-list>        
    </v-navigation-drawer>

  </v-card>
</template>  

<script>
  export default {
    name: 'Menu',

    data: () => ({
      drawer: false,
      group: null,      
      items: [
        { title: 'Misión' },
        { title: 'Objetivo' },
        { title: 'Visión' },        
      ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),

    methods: {
      menuItems() {
        return this.menu;
      }
    }

  }
</script> 

<style scope>

  .bgsel:hover {
    background: #afaeae;
  }

  .flm:link {
    text-decoration: none;
  }

  .v-application a {
    color: #ffffff!important;
  } 
  
  .bg-active {
    background-color: #272727;
  }
</style>