<div class="h-screen flex flex-col justify-center items-center overflow-hidden">
	<slot name="top" />
	<div class="bg-white dark:bg-jet p-8 rounded-2xl card overflow-hidden">
		<slot />
	</div>
	<slot name="bottom" />
</div>

<style>
	.card {
		width: 648px;
		height: 400px;
	}
</style>
