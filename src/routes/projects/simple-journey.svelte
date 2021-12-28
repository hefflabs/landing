<script>
	import Link from '../../assets/link.svelte';
	import Back from '../../assets/back.svelte';
	import Button from '../../components/button.svelte';
	import Page from '../../components/page.svelte';
	import Appstore from '../../assets/appstore.svelte';
	import Googleplay from '../../assets/googleplay.svelte';
	import ProjectImage from '../../components/project_image.svelte';
	import TsjLogo from '../../components/tsj_logo.svelte';
</script>

<Page title="SimpleJourney">
	<div slot="title" class="flex flex-row items-center gap-6">
		<a href="/projects">
			<Button>
				<Back />
			</Button>
		</a>
		<ProjectImage>
			<TsjLogo />
		</ProjectImage>
		<h1>The Simple Journey</h1>
	</div>

	<p>
		The Simple Journey is a unique thought of the day app focused around simplicity, brevity and
		community. Starting in April 2020 as just an idea, Heff Labs was responsible for the logo &
		branding, UI/UX design, mobile app and backend, and played a key role through consulting to
		guide the direction of the project.
	</p>

	<div slot="bottom-start" class="flex flex-row gap-3">
		<a href="https://thesimplejourney.com">
			<Button>
				<Link slot="prefix" />
				Website
			</Button>
		</a>
		<Button disabled>
			<Appstore slot="prefix" />
			App Store
		</Button>
		<a href="https://play.google.com/store/apps/details?id=com.thesimplejourney.simplejourney">
			<Button>
				<Googleplay slot="prefix" />
				Google Play
			</Button>
		</a>
	</div>
</Page>
