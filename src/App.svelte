<script lang="ts">
  import type { PollType } from './types';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import Tabs from './shared/Tabs.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';

  // tabs
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = (e): void => {
    activeItem = e.detail;
  };

  const handleAdd = (e): void => {
    activeItem = 'Current Polls';
  };
</script>

<Header />

<main>
  <Tabs on:tabChange={tabChange} {activeItem} {items} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
