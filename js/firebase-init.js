var firebaseConfig = {
    apiKey:            "AIzaSyBQ1qSw043aUZh5V1qFIA_mF3TZDNw3xZ0",
    authDomain:        "come-app-fd228.firebaseapp.com",
    databaseURL:       "https://come-app-fd228-default-rtdb.firebaseio.com",
    projectId:         "come-app-fd228",
    storageBucket:     "come-app-fd228.firebasestorage.app",
    messagingSenderId: "873857772095",
    appId:             "1:873857772095:web:9ecc335be471452f9aa68a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global reference used by all pages
var comeDB = firebase.database().ref('comeData');

// ── Shared toast notification (used by all pages) ────────────────────────────
window.showAppToast = function(msg, type) {
    var existing = document.getElementById('_comeToast');
    if (existing) { clearTimeout(existing._timer); existing.remove(); }
    var el = document.createElement('div');
    el.id = '_comeToast';
    var colors = { success: '#2ecc71', error: '#e74c3c', warn: '#f39c12' };
    el.style.cssText = [
        'position:fixed', 'bottom:80px', 'left:50%',
        'transform:translateX(-50%)', 'padding:10px 20px',
        'border-radius:20px', 'font-size:13px', 'font-weight:600',
        'color:#fff', 'z-index:99999', 'white-space:nowrap',
        'box-shadow:0 4px 16px rgba(0,0,0,0.4)', 'opacity:1',
        'pointer-events:none', 'font-family:Inter,sans-serif',
        'transition:opacity 0.4s ease',
        'background:' + (colors[type] || colors.success)
    ].join(';');
    el.textContent = msg;
    document.body.appendChild(el);
    el._timer = setTimeout(function() {
        el.style.opacity = '0';
        setTimeout(function() { if (el.parentNode) el.remove(); }, 420);
    }, 3000);
};
