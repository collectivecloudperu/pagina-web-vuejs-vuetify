<template>

  <v-app>

    <v-main>  

      <Menu/>    

        <SobreNosotros/>

        <InformacionAdicional/> 

        <Newsletter/> 

        <router-view> 

          <v-content>
            

          </v-content>      

        </router-view>     

      <Footer/>        

    </v-main>

  </v-app>

</template>

<script>
	
	import Menu from './Menu';
	import Footer from './Footer';
	import SobreNosotros from './Nosotros/SobreNosotros';
	import InformacionAdicional from './Nosotros/InformacionAdicional'; 
	import Newsletter from './Home/Newsletter'; 

	export default {
		name: 'Nosotros',

		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Nosotros - Mi Proyecto';
				}
			},
		},

		components: {
			Menu,
			Footer,
			SobreNosotros,
			InformacionAdicional, 
			Newsletter, 
		},

	} 

</script> 

<style scoped>
	/**/
</style>