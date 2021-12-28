<script>
	import IconLabel from '../components/icon_label.svelte';
	import Labeled from '../components/labeled.svelte';
	import Location from '../assets/location.svelte';
	import Page from '../components/page.svelte';
</script>

<Page title="About">
	<h1 slot="title">About</h1>

	<p>
		Heff Labs is a company specializing in fullstack app and web development, able to start with as
		little as an idea or concept and take it all the way to a finished product. Integrity and
		quality serve as the foundation for all of our client and non-client projects and work.
	</p>

	<Labeled label={'Location'} slot="bottom-start">
		<IconLabel>
			<Location slot="icon" />
			Maine, United States
		</IconLabel>
	</Labeled>

	<Labeled label={'Accepting work status'} slot="bottom-end">
		<IconLabel>
			<div class="h-2 w-2 bg-gold rounded-lg overflow-visible relative" slot="icon">
				<div class="ping bg-gold absolute w-full h-full rounded-lg" />
			</div>
			Selective, inquire if interested
		</IconLabel>
	</Labeled>
</Page>

<style>
	@keyframes ping {
		0% {
			transform: scale(0);
			opacity: 0.4;
		}

		60% {
			opacity: 0.4;
		}

		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.ping {
		animation: ping 2.5s ease infinite;

		opacity: 0.4;
	}
</style>
