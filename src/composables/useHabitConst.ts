import { ref } from "vue";
import { DaysWeek, HabitType, Periods, Priority } from "../types/models/Habit";
import { useI18n } from 'vue-i18n'

export function useHabitConst() {
	const { t } = useI18n()

	const cPeriods = ref<{ label: string, value: Periods }[]>([
		{
			label: t('periods.weekday'),
			value: "WEEKDAY",
		},
		{
			label: t('periods.weekend'),
			value: "WEEKEND"
		},
		{
			label: t('periods.personalized_weekday'),
			value: "PERSONALIZED_WEEKDAY",
		},
		{
			label: t('periods.fortnight'),
			value: "FORTNIGHT",
		},
		{
			label: t('periods.last_day_of_the_month'),
			value: "LAST_DAY_OF_THE_MONTH",
		},
		{
			label: t('periods.first_day_of_the_month'),
			value: "FIRST_DAY_OF_THE_MONTH",
		},
		{
			label: t('periods.specific_days_of_month'),
			value: "SPECIFIC_DAYS_OF_MONTH",
		},	
		{
			label: t('periods.specific_day'),
			value: "SPECIFIC_DAY",
		},
	])

	const cPriorities = ref<{ label: string, value: Priority }[]>([
		{
			label: t('priorities.high'),
			value: "HIGH"
		},
		{
			label: t('priorities.medium'),
			value: "MEDIUM"
		},
		{
			label: t('priorities.low'),
			value: "LOW"
		}
	])

	const cTypes =  ref<{ label: string, value: HabitType }[]>([
		{
			label:	t('types.positive'),
			value : "POSITIVE"
		},
		{
			label: t('types.negative'),
			value : "NEGATIVE"
		}
	])

	const cDays = ref<{ label: string, value: DaysWeek }[]>([
		{
			label:	t('days.sunday'),
			value : "SUNDAY"
		},
		{
			label:	t('days.monday'),
			value : "MONDAY"
		},
		{
			label:	t('days.tuesday'),
			value : "TUESDAY"
		},
		{
			label:	t('days.wednesday'),
			value : "WEDNESDAY"
		},
		{
			label:	t('days.thursday'),
			value : "THURSDAY"
		},
		{
			label:	t('days.friday'),
			value : "FRIDAY"
		},
		{
			label:	t('days.saturday'),
			value : "SATURDAY"
		}
	])

	return {
		cPeriods,
		cPriorities,
		cTypes,
		cDays
	}

}


