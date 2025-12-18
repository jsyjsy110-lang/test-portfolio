export class HomeScene {
  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    this.container = document.createElement('div');
    this.container.className = 'scene home-scene';
  }

  mount(parent) {
    parent.appendChild(this.container);
    this.render();
    this.addEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="frosted-window">
         <!-- Tech Header -->
         <div class="window-header">
             <div class="hud-left">
                 <span class="hud-label">SYS.ONLINE</span>
                 <div class="hud-bar-anim"></div>
             </div>
             <div class="hud-center">
                 <span class="logo-text">JSY // PROTOCOL</span>
             </div>
             <div class="hud-right">
                 <span class="time-display">2024.CYBER</span>
                 <div class="status-light"></div>
             </div>
         </div>

         <div class="window-body">
             <!-- Cyber Sidebar -->
             <aside class="tech-sidebar">
                 <div class="nav-item active" data-nav="home">
                     <span class="nav-idx">01</span>
                     <span class="nav-label">BASE</span>
                 </div>
                 <div class="nav-item" data-nav="works">
                     <span class="nav-idx">02</span>
                     <span class="nav-label">WORKS</span>
                 </div>
                 <div class="nav-item" data-nav="about">
                     <span class="nav-idx">03</span>
                     <span class="nav-label">DATA</span>
                 </div>
                 <div class="nav-item" data-nav="contact">
                     <span class="nav-idx">04</span>
                     <span class="nav-label">LINK</span>
                 </div>
                 
                 <div class="sidebar-decor">
                     <div class="decor-line"></div>
                     <span class="decor-code">V.4.2</span>
                 </div>
             </aside>

             <!-- Main Content: Tech Dashboard -->
             <main class="dashboard-content scroll-area">
                 <!-- Top Data Strip -->
                 <div class="data-strip">
                     <div class="data-block">
                         <span class="d-label">PROJECTS</span>
                         <span class="d-val">24</span>
                     </div>
                     <div class="data-block">
                         <span class="d-label">STATUS</span>
                         <span class="d-val active">ONLINE</span>
                     </div>
                     <div class="data-block">
                         <span class="d-label">AVAILABILITY</span>
                         <span class="d-val">OPEN</span>
                     </div>
                 </div>

                 <div class="hero-grid">
                     <!-- Main Hero -->
                     <div class="hero-panel glass-panel">
                         <div class="h-content">
                             <div class="h-tag">INTERFACE DESIGN</div>
                             <h1>FUTURE<br>VISION.</h1>
                             <p>Constructing digital realities with precision engineering.</p>
                             <button class="cy-btn" data-nav="works">INITIALIZE GALLERY >></button>
                         </div>
                         <div class="h-graphic">
                             <!-- CSS Arc Reactor -->
                             <div class="arc-container">
                                 <div class="arc-ring r1"></div>
                                 <div class="arc-ring r2"></div>
                                 <div class="arc-core"></div>
                             </div>
                         </div>
                     </div>

                     <!-- Stats & Info -->
                     <div class="side-panel glass-panel">
                         <div class="panel-header">SYSTEM LOG</div>
                         <div class="log-list">
                             <div class="log-item"><span>> UI Update</span><span class="log-time">Now</span></div>
                             <div class="log-item"><span>> New Project</span><span class="log-time">2d</span></div>
                             <div class="log-item"><span>> Sys Check</span><span class="log-time">Ok</span></div>
                         </div>
                     </div>
                 </div>

                 <!-- Modules Grid -->
                 <div class="modules-row">
                     <div class="module-card glass-panel" data-nav="works">
                         <div class="m-head">MODULE A</div>
                         <div class="m-body" style="background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600')"></div>
                         <div class="m-foot">WEB APP // <span class="cyan">ACTIVE</span></div>
                     </div>
                     <div class="module-card glass-panel" data-nav="works">
                         <div class="m-head">MODULE B</div>
                         <div class="m-body" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600')"></div>
                         <div class="m-foot">3D ASSET // <span class="cyan">READY</span></div>
                     </div>
                     <div class="module-card glass-panel long" data-nav="contact">
                         <div class="m-head">COMMUNICATION</div>
                         <div class="contact-preview">
                             <span>ESTABLISH CONNECTION</span>
                             <button class="link-btn">CONNECT</button>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      .hud-left, .hud-right { display: flex; align-items: center; gap: 10px; font-family: 'Rajdhani'; font-weight: 600; color: var(--text-secondary); }
      .hud-bar-anim { width: 40px; height: 4px; background: var(--tech-cyan); animation: pulse-width 2s infinite; }
      .logo-text { font-family: 'Orbitron'; font-weight: 700; letter-spacing: 2px; color: var(--text-primary); }
      .status-light { width: 8px; height: 8px; background: #00ff66; border-radius: 50%; box-shadow: 0 0 10px #00ff66; }
      
      @keyframes pulse-width { 0%, 100% { width: 10px; opacity: 0.5; } 50% { width: 40px; opacity: 1; } }

      .window-body { flex: 1; display: flex; overflow: hidden; }
      
      /* Sidebar Tech */
      .tech-sidebar {
        width: 100px; border-right: 1px solid rgba(0, 195, 255, 0.3); background: rgba(255,255,255,0.3);
        display: flex; flex-direction: column; padding: 40px 0;
      }
      .nav-item {
        display: flex; flex-direction: column; align-items: center; padding: 20px 0;
        cursor: pointer; color: var(--text-secondary); transition: 0.2s; position: relative;
      }
      .nav-item:hover, .nav-item.active { color: var(--tech-blue); background: rgba(255,255,255,0.5); }
      .nav-item.active::after { content: ''; position: absolute; right: 0; top: 0; height: 100%; width: 3px; background: var(--tech-cyan); }
      
      .nav-idx { font-size: 0.7rem; font-weight: 700; opacity: 0.5; }
      .nav-label { font-family: 'Orbitron'; font-size: 0.8rem; letter-spacing: 1px; margin-top: 5px; }
      
      .sidebar-decor { margin-top: auto; padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 5px; opacity: 0.5; }
      .decor-line { width: 1px; height: 40px; background: var(--text-secondary); }

      .dashboard-content { flex: 1; padding: 30px; display: flex; flex-direction: column; gap: 20px; }
      
      /* Data Strip */
      .data-strip { display: flex; gap: 20px; margin-bottom: 10px; }
      .data-block { 
          background: rgba(255,255,255,0.4); border: 1px solid rgba(0, 195, 255, 0.3);
          padding: 10px 20px; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
          display: flex; flex-direction: column; min-width: 120px;
      }
      .d-label { font-size: 0.7rem; color: var(--text-secondary); letter-spacing: 1px; }
      .d-val { font-family: 'Orbitron'; font-size: 1.2rem; font-weight: 700; color: var(--tech-blue); }
      .d-val.active { color: var(--tech-cyan); text-shadow: 0 0 10px rgba(0,195,255,0.5); }

      /* Hero Grid */
      .hero-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; height: 350px; }
      
      .hero-panel { display: flex; justify-content: space-between; padding: 40px; }
      .h-content { display: flex; flex-direction: column; justify-content: center; z-index: 2; }
      .h-tag { color: var(--tech-cyan); font-weight: 700; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 10px; }
      h1 { font-family: 'Orbitron'; font-size: 3.5rem; line-height: 0.9; color: var(--text-primary); margin-bottom: 20px; }
      .cy-btn {
          margin-top: 20px; background: transparent; border: 1px solid var(--tech-blue); color: var(--tech-blue);
          padding: 12px 25px; font-weight: 700; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
          transition: 0.2s; align-self: flex-start;
      }
      .cy-btn:hover { background: var(--tech-blue); color: white; box-shadow: 0 0 20px rgba(0,102,255,0.4); }

      .h-graphic { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; }
      .arc-container { width: 200px; height: 200px; position: relative; display: flex; justify-content: center; align-items: center; }
      .arc-ring { position: absolute; border-radius: 50%; border: 2px solid transparent; }
      .r1 { width: 100%; height: 100%; border-top: 2px solid var(--tech-cyan); border-bottom: 2px solid var(--tech-cyan); animation: spin 8s linear infinite; }
      .r2 { width: 70%; height: 70%; border-left: 2px solid var(--tech-blue); border-right: 2px solid var(--tech-blue); animation: spin-rev 5s linear infinite; }
      .arc-core { width: 40%; height: 40%; background: radial-gradient(circle, var(--tech-cyan), transparent); opacity: 0.5; animation: pulse 2s infinite; }
      
      @keyframes spin { 100% { transform: rotate(360deg); } }
      @keyframes spin-rev { 100% { transform: rotate(-360deg); } }
      @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }

      /* Side Panel */
      .side-panel { padding: 20px; display: flex; flex-direction: column; }
      .panel-header { font-family: 'Orbitron'; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 10px; margin-bottom: 15px; color: var(--text-primary); }
      .log-item { display: flex; justify-content: space-between; font-family: 'Rajdhani'; font-size: 0.95rem; margin-bottom: 10px; border-bottom: 1px dashed rgba(0,0,0,0.05); padding-bottom: 5px; }
      .log-time { color: var(--tech-cyan); font-weight: 600; }

      /* Modules */
      .modules-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; flex: 1; }
      .module-card { padding: 15px; display: flex; flex-direction: column; cursor: pointer; }
      .m-head { font-family: 'Orbitron'; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px; }
      .m-body { flex: 1; background-size: cover; background-position: center; border-radius: 4px; border: 1px solid rgba(0,195,255,0.2); }
      .m-foot { margin-top: 10px; font-size: 0.8rem; font-weight: 700; display: flex; justify-content: space-between; }
      .cyan { color: var(--tech-cyan); }
      
      .long { grid-column: span 1; background: linear-gradient(135deg, rgba(0,195,255,0.1), rgba(255,255,255,0.4)); }
      .contact-preview { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 15px; }
      .link-btn { background: var(--tech-blue); color: white; border: none; padding: 8px 30px; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px); font-weight: bold; }

      @media (max-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr; height: auto; }
        .modules-row { grid-template-columns: 1fr; }
        .tech-sidebar { width: 60px; } .nav-label { display: none; }
      }
    `;
    this.container.appendChild(style);
  }

  addEventListeners() {
    this.container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onNavigate(el.dataset.nav);
      });
    });
  }

  unmount() {
    this.container.remove();
  }
}
