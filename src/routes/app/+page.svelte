<script>
  // No logic needed for static under construction page
</script>

<main class="under-construction">
  <img src="/skybean.png" alt="Skybean Logo" class="logo-uc" />
  <h1 class="uc-title">WebBean App</h1>
  <h2 class="uc-subtitle">Under Construction</h2>
  <p class="uc-message">We're still working on this part.<br>Check back later for the full bean-experience</p>
  <div class="uc-loader">
    <div></div><div></div><div></div>
  </div>
  <a href="/" class="back-btn">&larr; Go Back</a>
</main>

<style>
.under-construction {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.logo-uc {
  width: 160px;
  max-width: 80vw;
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  margin-bottom: 2rem;
}
.uc-title {
  font-size: 2.2rem;
  color: #6366f1;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.uc-subtitle {
  font-size: 1.5rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.uc-message {
  font-size: 1.1rem;
  color: #334155;
  text-align: center;
  margin-bottom: 2.5rem;
}
.uc-loader {
  display: flex;
  gap: 0.7em;
  margin-top: 1.5em;
}
.uc-loader div {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #6366f1;
  opacity: 0.6;
  animation: uc-bounce 1.2s infinite ease-in-out;
}
.uc-loader div:nth-child(2) {
  animation-delay: 0.2s;
}
.uc-loader div:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes uc-bounce {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.6; }
  40% { transform: scale(1.2); opacity: 1; }
}
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
</style>
