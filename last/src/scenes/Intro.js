export class IntroScene {
  constructor(onComplete) {
    this.onComplete = onComplete;
    this.container = document.createElement('div');
    this.container.className = 'scene intro-scene full-screen';
  }

  mount(parent) {
    parent.appendChild(this.container);
    this.render();
    this.animate();
  }

  render() {
    this.container.innerHTML = `
      <div class="intro-content">
        <div class="intro-brand">S.</div>
        <div class="loader-track">
          <div class="loader-bar"></div>
        </div>
        <div class="intro-text">
          <span class="status-text">INITIALIZING SYSTEM</span>
        </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      .intro-scene {
        background: black;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw; height: 100vh;
        position: fixed; top: 0; left: 0;
      }
      
      .intro-brand {
        font-family: var(--font-display);
        font-size: 3rem; color: white;
        margin-bottom: 40px;
        opacity: 0;
        animation: fadeUp 0.5s forwards;
      }
      
      .intro-content {
        text-align: center;
        width: 300px;
      }
      
      .loader-track {
        width: 100%;
        height: 4px;
        background: #333;
        margin-bottom: 20px;
        position: relative;
        overflow: hidden;
        border-radius: 2px;
      }
      .loader-bar {
        position: absolute;
        left: -100%;
        width: 100%;
        height: 100%;
        background: white;
        box-shadow: 0 0 10px white;
      }
      
      .status-text {
        font-family: var(--font-body);
        font-size: 0.8rem;
        color: #888;
        letter-spacing: 2px;
      }
      
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    this.container.appendChild(style);
  }

  animate() {
    const bar = this.container.querySelector('.loader-bar');

    // Loader Animation
    const loadAnim = bar.animate([
      { left: '-100%' },
      { left: '0%' }
    ], {
      duration: 1500,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    loadAnim.finished.then(() => {
      setTimeout(() => {
        this.container.animate([
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 500,
          fill: 'forwards'
        }).finished.then(() => {
          this.unmount();
          this.onComplete();
        });
      }, 300);
    });
  }

  unmount() {
    this.container.remove();
  }
}
