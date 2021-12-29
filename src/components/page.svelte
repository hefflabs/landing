<script lang="ts">
    export let title: string;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="h-full flex flex-col justify-between">
	<div class="overflow-hidden">
		<div class="mb-6">
			<slot name="title" />
		</div>
		<slot />
	</div>

	<div class="flex flex-row justify-between items-end flex-wrap gap-6">
		<slot name="bottom-start" />
		<slot name="bottom-end" />
	</div>
</div>
