<script lang="ts">
	import Card from '../components/card.svelte';
	import Hefflabs from '../assets/hefflabs.svelte';
	import { page } from '$app/stores';
	import '../app.css';

	enum Path {
		Main = '/',
		About = '/about',
		Projects = '/projects',
		Project = '/project'
	}

	let prevPath: Path;
	let path: Path;
	page.subscribe((p) => {
		if (p.path !== path) {
			const newPath = p.path as Path;
			prevPath = path;
			path = newPath;
			console.log(prevPath, path);
		}
	});

	const paths = [Path.Main, Path.About, Path.Projects, Path.Project];
	function getPathIndex(p: string): number {
		if (p === undefined) {
			return -1;
		}

		return paths.findIndex(
			(el) => el === p || (el === Path.Project && p.startsWith(Path.Projects))
		);
	}

	function getSlide() {
		if (getPathIndex(path) < getPathIndex(prevPath)) {
			return 'slide-right';
		} else {
			return 'slide-left';
		}
	}
</script>

<Card>
	<div slot="top" class="pb-6 nav-wrapper flex flex-row justify-end">
		<div class="flex flex-row justify-between w-max rounded-lg bg-white dark:bg-jet relative">
			<div
				class="highlight"
				class:about={path === '/about'}
				class:project={path.startsWith('/projects')}
			/>
			<a class="nav-item" href="/">
				<Hefflabs />
			</a>
			<a class="nav-item" href="/about">About</a>
			<a class="nav-item" href="/projects">Projects</a>
		</div>
	</div>

	{#key path}
		<div class={`h-full ${getSlide()}`}>
			<slot />
		</div>
	{/key}
</Card>

<style lang="postcss">
	.nav-wrapper {
		width: 648px;
	}

	.nav-item {
		@apply font-medium flex justify-center leading-8 w-24 rounded-lg p-1 z-20;
	}

	.highlight {
		@apply absolute w-24 h-10 z-10 transition-all ease-in-out bg-glass-hover rounded-lg;
		transform: translate(0);
	}

	.about {
		transform: translateX(96px) !important;
	}

	.project {
		transform: translateX(192px) !important;
	}

	@keyframes slide-right {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(0);
		}
	}

	@keyframes slide-left {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}

	.slide-right {
		animation: slide-right 250ms ease;
	}

	.slide-left {
		animation: slide-left 250ms ease;
	}
</style>
