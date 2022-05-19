<script context="module" lang="ts">
  export function load({ error, status }: { error: any; status: number }) {
    return {
      props: {
        status: status,
        error: error.message,
      }
    }
  }
</script>

<script lang="ts">
  import Meta from "../components/Meta.svelte";
  import type { MetaProps } from '../interfaces/MetaProps';

  export let status: number;
  export let error: string;

  const metadata: MetaProps = {
    title: "404 NOT FOUND",
    description: "page not found or deleted."
  }
</script>

<Meta { metadata } />
<h1>{ status }: { error }</h1>