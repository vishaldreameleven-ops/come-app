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
