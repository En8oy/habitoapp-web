<script lang="ts">
import Footer from '../../components/Footer.vue';

</script>
<template>
	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">

			<!-- Page content here -->
			<div class="w-full navbar bg-base-300 fixed px-10">
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
					<label for="my-drawer" class="btn btn-circle swap swap-rotate">

						<!-- this hidden checkbox controls the state -->
						<input type="checkbox" />

						<!-- hamburger icon -->
						<svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
							viewBox="0 0 512 512">
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>

						<!-- close icon -->
						<svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
							viewBox="0 0 512 512">
							<polygon
								points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
						</svg>

					</label>
					<!-- <label for="my-drawer" class="btn btn-ghost drawer-button">Open drawer</label> -->
				</div>
				<div class="flex-none hidden lg:block">
					<ul class="menu menu-horizontal">
						<!-- Navbar menu content here -->
						<!-- <li v-for="route in publicRoutes" :key="route.name">
							<RouterLink class="btn btn-ghost" :to="route.to">{{ route.name
								}}</RouterLink>
						</li> -->
						<!-- <div class="dropdown dropdown-end mx-2">
							<div tabindex="0" role="button" class="btn btn-primary btn-circle">
								<div class="indicator">
									<component is="script" src="https://cdn.lordicon.com/lordicon.js"></component>
									<lord-icon src="https://cdn.lordicon.com/pcwupfyl.json" trigger="hover"
										style="width:40px;height:40px">
									</lord-icon>
								</div>
							</div>
							<div tabindex="0"
								class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
								<div class="card-body h-[200px] overflow-y-scroll">
									<a class="btn btn-ghost" @click="changeTheme(th)" v-for="th in themes">{{ th }}</a>
								</div>
							</div>
						</div> -->
					</ul>
				</div>
			</div>
			<div class="py-12">
				<router-view v-slot="{ Component }">
					<transition name="slide-fade">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
			<Footer></Footer>
			<!-- <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label> -->
		</div>
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
				<!-- Sidebar content here -->
				<li><a>Sidebar Item 1</a></li>
				<li><a>Sidebar Item 2</a></li>

			</ul>
		</div>
	</div>
</template>
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
