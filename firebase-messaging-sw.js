// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA4zWexTGnYozLFYrOE-id8Wpr5bY_c_jo",
    authDomain: "proje-bot-tadawl.firebaseapp.com",
    projectId: "proje-bot-tadawl",
    storageBucket: "proje-bot-tadawl.firebasestorage.app",
    messagingSenderId: "1037601815941",
    appId: "1:1037601815941:web:fea9970c32cc79de0898ec",
    measurementId: "G-HW5Z8FD6VJ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png' // دەتوانیت وێنەی لۆگۆکەت لێرە دابنێیت لە داهاتوودا
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
