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
			failure_message: failureMessage.value
		})
});

watch(successMessage, () => {
	emit('setCustomMessages',
		{
			random_message: randomMessage.value,
			success_message: successMessage.value,
			failure_message: failureMessage.value
		})
});

watch(failureMessage, () => {
	emit('setCustomMessages',
		{
			random_message: randomMessage.value,
			success_message: successMessage.value,
			failure_message: failureMessage.value
		})
});

const emit = defineEmits<{
	(e: 'setCustomMessages', value: {
		random_message: boolean,
		success_message: string,
		failure_message: string
	}): void
}>()

</script>

<template>
	<div class="flex justify-around items-center w-full my-6">
		<label class="block text-slate-600 text-sm font-bold w-full" for="habitname">
			Add Custom Messages
		</label>
		<input type="checkbox" class="w-6 h-6 border-slate-600 rounded focus:ring-2 text-slate-600" v-model="randomMessage"
			placeholder="Add random messages">
	</div>
	<div class="flex justify-around items-center w-full my-4">
		<label v-if="randomMessage" class="text-slate-600 text-sm font-bold w-full" for="habitname">
			Success Message
		</label>
		<input v-if="randomMessage" type="text" class="border-solid border-2 p-2 my-2 rounded w-full" v-model="successMessage"
			placeholder="Success Messages">
	</div>
	<div class="flex justify-around items-center w-full my-4">
		<label v-if="randomMessage" class="text-slate-600 text-sm font-bold w-full" for="habitname">
			Failure Message
		</label>
		<input v-if="randomMessage" type="text" class="border-solid border-2 p-2 my-2 rounded w-full" v-model="failureMessage"
			placeholder="Failure Message">
	</div>
</template>