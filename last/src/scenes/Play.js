export class PlayScene {
    constructor(onBack) {
        this.onBack = onBack;
        this.container = document.createElement('div');
        this.container.className = 'scene play-scene full-screen';
    }

    mount(parent) {
        parent.appendChild(this.container);
        this.render();
        this.addEventListeners();
    }

    render() {
        this.container.innerHTML = `
      <div class="back-btn" style="color:black; z-index:1001;">← BACK</div>
      <div class="lab-container">
        <h1 class="text-gradient">LABORATORY</h1>
        <p>Interactive Typography Slider</p>
        
        <div class="controls glass-panel">
            <label>Weight <input type="range" min="100" max="900" value="400" id="weight-slider"></label>
            <label>Spacing <input type="range" min="-10" max="20" value="0" id="spacing-slider"></label>
            <label>Slant <input type="range" min="-20" max="0" value="0" id="slant-slider"></label>
        </div>

        <div class="playground">
            <h2 id="demo-text">INTERACTION</h2>
        </div>
      </div>
    `;

        const style = document.createElement('style');
        style.innerHTML = `
      .play-scene {
        background: #ddd;
        color: #111;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lab-container {
        text-align: center;
        width: 80%;
      }
      .controls {
        background: white;
        padding: 20px;
        margin: 30px auto;
        display: flex;
        gap: 20px;
        justify-content: center;
        border-radius: 50px;
      }
      .playground {
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      #demo-text {
        font-size: 6rem;
        transition: 0.1s;
      }
    `;
        this.container.appendChild(style);
    }

    addEventListeners() {
        this.container.querySelector('.back-btn').addEventListener('click', () => {
            this.unmount();
            if (this.onBack) this.onBack();
        });

        const text = this.container.querySelector('#demo-text');
        const inputs = this.container.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const w = this.container.querySelector('#weight-slider').value;
                const s = this.container.querySelector('#spacing-slider').value;
                const sl = this.container.querySelector('#slant-slider').value;

                text.style.fontWeight = w;
                text.style.letterSpacing = s + 'px';
                text.style.fontStyle = Math.abs(sl) > 5 ? 'italic' : 'normal';
                text.style.transform = `skewX(${sl}deg)`;
            });
        });
    }

    unmount() {
        this.container.remove();
    }
}
