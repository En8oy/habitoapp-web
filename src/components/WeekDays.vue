<script lang="ts" setup>
import { PropType } from 'vue';
import { Days } from '../types/models/Habit';
import { useHabitConst } from '../composables/useHabitConst';

const { cDays } = useHabitConst()

const props = defineProps({
	block: {
		type: Boolean as PropType<boolean>,
		default: false,
	},
	modelValue: {
		type: Array as PropType<Days[]>,
		default : []
	}
});

// const days = ref<DaysWeek[]>([
// 	'SUNDAY',
// 	'MONDAY',
// 	'TUESDAY',
// 	'WEDNESDAY',
// 	'THURSDAY',
// 	'FRIDAY',
// 	'SATURDAY',
// ])

const addOrRemoveDays = ((day: Days) => {
	if (props.block) return
	if (props.modelValue.includes(day)) {

		if(props.modelValue.length == 1) return 

		let index = props.modelValue.indexOf(day)
		props.modelValue.splice(index, 1)
		return
	}
	props.modelValue.push(day)

	emit('update:model-value', props.modelValue)	
})

const isSelected = ((day:Days) => {
	return props.modelValue.includes(day)
})

const emit = defineEmits<{
	(e: 'update:model-value', value: Days[]): void
}>()

</script>

<template>
	<div class="flex justify-between items-center">
		<button v-if="!props.block" :class="isSelected(day.value) ? 'bg-gray-600 text-white' : 'bg-white text-slate-600 border-2'" @click.prevent="addOrRemoveDays(day.value)" class="px-3 rounded  w-full mx-2 h-10" v-for="day in cDays">{{day.label}}</button>
		<button disabled v-if="props.block" :class="isSelected(day.value) ? 'bg-gray-600 text-white' : 'bg-white text-slate-600 border-2'" class="px-3 rounded w-full mx-2 h-10" v-for="day in cDays">{{day.label}}</button>
	</div>
</template>