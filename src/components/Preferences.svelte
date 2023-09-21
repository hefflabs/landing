<script lang="ts">
  import Button from "./Button.svelte";
  import Moon from "../icons/moon.svelte";
  import Sun from "../icons/sun.svelte";
  import ChevronRight from "../icons/ChevronRight.svelte";

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
  <Button on:click={cyclePrimaryColor}>
    <div slot="prefix" class="w-6 h-6 rounded-xl bg-primary" />
    {PrimaryColor[$primaryColor]}
    <ChevronRight slot="suffix" />
  </Button>
  <Button on:click={toggleTheme}>
    <svelte:component this={darkMode ? Moon : Sun} slot="prefix" />
    {darkMode ? "Dark" : "Light"}
    <ChevronRight slot="suffix" />
  </Button>
</div>
