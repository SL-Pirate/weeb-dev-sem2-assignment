function validateNotNull(value, id) {
    if (value == null) {
        document.getElementById(id).style.display = "block";
        return false;
    }

    document.getElementById(id).style.display = "none";
    return true;
}

function getRating () {
    let val = null;
    const elements = document.getElementsByName("satisfaction-value");
    elements.forEach(element => {
        if (element.checked) {
            val = element.value;
        }
    });

    console.log(val);
    return val;
}

function getMoreDetails () {
    const moreDetails = document.getElementById("tellmore-text").value;

    if (moreDetails == '') {
        return null;
    }
    
    return moreDetails;
}

function getTaskValueById(id) {
    const value = document.getElementById(id).value;

    if (value == "none") {
        return null;
    }

    return value;
}

function sendMail () {
    const rating = getRating();
    const moreDetails = getMoreDetails();
    const taskToday = getTaskValueById("task-today");
    const taskAgain = getTaskValueById("task-again");
    const newLine = "%0D%0A";

    if (validateNotNull(rating, "rate-required") 
    & validateNotNull(moreDetails, "tellmore-required")) {
        const emailAddr = "isira.20223184@iit.ac.lk";
        const subject = "Feedback for Travel Sri Lanka website";
        let body = 
            "Hello Isira," +
            newLine +
            newLine +
            "I rate my experience with your site " + 
            rating +
            "/10." +
            newLine +
            moreDetails +
            "." +
            newLine;

        if (taskToday != null) {
            body += "I used " +
            taskToday + 
            " to complete this task." +
            newLine;
        }
        if (taskAgain != null) {
            body += "I will be using " +
            taskAgain + 
            " to complete this task when I do again." +
            newLine;
        }

        body += "Thank you for creating and maintaining this site!";

        let email = "mailto:" + emailAddr + "?subject=" + subject + "&body=" + body;
        console.log(email);
        window.open(email, '_blank');
    }
}
