<script lang="ts">
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Tabs from './shared/Tabs.svelte';

  // tabs
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = (e): void => {
    activeItem = e.detail;
  };
</script>

<Header />

<main>
  <Tabs on:tabChange={tabChange} {activeItem} {items} />
  {#if activeItem === 'Current Polls'}
    <p>Poll List Component goes here</p>
  {:else if activeItem === 'Add New Poll'}
    <p>Add New Polls Component goes here</p>
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
