<script lang="ts">
  import { FlipButton, ThemeManager } from '@jill64/svelte-dark-theme'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<ThemeManager />

<header>
  <hgroup>
    <h1>svelte-highlight-switcher</h1>
    <p>📍 Safe svelte-highlight dynamic style switching</p>
  </hgroup>
  <FlipButton />
  <GitHubLogo />
</header>

<slot />

<style>
  :global(body) {
    font-family: sans-serif;
    padding: 0 1rem;
  }
  :global(.dark body) {
    background-color: #161616;
    color: whitesmoke;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  hgroup {
    margin-right: auto;
  }
</style>
