<main class="milestones-timeline">
  <img src="/skybean.png" alt="Skybean Logo" class="logo-timeline" />
  <h1 class="timeline-title">Skybean launching soon...</h1>
  <div class="timeline timeline-angled">
    <div class="milestone reached">
      <span class="dot"></span>
      <span class="label angled">Skybean hardware prototype</span>
    </div>
    <div class="milestone reached">
      <span class="dot"></span>
      <span class="label angled">firmware POC</span>
    </div>
    <div class="milestone reached">
      <span class="dot"></span>
      <span class="label angled">Skybean production hardware</span>
    </div>
    <div class="milestone in-progress">
      <span class="dot"></span>
      <span class="label angled">BeanOS 0.1.0</span>
    </div>
    <div class="milestone upcoming">
      <span class="dot"></span>
      <span class="label angled">BeanOS 0.2.0</span>
    </div>
    <div class="milestone upcoming">
      <span class="dot"></span>
      <span class="label angled">WebBean webapp</span>
    </div>
  </div>
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
  margin-bottom: 2.5rem;
  font-weight: 700;
}
.timeline-angled {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0;
  width: 100%;
  max-width: 1100px;
  margin-top: 1rem;
  position: relative;
  min-height: 180px;
}
.timeline-angled::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #22c55e 0%, #eab308 60%, #6366f1 100%);
  z-index: 0;
  border-radius: 3px;
}
.milestone {
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 0;
}
.dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-bottom: 0.7rem;
  border: 4px solid #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  position: relative;
  top: 0;
}
.reached .dot {
  background: #22c55e;
}
.in-progress .dot {
  background: #eab308;
}
.upcoming .dot {
  background: #6366f1;
}
.label.angled {
  font-size: 1.08rem;
  font-weight: 600;
  color: #334155;
  background: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  min-width: 100px;
  text-align: right;
  transform: rotate(-45deg);
  transform-origin: top right;
  white-space: nowrap;
  position: absolute;
  top: 32px;
  right: -10px;
}
@media (max-width: 900px) {
  .timeline-angled {
    flex-direction: column;
    gap: 2.2rem;
    max-width: 95vw;
    min-height: 0;
  }
  .timeline-angled::before {
    top: 0;
    left: 42px;
    right: auto;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #22c55e 0%, #eab308 60%, #6366f1 100%);
  }
  .milestone {
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
    width: auto;
  }
  .label.angled {
    position: static;
    transform: rotate(15deg);
    transform-origin: bottom left;
    min-width: 100px;
    margin-top: 0;
    margin-left: 0.5rem;
    text-align: left;
    right: auto;
    top: auto;
    white-space: normal;
  }
  .dot {
    margin-bottom: 0;
    margin-right: 0.7rem;
  }
}
</style>
