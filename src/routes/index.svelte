<script lang="ts">
	import Wordmark from '../assets/wordmark.svelte';
	import Person from '../assets/person.svelte';
	import Mail from '../assets/mail.svelte';
	import ChevronRight from '../assets/chevron-right.svelte';
	import Moon from '../assets/moon.svelte';
	import Sun from '../assets/sun.svelte';

	import Button from '../components/button.svelte';
	import Page from '../components/page.svelte';
	import Labeled from '../components/labeled.svelte';
	import IconLabel from '../components/icon_label.svelte';

	import {
		cyclePrimaryColor,
		primaryColor,
		PrimaryColor,
		theme,
		Theme,
		toggleTheme
	} from '../store';

	$: darkMode = $theme === Theme.Dark;
</script>

<Page title="Heff Labs">
	<svelte:component this={Wordmark} slot="title" />
	<h2>Fullstack software development</h2>

	<Labeled label="Contact" slot="bottom-start">
		<IconLabel>
			<Person slot="icon" />
			James Heffernan
		</IconLabel>
		<a href="mailto:james@hefflabs.com" class="text-primary">
			<IconLabel>
				<Mail slot="icon" />
				james@hefflabs.com
			</IconLabel>
		</a>
	</Labeled>

	<Labeled label="Preferences" slot="bottom-end">
		<div class="flex flex-row gap-3">
			<Button on:click={cyclePrimaryColor}>
				<div slot="prefix" class="w-6 h-6 rounded-xl bg-primary" />
				{PrimaryColor[$primaryColor]}
				<ChevronRight slot="suffix" />
			</Button>
			<Button on:click={toggleTheme}>
				<svelte:component this={darkMode ? Moon : Sun} slot="prefix" />
				{darkMode ? 'Dark' : 'Light'}
				<ChevronRight slot="suffix" />
			</Button>
		</div>
	</Labeled>
</Page>
