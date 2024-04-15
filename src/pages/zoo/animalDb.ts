import { TZoo } from './animalsTypes'


export const animals: TZoo[] = [
	{
		name: 'Parrot',
		color: 'red',
		weight: 500,
		feedingTimes: 3,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'says blyat every 5 minutes',
	},
	{
		name: 'Kangaroo',
		color: 'brown',
		weight: 70000,
		feedingTimes: 6,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'jumps high'
	},
	{
		name: 'Elephant',
		color: 'gray',
		weight: 400000,
		feedingTimes: 10,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'has a trunk'
	},
	{
		name: 'Wolf',
		color: 'gray',
		weight: 50000,
		feedingTimes: 2,
		birthday: new Date(1993, 8, 6),
		isPredator: true,
		doing: () => 'is full of deep wisdom'
	},
	{
		name: 'Deer',
		color: 'brown',
		weight: 80000,
		feedingTimes: 20,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'has antlers'
	},
	{
		name: 'Hare',
		color: 'white',
		weight: 5000,
		feedingTimes: 7,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'has soft fur'
	},
	{
		name: 'Lynx',
		color: 'ginger',
		weight: 45000,
		feedingTimes: 2,
		birthday: new Date(1993, 8, 6),
		isPredator: true,
		doing: () => 'is very sly'
	},
	{
		name: 'Beaver',
		color: 'brown',
		weight: 3000,
		feedingTimes: 3,
		birthday: new Date(1993, 8, 6),
		isPredator: false,
		doing: () => 'is kurwa'
	},
	{
			name: 'Giraffe',
			color: 'brown',
			weight: 80000,
			feedingTimes: 8,
			birthday: new Date(1993, 8, 6),
			isPredator: false,
			doing: () => 'has long neck'
	},
	{
			name: 'Hedgehog',
			color: 'gray',
			weight: 600,
			feedingTimes: 3,
			birthday: new Date(1993, 8, 6),
			isPredator: false,
			doing: () => 'has needles on its back'
	},
]