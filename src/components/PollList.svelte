<script lang="ts">
  import type { PollType } from '../types';
  import PollDetails from './PollDetails.svelte';

  export let polls: PollType[] = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
