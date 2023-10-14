<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { Days } from '../types/Habit';

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

const addOrRemoveDays = ((day: Days) => {
	if (props.block) return

	if (day == 1) day = 'FIRST_DAY_OF_MONTH'

	if(day == 31) day = 'LAST_DAY_OF_MONTH'
	
	if (props.modelValue.includes(day)) {
		if(props.modelValue.length == 1) return 
		let index = props.modelValue.indexOf(day)
		props.modelValue.splice(index, 1)
		return
	}
	props.modelValue.push(day)

	emit('update:model-value', props.modelValue)	
})

const isSelected = ((day: Days) => {
	if (day == 1) day = 'FIRST_DAY_OF_MONTH'
	if(day == 31) day = 'LAST_DAY_OF_MONTH'	
	return props.modelValue.includes(day)
})

const emit = defineEmits<{
	(e: 'update:model-value', value: Days[]): void
}>()

const numberOfDayForMONTH = computed(() => {
	return 31
})

</script>

<template>
	<div class="flex justify-between items-center">
		<button v-if="!props.block" :class="isSelected(day) ? 'bg-blue-500' : 'bg-slate-500'" @click.prevent="addOrRemoveDays(day)" class=" px-3 rounded text-white" v-for="day in numberOfDayForMONTH">{{day}}</button>
		<div v-else :class="isSelected(day) ? 'bg-blue-500' : 'bg-slate-500'" @click.prevent="addOrRemoveDays(day)" class=" px-3 rounded text-white" v-for="day in numberOfDayForMONTH">{{day}}</div>
	</div>
</template>