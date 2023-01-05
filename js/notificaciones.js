var $output, FirebasePlugin;

// Init
function onDeviceReady(){
    FirebasePlugin = window.FirebasePlugin;
    $output = $('#log-output');
    log("deviceready");
    
    //Register handlers
    FirebasePlugin.onMessageReceived(function(message) {
        try{
            console.log("onMessageReceived");
            console.dir(message);
            if(message.messageType === "notification"){
                handleNotificationMessage(message);
            }else{
                handleDataMessage(message);
            }
        }catch(e){
            logError("Exception in onMessageReceived callback: "+e.message);
        }

    }, function(error) {
        logError("Failed receiving FirebasePlugin message", error);
    });

    FirebasePlugin.onTokenRefresh(function(token){
        log("Token refreshed: " + token)
    }, function(error) {
        logError("Failed to refresh token", error);
    });

 
    // Custom FCM receiver plugin
    cordova.plugin.customfcmreceiver.registerReceiver(function(message){
        log("Received custom message: "+message);
    });

    checkNotificationPermission(false); // Check permission then get token

    checkAutoInit();
    isAnalyticsCollectionEnabled();
    isPerformanceCollectionEnabled();
    isCrashlyticsCollectionEnabled();
    isUserSignedIn();

    // Platform-specific
    $('body').addClass(cordova.platformId);
    if(cordova.platformId === "android"){
        initAndroid();
    }else if(cordova.platformId === "ios"){
        initIos();
    }
}
$(document).on('deviceready', onDeviceReady);

var initIos = function(){
    FirebasePlugin.onApnsTokenReceived(function(token){
        log("APNS token received: " + token)
    }, function(error) {
        logError("Failed to receive APNS token", error);
    });

    FirebasePlugin.registerInstallationIdChangeListener(function(installationId){
        log("Installation ID changed - new ID: " + installationId);
    });
};


    
// Notifications
var checkNotificationPermission = function(requested){
    FirebasePlugin.hasPermission(function(hasPermission){
        if(hasPermission){
            log("Remote notifications permission granted");
            // Granted
            FirebasePlugin.getToken(function(fcmToken) {
    console.log(fcmToken);
}, function(error) {
    console.error(error);
});
        }else if(!requested){
            // Request permission
            log("Requesting remote notifications permission");
            FirebasePlugin.grantPermission(checkNotificationPermission.bind(this, true));
        }else{
            // Denied
            logError("Notifications won't be shown as permission is denied");
        }
    });
};

var checkAutoInit = function(){
    FirebasePlugin.isAutoInitEnabled(function(enabled){
        log("Auto init is " + (enabled ? "enabled" : "disabled"));
        $('body')
            .addClass('autoinit-' + (enabled ? 'enabled' : 'disabled'))
            .removeClass('autoinit-' + (enabled ? 'disabled' : 'enabled'));
    }, function(error) {
        logError("Failed to check auto init", error);
    });
};

var enableAutoInit = function(){
    FirebasePlugin.setAutoInitEnabled(true, function(){
        log("Enabled auto init");
        checkAutoInit();
    }, function(error) {
        logError("Failed to enable auto init", error);
    });
};

var disableAutoInit = function(){
    FirebasePlugin.setAutoInitEnabled(false, function(){
        log("Disabled auto init");
        checkAutoInit();
    }, function(error) {
        logError("Failed to disable auto init", error);
    });
};

var getID = function(){
    FirebasePlugin.getId(function(id){
        log("Got FCM ID: " + id)
    }, function(error) {
        logError("Failed to get FCM ID", error);
    });
};

var getToken = function(){
    FirebasePlugin.getToken(function(token){
        log("Got FCM token: " + token)
    }, function(error) {
        logError("Failed to get FCM token", error);
    });
};


// Crashlytics
function setCrashlyticsCollectionEnabled(enabled){
    FirebasePlugin.setCrashlyticsCollectionEnabled(enabled, function(){
        log("Crashlytics data collection has been " + (enabled ? "enabled" : "disabled"));
    },function(error){
        logError("Failed to enable crashlytics data collection", error);
    });
}

