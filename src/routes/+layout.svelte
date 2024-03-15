<script>
  import { onMount } from 'svelte';
  import "../app.pcss";
  import Navbar from "$lib/components/Navbar.svelte";

  export let appname = import.meta.env.VITE_APPNAME;

  	async function detectSWUpdate(){
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if(confirm('New version available. Load new version?')){
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});

	}

	onMount(()=>{
		detectSWUpdate();
	});
</script>

<h1>
  {appname}
</h1>

<div class="m-4">
  <Navbar />
  <slot />
</div>
