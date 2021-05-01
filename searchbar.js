let suggestions = [
    
    "A1AT Deficiency",          
    "AAT",
    "AAT Deficiency",
    "Abdominal Migraine",
    "Abercrombie Syndrome",
    "Abnormal Pap Test",
    "Abortion",
    "Abruptio Placenta",
    "Abruption, Placental",
    "Abscessed Tooth",
    "Absence of Menstruation",
    "Absence Seizure",
    "Abuse, Child",
    "Acantholysis Bullosa",
    "Acanthosis Bullosa",
    "Acanthosis Nigricans",
    "ACC -- Adenoid Cystic...",
    "ACC -- Agenesis of Co...",
    "ACC -- Aplasia Cutis C...",
    "ACH",
    "Achalasia",
    

];

// getting all required elements
const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");
const suggBox = searchForm.querySelector(".autocom-box");
const icon = searchForm.querySelector(".icon");
let linkTag = searchForm.querySelector("a");
let webLink;

// if user press any key and release
searchFormInput.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = '<li>' + data + '</li>';
        });
        searchForm.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchForm.classList.remove("active"); //hide autocomplete box
    }
}

function select(element) {
    let selectData = element.textContent;
    searchFormInput.value = selectData;
    icon.onclick = () => {
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchForm.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = searchFormInput.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}