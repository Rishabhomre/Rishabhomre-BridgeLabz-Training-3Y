// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Secure only when every required condition is true
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! and || to demonstrate additional Boolean logic
    const isUnsafe = !isSecure || !isAlarmOn;

    console.log(
        `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
        `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} => ` +
        `${isSecure && !isUnsafe ? "Secure" : "Unsafe"}`
    );
}

// Test multiple outcomes
checkSecurity(true, true, true, true);    // Secure
checkSecurity(true, true, false, true);   // Unsafe: alarm is off
checkSecurity(false, true, true, true);   // Unsafe: door is unlocked
checkSecurity(true, false, true, true);   // Unsafe: window is open
checkSecurity(true, true, true, false);   // Unsafe: owner is not inside
