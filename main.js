import './style.css'
import { IntroScene } from './src/scenes/Intro.js'
import { HomeScene } from './src/scenes/Home.js'
import { WorksScene } from './src/scenes/Works.js'
import { AboutScene } from './src/scenes/About.js'
import { ContactScene } from './src/scenes/Contact.js'

console.log('App initialized');

// DEBUG: Error catcher just in case
window.onerror = function (msg, url, lineNo) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;z-index:9999;padding:20px;';
    div.innerText = `Error: ${msg} at line ${lineNo}`;
    document.body.appendChild(div);
};

const app = document.querySelector('#app');
let currentScene = null;

function init() {
    const intro = new IntroScene(() => {
        switchScene(HomeScene, handleHomeNav);
    });
    mountScene(intro);
}

function mountScene(scene) {
    if (currentScene) currentScene.unmount();
    scene.mount(app);
    currentScene = scene;
}

function switchScene(SceneClass, ...args) {
    const scene = new SceneClass(...args);
    mountScene(scene);
}

function handleHomeNav(target) {
    console.log('Navigating to:', target);
    if (target === 'works' || target === 'visual') {
        switchScene(WorksScene, () => switchScene(HomeScene, handleHomeNav));
    } else if (target === 'about' || target === 'story') {
        switchScene(AboutScene, () => switchScene(HomeScene, handleHomeNav));
    } else if (target === 'contact') {
        switchScene(ContactScene, () => switchScene(HomeScene, handleHomeNav));
    }
}

init();
