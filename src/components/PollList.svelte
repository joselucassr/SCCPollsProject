<script lang="ts">
  import PollStore from '../stores/PollStore';
  import type { PollType } from '../types';
  import PollDetails from './PollDetails.svelte';

  let polls: PollType[] = [];

  PollStore.subscribe((data) => {
    polls = data;
  });
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
