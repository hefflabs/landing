<script lang="ts">
  import Moon from "../icons/moon.svelte";
  import Sun from "../icons/sun.svelte";
  import ChevronRight from "../icons/chevron-right.svelte";

  import {
    cyclePrimaryColor,
    primaryColor,
    PrimaryColor,
    theme,
    Theme,
    toggleTheme,
  } from "../store";

  $: darkMode = $theme === Theme.Dark;
</script>

<div class="flex flex-row gap-3">
  <button class="btn" on:click={cyclePrimaryColor}>
    <div class="w-6 h-6 rounded-xl bg-primary" />
    {PrimaryColor[$primaryColor]}
    <ChevronRight />
  </button>
  <button class="btn" on:click={toggleTheme}>
    <svelte:component this={darkMode ? Moon : Sun} />
    {darkMode ? "Dark" : "Light"}
    <ChevronRight />
  </button>
</div>
