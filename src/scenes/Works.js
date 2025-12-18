export class WorksScene {
  constructor(onBack) {
    this.onBack = onBack;
    this.container = document.createElement('div');
    this.container.className = 'scene works-scene';
    this.projects = [
      { id: 1, title: 'Crystal Brewing', category: 'Product Design', img: '/projects/crystal.png', size: 'large' },
      { id: 2, title: 'Air Capsule', category: 'Industrial', img: '/projects/air_capsule.png', size: 'tall' },
      { id: 3, title: 'Around Sound', category: 'Audio Device', img: '/projects/around_sound_1.png', size: 'medium' },
      { id: 4, title: 'Sound Concept', category: '3D Visual', img: '/projects/around_sound_2.png', size: 'medium' },
      { id: 5, title: 'Ethereal Shapes', category: 'Visual Art', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800', size: 'small' },
      { id: 6, title: 'Winter Void', category: 'Concept', img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800', size: 'small' }
    ];
  }

  mount(parent) {
    parent.appendChild(this.container);
    this.render();
    this.addEventListeners();
    this.container.animate([{ opacity: 0, transform: 'scale(0.98)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 400, easing: 'ease-out' });
  }

  render() {
    this.container.innerHTML = `
      <div class="frosted-window">
         <!-- Window Header -->
         <div class="window-header">
             <div class="browser-actions">
                 <span class="dot white-glass"></span><span class="dot white-glass"></span>
             </div>
             <div class="address-bar glass-panel">
                 <span class="sparkle-icon">✨</span> portfolio.com/works
             </div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <!-- Sidebar -->
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">Home</div>
                 <div class="sidebar-icon active" data-nav="works">Works</div>
                 <div class="sidebar-icon" data-nav="about">About</div>
                 <div class="sidebar-icon" data-nav="contact">Contact</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <!-- Main Content -->
             <main class="dashboard-content scroll-area">
                 <!-- Back Button (Internal) -->
                 <button class="close-action-btn" id="close-scene">
                    <span class="close-icon">←</span> Back
                 </button>

                 <div class="gallery-header">
                     <div class="gh-left">
                        <h2>Featured Projects</h2>
                        <p>A collection of industrial and digital design.</p>
                     </div>
                     <div class="filter-pills">
                        <span class="pill active">All</span>
                        <span class="pill">Product</span>
                        <span class="pill">Visual</span>
                     </div>
                 </div>

                 <!-- Masonry-like Grid -->
                 <div class="gallery-masonry">
                     ${this.projects.map(p => `
                        <div class="masonry-item ${p.size} glass-panel">
                            <div class="m-img-wrapper" style="background-image: url('${p.img}')">
                                <div class="m-overlay">
                                    <button class="view-btn">View Details</button>
                                </div>
                            </div>
                            <div class="m-info">
                                <h3>${p.title}</h3>
                                <span>${p.category}</span>
                            </div>
                        </div>
                     `).join('')}
                 </div>
             </main>
         </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      .gallery-header {
        display: flex; justify-content: space-between; align-items: flex-end;
        margin-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom: 20px;
      }
      .gh-left h2 { font-size: 2rem; color: #526f85; font-weight: 300; margin-bottom: 5px; }
      .gh-left p { color: #8da4b8; }
      
      .filter-pills { display: flex; gap: 10px; }
      .pill {
        padding: 8px 18px; border-radius: 20px; border: 1px solid white;
        background: rgba(255,255,255,0.3); color: #526f85; cursor: pointer; transition: 0.2s;
      }
      .pill.active, .pill:hover { background: white; color: #8ecae6; box-shadow: 0 4px 10px rgba(161, 196, 253, 0.2); }
      
      .gallery-masonry {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        grid-auto-flow: dense;
      }
      
      .masonry-item {
        background: rgba(255,255,255,0.25); border: 1px solid white;
        padding: 15px; display: flex; flex-direction: column;
        transition: 0.3s; break-inside: avoid;
      }
      .masonry-item:hover { transform: translateY(-5px); background: rgba(255,255,255,0.5); box-shadow: 0 10px 30px rgba(161, 196, 253, 0.2); }
      
      /* Sizes for Masonry feel */
      .large { grid-column: span 2; grid-row: span 2; }
      .tall { grid-row: span 2; }
      .medium { grid-column: span 1; }
      
      .m-img-wrapper {
        flex: 1; min-height: 200px;
        border-radius: 12px; background-size: cover; background-position: center;
        position: relative; overflow: hidden; margin-bottom: 15px;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
      }
      .large .m-img-wrapper { min-height: 400px; }
      .tall .m-img-wrapper { min-height: 400px; }
      
      .m-overlay {
        position: absolute; top:0; left:0; width:100%; height:100%;
        background: rgba(255,255,255,0.2); backdrop-filter: blur(3px);
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: 0.3s;
      }
      .m-img-wrapper:hover .m-overlay { opacity: 1; }
      
      .view-btn {
        background: white; color: #526f85; border: none; padding: 10px 20px;
        border-radius: 20px; font-weight: 600; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }
      
      .m-info h3 { font-size: 1.2rem; color: #526f85; margin-bottom: 5px; font-weight: 500; }
      .m-info span { font-size: 0.9rem; color: #8da4b8; }

      @media (max-width: 900px) {
        .large, .tall { grid-column: span 1; grid-row: span 1; }
        .m-img-wrapper { min-height: 250px !important; }
      }
    `;
    this.container.appendChild(style);
  }

  addEventListeners() {
    this.container.querySelector('#close-scene').addEventListener('click', (e) => {
      e.stopPropagation();
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
