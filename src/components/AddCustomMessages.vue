<script lang="ts" setup>
import { ref, watch } from 'vue'

const randomMessage = ref(false)
const successMessage = ref('');
const failureMessage = ref('');

watch(randomMessage, () => {
	emit('setCustomMessages',
	{
		random_message: randomMessage.value,
		success_message: successMessage.value,
		failure_message : failureMessage.value
	})	
});

watch(successMessage, () => {
	emit('setCustomMessages',
	{
		random_message: randomMessage.value,
		success_message: successMessage.value,
		failure_message : failureMessage.value
	})	
});

watch(failureMessage, () => {
	emit('setCustomMessages',
	{
		random_message: randomMessage.value,
		success_message: successMessage.value,
		failure_message : failureMessage.value
	})	
});

const emit = defineEmits<{
	(e: 'setCustomMessages', value: {
		random_message: boolean,
		success_message: string,
		failure_message : string
	}): void
}>()

</script>

<template>
	<input type="checkbox" class="border-solid border-2 border-sky-500 p-2 m-4" v-model="randomMessage"
		placeholder="Add random messages">
	<input v-if="randomMessage" type="text" class="border-solid border-2 border-sky-500 p-2 m-4" v-model="successMessage"
		placeholder="Success Messages">
	<input v-if="randomMessage" type="text" class="border-solid border-2 border-sky-500 p-2 m-4" v-model="failureMessage"
	placeholder="Failure Message">
</template>