<script lang="ts">
    export let label: string;
</script>

<div class="flex flex-col gap-4">
    <span class="text-lg font-semibold leading-6">{label}</span>
    <slot />
</div>