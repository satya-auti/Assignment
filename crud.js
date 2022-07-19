let allUsersData = [];
var table = document.getElementById('table-data');
    
    isEdit=false;
    indexOfEdit=-1;
    function userDetails() {
        // allTableData.innerHTML='';
        document.getElementById('table-data').innerHTML='';
        console.log("submit clicked");
        // let tableHeadNames = ["Sr. No", " Name ", " Email ", " Contact ", " Update ", " Delete "];
        

        let updateButton = document.createElement("button");
        updateButton.type = "button";
        let updateButtonName = document.createTextNode("Edit");
        updateButton.append(updateButtonName);
        updateButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded';
       

        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.value ="Delete";
        deleteButton.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded';

        let deleteButtonName = document.createTextNode("Delete");
        deleteButton.append(deleteButtonName);

        const userData = {
          
            userName :  document.getElementById("userName").value,
            eMail :     document.getElementById("eMail").value,
            contact :   document.getElementById("contact").value,      
            update : updateButton,
            delete : deleteButton
        };

        if(isEdit==true){
            allUsersData[indexOfEdit]=userData;
            indexOfEdit=-1;
            isEdit=false;
            let b=document.getElementById('submit');
            b.innerText='Save Details';
        }
        
        else{
            allUsersData.push(userData);
        }
        document.getElementById('userName').value = "";
        document.getElementById('eMail').value = "";
        document.getElementById('contact').value = "";
        console.log(" User Data ");
        console.log(userData);
        console.log(" All User Data");
        console.log(allUsersData);
        showData();
    }
        function showData(){
            let tableHeadNames = ["Sr. No", " Name ", " Email ", " Contact ", " Update ", " Delete "];
        let table = document.createElement("table");
        table.className = 'border border-2';
        table.style.border="2";
        table.style="align-center";
        let tableRow = document.createElement("tr");
        
        tableHeadNames.forEach(ele => {
            // let tableRow = document.createElement("tr");
            let tableHead = document.createElement("th");
            let headName = document.createTextNode(ele);
            
            console.log(ele);
            tableHead.append(headName);
            tableRow.append(tableHead);
        });
        table.append(tableRow);
 
        allUsersData.forEach((user, i) =>
         {
            let tableRow1 = document.createElement("tr");
            let tableData = document.createElement("td");
            let tableDataSr = document.createTextNode(i+1);
            tableData.append(tableDataSr); 
            tableRow1.append(tableData);

            let tableData1 = document.createElement("td");
            // let tableDataName = document.createTextNode(user.userName);
            // tableData1.append(tableDataName);
            tableData1.append(user.userName);
            tableRow1.append(tableData1);
                
            let tableData2 = document.createElement("td");
            // let tableDataEmail = document.createTextNode(user.eMail);
            // tableData2.append(tableDataEmail);
            tableData2.append(user.eMail);
            tableRow1.append(tableData2);

            let tableData3 = document.createElement("td");
            // let tableDataContact = document.createTextNode(user.contact);
            // tableData3.append(tableDataContact);
            tableData3.append(user.contact);
            tableRow1.append(tableData3);

            let tableData4 = document.createElement("td");
            // let tableDataUpdate = document.createTextNode(updateButton);
            
            tableData4.user = user;
            tableData4.append(user.update);
            // tableData4.addEventListener("click",edit,false);
            // user.update.onclick = edit();
            tableData4.addEventListener('click',()=>{
                console.log("edit clicked");
                document.getElementById('userName').value= allUsersData[i].userName;
                document.getElementById('eMail').value= allUsersData[i].eMail;
                document.getElementById('contact').value= allUsersData[i].contact;
               
                isEdit=true;
                indexOfEdit=i;
                const myButton = document.getElementById('submit');
                myButton.innerText = 'Update';
            });
            tableRow1.append(tableData4);

            let tableData5 = document.createElement("td");
            tableData5.addEventListener('click',()=>{
                console.log("delete clicked");
                document.getElementById('table-data').innerHTML='';
                allUsersData.splice(i,1);
                showData();
    
            });
         
            tableData5.append(user.delete);
       
           
           tableRow1.append(tableData5);

            // tableRow1.append(tableData, tableData1, tableData2, tableData3, tableData4, tableData5);
            table.append(tableRow1);
           
        });
       
        const allTableData = document.getElementById('table-data');
        allTableData.append(table);
       
       
       
    }

    function resetFormValue() {
        console.log("reset call");
        const myButton = document.getElementById('submit');
        myButton.innerText = 'Save Details';
        indexOfEdit=-1;
        isEdit=false;
        document.getElementById('userName').value = "";
        document.getElementById('eMail').value = "";
        document.getElementById('contact').value = "";
        
    }
