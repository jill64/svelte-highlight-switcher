<script lang="ts">
  import * as styles from 'svelte-highlight/styles/index'
  import type { StyleName } from './types/StyleName'

  let { name }: { name: StyleName } = $props()

  let css = $state('')

  $effect(() => {
    css = styles[name]
  })
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html css}
</svelte:head>
