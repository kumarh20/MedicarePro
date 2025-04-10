export class NotificationManager{
    constructor(){
        if ("Notification" in window) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Notification permission granted!");
                }
            });
        }
    }

    
    
    
    showNotification(title, message) {
        if (Notification.permission === "granted") {
            new Notification(title, {
                body: message,
                icon: "notification-icon.png", // Replace with an actual icon
            });
        } else {
            console.log("Permission not granted for notifications.");
        }
    }
}