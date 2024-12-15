function Fun1()
{
    //First Name
    let Output1 = document.getElementById("fname").value;
    //console.log(Output1);
    document.getElementById("Resume-FName").innerHTML = Output1;

    //Last Name
    let Output2 = document.getElementById("lname").value;
    //console.log(Output2);
    document.getElementById("Resume-LName").innerHTML = Output2;

    //Middle Name
    let Output8 = document.getElementById("mname").value;
    if(Output8 !== "Singh"){
        document.getElementById("Resume-MName").style.display = "inline";
        console.log(Output8);
        document.getElementById("Resume-MName").innerHTML = "&nbsp" + Output8;
    }
    //Pincode
    let Output3 = document.getElementById("pin").value;
    //console.log(Output3);
    document.getElementById("Resume-Pincode").innerHTML = Output3;

    //City
    let Output4 = document.getElementById("city").value;
    //console.log(Output4);
    document.getElementById("Resume-City").innerHTML = Output4;

    //Country
    let Output5 = document.getElementById("country").value;
    //console.log(Output5);
    document.getElementById("Resume-Country").innerHTML = Output5;

    //Phone
    let Output6 = document.getElementById("phone").value;
    //console.log(Output6);
    document.getElementById("Resume-Phone").innerHTML = Output6;

    //Email
    let Output7 = document.getElementById("email").value;
    //console.log(Output7);
    document.getElementById("Resume-Email").innerHTML = Output7;

    //Address
    let Output9 = document.getElementById("address").value;
    //console.log(Output9);
    document.getElementById("Resume-Address").innerHTML = Output9;

    //SchoolName-10
    let Output10 = document.getElementById("SchoolName-10").value;
    //console.log(Output10);
    document.getElementById("Resume-SchoolName-10").innerHTML = Output10;

    //School10-Percent
    let Output11 = document.getElementById("PERCENT-10").value;
    //console.log(Output11);
    document.getElementById("Resume-Percent10").innerHTML = Output11;

    //SchoolName-12
    let Output12 = document.getElementById("SchoolName-12").value;
    //console.log(Output12);
    document.getElementById("Resume-SchoolName-12").innerHTML = Output12;

    //School10-Percent
    let Output13 = document.getElementById("PERCENT-12").value;
    //console.log(Output13);
    document.getElementById("Resume-Percent12").innerHTML = Output13;

    //Bacherlors-CGPA
    let Output14 = document.getElementById("CGPA-Bachelors").value;
    //console.log(Output14);
    document.getElementById("Resume-CGPA-Bachelors").innerHTML = Output14;

    //Bacherlors-CollegeName
    let Output15 = document.getElementById("CollegeName-Bachelors").value;
    //console.log(Output15);
    document.getElementById("Resume-CollegeName-Bachelors").innerHTML = Output15;

    //Bacherlors-Degree
    let Output16 = document.getElementById("Bachelors-Education").value;
    //console.log(Output16);
    document.getElementById("Resume-Bachelors-Degree").innerHTML = Output16;


    //Showing Masters Content
    let Output17 = document.getElementById("Checking-Master").value;
    if (Output17 === "Yes")
    {
        document.getElementById("Resume_Masters-Space").style.display = "inline";
    }

    //Masters-CollegeName
    let Output18 = document.getElementById("CollegeName-Masters").value;
    //console.log(Output18);
    document.getElementById("Resume-CollegeName-Masters").innerHTML = Output18;

    //Masters-CGPA
    let Output19 = document.getElementById("CGPA-masters").value;
    //console.log(Output19);
    document.getElementById("Resume-CGPA-Masters").innerHTML = Output19;

    //Masters-Degree
    let Output20 = document.getElementById("Masters-Education").value;
    //console.log(Output20);
    document.getElementById("Resume-Masters-Degree").innerHTML = Output20;

    //Experience-Jobtitle
    let Output21 = document.getElementById("Jobtitle1").value;
    //console.log(Output21);
    document.getElementById("Resume-Jobtitle1").innerHTML = Output21;

    //Experience-Job-Employer
    let Output22 = document.getElementById("Employer1").value;
    //console.log(Output22);
    document.getElementById("Resume-Employer1").innerHTML = Output22;

    //Experience-Joining-Date
    let Output23 = document.getElementById("Joining_date1").value;
    //console.log(Output23);
    let temp = Output23.substring(0, 4);
    //console.log(temp);
    let temp1 = Output23.substring(5, 7);
    //console.log(temp1);
    let temp2;
    if (temp1 === "01")
    {
        temp2 = "Jan";
    }
    else if (temp1 === "02"){
        temp2 = "Feb";
    }
    else if (temp1 === "03")
        {
            temp2 = "Mar";
    }
    else if (temp1 === "04")
        {
           temp2 = "Apr";
    }
    else if (temp1 === "05")
        {
           temp2 = "May";
    }
    else if (temp1 === "06")
        {
           temp2 = "Jun";
    }
    else if (temp1 === "07")
        {
           temp2 = "July";
    }
    else if (temp1 === "08")
        {
            temp2 = "Aug";
    }
    else if (temp1 === "09")
        {
            temp2 = "Sep";
    }
    else if (temp1 === "10")
        {
            temp2 = "Oct";
    }
    else if (temp1 === "11")
        {
            temp2 = "Nov";
    }
    else
        {
            temp2 = "Dec";
    }
    document.getElementById("Resume-Joining_date1").innerHTML = temp2 + "&nbsp" + temp;

    //Experience-Ending-Date
    let Output24 = document.getElementById("Leaving_date1").value;
    //console.log(Output24);
    let temp3 = Output24.substring(0, 4);
    //console.log(temp);
    let temp4 = Output24.substring(5, 7);
    //console.log(temp1);
    let temp5;
    if (temp4 === "01")
    {
        temp5 = "Jan";
    }
    else if (temp4 === "02"){
        temp5 = "Feb";
    }
    else if (temp4 === "03")
        {
            temp5 = "Mar";
    }
    else if (temp4 === "04")
        {
           temp5 = "Apr";
    }
    else if (temp4 === "05")
        {
           temp5 = "May";
    }
    else if (temp4 === "06")
        {
           temp5 = "Jun";
    }
    else if (temp4 === "07")
        {
           temp5 = "July";
    }
    else if (temp4 === "08")
        {
            temp5 = "Aug";
    }
    else if (temp4 === "09")
        {
            temp5 = "Sep";
    }
    else if (temp4 === "10")
        {
            temp5 = "Oct";
    }
    else if (temp4 === "11")
        {
            temp5 = "Nov";
    }
    else
        {
            temp5 = "Dec";
    }
    document.getElementById("Resume-Leaving_date1").innerHTML = temp5 + "&nbsp" + temp3;




    //Experience-Jobtitle
    let Output25 = document.getElementById("Jobtitle2").value;
    //console.log(Output25);
    document.getElementById("Resume-Jobtitle2").innerHTML = Output25;

    //Experience-Job-Employer
    let Output26 = document.getElementById("Employer2").value;
    //console.log(Output26);
    document.getElementById("Resume-Employer2").innerHTML = Output26;

    //Experience-Joining-Date
    let Output27 = document.getElementById("Joining_date2").value;
    //console.log(Output27);
    let temp6 = Output27.substring(0, 4);
    //console.log(temp);
    let temp7 = Output27.substring(5, 7);
    //console.log(temp1);
    let temp8;
    if (temp7 === "01")
    {
        temp8 = "Jan";
    }
    else if (temp7 === "02")
    {
        temp8 = "Feb";
    }
    else if (temp7 === "03")
        {
            temp8 = "Mar";
    }
    else if (temp7 === "04")
        {
           temp8 = "Apr";
    }
    else if (temp7 === "05")
        {
           temp8 = "May";
    }
    else if (temp7 === "06")
        {
           temp8 = "Jun";
    }
    else if (temp7 === "07")
        {
           temp8 = "July";
    }
    else if (temp7 === "08")
        {
            temp8 = "Aug";
    }
    else if (temp7 === "09")
        {
            temp8 = "Sep";
    }
    else if (temp7 === "10")
        {
            temp8 = "Oct";
    }
    else if (temp7 === "11")
        {
            temp8 = "Nov";
    }
    else
        {
            temp8 = "Dec";
    }
    document.getElementById("Resume-Joining_date2").innerHTML = temp8 + "&nbsp" + temp6;

    //Experience-Ending-Date
    let Output28 = document.getElementById("Leaving_date2").value;
    //console.log(Output28);
    let temp9 = Output28.substring(0, 4);
    //console.log(temp);
    let temp10 = Output28.substring(5, 7);
    //console.log(temp1);
    let temp11;
    if (temp10 === "01")
    {
        temp11 = "Jan";
    }
    else if (temp10 === "02"){
        temp11 = "Feb";
    }
    else if (temp10 === "03")
        {
            temp11 = "Mar";
    }
    else if (temp10 === "04")
        {
           temp11 = "Apr";
    }
    else if (temp10 === "05")
        {
           temp11 = "May";
    }
    else if (temp10 === "06")
        {
           temp11 = "Jun";
    }
    else if (temp10 === "07")
        {
           temp11 = "July";
    }
    else if (temp10 === "08")
        {
            temp11 = "Aug";
    }
    else if (temp10 === "09")
        {
            temp11 = "Sep";
    }
    else if (temp10 === "10")
        {
            temp11 = "Oct";
    }
    else if (temp10 === "11")
        {
            temp11 = "Nov";
    }
    else
        {
            temp11 = "Dec";
    }
    document.getElementById("Resume-Leaving_date2").innerHTML = temp11 + "&nbsp" + temp8;

    let X1 = document.getElementById("Jobtitle2").value;
    let X2 = document.getElementById("Employer2").value;
    let X3 = document.getElementById("Joining_date2").value;
    let X4 = document.getElementById("Leaving_date2").value;

    if (X1 !== "Developer" || X2 !== "Amazon" || X3 !== "2023-02-01" || X4 !== "2024-10-01")
    {
        document.getElementById("Experience2").style.display = "inline";
    }


    //Experience-Jobtitle
    let Output29 = document.getElementById("Jobtitle3").value;
    //console.log(Output29);
    document.getElementById("Resume-Jobtitle3").innerHTML = Output29;

    //Experience-Job-Employer
    let Output30 = document.getElementById("Employer3").value;
    //console.log(Output30);
    document.getElementById("Resume-Employer3").innerHTML = Output30;

    //Experience-Joining-Date
    let Output31 = document.getElementById("Joining_date3").value;
    //console.log(Output31);
    let temp12 = Output31.substring(0, 4);
    //console.log(temp);
    let temp13 = Output31.substring(5, 7);
    //console.log(temp1);
    let temp14;
    if (temp13 === "01")
    {
        temp14 = "Jan";
    }
    else if (temp13 === "02")
    {
        temp14 = "Feb";
    }
    else if (temp13 === "03")
        {
            temp14 = "Mar";
    }
    else if (temp13 === "04")
        {
           temp14 = "Apr";
    }
    else if (temp13 === "05")
        {
           temp14 = "May";
    }
    else if (temp13 === "06")
        {
           temp14 = "Jun";
    }
    else if (temp13 === "07")
        {
           temp14 = "July";
    }
    else if (temp13 === "08")
        {
            temp14 = "Aug";
    }
    else if (temp13 === "09")
        {
            temp14 = "Sep";
    }
    else if (temp13 === "10")
        {
            temp14 = "Oct";
    }
    else if (temp13 === "11")
        {
            temp14 = "Nov";
    }
    else
        {
            temp14 = "Dec";
    }
    document.getElementById("Resume-Joining_date3").innerHTML = temp14 + "&nbsp" + temp12;

    //Experience-Ending-Date
    let Output32 = document.getElementById("Leaving_date3").value;
    //console.log(Output32);
    let temp15 = Output32.substring(0, 4);
    //console.log(temp);
    let temp16 = Output28.substring(5, 7);
    //console.log(temp1);
    let temp17;
    if (temp16 === "01")
    {
        temp17 = "Jan";
    }
    else if (temp16 === "02"){
        temp17 = "Feb";
    }
    else if (temp16 === "03")
        {
            temp17 = "Mar";
    }
    else if (temp16 === "04")
        {
           temp17 = "Apr";
    }
    else if (temp16 === "05")
        {
           temp17 = "May";
    }
    else if (temp16 === "06")
        {
           temp17 = "Jun";
    }
    else if (temp16 === "07")
        {
           temp17 = "July";
    }
    else if (temp16 === "08")
        {
            temp17 = "Aug";
    }
    else if (temp16 === "09")
        {
            temp17 = "Sep";
    }
    else if (temp16 === "10")
        {
            temp17 = "Oct";
    }
    else if (temp16 === "11")
        {
            temp17 = "Nov";
    }
    else
        {
            temp17 = "Dec";
    }
    document.getElementById("Resume-Leaving_date3").innerHTML = temp17 + "&nbsp" + temp15;

    let X5 = document.getElementById("Jobtitle3").value;
    let X6 = document.getElementById("Employer3").value;
    let X7 = document.getElementById("Joining_date3").value;
    let X8 = document.getElementById("Leaving_date3").value;

    if (X5 !== "Developer" || X6 !== "Amazon" || X7 !== "2023-02-01" || X8 !== "2024-10-01")
    {
        document.getElementById("Experience3").style.display = "inline";
    }

    let Output33 = document.getElementById("exp1").value;
    document.getElementById("Info-Experience1").innerHTML = Output33;

    let Output34 = document.getElementById("exp2").value;
    document.getElementById("Info-Experience2").innerHTML = Output34;

    let Output35 = document.getElementById("exp3").value;
    document.getElementById("Info-Experience3").innerHTML = Output35;


    let Output36 = document.getElementById("Choose-Skills").value;
    if(Output36 === "others")
    {
        document.getElementById("skill1").style.display = "inline";
        document.getElementById("AI-Response_skill").style.display = "inline";
        document.getElementById("AISkill-Button1").style.display = "inline";
        let temp25 = document.getElementById("skill1").value;
        console.log(temp25);
        document.getElementById("Info_Skill1").innerHTML = temp25;
    }
    else
    {
        let temp26 = document.getElementById("Choose-Skills").value;
        if(temp26==="active_listening")
        {
            let temp27 = "Active Listening";
            document.getElementById("Info_Skill1").innerHTML = temp27;
        }
        else if(temp26 ==="team_leadership")
        {
            let temp27 = "Team Leader";
            document.getElementById("Info_Skill1").innerHTML = temp27;
               
        }
        else if(temp26 ==="marketing")
        {
            let temp27 = "Marketing";
            document.getElementById("Info_Skill1").innerHTML = temp27;
        }
        else if(temp26 ==="network_security")
        {
            let temp27 = "Network Security";
            document.getElementById("Info_Skill1").innerHTML = temp27;
        }
        else if(temp26 ==="devops")
        {
            let temp27 = "Devops";
            document.getElementById("Info_Skill1").innerHTML = temp27;
        }
        else if(temp26 ==="financial_analysis")
        {
            let temp27 = "Financial Analysis";
            document.getElementById("Info_Skill1").innerHTML = temp27;
        }
        document.getElementById("skill1").style.display = "none";
        document.getElementById("AI-Response_skill").style.display = "none";
        document.getElementById("AISkill-Button1").style.display = "none";
    }
    
    let Output37 = document.getElementById("Choose-Skills1").value;
    if(Output37 === "others")
    {
        document.getElementById("skill2").style.display = "inline";
        document.getElementById("AI-Response_skill2").style.display = "inline";
        document.getElementById("AISkill-Button2").style.display = "inline";
        let temp25 = document.getElementById("skill2").value;
        console.log(temp25);
        document.getElementById("Info_Skill2").innerHTML = temp25;
    }
    else
    {
        let temp26 = document.getElementById("Choose-Skills1").value;
        if(temp26==="active_listening")
        {
            let temp27 = "Active Listening";
            document.getElementById("Info_Skill2").innerHTML = temp27;
        }
        else if(temp26 ==="team_leadership")
        {
            let temp27 = "Team Leader";
            document.getElementById("Info_Skill2").innerHTML = temp27;
               
        }
        else if(temp26 ==="marketing")
        {
            let temp27 = "Marketing";
            document.getElementById("Info_Skill2").innerHTML = temp27;
        }
        else if(temp26 ==="network_security")
        {
            let temp27 = "Network Security";
            document.getElementById("Info_Skill2").innerHTML = temp27;
        }
        else if(temp26 ==="devops")
        {
            let temp27 = "Devops";
            document.getElementById("Info_Skill2").innerHTML = temp27;
        }
        else if(temp26 ==="financial_analysis")
        {
            let temp27 = "Financial Analysis";
            document.getElementById("Info_Skill2").innerHTML = temp27;
        }
        document.getElementById("skill2").style.display = "none";
        document.getElementById("AI-Response_skill2").style.display = "none";
        document.getElementById("AISkill-Button2").style.display = "none";
    }

    let Output38 = document.getElementById("Choose-Skills2").value;
    if(Output38 === "others")
    {
        document.getElementById("skill3").style.display = "inline";
        document.getElementById("AI-Response_skill3").style.display = "inline";
        document.getElementById("AISkill-Button3").style.display = "inline";
        let temp25 = document.getElementById("skill3").value;
        console.log(temp25);
        document.getElementById("Info_Skill3").innerHTML = temp25;
    }
    else
    {
        let temp26 = document.getElementById("Choose-Skills2").value;
        if(temp26==="active_listening")
        {
            let temp27 = "Active Listening";
            document.getElementById("Info_Skill3").innerHTML = temp27;
        }
        else if(temp26 ==="team_leadership")
        {
            let temp27 = "Team Leader";
            document.getElementById("Info_Skill3").innerHTML = temp27;
               
        }
        else if(temp26 ==="marketing")
        {
            let temp27 = "Marketing";
            document.getElementById("Info_Skill3").innerHTML = temp27;
        }
        else if(temp26 ==="network_security")
        {
            let temp27 = "Network Security";
            document.getElementById("Info_Skill3").innerHTML = temp27;
        }
        else if(temp26 ==="devops")
        {
            let temp27 = "Devops";
            document.getElementById("Info_Skill3").innerHTML = temp27;
        }
        else if(temp26 ==="financial_analysis")
        {
            let temp27 = "Financial Analysis";
            document.getElementById("Info_Skill3").innerHTML = temp27;
        }
        document.getElementById("skill3").style.display = "none";
        document.getElementById("AI-Response_skill3").style.display = "none";
        document.getElementById("AISkill-Button3").style.display = "none";
    }

    let Output39 = document.getElementById("Choose-Skills3").value;
    if(Output39 === "others")
    {
        document.getElementById("skill4").style.display = "inline";
        document.getElementById("AI-Response_skill4").style.display = "inline";
        document.getElementById("AISkill-Button4").style.display = "inline";
        let temp25 = document.getElementById("skill4").value;
        console.log(temp25);
        document.getElementById("Info_Skill4").innerHTML = temp25;
    }
    else
    {
        let temp26 = document.getElementById("Choose-Skills3").value;
        if(temp26==="active_listening")
        {
            let temp27 = "Active Listening";
            document.getElementById("Info_Skill4").innerHTML = temp27;
        }
        else if(temp26 ==="team_leadership")
        {
            let temp27 = "Team Leader";
            document.getElementById("Info_Skill4").innerHTML = temp27;
               
        }
        else if(temp26 ==="marketing")
        {
            let temp27 = "Marketing";
            document.getElementById("Info_Skill4").innerHTML = temp27;
        }
        else if(temp26 ==="network_security")
        {
            let temp27 = "Network Security";
            document.getElementById("Info_Skill4").innerHTML = temp27;
        }
        else if(temp26 ==="devops")
        {
            let temp27 = "Devops";
            document.getElementById("Info_Skill4").innerHTML = temp27;
        }
        else if(temp26 ==="financial_analysis")
        {
            let temp27 = "Financial Analysis";
            document.getElementById("Info_Skill4").innerHTML = temp27;
        }
        document.getElementById("skill4").style.display = "none";
        document.getElementById("AI-Response_skill4").style.display = "none";
        document.getElementById("AISkill-Button4").style.display = "none";
    }

    
    
    



}

