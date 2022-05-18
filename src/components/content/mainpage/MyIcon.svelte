<script lang="ts">
  export let href: string;
  export let image: string;
  export let alt: string;
</script>

<a href={ href } target="_blank">
  <img src={ image } alt={ alt } class="w-6 h-6 hover:scale-110 transition delay-150 duration-300 ease-in-out" />
</a>