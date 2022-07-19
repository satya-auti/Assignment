function edit() {
    console.log(this.user);
    let updateSrNo = this.user.srNo;
    document.getElementById("userName").value = this.user.userName;
    document.getElementById("eMail").value = this.user.eMail;
    document.getElementById("contact").value = this.user.contact;

    let updateUserName = document.getElementById("userName").value;
    let updateEmail = document.getElementById("eMail").value;
    let updateContact = document.getElementById("contact").value;
    
    if (this.user.srNo == updateSrNo) {
        userData = {
            srNo : updateSrNo,
            userName : updateUserName,
            eMail : updateEmail,
            contact : updateContact,
            update : updateButton,
            delete : deleteButton
        };
        
        // alert("Hello "+userName);
        allUsersData.push(userData);
        console.log(" User Data ");
        console.log(userData);
        showData();
    }

    
    
}

            // isEdit=false;
            // indexOfEdit=-1;
            // function submitFormValues() {
            //     console.log("Submit clicked");
            //     const userObj = {
            //         name: document.getElementById('name').value,
            //         email: document.getElementById('email').value,
            //         contact: document.getElementById('mob').value,
            //         // state: document.getElementById('state').value,
            //         // gender: document.getElementById('gender').value
            //     };
            //     if(isEdit===true){
            //         console.log(indexOfEdit);
            //         users[indexOfEdit]=userObj;
            //         indexOfEdit=-1;
            //         isEdit=false;
            //         let b=document.getElementById('submit-button');
            //         b.innerText='Submit';
            //     }
            //   else{
            //     users.push(userObj);}
            //     document.getElementById('name').value = '';
            //     document.getElementById('email').value = '';
            //     document.getElementById('mob').value = '';
            //     // document.getElementById('state').value = '';
            //     // document.getElementById('gender').value = '';
            //     table.innerHTML = '';
            //     createTable();
            // }