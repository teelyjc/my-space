<script lang="ts">
  import DiscordComponent from '../components/content/discord/DiscordComponent.svelte';
  import Meta from '../components/Meta.svelte';
  import type { MetaProps } from '../interfaces/MetaProps';

  const metadata: MetaProps = {
    title: 'Discord',
    description: 'TeeLy\'s Discord server infomation.',
    url: 'https://www.teelyjc.com/discord',
  }
</script>

<Meta { metadata } />
<DiscordComponent />