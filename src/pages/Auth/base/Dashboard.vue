<script lang="ts" setup>

// import { ref } from "vue";

</script>
<template>
	<!-- <div class="flex">
		<div>
			<h1 class="text-[clamp(1rem,3vw,1.5rem)] font-black leading-[1.1] xl:text-start mb-5">Bienvenido: Irbing Moreno
			</h1>
		</div>
		<div>
			A
		</div>
	</div> -->
	<!-- <h1 class="text-[clamp(1rem,3vw,1.5rem)] font-black leading-[1.1] xl:text-start mb-5">Bienvenido: Irbing Moreno
	</h1> -->
	<div
		class="h-[40vh] lg:h-[40vh] xl:h-[40vh] flex lg:flex-row md:flex-col md:h-auto mx-auto gap-4 container my-10 w-full justify-start items-start">
		<div class="h-full max-h-[300px] w-[60%] lg:w-[60%] sm:w-full  bg-base-100 flex-col pa-2">
			<!-- <p class="leading-normal text-2xl my-8">¿Que Vamos a hacer hoy?</p> -->
			<div class="card bg-base-300 shadow-xl h-full pa-10">
				<!-- <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure> -->
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					
				</div>
			</div>
		</div>
		<div class="w-[100%] md:w-full h-full container flex lg:flex-row sm:flex-col lg:gap-x-3 sm:gap-x-5">
			<div class="card w-full h-full bg-base-300 shadow-xl">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					
				</div>
			</div>
			<div class="card w-full h-full bg-base-300 shadow-xl">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					
				</div>
			</div>
			<div class="card w-full h-full bg-base-300 shadow-xl">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					
				</div>
			</div>
		</div>
	</div>
	<div class="h-[50vh] lg:h-[50vh] xl:h-[50vh] flex lg:flex-row md:flex-col-reverse md:h-auto mx-auto container my-10 w-full justify-center items-start">
		<div class="bg-red-500 w-1/3 md:w-full h-full">
			<p>Que Vamos a hacer hoy</p>
		</div>
		<div class="bg-blue-500 w-1/3 md:w-full h-full">a</div>
	</div>

	<!-- <div v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-[900px]">
						<vue-progress-bar></vue-progress-bar>
					<div class=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<AddHabitToList @closeModal="showModal = $event"></AddHabitToList>
					</div>
				</div>
			</div>
		</div>
	</div> -->
</template>