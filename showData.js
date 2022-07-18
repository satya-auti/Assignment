// let allUsersData = [];
// let srNo = 0;
    function showData() {
        document.getElementById('table-data').innerHTML = '';
        let tableHeadNames = ["Sr. No", " Name ", " Email ", " Contact ", " Update ", " Delete "];
        // srNo++;
        // let userData = {};

        // let userName = document.getElementById("userName").value;
        // let eMail = document.getElementById("eMail").value;
        // let contact = document.getElementById("contact").value;

        let updateButton = document.createElement("button");
        updateButton.type = "button";
        // updateButton.value ="edit()";

        let updateButtonName = document.createTextNode("Edit");
        updateButton.append(updateButtonName);
        updateButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded';
        // updateButton.onclick= "edit()";

        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.value ="Delete";
        deleteButton.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded';

        let deleteButtonName = document.createTextNode("Delete");
        deleteButton.append(deleteButtonName);

        // userData = {
        //     srNo : srNo,
        //     userName : userName,
        //     eMail : eMail,
        //     contact : contact,
        //     update : updateButton,
        //     delete : deleteButton
        // };
        
        // alert("Hello "+userName);
        // allUsersData.push(userData);
        // console.log(" User Data ");
        // console.log(userData);
        // console.log(" All User Data");
        // console.log(allUsersData);
        // // alert("Hii");
        

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
    
        allUsersData.forEach(function (user, i) {
            let tableRow1 = document.createElement("tr");
            let tableData = document.createElement("td");
            // let tableDataSr = document.createTextNode(srNo);
            // tableData.append(tableDataSr);
            tableData.append(user.srNo);
            
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
            tableData4.addEventListener("click",edit,false);
            // user.update.onclick = edit();
            tableRow1.append(tableData4);

            let tableData5 = document.createElement("td");
            // let tableDataDelete = document.createTextNode(deleteButton);
            tableData5.user = user ;
            tableData5.append(user.delete);
           var data= tableData5.addEventListener("click",deleteUser,false);
           console.log("deleted",data); 
           
           tableRow1.append(tableData5);

            // tableRow1.append(tableData, tableData1, tableData2, tableData3, tableData4, tableData5);
            table.append(tableRow1);
           
        });


        // srNo++;
        // let tableRow1 = document.createElement("tr");
        // let tableData = document.createElement("td");
        // // let tableDataSr = document.createTextNode("1");
        // // tableData.append(tableDataSr);
        // tableData.append(user.length);

        // let tableData1 = document.createElement("td");
        // // let tableDataName = document.createTextNode("Satya");
        // // tableData1.append(tableDataName);
        // tableData1.append(user.userName);
            
        // let tableData2 = document.createElement("td");
        // // let tableDataEmail = document.createTextNode("auti.satyvan3@gmail.com");
        // // tableData2.append(tableDataEmail);
        // tableData2.append(user.eMail);

        // let tableData3 = document.createElement("td");
        // // let tableDataContact = document.createTextNode("8888044524");
        // // tableData3.append(tableDataContact);
        // tableData3.append(user.contact);

        // let tableData4 = document.createElement("td");
        // // // let tableDataUpdate = document.createTextNode(updateButton);
        // // tableData4.append(updateButton);
        // tableData4.append(updateButton);

        // let tableData5 = document.createElement("td");
        // // // let tableDataDelete = document.createTextNode(deleteButton);
        // tableData5.append(deleteButton);

        // tableRow1.append(tableData, tableData1, tableData2, tableData3, tableData4, tableData5);
        
    // });
        // document.body.append(table);
        const allTableData = document.getElementById('table-data');
        allTableData.append(table);
        event.preventDefault(event);
      
    }

   