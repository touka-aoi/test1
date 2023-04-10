<script lang="ts">
	import Fotter from "./Fotter.svelte"
	import { pageLink, works } from "./pagelink";
	import { base } from '$app/paths';

</script>

<section class = "flex flex-col mt-28 gap-6">
	<h1 class = "title">Toukaworks</h1>
</section>

<section class = "mt-10">
	<div class="text-column">
		<h1 class = "h1">About me</h1>
	
		<div class = "flex flex-col gap-5">
			
			<p class = "text-lg">
				touka-aoi
			</p>
	
			<img src="{base}/images/toukaaoi.png" alt="touka-aoi" width=128px height=128px class = "rounded-mg"/>
	
			<pre>black hair, extremly detailed yellow eyes, inner blue hair, shining yellow halo</pre>
			
			<p>
				普通の学生
			</p>
		</div>
	
	</div>
</section>


<section class="flex flex-col  justify-center my-10 gap-10">
	<h1 class = "h1">works</h1>
	{#each works as {name, url, img, details}}
		<details>
			<summary class = "hover:bg-violet-500 transition duration-200 rounded-md"> 
				<div class = "flex gap-10 items-center  px-12 py-2">
					<img src="{base}/works/{img}" alt={name} width=128px height=128px class = "rounded-mg"/>
					<p class = "text-violet-800 bold hover:no-underline select-none">{name}</p>
				</div>
			</summary>
			<div class = "detail px-12 py-8 flex flex-col gap-4">
				<p>{@html details.replace(/\n/g, '<br>')}</p>
				<div class = "flex gap-3">
					{#each url as url}
						<a class = "text-pink-300" href={url}>{url}</a>
					{/each}
				</div>
			</div>
		</details>
	{/each}
</section>

<Fotter />

<style>
	summary {
		display: block;
		list-style: none;
	}

	details[open] .detail {
  animation-name: expand;
  animation-duration: 0.35s;
}

@keyframes expand {
  0% {
		opacity: 0;
    max-height: 0;
  }
  100% {
		opacity: 1;
    max-height: 1000px;
  }
}

</style>