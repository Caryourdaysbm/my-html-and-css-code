App.controller('home', function (page) {
    // put stuff here

    //Return button
document.getElementById("returnButton").addEventListener("click",goBackIndex)

function goBackIndex() {
    window.location.assign("http://localhost:8080/InsidePathsLtd-CV-Builder/index.html")
  }

//Secondary section
document.getElementById("schoolSubmit").addEventListener("click",showAndPass1)

function showAndPass1(){
    showUni1();
    passValuesFromSchool();
}

function showUni1(){
    document.getElementById("uni1Section").style.display="block";
}

function passValuesFromSchool(){
    var schoolName = document.getElementById("secondaryName").value;
    var schoolStart = document.getElementById("secondaryStart").value;
    var schoolEnd = document.getElementById("secondaryEnd").value;
    var schoolSubjects = document.getElementById("secondarySubjects").value;
    var schoolExam = document.getElementById("secondaryExam").value;
    localStorage.setItem("schoolNameValue", schoolName);
    localStorage.setItem("schoolStartValue", schoolStart);
    localStorage.setItem("schoolEndValue", schoolEnd);
    localStorage.setItem("schoolSubjectsValue", schoolSubjects);
    localStorage.setItem("schoolExamValue", schoolExam);
    return false;
}



document.getElementById("yesAdd").addEventListener("click",addUni)

function addUni(){
    document.getElementById("extraUni").style.display = "block";

}

document.getElementById("noAdd").addEventListener("click",moveOn)

function moveOn() {
    window.location.assign ("http://localhost:8080/InsidePathsLtd-CV-Builder/other-directories/employment-law.html");
  }


  function showActiveCompetenciesAndPass2(){
      showActiveCompetencies2();
      passValuesFromUni2();
      hideCompetencyButton2();
  }
  
  function showActiveCompetencies2(){
      document.getElementById("competency-collaborative2").style.display="inline";
    document.getElementById("competency-personal2").style.display="inline";
  }
  
  function passValuesFromUni2(){
  var secondUniName = document.getElementById("uni2Name").value;
  var secondUniStart = document.getElementById("uni2Start").value;
  var secondUniEnd = document.getElementById("uni2End").value;
  var secondUniTitle = document.getElementById("uni2Title").value;
  var secondUniDegree = document.getElementById("uni2Degree").value;
  var secondUniGrade = document.getElementById("uni2Grade").value;
  var secondUniModules = document.getElementById("uni2Modules").value;
  var secondUniActivities = document.getElementById("uni2Activities").value;
  localStorage.setItem("secondUniNameValue", secondUniName );
  localStorage.setItem("secondUniStartValue", secondUniStart);
  localStorage.setItem("secondUniEndValue", secondUniEnd);
  localStorage.setItem("secondUniTitleValue", secondUniTitle);
  localStorage.setItem("secondUniDegreeValue", secondUniDegree);
  localStorage.setItem("secondUniGradeValue", secondUniGrade);
  localStorage.setItem("secondUniModulesValue", secondUniModules);
  localStorage.setItem("secondUniActivitiesValue", secondUniActivities);
  return false;
  }
  
  function hideCompetencyButton2(){
      document.getElementById("competencyButton2").style.display = "none";
  }
  
  document.getElementById("yesAdd2").addEventListener("click",addUni2)
  
  function addUni2(){
      document.getElementById("extraUni2").style.display = "block";
  
  }
  
  document.getElementById("noAdd2").addEventListener("click",moveOn)

  document.getElementById("uniCompetencyButton3").addEventListener("click",showActiveCompetenciesAndPass3)

 function showActiveCompetenciesAndPass3(){
     showActiveCompetencies3();
     passValuesFromUni3();
     hideCompetencyButton3();
 }

 function showActiveCompetencies3(){
     document.getElementById("competency-collaborative3").style.display = "inline";
     document.getElementById("competency-personal3").style.display = "inline";
 }

  function passValuesFromUni3(){
    var thirdUniName = document.getElementById("uni3Name").value;
    var thirdUniStart = document.getElementById("uni3Start").value;
    var thirdUniEnd = document.getElementById("uni3End").value;
    var thirdUniTitle = document.getElementById("uni3Title").value;
    var thirdUniDegree = document.getElementById("uni3Degree").value;
    var thirdUniGrade = document.getElementById("uni3Grade").value;
    var thirdUniModules = document.getElementById("uni3Modules").value;
    var thirdUniActivities = document.getElementById("uni3Activities").value;
    localStorage.setItem("thirdUniNameValue", thirdUniName );
    localStorage.setItem("thirdUniStartValue", thirdUniStart);
    localStorage.setItem("thirdUniEndValue", thirdUniEnd);
    localStorage.setItem("thirdUniTitleValue", thirdUniTitle);
    localStorage.setItem("thirdUniDegreeValue", thirdUniDegree);
    localStorage.setItem("thirdUniGradeValue", thirdUniGrade);
    localStorage.setItem("thirdUniModulesValue", thirdUniModules);
    localStorage.setItem("thirdUniActivitiesValue", thirdUniActivities);
    return false; 
  }

  function hideCompetencyButton3(){
      document.getElementById("uniCompetencyButton3").style.display = "none";
  }
  
  document.getElementById("nextEmployment").addEventListener("click",moveOn)



//Activities and societies description generator for uni #1
var activityGerunds=["stimulating","enforcing","encouraging","enhancing","promoting","motivating","inspiring","inciting","strenghtening","nurturing","improving","developing"]

function generateGerund(){
var randomGerund = Math.floor(Math.random()*activityGerunds.length);
document.getElementById("activityGerundDisplay").innerHTML=activityGerunds[randomGerund];
}

var activityCompetencies=["team management","compelling verbal communication","effective written communication","interpersonal skills","active listening","productivity","consistency","reliability","goal-oriented thinking", "flexibility","versatility","proactivity","intercultural competence","human awareness","discipline","adaptability","tactical behaviour","persuasiveness","independent learning","decisiveness","perserverance"]

function generateCompetency(){
var randomCompetency = Math.floor(Math.random()*activityCompetencies.length);
document.getElementById("activityCompetencyDisplay").innerHTML=activityCompetencies[randomCompetency];
}

document.getElementById("uniCompetencyButton1").addEventListener("click",showActiveCompetenciesAndPass1)


function showActiveCompetenciesAndPass1(){
passValuesFromUni1();
generateGerund();
generateCompetency();
}

function showActiveCompetencies1(){
document.getElementById("education1ActivityDescription").style.display="block";
}

function passValuesFromUni1(){
var firstUniName = document.getElementById("uni1Name").value;
var firstUniStart = document.getElementById("uni1Start").value;
var firstUniEnd = document.getElementById("uni1End").value;
var firstUniTitle = document.getElementById("uni1Title").value;
var firstUniDegree = document.getElementById("uni1Degree").value;
var firstUniGrade = document.getElementById("uni1Grade").value;
var firstUniModules = document.getElementById("uni1Modules").value;
var firstUniActivities = document.getElementById("uni1Activities").value;
localStorage.setItem("firstUniNameValue", firstUniName);
localStorage.setItem("firstUniStartValue", firstUniStart);
localStorage.setItem("firstUniEndValue", firstUniEnd);
localStorage.setItem("firstUniTitleValue", firstUniTitle);
localStorage.setItem("firstUniDegreeValue", firstUniDegree);
localStorage.setItem("firstUniGradeValue", firstUniGrade);
localStorage.setItem("firstUniModulesValue", firstUniModules);
localStorage.setItem("firstUniActivitiesValue", firstUniActivities);
return false;
}


  });

  App.controller('page2', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }
  