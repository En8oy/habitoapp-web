<template>
	<div class="drawer">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col items-center">
			<!-- Navbar -->
			<div class="w-full navbar bg-base-300 px-10">
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
				</div>
				<div class="flex-1 px-2 mx-2">
					<RouterLink to="/" class="btn btn-ghost text-xl">GATCHA</RouterLink>
				</div>
				<div class="flex-none hidden lg:block">
					<ul class="menu menu-horizontal">
						<!-- Navbar menu content here -->
						<li v-for="route in publicRoutes" :key="route.name">
							<RouterLink class="btn btn-ghost" :to="route.to">{{ route.name}}</RouterLink>
						</li>
						<div class="dropdown dropdown-end mx-2">
							<div tabindex="0" role="button" class="btn btn-primary btn-circle">
								<div class="indicator">
									<component is="script" src="https://cdn.lordicon.com/lordicon.js"></component>
									<lord-icon src="https://cdn.lordicon.com/pcwupfyl.json" trigger="hover"
										style="width:40px;height:40px">
									</lord-icon>
								</div>
							</div>
							<div tabindex="0"
								class="mt-3 z-[1000] card card-compact dropdown-content w-52 bg-base-200 shadow">
								<div class="card-body h-[200px] overflow-y-scroll">
									<a class="btn btn-ghost" @click="changeTheme(th)" v-for="th in themes">{{ th }}</a>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
			<div class="">
				<router-view v-slot="{ Component }">
					<transition name="slide-fade">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
			<Footer></Footer>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu p-4 w-80 min-h-full bg-base-200">
				<!-- Sidebar content here -->
				<li v-for="route in publicRoutes" :key="route.name">
					<RouterLink class="btn btn-ghost" :to="route.to">{{ route.name }}</RouterLink>
				</li>
				<div class="dropdown dropdown-end mx-2 w-full flex justify-center">
					<div tabindex="0" role="button" class="btn btn-primary btn-circle">
						<div class="indicator">
							<component is="script" src="https://cdn.lordicon.com/lordicon.js"></component>
							<lord-icon src="https://cdn.lordicon.com/pcwupfyl.json" trigger="hover"
								style="width:40px;height:40px">
							</lord-icon>
						</div>
					</div>
					<div tabindex="0" class="mt-16 z-[1] card card-compact dropdown-content w-full bg-base-100 shadow">
						<div class="card-body h-[200px] overflow-y-auto">
							<a class="btn btn-ghost" @click="changeTheme(th)" v-for="th in themes">{{ th }}</a>
						</div>
					</div>
				</div>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { RouteItem } from '../../types/app/RouteType';
import { usePreference } from '../../store/Preference';
import { Theme } from '../../types/ui/Theme';
import Footer from '../../components/Footer.vue';

const publicRoutes = ref<RouteItem[]>([
	{
		name: 'Home',
		to: '/'
	},
	{
		name: 'About',
		to: '/about'
	},
	{
		name: 'Dashboard',
		to: '/auth'
	}
])

const { changeTheme } = usePreference()

const themes = ref<Theme[]>([
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"valentine",
	"halloween",
	"forest",
	"dracula",
	"night",
	"coffee",
	"winter",
	"dim",
	"sunset"
])

</script>
<style>
.slide-fade-enter-active {
	transition: all 0.3s ease-in;
}

.slide-fade-leave-active {
	transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
</style>