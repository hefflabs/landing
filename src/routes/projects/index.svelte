<script>
	import ProjectCard, { ProjectType } from '../../components/project_card.svelte';
	import Page from '../../components/page.svelte';
	import TsjLogo from '../../components/tsj_logo.svelte';
	import Colorstick from '../../assets/colorstick.svelte';
</script>

<Page title="Projects">
	<h1 slot="title">Projects</h1>

	<div class="flex flex-col gap-3">
		<ProjectCard
			slug={'/simple-journey'}
			title="The Simple Journey"
			projectType={ProjectType.Client}
			description="Thought of the day mobile app"
		>
			<TsjLogo slot="image" />
		</ProjectCard>
		<ProjectCard
			slug={'/colorstick'}
			title="True Colors ColorStick™"
			projectType={ProjectType.Client}
			description="Color palette mobile app"
		>
			<Colorstick slot="image" />
		</ProjectCard>
	</div>
</Page>
