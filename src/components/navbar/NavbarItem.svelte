<script lang="ts">
	import { page } from '$app/stores';
  
  export let title: string;
  export let href: string;

  /*
  * variable path: keep pathname.
  * $: expression will work when reactive.
  */
  let path: string;
  $: path = $page.url.pathname;

  let nonActive: string = 'text-lg text-white hover:text-purple-700';
  let active: string = 'text-lg text-purple-500';
</script>

<!-- is page active will change class to active -->
<a href={href} class={ path === href ? active : nonActive }>
  { title }
</a>