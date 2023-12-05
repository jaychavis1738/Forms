let content;

document.getElementById("form_submit").addEventListener("click", mealPlan);
document.getElementById("form_clear").addEventListener("click", clearForm);


function mealPlan(){
    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    goal = document.getElementById("goal").value;
    breakfast= document.getElementById("breakfast").value;
    snackAM= document.getElementById("snack1").value;
    lunch = document.getElementById("lunch").value;
    snackPM = document.getElementById("snack2").value;
    dinner = document.getElementById("dinner").value;


    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(userEmail)){
        window.alert("Must provide a valid email.");
    }else{
        content = ('<html>\n<head>\n<title>Personalized Meal Plan</title>\n');
        content +=('<style>\n');
        content +=('body { font-family: Arial, sans-serif; }\n');
        content +=('table { width: 60%; margin: auto; border-collapse: collapse; margin-top: 20px; }\n');
        content +=('th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; }\n');
        content +=('thead th { background-color: #f2f2f2; }\n');
        content +=('</style>\n</head>\n<body>\n');
        content +=('Hello, '+ userName + ', your customized meal plan has been created aligned with your goal: '+ goal + '\n');
        content +=('<table>\n')
        content +=('<thead>\n<tr>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>\n</thead>\n');
        content +=('<tbody>\n<tr>\n<td>'+ breakfast + '</td>\n<td>'+ breakfast + '</td>\n<td>'+ breakfast +'</td>\n<td>'+ breakfast + '</td>\n<td>'+ breakfast + '</td>\n<td>'+ breakfast + '</td>\n<td>'+ breakfast + '</td>\n</tr>\n');
        content +=('<tr>\n<td>'+ snackAM + '</td>\n<td>'+ snackAM + '</td>\n<td>' + snackAM + '</td>\n<td>'+ snackAM + '</td>\n<td>'+ snackAM + '</td>\n<td>' + snackAM + '</td>\n<td>'+ snackAM + '</td>\n</tr>\n');
        content +=('<tr>\n<td>'+ lunch + '</td>\n<td>'+ lunch + '</td>\n<td>' + lunch + '</td>\n<td>' + lunch + '</td>\n<td>' + lunch + '</td>\n<td>' + lunch + '</td>\n<td>' + lunch + '</td>\n</tr>\n');
        content +=('<tr>\n<td>'+ snackPM + '</td>\n<td>'+ snackPM + '</td>\n<td>' + snackPM + '</td>\n<td>'+ snackPM + '</td>\n<td>'+ snackPM + '</td>\n<td>'+ snackPM + '</td>\n<td>'+ snackPM + '</td>\n</tr>\n');
        content +=('<tr>\n<td>' + dinner + '</td>\n<td>' + dinner + '</td>\n<td>' + dinner + '</td>\n<td>' + dinner + '</td>\n<td>' + dinner + '</td>\n<td>'+ dinner + '</td>\n<td>' + dinner + '</td>\n</tr>\n');
        content +=('</table>\n')
        content +=('</body>\n</html>')

        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(content);
        downloadForm(content);
        printForm();
    };
    
}

function clearForm(){
    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    goal = document.getElementById("goal").value;
    breakfast= document.getElementById("breakfast").value;
    snackAM= document.getElementById("snack1").value;
    lunch = document.getElementById("lunch").value;
    snackPM = document.getElementById("snack2").value;
    dinner = document.getElementById("dinner").value;
    
    userName = "";
    userEmail = "";
    goal = "";
    breakfast = "";
    snackAM = "";
    lunch = "";
    snackPM="";
    dinner = ""

    alert("You meal plan has been cleared.")
}

document.getElementById("form_download").addEventListener("click", downloadForm);


function downloadForm(content) {
    var formData = getFormData();
    var jsonData = JSON.stringify(formData, null, 2);

    var blob = new Blob([content], { type: 'text/html' });

    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mealPlanner.html';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);
}
function getFormData() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);

    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    return data;
}

document.getElementById("form_print").addEventListener("click", printForm)

function printForm(){
    console.log(content);
    var printWindow = window.open('', '_blank');
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();

}