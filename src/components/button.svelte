<script lang="ts">
    export let disabled = false;
</script>

<button class="flex flex-row gap-3 p-2 bg-glass rounded-lg font-medium hover:bg-glass-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed" on:click disabled={disabled}>
    <slot name="prefix" />
    <slot class="leading-6" />
    <slot name="suffix" />
</button>