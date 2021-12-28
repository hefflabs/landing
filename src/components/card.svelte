<div class="h-screen flex flex-col justify-between md:justify-center items-center overflow-hidden">
	<slot name="top" />
	<div class="bg-white dark:bg-jet p-8 card overflow-hidden">
		<slot />
	</div>
	<slot name="bottom" />
</div>

<style lang="postcss">
	.card {
        @apply h-full w-screen md:w-162 md:h-100 md:rounded-2xl;
	}
</style>
