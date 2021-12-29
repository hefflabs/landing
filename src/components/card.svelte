<script lang="ts">
    $: innerHeight = 0;
</script>

<svelte:window bind:innerHeight />
<div class={`flex flex-col justify-between items-center md:justify-center overflow-hidden`} style={`height: ${innerHeight}px`}>
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
