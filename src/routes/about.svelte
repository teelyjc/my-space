<script lang="ts">
	import AboutComponent from '../components/content/about/AboutComponent.svelte';
  import Meta from '../components/Meta.svelte';
  import type { MetaProps } from '../interfaces/MetaProps';

  const metadata: MetaProps = {
    title: "About",
    description: "About Tannatee Juchan such as profile banner.",
    url: "https://www.teelyjc.com/about"
  }
</script>

<Meta { metadata } />
<AboutComponent />