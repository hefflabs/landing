<script>
	import Back from '../../assets/back.svelte';
	import Button from '../../components/button.svelte';
	import Page from '../../components/page.svelte';
	import Appstore from '../../assets/appstore.svelte';
	import Googleplay from '../../assets/googleplay.svelte';
	import Colorstick from '../../assets/colorstick.svelte';
	import ProjectImage from '../../components/project_image.svelte';
</script>

<Page title="ColorStick">
	<div slot="title" class="flex flex-row items-center gap-6">
		<a href="/projects">
			<Button>
				<Back />
			</Button>
		</a>
		<ProjectImage>
			<Colorstick />
		</ProjectImage>
		<h1>Colorstick</h1>
	</div>

	<p>
		True Colors ColorStick is an app designed to replace printed color palettes at a local
		hairstylist's business. The app is used by clients of the hairstylist to view colors to wear
		that match their skin tone, eye color, etc, per the recommendation the hairstylist gives in
		their color consulting service. Starting in June 2019, Heff Labs was responsible for the UI/UX
		design, and mobile app.
	</p>

	<div slot="bottom-start" class="flex flex-row gap-3">
		<Button disabled>
			<Appstore slot="prefix" />
			App Store
		</Button>
		<Button disabled>
			<Googleplay slot="prefix" />
			Google Play
		</Button>
	</div>
</Page>
