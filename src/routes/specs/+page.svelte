<script>
  import { onMount, tick } from 'svelte';
  import { afterUpdate } from 'svelte';
  import { specs } from '$lib/specs.js';

  // Example call-out positions (percentages, update as needed)
  const calloutsFront = [
    { specId: 'usb', top: '50%', left: '10%' },
    { specId: 'cpu', top: '50%', left: '52%' },
    { specId: 'baro', top: '73%', left: '30.5%' },
    { specId: 'imu', top: '50%', left: '73.4%' },
    { specId: 'ant', top: '15%', left: '39%' },
    { specId: 'mem', top: '64%', left: '36.7%' },
    { specId: 'led', top: '14%', left: '96.2%' },
    { specId: 'led', top: '85%', left: '96.2%' }
  ];
  const calloutsBack = [
    { specId: 'bat', top: '50%', left: '10%' },
    { specId: 'pyro', top: '25%', left: '59%' },
    { specId: 'pyro', top: '72%', left: '59%' },
    { specId: 'pyro', top: '25%', left: '75%' },
    { specId: 'pyro', top: '72%', left: '75%' },
    { specId: 'servo', top: '25%', left: '92%' },
    { specId: 'servo', top: '72%', left: '92%' },
    { specId: 'buzzer', top: '50%', left: '30%' }
  ];

  let openCallout = null;
  let calloutType = null; // 'front' or 'back'
  let calloutPos = { top: '0%', left: '0%' };
  let calloutSpec = null;
  let popoverCoords = { top: 0, left: 0 };
  let popoverInBody = false;
  let popoverVisible = false;
  let imageLoaded = { front: false, back: false };

  // Estimated popover dimensions
  const POPOVER_WIDTH = 220; // px (between min/max)
  const POPOVER_HEIGHT = 80; // px (typical)

  async function showCallout(specId, top, left, type, event) {
    if (!imageLoaded[type]) return;
    openCallout = specId;
    calloutType = type;
    calloutPos = { top, left };
    calloutSpec = specs.find(s => s.id === specId);
    popoverVisible = true;
    popoverInBody = false;
    await tick();
    // Get callout button position
    let btn = event?.currentTarget;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      let left = rect.left + rect.width / 2 + window.scrollX;
      let top = rect.top + window.scrollY;
      // Edge avoidance logic
      const margin = 12;
      let adjustedLeft = left - POPOVER_WIDTH / 2;
      if (adjustedLeft < margin) {
        left = margin + POPOVER_WIDTH / 2;
      } else if (adjustedLeft + POPOVER_WIDTH > window.innerWidth - margin) {
        left = window.innerWidth - margin - POPOVER_WIDTH / 2;
      }
      popoverCoords = { top, left };
      popoverInBody = true;
    }
  }

  function closeCallout() {
    openCallout = null;
    calloutSpec = null;
    popoverVisible = false;
    popoverInBody = false;
  }
  // Close popover on click outside
  onMount(() => {
    const handler = (e) => {
      if (!e.target.classList.contains('callout') && !e.target.classList.contains('callout-popover')) {
        closeCallout();
      }
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  });

  function handleImageLoad(type) {
    imageLoaded[type] = true;
  }
</script>

<main>
  <a href="/" class="back-btn">&larr; Go Back</a>
  <div class="specs-layout">
    <div class="pcb-images">
      <div class="pcb-image-container">
        <img src="/skybean_hardware_front.png" alt="PCB Front" class="pcb-image" on:load={() => handleImageLoad('front')} />
        {#each calloutsFront as c}
          <button class="callout" style={`top:calc(${c.top} - 14px);left:calc(${c.left} - 14px);`} 
            on:mouseenter={(e) => showCallout(c.specId, c.top, c.left, 'front', e)}
            on:mouseleave={closeCallout}
            on:click={() => scrollToSpec(c.specId)} disabled={!imageLoaded.front}></button>
        {/each}
      </div>
      <div class="pcb-image-container">
        <img src="/skybean_hardware_back.png" alt="PCB Back" class="pcb-image" on:load={() => handleImageLoad('back')} />
        {#each calloutsBack as c}
          <button class="callout" style={`top:calc(${c.top} - 14px);left:calc(${c.left} - 14px);`} 
            on:mouseenter={(e) => showCallout(c.specId, c.top, c.left, 'back', e)}
            on:mouseleave={closeCallout}
            on:click={() => scrollToSpec(c.specId)} disabled={!imageLoaded.back}></button>
        {/each}
      </div>
    </div>
    <div class="specs-list">
      <h2>Skybean Nano Specifications</h2>
      <ul>
        {#each specs as spec}
          <li id={spec.id} class="spec-item">
            <strong>{spec.name}</strong><br />
            <span>{@html spec.description}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

{#if popoverVisible && popoverInBody}
  <div class="callout-popover" style={`position: absolute; top: ${popoverCoords.top - POPOVER_HEIGHT - 16}px; left: ${popoverCoords.left - POPOVER_WIDTH / 2}px; width: ${POPOVER_WIDTH}px; z-index: 100;`}>
    <strong>{calloutSpec?.name}</strong><br />
    <span>{calloutSpec?.summary}</span>
    <button class="close-popover" on:click={closeCallout}>&times;</button>
  </div>
{/if}

<style>
.back-btn {
  margin-top: 2.5rem;
  margin-bottom: 0;
  align-self: center;
  padding: 0.6em 1.4em;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: #6366f1;
  border: none;
  border-radius: 1.5em;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  cursor: pointer;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #22c55e;
}
.specs-layout {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem 1rem;
}
.pcb-images {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  padding: 2.5rem 0 2.5rem 0;
  background: transparent;
  border-radius: 2rem;
  box-shadow: 0 4px 24px rgba(99,102,241,0.06);
}
.pcb-image-container {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  max-width: none;
  width: 100%;
  box-sizing: border-box;
  overflow: visible; /* Ensure popover is not clipped */
}
.pcb-image {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  object-fit: contain;
  background: transparent;
  /* Remove padding so callout positions are relative to the image only */
}
.callout {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #6366f1cc;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(99,102,241,0.18);
  cursor: pointer;
  transition: background 0.2s;
}
.callout:hover {
  background: #22c55ecc;
}
.specs-list {
  width: 100%;
  background: #f3f4f6;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(99,102,241,0.08);
  padding: 2rem 1.5rem;
}
.specs-list h2 {
  color: #6366f1;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  text-align: center;
}
.specs-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.spec-item {
  margin-bottom: 1.2rem;
  padding: 0.7em 1em;
  border-radius: 1em;
  transition: background 0.3s;
}
.spec-item.highlight {
  background: #e0e7ff;
}
.callout-popover {
  position: absolute;
  min-width: 180px;
  max-width: 260px;
  width: 220px;
  background: #fff;
  color: #334155;
  border-radius: 1em;
  box-shadow: 0 4px 24px rgba(99,102,241,0.18);
  padding: 1em 1.2em 0.7em 1.2em;
  z-index: 100;
  font-size: 1rem;
  pointer-events: auto;
  border: 1px solid #e0e7ff;
  animation: popover-fade 0.2s;
}
@keyframes popover-fade {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.close-popover {
  position: absolute;
  top: 0.3em;
  right: 0.7em;
  background: none;
  border: none;
  font-size: 1.2em;
  color: #64748b;
  cursor: pointer;
}
.close-popover:hover {
  color: #22c55e;
}
@media (max-width: 900px) {
  .pcb-images {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    padding: 1.5rem 0;
  }
  .pcb-image-container {
    width: 100%;
    max-width: none;
    /* Remove padding for mobile as well */
  }
  .pcb-image {
    /* Remove padding for mobile as well */
    background: transparent;
  }
}
</style>
