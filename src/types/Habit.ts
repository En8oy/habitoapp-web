import {User} from './User'

export type Periods = 'WEEKDAY' | 'WEEKEND' | 'PERSONALIZED' | 'SPECIFICDAYOFMOUTH'

export type Days = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY' | number

export type Habit = {
	id: string | number;
	category_id: string | number;
	user_id: string | number;
	user?: User | null;
	priority: 'HIGH' | 'LOW' | 'MEDIUM';
	type: 'POSITIVE' | 'NEGATIVE';
	name: string;
	description: string;
	success_message: string;
	failure_message: string;
	random_message: boolean;
	period: Periods | null,
	days : Days[] | []
	start_time: string;
	end_time : string;
}