function isCrashlyticsCollectionEnabled(){
    FirebasePlugin.isCrashlyticsCollectionEnabled( function(enabled){
        log("Crashlytics data collection setting is " + (enabled ? "enabled" : "disabled"));
    },function(error){
        logError("Failed to fetch crashlytics data collection setting", error);
    });
}

function setCrashlyticsUserId(){
    FirebasePlugin.setCrashlyticsUserId("crashlytics_user_id", function(){
        log("Set crashlytics user ID");
    },function(error){
        logError("Failed to set crashlytics user ID", error);
    });
}

function setCrashlyticsCustomKey(){
    FirebasePlugin.setCrashlyticsCustomKey("my_key", "foo", function(){
        log("Set crashlytics custom key");
    },function(error){
        logError("Failed to set crashlytics custom key", error);
    });
}

function sendNonFatal(){
    FirebasePlugin.logError("This is a non-fatal error", function(){
        log("Sent non-fatal error");
    },function(error){
        logError("Failed to send non-fatal error", error);
    });
}

function causeJsException(){
    // Cause an uncaught JS exception
    var foo = someUndefinedVariable.bar;
}

function logCrashMessage(){
    FirebasePlugin.logMessage("A custom message about this crash", function(){
        console.log("Logged crash message - it will be sent with the next crash");
    },function(error){
        logError("Failed to log crash message", error);
    });
}

function sendCrash(){
    FirebasePlugin.sendCrash();
}

function sendNdkCrash(){
    helloc.causeCrash();
}

function didCrashOnPreviousExecution(){
    FirebasePlugin.didCrashOnPreviousExecution(function(didCrashOnPreviousExecution){
        log("Did crash on previous execution: "+didCrashOnPreviousExecution);
    }, function(error){
        logError("Failed to check crash on previous execution:" + error);
    });
}

// Analytics
function setAnalyticsCollectionEnabled(){
    FirebasePlugin.setAnalyticsCollectionEnabled(true, function(){
        log("Enabled analytics data collection");
    },function(error){
        logError("Failed to enable analytics data collection", error);
    });
}

function isAnalyticsCollectionEnabled(){
    FirebasePlugin.isAnalyticsCollectionEnabled( function(enabled){
        log("Analytics data collection setting is " + (enabled ? "enabled" : "disabled"));
    },function(error){
        logError("Failed to fetch Analytics data collection setting", error);
    });
}

function logEvent(){
    FirebasePlugin.logEvent("my_event", {
        string: "bar",
        integer: 10,
        float: 1.234
    }, function(){
        log("Logged event");
    },function(error){
        logError("Failed to log event", error);
    });
}

function setScreenName(){
    FirebasePlugin.setScreenName("my_screen", function(){
        log("Sent screen name");
    },function(error){
        logError("Failed to send screen name", error);
    });
}

function setUserID(){
    FirebasePlugin.setUserId("user_id", function(){
        log("Set user ID");
    },function(error){
        logError("Failed to set user ID", error);
    });
}

function setUserProperty(){
    FirebasePlugin.setUserProperty("some_key", "some_value", function(){
        log("Set user property");
    },function(error){
        logError("Failed to set user property", error);
    });
}

// Performance
function setPerformanceCollectionEnabled(){
    FirebasePlugin.setPerformanceCollectionEnabled(true, function(){
        log("Enabled performance data collection");
    },function(error){
        logError("Failed to enable performance data collection", error);
    });
}

function isPerformanceCollectionEnabled(){
    FirebasePlugin.isPerformanceCollectionEnabled( function(enabled){
        log("Performance data collection setting is " + (enabled ? "enabled" : "disabled"));
    },function(error){
        logError("Failed to fetch Performance data collection setting", error);
    });
}

var traceName = "my_trace";
function startTrace(){
    FirebasePlugin.startTrace(traceName, function(){
        log("Trace started");
    },function(error){
        logError("Failed to start trace", error);
    });
}

function incrementCounter(){
    FirebasePlugin.incrementCounter(traceName, "my_counter", function(){
        log("Incremented trace counter");
    },function(error){
        logError("Failed to increment trace counter", error);
    });
}

function stopTrace(){
    FirebasePlugin.stopTrace(traceName, function(){
        log("Trace stopped");
    },function(error){
        logError("Failed to stop trace", error);
    });
}


