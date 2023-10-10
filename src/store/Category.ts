import { defineStore } from 'pinia'

export const useCategory = defineStore('category', {
  state: () => {
    return {
			categories: [
				{
					id: "uuid1",
					name: "category1",
					description: "category 1"
				},
				{
					id: "uuid2",
					name: "category2",
					description: "category 2"
				},
				{
					id: "uuid3",
					name: "category3",
					description: "category 3"
				},
				{
					id: "uuid4",
					name: "category4",
					description: "category 4"
				},
				{
					id: "uuid5",
					name: "category5",
					description: "category 5"
				},
			]
    }
  },
})