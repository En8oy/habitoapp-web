<script lang="ts" setup>

import { getCurrentInstance, ref } from "vue";
import AddHabitToList from "../../../components/AddHabitToList.vue";

const showModal = ref<boolean>(false)

</script>
<template>
	<div
		class="h-[50vh] sm:h-[50vhvh] md:h-[50vhvh] lg:h-[50vh] xl:h-[50vh] flex lg:flex-row sm:flex-col-reverse mx-auto items-center justify-between container mt-10">
		<div class="w-1/3 md:w-full h-full mx-2 bg-base-100 py-5">
			<h1 class="text-[clamp(1rem,3vw,2rem)] font-black leading-[1.1] xl:text-start">Bienvenido: Irbing Moreno
			</h1>
			<!-- <p class="leading-normal text-2xl my-8">¿Que Vamos a hacer hoy?</p> -->
			<div class="card w-full h-[30vh] bg-base-300 shadow-xl">
				<!-- <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure> -->
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					<div class="card-actions justify-end">
						<button class="btn btn-ghost text-primary outline">Cambiar</button>
					</div>
				</div>
			</div>
		</div>
		<div class="w-2/3 md:w-full h-full container flex mx-2">
			<div class="card w-full h-full bg-base-300 shadow-xl">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					<div class="card-actions justify-end">
						<button class="btn btn-ghost text-primary outline">Cambiar</button>
					</div>
				</div>
			</div>
			<div class="card w-full h-full bg-base-300 shadow-xl mx-2">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					<div class="card-actions justify-end">
						<button class="btn btn-ghost text-primary outline">Cambiar</button>
					</div>
				</div>
			</div>
			<div class="card w-full h-full bg-base-300 shadow-xl mx-2">
				<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Rutina Activada</h2>
					<p>Nomber de la rutina</p>
					<div class="card-actions justify-end">
						<button class="btn btn-ghost text-primary outline">Cambiar</button>
					</div>
				</div>
			</div>
		</div>

	</div>
	<div class="flex flex-row w-full lg:flex-row sm:flex-col h-[50vh] justify-between items-center">
		<div class="bg-red-500 w-1/3 md:w-full h-full">
			<p>Que Vamos a hacer hoy</p>
		</div>
		<div class="bg-blue-500 w-1/3 md:w-full h-full">a</div>
		<div class="bg-pink-500 w-1/3 md:w-full h-full">as</div>
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