import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB1pwgbFegVwhAjomZbG6gGM7UsMxw16Ns",
    authDomain: "portfolio-e3161.firebaseapp.com",
    projectId: "portfolio-e3161",
    storageBucket: "portfolio-e3161.appspot.com",
    messagingSenderId: "328528868654",
    appId: "1:328528868654:web:dfeb3082c05f2875b776bf"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

getDownloadURL(ref(storage, "cv/Daniel Israelov - Programmer.pdf"))
    .then((url) => {
        document.getElementById('proG').href = url;
    });
