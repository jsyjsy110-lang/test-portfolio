export class ContactScene {
  constructor(onBack) {
    this.onBack = onBack;
    this.container = document.createElement('div');
    this.container.className = 'scene contact-scene';
  }

  mount(parent) {
    parent.appendChild(this.container);
    this.render();
    this.addEventListeners();
    this.container.animate([{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300 });
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
             <div class="address-bar glass-panel">portfolio.com/blue/contact</div>
             <div class="user-profile-sm"><div class="avatar-sm"></div></div>
         </div>

         <div class="window-body">
             <aside class="glass-sidebar">
                 <div class="sidebar-icon" data-nav="home">⚡</div>
                 <div class="sidebar-icon" data-nav="works">❖</div>
                 <div class="sidebar-icon" data-nav="about">☺</div>
                 <div class="sidebar-icon active" data-nav="contact">✉</div>
                 <div class="sidebar-spacer"></div>
             </aside>

             <main class="dashboard-content chat-layout">
                 <div class="chat-container glass-panel">
                     <div class="chat-sidebar">
                        <div class="search-bar"><input type="text" placeholder="Search..."></div>
                        <div class="chat-list">
                            <div class="chat-item active">
                                <div class="c-avatar">J</div>
                                <div class="c-info"><h4>J. Blue</h4><p>Online</p></div>
                            </div>
                        </div>
                     </div>
                     <div class="chat-main">
                         <div class="chat-header">
                             <h3>Conversation</h3>
                             <span class="status">Active</span>
                         </div>
                         <div class="chat-messages">
                             <div class="msg received"><p>Hello! How can I help you today?</p></div>
                         </div>
                         <div class="chat-input-area">
                             <input type="text" placeholder="Type a message..." id="msg-input">
                             <button class="send-btn">Send</button>
                         </div>
                     </div>
                 </div>
             </main>
         </div>
      </div>
    `;

    const style = document.createElement('style');
    style.innerHTML = `
      .chat-layout { display: flex; justify-content: center; align-items: center; padding: 40px; height: 100%; }
      .chat-container { width: 100%; height: 100%; display: flex; overflow: hidden; background: rgba(255,255,255,0.4); border-radius: 16px; }
      
      .chat-sidebar { width: 250px; background: rgba(255,255,255,0.3); border-right: 1px solid rgba(255,255,255,0.5); display: flex; flex-direction: column; }
      .search-bar { padding: 20px; }
      .search-bar input { width: 100%; padding: 10px; border-radius: 12px; border: none; background: white; }
      .chat-item { display: flex; gap: 10px; padding: 15px; cursor: pointer; transition: 0.2s; }
      .chat-item.active { background: white; }
      .c-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--accent-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
      
      .chat-main { flex: 1; display: flex; flex-direction: column; }
      .chat-header { padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.2); }
      .status { font-size: 0.8rem; color: #27c93f; }
      
      .chat-messages { flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 15px; overflow-y: auto; }
      .msg { max-width: 70%; padding: 12px 18px; border-radius: 15px; font-size: 0.95rem; }
      .received { background: white; color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      .sent { background: var(--accent-primary); color: white; align-self: flex-end; border-bottom-right-radius: 2px; box-shadow: 0 2px 5px rgba(59,130,246,0.3); }
      
      .chat-input-area { padding: 20px; background: rgba(255,255,255,0.5); display: flex; gap: 10px; }
      .chat-input-area input { flex: 1; padding: 12px; border-radius: 20px; border: none; background: white; }
      .send-btn { background: var(--accent-primary); color: white; border: none; padding: 0 20px; border-radius: 20px; font-weight: bold; cursor: pointer; }
      
      @media (max-width: 768px) { .chat-sidebar { display: none; } }
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

    const input = this.container.querySelector('#msg-input');
    const sendBtn = this.container.querySelector('.send-btn');
    const msgs = this.container.querySelector('.chat-messages');

    const sendMsg = () => {
      if (!input.value.trim()) return;
      const div = document.createElement('div');
      div.className = 'msg sent';
      div.innerHTML = `<p>${input.value}</p>`;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      input.value = '';
    };
    sendBtn.addEventListener('click', sendMsg);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMsg(); });
  }

  unmount() {
    this.container.remove();
  }
}
