<template>
	<div
		class="h-[100vh] sm:h-[50vh] md:h-[50vh] lg:h-[100vh] xl:h-[100vh] flex lg:flex-row sm:flex-col-reverse mx-auto items-center justify-between container">
		<div
			class="flex flex-col md:h-2/3 justify-center items-center md:items-center lg:text-start sm:text-center  w-2/3 sm:w-full">
			<h2 class="text-[clamp(1rem,4vw,3rem)] font-thin w-full">¿Encerrado En La Rutina?</h2>
			<h1 class="text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-start">
				Encuentra la <span
					class="px-4 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">motivación</span>
				interna necesaria para alcanzar tus objetivos.
			</h1>
			<p class="leading-normal text-2xl my-8 ">
				Es hora de disfrutar mientras completas tus responsabilidades de una nueva manera y transforma tu vida
				de una vez.
			</p>
			<button class="btn btn-primary rounded-full px-8 text-white w-48 h-16">
				Descubrir Como
			</button>
		</div>
		<div class="w-1/3 sm:w-auto md:h-1/3 flex lg:flex justify-center items-start text-center sm:hidden">
			<img class="w-[500px]" src="https://www.tailwindtoolbox.com/templates/hero.png" />
		</div>
	</div>
	<div
		class="flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[50] sm:h-[10vh] md:h-[10vh] lg:h-[30vh] xl:h-[30vh] w-full text-center">
		<div class="stats shadow">
			<div class="stat">
				<div class="stat-figure text-primary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
						</path>
					</svg>
				</div>
				<div class="stat-title">Total Likes</div>
				<div class="stat-value text-primary">25.6K</div>
				<div class="stat-desc">21% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						class="inline-block w-8 h-8 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<div class="stat-title">Page Views</div>
				<div class="stat-value text-secondary">2.6M</div>
				<div class="stat-desc">21% more than last month</div>
			</div>

			<div class="stat">
				<!-- <div class="stat-figure text-secondary">
					<div class="avatar online">
						<div class="w-16 z-1 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
				</div> -->
				<div class="stat-value">86%</div>
				<div class="stat-title">Tasks done</div>
				<div class="stat-desc text-secondary">31 tasks remaining</div>
			</div>
		</div>
	</div>
	<div class="h-auto w-full text-center container mt-20 z-10 border-y-2">
		<div class="flex flex-col h-full">
			<div class="my-32">
				<h2 class="my-4 text-5xl font-bold leading-tight text-center">Personaliza que tan complicados seran tus
					habitos</h2>
			</div>
			<div class="flex lg:flex-row sm:flex-col justify-between items-baseline p-5 h-full">
				<div
					class="card flex flex-col justify-center items-center w-2/6 lg:w-2/6 sm:w-full h-2/6 lg:h-2/6 px-5 text-center my-10">
					<img class=""
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx7-dDOTIT67IoJY802MNj3ZPUJYDhCcK48uXLFggcw&s">
					<h3 class="leading-normal text-2xl my-8 font-bold">Registra tus habitos y haz mas</h3>
					<p class="leading-normal text-2xl my-8">Mantente responsable siguiendo y manteniendo tus Hábitos,
						Tareas Diarias y Tareas Pendientes todo
						en un lugar</p>
				</div>
				<div
					class="card flex flex-col justify-center items-center w-2/6 lg:w-2/6 sm:w-full h-2/6 lg:h-2/6 px-5 text-center my-10">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx7-dDOTIT67IoJY802MNj3ZPUJYDhCcK48uXLFggcw&s">
					<h3 class="leading-normal text-2xl my-8 font-bold">Tu haces tus recompensas</h3>
					<p class="leading-normal text-2xl my-8">Olvidate de recompensas tan aburridas, tu pones tu
						recompensa</p>
				</div>
				<div
					class="card flex flex-col justify-center items-center w-2/6 lg:w-2/6 sm:w-full h-2/6 lg:h-2/6 px-5 text-center my-10">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx7-dDOTIT67IoJY802MNj3ZPUJYDhCcK48uXLFggcw&s">
					<h3 class="leading-normal text-2xl my-8 font-bold">Tus habitos dinamicos</h3>
					<p class="leading-normal text-2xl my-8">Sabemos que tus habitos son variables asi que puedes
						alternar tus habitos para que sea mas
						divertido</p>
				</div>
			</div>
		</div>
	</div>

	<div class="h-[100vh] sm:h-[50vh] md:h-[50vh] lg:h-[100vh] xl:h-[100vh] w-full container mt-32">
		<div class="flex lg:flex-row sm:flex-col-reverse justify-center items-center w-full">
			<div class="w-1/3 text-center flex justify-center items-center">
				<div class="mockup-phone">
					<div class="camera"></div>
					<div class="display">
						<iframe src="https://giphy.com/embed/ITXgZuGi17YwCQIofC" width="240" height="480"
							frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
					</div>
				</div>
			</div>
			<div class="w-2/3 lg:w-2/3 sm:w-full text-center p-2">
				<h1 class="my-4 text-5xl font-bold leading-tight text-center">
					Con todo el <span
						class="px-4 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">poder</span>
					de una PWA.
				</h1>
				<p class="leading-normal text-2xl my-8 ">
					Esto significa que puedes ver tus habitos en cualquier lugar y asi mismo si deseas descargalo puedes
					hacerlo.
				</p>
			</div>
		</div>
	</div>
</template>


<script>
// “Tus hábitos son cambiantes, y esta aplicación también. Es una app gratuita que se enfoca en construir hábitos y mejorar la productividad. A través de mensajes variados, te motiva y te conecta con una comunidad inspiradora. Puede ayudarte a alcanzar tus metas para llevar una vida saludable, ser más productivo y encontrar la felicidad.
</script>