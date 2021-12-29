<script context="module" lang="ts">
	export enum ProjectType {
		Client = 'Client',
		NonClient = 'Non-Client'
	}
</script>

<script lang="ts">
	import ChevronRight from '../assets/chevron-right.svelte';
	import ProjectImage from './project_image.svelte';

	export let title: string;
	export let projectType: ProjectType;
	export let description: string;
	export let slug: string;
</script>

<a
	class="border-glass hover:border-glass-hover border-2 rounded-xl p-3 flex flex-row justify-between items-center cursor-pointer"
	href={`/projects${slug}`}
>
	<div class="flex flex-row gap-3 items-center">
		<div class="p-1">
			<ProjectImage>
				<slot name="image" />
			</ProjectImage>
		</div>
		<div>
			<div class="text-lg font-semibold leading-6 mb-1">{title}</div>
			<span>{projectType.toString()} • {description}</span>
		</div>
	</div>
	<ChevronRight />
</a>
