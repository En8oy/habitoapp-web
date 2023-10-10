<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Days, Periods } from '../types/Habit';
import WeekDays from './WeekDays.vue';

const periodOptions = ref<Periods[]>([
	'WEEKDAY',
	'WEEKEND',
	'PERSONALIZEDWEEKDAY',
	'PERSONALIZED',
	'FORTNIGHT',
	'MOUTHEND',
	'MOUTHSTART',
	'SPECIFICDAYOFMOUTH',
	'SPECIFICDAYOFYEAR'
])
const periodSelected = ref<Periods>('WEEKDAY')

const showDays = computed(() => {
	if (
		periodSelected.value == 'WEEKDAY' ||
		periodSelected.value == 'WEEKEND' ||
		periodSelected.value == 'PERSONALIZEDWEEKDAY'
	) {
		return true
	}
	return false
})

const daysToEmit = ref<Days[]>(['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY'])

const setDefaultDays = (() => {
	switch (periodSelected.value) {
		case 'WEEKDAY':
			daysToEmit.value = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY']
			break;
		case 'WEEKEND':
			daysToEmit.value = ['SATURDAY', 'SUNDAY']
			break
		case 'PERSONALIZEDWEEKDAY':
			daysToEmit.value = ['MONDAY', 'WEDNESDAY', 'FRIDAY']
		break
	}
})

const emit = defineEmits<{
	(e: 'setPeriod', value: {period : Periods, days : Days[]}): void
}>()

const buildDataToEmit = (() => {
	let buildData = {
		period : periodSelected.value,
		days : daysToEmit.value
	}
	return buildData
})

watch(periodSelected, () => {
	emit('setPeriod', buildDataToEmit())	
});

watch(daysToEmit, () => {
	emit('setPeriod', buildDataToEmit())	
});

</script>

<template>
	<form>
		<select v-model="periodSelected" @change="setDefaultDays()" class="border-solid border-2 border-sky-500 p-2 m-4 ">
			<option v-for="period in periodOptions" :key="period" :value="period">{{period}}</option>
		</select>
		<!-- Week Days -->
		<div class="w-[50%]" v-if="showDays">
			<WeekDays :block="periodSelected =='PERSONALIZEDWEEKDAY' ? false : true" v-model="daysToEmit"></WeekDays>
		</div>
	</form>
</template>