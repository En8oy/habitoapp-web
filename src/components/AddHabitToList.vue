<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { Days, Habit, Periods } from '../types/models/Habit';
import { useCategory } from '../store/Category';
import Period from './Period.vue';
import AddCustomMessages from './AddCustomMessages.vue';
import { useHabitConst } from '../composables/useHabitConst';

const { cTypes, cPriorities } = useHabitConst()
const { categories } = useCategory()

const newHabit = ref<Habit>({
	id: '',
	category_id: null,
	user_id: '',
	user: null,
	priority: null,
	type: null,
	name: '',
	description: '',
	success_message: '',
	failure_message: '',
	random_message: true,
	period: null,
	days: [],
	start_time: '',
	end_time: '',
})

const newPeriod = (value: { period: Periods, days: Days[] }) => {
	newHabit.value.period = value.period
	newHabit.value.days = value.days
}

const setCustomMessages = ((event: {
	random_message: boolean,
	success_message: string,
	failure_message: string
}) => {
	newHabit.value.random_message = event.random_message
	newHabit.value.success_message = event.success_message
	newHabit.value.failure_message = event.failure_message
})

const currentStep = ref<number>(1)

watch(currentStep, (value) => {
	emit('currentStepChange', value)
})

const nextStep = computed<number>(() => {

	if (newHabit.value.random_message == false || (newHabit.value.random_message == true && newHabit.value.success_message != '' && newHabit.value.failure_message != '')) {
		return 6
	}

	if (newHabit.value.start_time != '' && newHabit.value.end_time != '') {
		return 5
	}

	if (newHabit.value.period != null && newHabit.value.days.length) {
		return 4
	}

	if (newHabit.value.priority != null && newHabit.value.type != null && newHabit.value.category_id != null) {
		return 3
	}

	if (newHabit.value.name != '' && newHabit.value.description != '') {
		return 2
	}

	return 1

})

const emit = defineEmits<{
	(e: 'closeModal', value: boolean): void,
	(e: 'currentStepChange', value: number): void
}>()

const showModal = ((value: boolean) => {
	emit('closeModal', value)
})

</script>

<template>
	<form>
		<p class="text-2xl text-slate-600">Vamos a configurar tu habito, ¿Que es tu habito?</p>
		<div v-if="currentStep == 1" class="flex flex-col justify-center items-start w-full my-4">
			<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
				Habit name
			</label>
			<input type="text" class="border-solid border-2 p-2 my-2 rounded w-full" v-model="newHabit.name"
				placeholder="Habit Name" id="habitname">
			<label class="block text-slate-600 text-sm font-bold w-full" for="description">
				Description
			</label>
			<input id="description" type="text" placeholder="Description" class="border-solid border-2 p-2 my-2 rounded w-full"
				v-model="newHabit.description">
		</div>

		<div v-if="currentStep == 2" class="flex flex-col justify-center items-start w-full my-4">
			<div class="flex justify-around items-center w-full">
				<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
					Priority
				</label>
				<button :class="(priority.value == newHabit.priority) ? 'bg-slate-600 text-white' : 'bg-white text-gray-600'"
					class="mt-3 mx-2 inline-flex justify-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset w-48 h-10"
					v-for="priority in cPriorities" :key="priority.label" @click.prevent="newHabit.priority = priority.value">{{
						priority.label }}</button>
			</div>
			<div class="flex justify-around items-center w-full">
				<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
					Type
				</label>
				<button :class="(iType.value == newHabit.type) ? 'bg-slate-600 text-white' : 'bg-white text-gray-600'"
					class="mt-3 mx-2 inline-flex justify-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset w-48 h-10"
					v-for="iType in cTypes" :key="iType.label" @click.prevent="newHabit.type = iType.value">{{ iType.label
					}}</button>
			</div>
			<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
				Category
			</label>
			<select placeholder="Category" v-model="newHabit.category_id" class="border-solid border-2 p-2 my-2 rounded w-full">
				<option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
			</select>
		</div>

		<div class="flex flex-col justify-center items-start w-full my-4" v-if="currentStep == 3">
			<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
				Period
			</label>
			<Period @setPeriod="newPeriod($event)"></Period>
		</div>

		<div v-if="currentStep == 4">
			<div class="flex justify-around items-center">
				<input type="time" class="border-solid border-2 p-2 m-4 rounded w-full" v-model="newHabit.start_time" />
				<input type="time" class="border-solid border-2 p-2 m-4 rounded w-full" v-model="newHabit.end_time" />
			</div>
		</div>

		<div v-if="currentStep == 5">
			<AddCustomMessages @setCustomMessages="setCustomMessages($event)"></AddCustomMessages>
		</div>

		<div>
			<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button type="button" :disabled="(currentStep == nextStep) ? true : false" @click="currentStep = currentStep + 1"
					class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Next</button>
				<button v-if="currentStep != 1" type="button" @click="currentStep = currentStep - 1"
					class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Preview</button>
				<button type="button" @click="showModal(false)"
					class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button>
			</div>
		</div>
	</form>
</template>