<script lang="ts">
  import NavbarNav from "../components/navbar/NavbarNav.svelte";
  import "../styles/globals.css"
</script>

<main class="space-y-5">
  <NavbarNav />
  <slot />
</main>