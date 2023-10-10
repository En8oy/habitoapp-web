<script lang="ts" setup>
import { ref } from 'vue'
import { Days, Habit, Periods } from '../types/Habit';
import { useCategory } from '../store/Category';
import Period from './Period.vue';
import AddCustomMessages from './AddCustomMessages.vue';



const {categories} = useCategory()

const newHabit = ref<Habit>({
	id: '',
	category_id: '',
	user_id: '',
	user: null,
	priority:'MEDIUM',
	type: 'POSITIVE',
	name: '',
	description: '',
	success_message: '',
	failure_message: '',
	random_message: true,
	period: null,
	days : [],
	start_time: '',
	end_time : '',
})

const newPeriod = (value: { period: Periods, days: Days[] }) => {
	newHabit.value.period = value.period
	newHabit.value.days = value.days
}

</script>

<template>
	<form>
		<p>Basic info</p>
		<input type="text" class="border-solid border-2 border-sky-500 p-2 m-4" v-model="newHabit.name" placeholder="Habit Name">
		<input type="text" class="border-solid border-2 border-sky-500 p-2 m-4 " v-model="newHabit.description">
		<select v-model="newHabit.category_id" class="border-solid border-2 border-sky-500 p-2 m-4 ">
			<option v-for="cat in categories" :key="cat.id" :value="cat.id">{{cat.name}}</option>
		</select>
		<input type="date" class="border-solid border-2 border-sky-500 p-2 m-4" v-model="newHabit.name"/>
		<p>Period</p>
		<Period @setPeriod="newPeriod($event)"></Period>
		<p>custom messages</p>
		<AddCustomMessages></AddCustomMessages>

	</form>
</template>