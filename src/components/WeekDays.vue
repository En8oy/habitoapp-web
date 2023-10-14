<script lang="ts" setup>
import { ref, PropType } from 'vue';
import { Days, DaysWeek } from '../types/Habit';

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

const days = ref<DaysWeek[]>([
	'SUNDAY',
	'MONDAY',
	'TUESDAY',
	'WEDNESDAY',
	'THURSDAY',
	'FRIDAY',
	'SATURDAY',
])

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
		<button v-if="!props.block" :class="isSelected(day) ? 'bg-blue-500' : 'bg-slate-500'" @click.prevent="addOrRemoveDays(day)" class=" px-3 rounded text-white" v-for="day in days">{{day}}</button>
		<div v-if="props.block" :class="isSelected(day) ? 'bg-blue-500' : 'bg-slate-500'" class=" px-3 rounded text-white" v-for="day in days">{{day}}</div>
	</div>
</template>