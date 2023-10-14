<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Days, Periods } from '../types/Habit';
import WeekDays from './WeekDays.vue';
import AddMonthDay from './AddMonthDay.vue';
import { CPeriods } from '../const/CPeriods';

const periodSelected = ref<Periods>('WEEKDAY')

const showDays = computed(() => {
	if (
		periodSelected.value == 'WEEKDAY' ||
		periodSelected.value == 'WEEKEND' ||
		periodSelected.value == 'PERSONALIZED_WEEKDAY'
	) {
		return true
	}
	return false
})

const showMonth = computed(() => {
	if (
		periodSelected.value == 'LAS_DAY_OF_THE_MONTH' ||
		periodSelected.value == 'SPECIFIC_DAY_OF_MONTH' ||
		periodSelected.value == 'FORTNIGHT' ||
		periodSelected.value == 'START_DAY_OF_THE_MONTH'
	) {
		return true
	}
	return false
})


const daysToEmit = ref<Days[]>(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'])

const setDefaultDays = (() => {
	switch (periodSelected.value) {
		case 'WEEKDAY':
			daysToEmit.value = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']
			break;
		case 'WEEKEND':
			daysToEmit.value = ['SATURDAY', 'SUNDAY']
			break
		case 'PERSONALIZED_WEEKDAY':
			daysToEmit.value = ['MONDAY', 'WEDNESDAY', 'FRIDAY']
			break
		case 'FORTNIGHT':
			daysToEmit.value = [15]
			break
		case 'LAS_DAY_OF_THE_MONTH':
			daysToEmit.value = ['LAST_DAY_OF_MONTH']
			break
		case 'START_DAY_OF_THE_MONTH':
			daysToEmit.value = ['FIRST_DAY_OF_MONTH']
			break
		case 'SPECIFIC_DAY_OF_MONTH':
			daysToEmit.value = [20]
			break
		case 'SPECIFIC_DAY': 
			let date = new Date()
			let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
			daysToEmit.value = [fullDate]
			break
	}
})

const blockEditMonth = computed(() => {
	
	if (periodSelected.value == 'SPECIFIC_DAY_OF_MONTH') {
		return false
	}

	return true
})

const emit = defineEmits<{
	(e: 'setPeriod', value: { period: Periods, days: Days[] }): void
}>()

const buildDataToEmit = (() => {
	let buildData = {
		period: periodSelected.value,
		days: daysToEmit.value
	}
	return buildData
})

watch(periodSelected, () => {
	emit('setPeriod', buildDataToEmit())
});

watch(daysToEmit, () => {
	emit('setPeriod', buildDataToEmit())
});

const setSPECIFIC_DAY = ((event:any) => {
	daysToEmit.value = [event.target.value]
})

</script>

<template>
	<form>
		<select v-model="periodSelected" @change="setDefaultDays()" class="border-solid border-2 border-sky-500 p-2 m-4 ">
			<option v-for="period in CPeriods" :key="period.label" :value="period.value">{{ period.label }}</option>
		</select>
		<!-- Week Days -->
		<div class="w-[50%]" v-if="showDays">
			<WeekDays :block="periodSelected == 'PERSONALIZED_WEEKDAY' ? false : true" v-model="daysToEmit"></WeekDays>
		</div>
		<!-- Month days -->
		<div class="w-[50%]" v-if="showMonth">
			<AddMonthDay :block="blockEditMonth" v-model="daysToEmit"></AddMonthDay>
		</div>
		<!-- Specific day -->
		<div class="w-[50%]" v-if="periodSelected == 'SPECIFIC_DAY'">
			<input class="border-solid border-2 border-sky-500 p-2 m-4 " type="date" @input="setSPECIFIC_DAY($event)" v-model="daysToEmit[0]">
		</div>
	</form>
</template>