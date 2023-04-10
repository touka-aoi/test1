<script lang="ts">

  import {base} from '$app/paths';
  
  interface outerLink {
		name:string
		src:string
    img:string
	}

  const links:outerLink[] = [
      {name: "github", src: "https://github.com/touka-aoi", img: "github.svg"},
    ];

</script>

<!-- 外部リンク -->
<section>
  <div class = "flex justify-center gap-8">  
    {#each links as {name, src, img}}
      <div>
        <a href={src}>
          <img src="{base}/images/{img}" alt={name} width=32px height=32px/>
        </a>
      </div>
    {/each}
  </div>
</section>