<script context="module">
  import axios from 'axios';
</script>

<script lang="ts">
  import { onMount } from 'svelte';

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

<div class="flex justify-center slide-up">
  {#if !discordData}
    <LoadIcon />
  {:else}
    <div class="flex flex-col">
      <div class="flex flex-col space-y-4">
        <h1 class="text-5xl text-center">
          { discordData.name } Widget 🔊
        </h1>
        <div class="mx-auto space-x-2">
          <a href={ discordData.instant_invite } target="_blank" class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-6 py-1 rounded-lg text-white">
            Join me
          </a>
          <a href="https://discord.com" target="_blank" class="bg-green-500 hover:bg-green-600 active:bg-green-700 px-6 py-1 rounded-lg text-white">
            Download
          </a>
        </div>
      </div>
      <ul class="mt-4 flex flex-col bg-gray-900 p-4 rounded-lg px-4 space-y-2 shadow-2xl">
        {#each discordData.members as member}
          <li class="flex justify-between hover:bg-gray-800 hover:scale-110 ease-in-out px-2 py-0.5 rounded-lg">
            <div class="flex space-x-2">
              <img src={ member.avatar_url } alt={`${member.username}'s avatar`} class="my-auto w-8 h-8 rounded-full" />
              {#if member.game}
                <div class="flex flex-col">
                  <h1 class="text-white text-md">{ member.username }</h1>
                  <p class="text-white text-xs">is playing { member.game.name }</p>
                </div>
              {:else}
                <h1 class="text-white mt-1">{ member.username }</h1>
              {/if}
            </div>
            <div class="flex">
              <h1 class="text-white text-sm my-auto">{ member.status }</h1>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>