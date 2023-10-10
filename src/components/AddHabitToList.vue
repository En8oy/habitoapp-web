<script lang="ts" setup>
import { ref } from 'vue'
import { Habit } from '../types/Habit';
import { category } from '../store/Category';


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

</script>

<template>
	<form>
		<input type="text" class="optional:border-gray-300" v-model="newHabit.name" placeholder="Habit Name">
		<input type="text" class="optional:border-gray-300" v-model="newHabit.description">
		<select v-model="newHabit.category_id">
			<option v-for="cat in category" :key="cat.id" :value="cat.id">{{cat.name}}</option>
		</select>
	</form>
</template>