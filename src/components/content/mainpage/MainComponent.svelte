<script context="module">
  import axios from 'axios';
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import MyIcon from './MyIcon.svelte';

  import type { DiscordProps } 
    from '../../../interfaces/DiscordProps';
  
  import LoadIcon from '../LoadIcon.svelte';

  let discordData: DiscordProps;

  let discordEndPoint: 
    string = 'https://discord.com/api/guilds/953724179520299018/widget.json';

  onMount(async () => {
    const { data } = await axios.get(discordEndPoint);
    discordData = data;
  });
</script>

<div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 mx-12 lg:mx-72 slide-up">
  <h2 class="font-semibold text-lg lg:text-3xl">Hello, I'm Tannatee Juchan 👋🏻</h2>
  <hr class="my-4 border-gray-300" />
  <a href="/about" class="button-blue">
    Read more
  </a>
  {#if !discordData }
    <LoadIcon />
  {:else}
  <div class="flex flex-row space-x-4 justify-center mt-4">
    <MyIcon href="https://www.facebook.com/teelyjc/" image="/icons/iconmonstr-facebook.svg" alt="facebook icon" />
    <MyIcon href="https://www.instagram.com/teelyyy.k/" image="/icons/iconmonstr-instagram.svg" alt="facebook icon" />
    <MyIcon href="https://github.com/teely44y" image="/icons/iconmonstr-github.svg" alt="facebook icon" />
    <MyIcon href={ discordData.instant_invite } image="/icons/iconmonstr-discord.svg" alt="facebook icon" />
  </div>
  {/if}
  <p class="text-center text-md lg:text-lg mt-2">Copyright © { new Date().getFullYear() } Tannatee Juchan. All rights reserved.</p>
</div>