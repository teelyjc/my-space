<script lang="ts">
  import MainComponent from "../components/content/mainpage/MainComponent.svelte";
  import Meta from "../components/Meta.svelte";
  import type { MetaProps } from "../interfaces/MetaProps";

  const metadata: MetaProps = {
    title: "Home",
    description: "Welcome to Tannatee Juchan's Space",
    url: "https://www.teelyjc.com/"
  }
</script>

<Meta { metadata } />
<MainComponent />