<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
  } from 'svelte-vertical-timeline';

  const milestones = [
    { title: "Skybean hardware prototype", status: "DONE", content: "Skybean Nano prototype completed and tested." },
    { title: "Firmware POC", status: "DONE", content: "Firmware proof of concept validated on 2024 BRMD." },
    { title: "Skybean production hardware", status: "DONE", content: "Skybean Nano hardware finalized." },
    { title: "BeanOS 0.1.0", status: "IN PROGRESS", content: "First release of BeanOS in development." },
    { title: "BeanOS 0.2.0", status: "SOON", content: "Firmware version ready to talk to WebBean." },
    { title: "WebBean webapp", status: "SOON", content: "WebBean web application coming soon." }
  ];

  function getDotColor(status) {
    if (status === 'DONE') return '#22c55e'; // green
    if (status === 'IN PROGRESS') return '#f59e42'; // orange
    return '#6366f1'; // blue for SOON
  }
</script>

<main class="milestones-timeline">
  <img src="/skybean.png" alt="Skybean Logo" class="logo-timeline" />
  <h1 class="timeline-title">Skybean launching soon...</h1>
  <h2 class="timeline-subtitle">More specs and information will be added soon.</h2>
  <Timeline position="alternate">
    {#each milestones as m, i}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={`background:${getDotColor(m.status)};`} />
          {#if i < milestones.length - 1}
            <TimelineConnector />
          {/if}
        </TimelineSeparator>
        <TimelineContent>
          <h3>{m.title}</h3>
          <span class="milestone-status {m.status.toLowerCase().replace(' ', '-')}">{m.status}</span>
          <p>{m.content}</p>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
</main>

<style>
.milestones-timeline {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.logo-timeline {
  width: 220px;
  max-width: 90vw;
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  margin-bottom: 2rem;
}
.timeline-title {
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.timeline-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center;
}
.milestone-status {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding: 0.2em 0.7em;
  border-radius: 1em;
  background: #f3f4f6;
  color: #6366f1;
}
.milestone-status.done {
  background: #dcfce7;
  color: #22c55e;
}
.milestone-status.in-progress {
  background: #fef9c3;
  color: #f59e42;
}
.milestone-status.soon {
  background: #e0e7ff;
  color: #6366f1;
}
</style>
