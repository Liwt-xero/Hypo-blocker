chrome.storage.local.get('logs', function (result) {
    logs = result.logs;
    if(logs) {
       var arrLogs = logs.split("|YYY|");
       arrLogs = arrLogs.reverse(); //recent items on top
       var logsLength = arrLogs.length;
       var html = '<ul class="list-group">';
       for(var i=0;i<logsLength;i++) {
            var arrLogItem = arrLogs[i].split("|ZZZ|");
            var url = arrLogItem[0];
            var time = arrLogItem[1];
            html = html + '<li class="list-group-item">' + time + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + url + '</li>';
       }
       html = html + '</ul>';
    } else {
       var html = '<ul class="list-group"><li class="list-group-item"> Empty Logs!! </li></ul>';
    }

    document.getElementById("logsDiv").innerHTML = html;

});





document.getElementById("clear").addEventListener("click", function(){
    chrome.storage.local.remove("logs");
    window.location = window.location.href;
});



