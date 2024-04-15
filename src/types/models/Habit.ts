import {User} from './User'

export type Periods = 'WEEKDAY' | 'WEEKEND' | 'PERSONALIZED_WEEKDAY' | 'FORTNIGHT'	| 'LAST_DAY_OF_THE_MONTH' | 'FIRST_DAY_OF_THE_MONTH' | 'SPECIFIC_DAYS_OF_MONTH' | 'SPECIFIC_DAY'

/**
 * Type number is the number of days
 */

export type DaysWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

export type MonthConstDays = 'FIRST_DAY_OF_MONTH' | 'LAST_DAY_OF_MONTH'

export type Days = DaysWeek | MonthConstDays | number | string

export type Priority = 	'HIGH' | 'LOW' | 'MEDIUM' | null

export type HabitType = 'POSITIVE' | 'NEGATIVE' | null

export type Habit = {
	id: string | number;
	category_id: string | null;
	user_id: string | number;
	user?: User | null;
	priority: Priority;
	type: HabitType;
	name: string;
	description: string;
	success_message: string;
	failure_message: string;
	random_message: boolean;
	period: Periods | null,
	days : Days[] | number[]
	start_time: string;
	end_time : string;
}