function showHeader()
{
    document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Header-Span").style.display = "inline";
    document.getElementById("Heading-Header").style.fontWeight = "bold";
    document.getElementById("Heading-Header").style.color = "red";
    document.getElementById("Heading-Education").style.fontWeight = "normal";
    document.getElementById("Heading-Education").style.color = "white";
    document.getElementById("Heading-Experience").style.fontWeight = "normal";
    document.getElementById("Heading-Experience").style.color = "white";
    document.getElementById("Heading-Skills").style.fontWeight = "normal";
    document.getElementById("Heading-Skills").style.color = "white";
    document.getElementById("Heading-Summary").style.fontWeight = "normal";
    document.getElementById("Heading-Summary").style.color = "white";
    document.getElementById("Summary-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "inline";
    document.getElementById("Heading2").style.display = "inline";
    document.getElementById("Heading3").style.display = "inline";
    document.getElementById("Heading4").style.display = "inline";
    document.getElementById("Header-Button").style.display = "inline";
    document.getElementById("Education-Button").style.display = "inline";
    document.getElementById("Experience-Button").style.display = "inline";
    document.getElementById("Skills-Button").style.display = "inline";
}

function ShowEducation()
{
    let temp1 = document.getElementById("fname").value; //Karandeep
    let temp2 = document.getElementById("mname").value; //Singh
    let temp3 = document.getElementById("lname").value; //Ghai
    let temp4 = document.getElementById("city").value; //Delhi
    let temp5 = document.getElementById("country").value; //India
    let temp6 = document.getElementById("pin").value; //110009
    let temp7 = document.getElementById("phone").value; //9999585756
    let temp8 = document.getElementById("email").value; //Karan12@gmail.com
    let temp9 = document.getElementById("address").value; //E-1A,first floor Vijay Nagar Single Storey
    

    if(temp1 === "Karandeep" && temp2 === "Singh" && temp3 === "Ghai" && temp4 === "Delhi" && temp5 === "India" && temp6 === "110009" && temp7 === "9999585756" && temp8 === "Karan12@gmail.com" && temp9 === "E-1A,first floor Vijay Nagar Single Storey")
    {
    alert("Enter the Details first");
    return;
    }
    document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "inline";
    document.getElementById("Heading-Education").style.fontWeight = "bold";
    document.getElementById("Heading-Education").style.color = "red";
    document.getElementById("Heading-Header").style.fontWeight = "normal";
    document.getElementById("Heading-Header").style.color = "white";
    document.getElementById("Heading-Experience").style.fontWeight = "normal";
    document.getElementById("Heading-Experience").style.color = "white";
    document.getElementById("Heading-Skills").style.fontWeight = "normal";
    document.getElementById("Heading-Skills").style.color = "white";
    document.getElementById("Heading-Summary").style.fontWeight = "normal";
    document.getElementById("Heading-Summary").style.color = "white";
    document.getElementById("Summary-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "inline";
    document.getElementById("Heading2").style.display = "inline";
    document.getElementById("Heading3").style.display = "inline";
    document.getElementById("Heading4").style.display = "inline";
    document.getElementById("Header-Button").style.display = "inline";
    document.getElementById("Education-Button").style.display = "inline";
    document.getElementById("Experience-Button").style.display = "inline";
    document.getElementById("Skills-Button").style.display = "inline";
}

function ShowExperience()
{
    let temp1 = document.getElementById("SchoolName-10").value; //Darshan Academy
    let temp2 = document.getElementById("PERCENT-10").value; //92%
    let temp3 = document.getElementById("SchoolName-12").value; //Darshan Academy
    let temp4 = document.getElementById("PERCENT-12").value; //92%
    let temp5 = document.getElementById("CollegeName-Bachelors").value; //UPES
    let temp6 = document.getElementById("Bachelors-Education").value; //Bachelors in Computer Science Engineering
    let temp7 = document.getElementById("CGPA-Bachelors").value; //8.69
    let temp8 = document.getElementById("Checking-Master").value; //No
    // let temp9 = document.getElementById("address").value; //E-1A,first floor Vijay Nagar Single Storey
    

    if(temp1 === "Darshan Academy" && temp2 === "92%" && temp3 === "Darshan Academy" && temp4 === "92%" && temp5 === "UPES" && temp6 === "Bachelors in Computer Science Engineering" && temp7 === "8.69" && temp8 === "No")
    {
    alert("Enter the Details first");
    return;
    }

    document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "inline";
    document.getElementById("Heading-Experience").style.fontWeight = "bold";
    document.getElementById("Heading-Experience").style.color = "red";
    document.getElementById("Heading-Header").style.fontWeight = "normal";
    document.getElementById("Heading-Header").style.color = "white";
    document.getElementById("Heading-Education").style.fontWeight = "normal";
    document.getElementById("Heading-Education").style.color = "white";
    document.getElementById("Heading-Skills").style.fontWeight = "normal";
    document.getElementById("Heading-Skills").style.color = "white";
    document.getElementById("Heading-Summary").style.fontWeight = "normal";
    document.getElementById("Heading-Summary").style.color = "white";
    document.getElementById("Summary-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "inline";
    document.getElementById("Heading2").style.display = "inline";
    document.getElementById("Heading3").style.display = "inline";
    document.getElementById("Heading4").style.display = "inline";
    document.getElementById("Header-Button").style.display = "inline";
    document.getElementById("Education-Button").style.display = "inline";
    document.getElementById("Experience-Button").style.display = "inline";
    document.getElementById("Skills-Button").style.display = "inline";
}

function Showskills()
{
    let temp1 = document.getElementById("Jobtitle1").value; //Developer
    let temp2 = document.getElementById("Employer1").value; //Amazon
    let temp3 = document.getElementById("Joining_date1").value; //2023-02-01
    let temp4 = document.getElementById("Leaving_date1").value; //2024-10-01
    // let temp5 = document.getElementById("CollegeName-Bachelors").value; //UPES
    // let temp6 = document.getElementById("Bachelors-Education").value; //Bachelors in Computer Science Engineering
    // let temp7 = document.getElementById("CGPA-Bachelors").value; //8.69
    // let temp8 = document.getElementById("Checking-Master").value; //No
    // let temp9 = document.getElementById("address").value; //E-1A,first floor Vijay Nagar Single Storey
    

    if(temp1 === "Developer" && temp2 === "Amazon" && temp3 === "2023-02-01" && temp4 === "2024-10-01")
    {
    alert("Enter the Details first");
    return;
    }


    document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "inline";
    document.getElementById("Heading-Skills").style.fontWeight = "bold";
    document.getElementById("Heading-Skills").style.color = "red";
    document.getElementById("Heading-Header").style.fontWeight = "normal";
    document.getElementById("Heading-Header").style.color = "white";
    document.getElementById("Heading-Education").style.fontWeight = "normal";
    document.getElementById("Heading-Education").style.color = "white";
    document.getElementById("Heading-Experience").style.fontWeight = "normal";
    document.getElementById("Heading-Experience").style.color = "white";
    document.getElementById("Heading-Summary").style.fontWeight = "normal";
    document.getElementById("Heading-Summary").style.color = "white";
    document.getElementById("Summary-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "inline";
    document.getElementById("Heading2").style.display = "inline";
    document.getElementById("Heading3").style.display = "inline";
    document.getElementById("Heading4").style.display = "inline";
    document.getElementById("Header-Button").style.display = "inline";
    document.getElementById("Education-Button").style.display = "inline";
    document.getElementById("Experience-Button").style.display = "inline";
    document.getElementById("Skills-Button").style.display = "inline";
}

function ShowSummary()
{
    document.getElementById("Header-Span").style.display = "inline";
    document.getElementById("Education-Span").style.display = "inline";
    document.getElementById("Experience-Span").style.display = "inline";
    document.getElementById("Skills-Span").style.display = "inline";
    document.getElementById("Heading-Summary").style.fontWeight = "bold";
    document.getElementById("Heading-Summary").style.color = "red";
    document.getElementById("Heading-Header").style.fontWeight = "normal";
    document.getElementById("Heading-Header").style.color = "white";
    document.getElementById("Heading-Education").style.fontWeight = "normal";
    document.getElementById("Heading-Education").style.color = "white";
    document.getElementById("Heading-Experience").style.fontWeight = "normal";
    document.getElementById("Heading-Experience").style.color = "white";
    document.getElementById("Heading-Skills").style.fontWeight = "normal";
    document.getElementById("Heading-Skills").style.color = "white";
    document.getElementById("Header-Button").style.display = "none";
    document.getElementById("Education-Button").style.display = "none";
    document.getElementById("Experience-Button").style.display = "none";
    document.getElementById("Skills-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "none";
    document.getElementById("Heading2").style.display = "none";
    document.getElementById("Heading3").style.display = "none";
    document.getElementById("Heading4").style.display = "none";
    document.getElementById("Summary-Button").style.display = "inline";
}


function HideItems()
{
    //document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Heading-Header").style.fontWeight = "bold";
    document.getElementById("Heading-Header").style.color = "red";
    
}

function ShowSkills1()
{
    document.getElementById("DisplaySkills1").style.display = "none";
    document.getElementById("ChooseSkills1").style.display = "inline";
    document.getElementById("DisplaySkills2").style.display = "block";
    document.getElementById("RemoveSkills1-Button").style.display = "inline";
    document.getElementById("Info_Skill2").style.display = "inline";
}

function RemoveSkills1()
{
    document.getElementById("DisplaySkills1").style.display = "block";
    document.getElementById("Info_Skill2").style.display = "none";
    document.getElementById("ChooseSkills1").style.display = "none";
    document.getElementById("DisplaySkills2").style.display = "none";
    document.getElementById("RemoveSkills1-Button").style.display = "none";   
}

function ShowSkills2()
{
    document.getElementById("Info_Skill3").style.display = "inline";
    document.getElementById("DisplaySkills2").style.display = "none";
    document.getElementById("ChooseSkills2").style.display = "inline";
    document.getElementById("DisplaySkills3").style.display = "block";
    document.getElementById("RemoveSkills2-Button").style.display = "inline";

}

function RemoveSkills2()
{
    document.getElementById("DisplaySkills2").style.display = "block";
    document.getElementById("Info_Skill3").style.display = "none";
    document.getElementById("ChooseSkills2").style.display = "none";
    document.getElementById("DisplaySkills3").style.display = "none";
    document.getElementById("RemoveSkills2-Button").style.display = "none";   
}

function ShowSkills3()
{
    document.getElementById("Info_Skill4").style.display = "inline";
    document.getElementById("DisplaySkills3").style.display = "none";
    document.getElementById("ChooseSkills3").style.display = "inline";
    //document.getElementById("DisplaySkills2").style.display = "inline";
    document.getElementById("RemoveSkills3-Button").style.display = "inline";
}

function RemoveSkills3()
{
    document.getElementById("DisplaySkills3").style.display = "block";
    document.getElementById("Info_Skill4").style.display = "none";
    document.getElementById("ChooseSkills3").style.display = "none";
    //document.getElementById("DisplaySkills2").style.display = "none";
    document.getElementById("RemoveSkills3-Button").style.display = "none";   
}

function ShowEducation1()
{
    document.getElementById("DisplayEducation1").style.display = "none";
    document.getElementById("ChooseEducation1").style.display = "inline";
    document.getElementById("DisplayEducation2").style.display = "block";
    document.getElementById("Remove-Experience1").style.display = "inline";
    document.getElementById("Experience2").style.display = "none";
    document.getElementById("exp2").style.display = "block";
    document.getElementById("AiExp-Buton2").style.display = "inline";
    document.getElementById("AI-Response2").style.display = "block";
}


function RemoveEducation1()
{
    document.getElementById("DisplayEducation1").style.display = "block";
    document.getElementById("ChooseEducation1").style.display = "none";
    document.getElementById("DisplayEducation2").style.display = "none";
    document.getElementById("Remove-Experience1").style.display = "none";
    document.getElementById("Experience2").style.display = "none";

}

function ShowEducation2()
{
    document.getElementById("DisplayEducation2").style.display = "none";
    document.getElementById("ChooseEducation2").style.display = "inline";
    document.getElementById("Remove-Experience2").style.display = "inline";
    document.getElementById("Experience3").style.display = "none";
    document.getElementById("exp3").style.display = "block";
    document.getElementById("AiExp-Buton3").style.display = "inline";
    document.getElementById("AI-Response3").style.display = "block";
}

function RemoveEducation2()
{
    document.getElementById("DisplayEducation2").style.display = "block";
    document.getElementById("ChooseEducation2").style.display = "none";
    document.getElementById("Remove-Experience2").style.display = "none";
    document.getElementById("Experience3").style.display = "none";

}

                  
function clearValue(input, defaultValue)
{
    if (input.value === defaultValue) {
        input.value = '';
    }
}

function restoreValue(input, defaultValue) 
{
    if (input.value === '') {
        input.value = defaultValue;
    }
}

function InsertValueInSQL() {
    let data = {
        Output1: document.getElementById("fname").value,
        Output2: document.getElementById("lname").value,
        Output8: document.getElementById("mname").value,
        Output3: document.getElementById("pin").value,
        Output4: document.getElementById("city").value,
        Output5: document.getElementById("country").value,
        Output6: document.getElementById("phone").value,
        Output7: document.getElementById("email").value,
        Output9: document.getElementById("address").value,
        Output10: document.getElementById("SchoolName-10").value,
        Output11: document.getElementById("PERCENT-10").value,
        Output12: document.getElementById("SchoolName-12").value,
        Output13: document.getElementById("PERCENT-12").value,
        Output14: document.getElementById("CGPA-Bachelors").value,
        Output15: document.getElementById("CollegeName-Bachelors").value,
        Output16: document.getElementById("Bachelors-Education").value,
        Output17: document.getElementById("Checking-Master").value,
        Output18: document.getElementById("CollegeName-Masters").value,
        Output19: document.getElementById("CGPA-masters").value,
        Output20: document.getElementById("Masters-Education").value,
        Output21: document.getElementById("Jobtitle1").value,
        Output22: document.getElementById("Employer1").value,
        Output23: document.getElementById("Joining_date1").value,
        Output24: document.getElementById("Leaving_date1").value,
        Output25: document.getElementById("Jobtitle2").value,
        Output26: document.getElementById("Employer2").value,
        Output27: document.getElementById("Joining_date2").value,
        Output28: document.getElementById("Leaving_date2").value,
        Output29: document.getElementById("Jobtitle3").value,
        Output30: document.getElementById("Employer3").value,
        Output31: document.getElementById("Joining_date3").value,
        Output32: document.getElementById("Leaving_date3").value
    };

    fetch('http://localhost:3000/insertData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Make sure data is a valid JSON object
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function showOnlyResume()
{
    document.getElementById("Container1").style.display = "none";
    document.getElementById("Forms-Resume").style.display = "none";
    document.getElementById("Header-Span").style.display = "none";
    document.getElementById("Education-Span").style.display = "none";
    document.getElementById("Experience-Span").style.display = "none";
    document.getElementById("Skills-Span").style.display = "none";
    document.getElementById("Header-Button").style.display = "none";
    document.getElementById("Education-Button").style.display = "none";
    document.getElementById("Experience-Button").style.display = "none";
    document.getElementById("Skills-Button").style.display = "none";
    document.getElementById("Heading1").style.display = "none";
    document.getElementById("Heading2").style.display = "none";
    document.getElementById("Heading3").style.display = "none";
    document.getElementById("Heading4").style.display = "none";
    document.getElementById("Summary-Button").style.display = "none";
    document.getElementById("mycontainer").classList.remove("mycontainer");
    document.getElementById("mycontainer").style.margin = "3% 22% 0% 22%"; 
    document.getElementById("generate-pdf").style.display = "block";
}
function toggleContainer() {
    const container1 = document.getElementById("Container1");
    const mainContainer = document.getElementById("mycontainer");

    const currentGridTemplate = mainContainer.style.gridTemplateColumns;
    console.log(currentGridTemplate);

    if (currentGridTemplate === "4% 58% 38%") {
        // Expand Container1 by increasing its width in gridTemplateColumns
        mainContainer.style.gridTemplateColumns = "18% 47% 35%"; // Increase the size of Container1
        
        // Show Heading elements
        document.getElementById("Heading-Header").style.display = "block";
        document.getElementById("Heading-Education").style.display = "block";
        document.getElementById("Heading-Experience").style.display = "block";
        document.getElementById("Heading-Skills").style.display = "block";
        document.getElementById("Heading-Summary").style.display = "block";
        document.getElementById("Career Canvas-Heading").style.display = "inline";

    } else {
        // Retract Container1 by reducing its width in gridTemplateColumns
        mainContainer.style.gridTemplateColumns = "4% 58% 38%"; // Reduce the size of Container1
        
        // Hide Heading elements
        document.getElementById("Heading-Header").style.display = "none";
        document.getElementById("Heading-Education").style.display = "none";
        document.getElementById("Heading-Experience").style.display = "none";
        document.getElementById("Heading-Skills").style.display = "none";
        document.getElementById("Heading-Summary").style.display = "none";
        document.getElementById("Career Canvas-Heading").style.display = "none";
    }
}


  

Fun1();
HideItems();
setInterval(Fun1, 500);


async function rephraseContent() {
    // Get the experience content
    const experienceContent = document.getElementById("exp1").value;

    // Prepare the data to be sent
    const requestData = {
        content1: experienceContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        console.log(data.rephrasedContent);
        const aiResponseTextArea = document.getElementById("AI-Response1");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.style.marginLeft = "80px";
        aiResponseTextArea.textContent = data.rephrasedContent;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContent2() {
    // Get the experience content
    const experienceContent = document.getElementById("exp2").value;

    // Prepare the data to be sent
    const requestData = {
        content1: experienceContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        console.log(data.rephrasedContent);
        const aiResponseTextArea = document.getElementById("AI-Response2");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.style.marginLeft = "100px";
        aiResponseTextArea.textContent = data.rephrasedContent;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContent3() {
    // Get the experience content
    const experienceContent = document.getElementById("exp3").value;

    // Prepare the data to be sent
    const requestData = {
        content1: experienceContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        console.log(data.rephrasedContent);
        const aiResponseTextArea = document.getElementById("AI-Response3");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.style.marginLeft = "90px";
        aiResponseTextArea.textContent = data.rephrasedContent;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContentskill() {
    // Get the experience content
    const skillContent = document.getElementById("skill1").value;

    // Prepare the data to be sent
    const requestData = {
        skillcontent: skillContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase_skill", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        const aiResponseTextArea = document.getElementById("AI-Response_skill");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.textContent = data.rephrasedContentskill;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContentskill2() {
    // Get the experience content
    const skillContent = document.getElementById("skill2").value;

    // Prepare the data to be sent
    const requestData = {
        skillcontent: skillContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase_skill", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        const aiResponseTextArea = document.getElementById("AI-Response_skill2");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.textContent = data.rephrasedContentskill;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContentskill3() {
    // Get the experience content
    const skillContent = document.getElementById("skill3").value;

    // Prepare the data to be sent
    const requestData = {
        skillcontent: skillContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase_skill", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        const aiResponseTextArea = document.getElementById("AI-Response_skill3");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.textContent = data.rephrasedContentskill;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}

async function rephraseContentskill4() {
    // Get the experience content
    const skillContent = document.getElementById("skill4").value;

    // Prepare the data to be sent
    const requestData = {
        skillcontent: skillContent,
    };

    try {
        // Send the data to the backend for rephrasing
        const response = await fetch("/rephrase_skill", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Send only experience content
        });

        const data = await response.json(); // Parse the JSON response
        const aiResponseTextArea = document.getElementById("AI-Response_skill4");
        aiResponseTextArea.style.display = "block";
        aiResponseTextArea.textContent = data.rephrasedContentskill;

    } catch (error) {
        // Handle errors (e.g., network issues, server problems)
        console.error("Error with AI suggestion:", error);
    }
}