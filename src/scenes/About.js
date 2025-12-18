export class AboutScene {
  constructor(onBack) {
    this.onBack = onBack;
    this.container = document.createElement('div');
    this.container.className = 'scene about-scene';
  }

  mount(parent) {
    parent.appendChild(this.container);
    this.render();
    this.addEventListeners();
    this.container.animate([{ opacity: 0, transform: 'scale(0.98)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 300 });
  }

  render() {
    this.container.innerHTML = `
      <div class="frosted-window">
         <!-- Close Button -->
         <button class="close-action-btn" id="close-scene">
            <span class="close-icon">←</span> Back
         </button>

         <div class="window-header">
             <div class="browser-actions">
                 <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
             </div>
             <div class="address-bar glass-panel">portfolio.com/blue/about</div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">⚡</div>
                 <div class="sidebar-icon" data-nav="works">❖</div>
                 <div class="sidebar-icon active" data-nav="about">☺</div>
                 <div class="sidebar-icon" data-nav="contact">✉</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <main class="dashboard-content scroll-area">
                 <div class="about-grid">
                     <div class="glass-widget profile-main">
                         <div class="cover-photo"></div>
                         <div class="profile-info">
                             <div class="profile-avatar"></div>
                             <h2>J. Blue</h2>
                             <p class="role-tag">UI/UX Engineer</p>
                             <p class="bio-short">Creating clarity from chaos. Focused on clean, accessible, and performant web interfaces.</p>
                         </div>
                     </div>

                     <div class="glass-widget skills-widget">
                         <h3>Core Skills</h3>
                         <div class="skill-tags">
                             <span class="tag">React</span><span class="tag">TypeScript</span>
                             <span class="tag">Figma</span><span class="tag">Python</span>
                         </div>
                         <div class="skill-bars">
                             <div class="bar-label"><span>Design System</span><span>95%</span></div>
                             <div class="progress-track"><div class="progress-fill" style="width:95%"></div></div>
                             
                             <div class="bar-label"><span>Frontend</span><span>90%</span></div>
                             <div class="progress-track"><div class="progress-fill" style="width:90%"></div></div>
                         </div>
                     </div>

                     <div class="glass-widget experience-widget">
                         <h3>Experience</h3>
                         <div class="timeline-item">
                             <div class="t-date">2023</div>
                             <div class="t-content">
                                 <h4>Senior Dev</h4>
                                 <p>BlueCorp Inc.</p>
                             </div>
                         </div>
                         <div class="timeline-item">
                             <div class="t-date">2021</div>
                             <div class="t-content">
                                 <h4>Designer</h4>
                                 <p>Freelance</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-bottom: 20px; }
      
      .glass-widget { background: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.6); border-radius: 20px; padding: 25px; color: var(--text-primary); }
      .glass-widget h3 { font-size: 1.1rem; margin-bottom: 15px; color: var(--accent-primary); }
      
      .profile-main { grid-row: span 2; display: flex; flex-direction: column; align-items: center; text-align: center; overflow: hidden; padding: 0; }
      .cover-photo { width: 100%; height: 100px; background: linear-gradient(to right, #60a5fa, #3b82f6); }
      .profile-info { padding: 25px; margin-top: -50px; display: flex; flex-direction: column; align-items: center; }
      .profile-avatar { width: 90px; height: 90px; border-radius: 50%; background: #eee; border: 4px solid white; margin-bottom: 15px; background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'); background-size: cover; }
      .role-tag { background: rgba(59,130,246,0.1); color: var(--accent-primary); padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; margin-bottom: 15px; font-weight: 600; }
      .bio-short { color: var(--text-secondary); line-height: 1.5; font-size: 0.9rem; }
      
      .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
      .tag { background: white; padding: 6px 12px; border-radius: 8px; font-size: 0.85rem; color: var(--text-secondary); box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      
      .progress-track { width: 100%; height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; margin-bottom: 15px; }
      .progress-fill { height: 100%; background: var(--accent-primary); border-radius: 3px; }
      
      .timeline-item { display: flex; gap: 15px; margin-bottom: 15px; border-left: 2px solid rgba(59,130,246,0.2); padding-left: 15px; }
      .t-date { font-weight: bold; color: var(--accent-primary); width: 50px; }
      .t-content h4 { font-size: 0.95rem; margin-bottom: 2px; }
      .t-content p { font-size: 0.85rem; color: var(--text-secondary); }

      @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } .profile-main { grid-row: auto; } }
    `;
    this.container.appendChild(style);
  }

  addEventListeners() {
    this.container.querySelector('#close-scene').addEventListener('click', (e) => {
      this.onBack();
    });

    this.container.querySelectorAll('[data-nav="home"]').forEach(el => {
      el.addEventListener('click', (e) => {
        this.onBack();
      });
    });
  }

  unmount() {
    this.container.remove();
  }
}
