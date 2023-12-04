<script lang="ts">
  import * as styles from 'svelte-highlight/styles'
  import type { StyleName } from './types/StyleName'

  export let name: StyleName
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html styles[name]}
</svelte:head>
