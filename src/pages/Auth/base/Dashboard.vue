<script lang="ts" setup>

import { getCurrentInstance, ref } from "vue";
import AddHabitToList from "../../../components/AddHabitToList.vue";

const showModal = ref<boolean>(false)

const internalInstance = getCurrentInstance();
//  [App.vue specific] When App.vue is first loaded start the progress bar
internalInstance?.appContext.config.globalProperties.$Progress.start();
console.error("START PROGRESS BAR")
setTimeout(() => {
	internalInstance?.appContext.config.globalProperties.$Progress.pause();
	console.error("FINISH PROGRESS BAR")
}, 1000);

const moveTheProgress = (event:number) => {
	console.log("event move", event)
}

</script>
<template>
	<section class="bg-white border-b py-8">
		<div class="container max-w-screen mx-auto m-8">
			<h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
				Title
			</h2>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Lorem ipsum dolor sit amet
					</h3>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
						ligula.
						<br />
						<br />

						Images from:

						<a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-6">
					<button @click="showModal = true">Add new habit</button>
				</div>
			</div>
		</div>
	</section>


	<div v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[900px]">
						<vue-progress-bar></vue-progress-bar>
					<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<AddHabitToList @closeModal="showModal = $event" @currentStepChange="moveTheProgress($event)"></AddHabitToList>
					</div>
					<!-- <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button type="button"
							class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Next</button>
						<button type="button" @click="showModal = false"
							class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>