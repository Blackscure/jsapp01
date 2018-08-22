document.getElementById('issueInputForm').addEventListner('submit'.saveIssue):

function saveIssues(e) {
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    var issueStatus = 'open';

    var issue = {
        id: issued,
        description: issueDesc,
        serverity: issueSeverity,
        assignedTo: issueAssignedTo;
        status: issueStatus
    }

    if (localstorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localstorage.setItem('issues', JSON.stringfy(issues));

    } else {
      var issues = JSON.parse(localstorage.getItem('issues'));
      issues.push(issue);
      localstorage.setItem('issues',JSON.stringfy(issues));
    }


    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}



function fetchIssues() {
    var issues = JSON.parse(localstorage.getItem('issues'));
    var issuesListe = document.getElementById('issuesList');


    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var serverity = issues[i].serverity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<div class="Well">'+
                                '<h6>Issue ID:' + id + '</h6>'+
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + desc + '</h3>'+
                                '<p><span class="glyphicon glyphicon-time"></span>' + serverity +  '</p>'+
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo +  '</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')"class ="btn btn-warning" >Close</a>'+
                                '<a href="#" onclick="deleteIssueclass(\''+id+'\')"class ="btn btn-danger" >Delete</a>'+
                                '</div>';

    }
}