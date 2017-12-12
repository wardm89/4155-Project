import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }
//test
  ngOnInit() {


    $("#locations").hide();
    $("#positions").hide();
    $("#age").hide();


    $("#doughnut-chart_1").click(function(e) {
      var activePoints = newDC_1.getElementsAtEvent(e)[0];
      var dataset = newDC_1.data.datasets[activePoints._datasetIndex].data;

      $("#overview").hide();
      $("#locations").show();

    });

    $("#location-chart_0").click(function(e) {
      var activePoints = location_0.getElementsAtEvent(e)[0];
      var dataset = location_0.data.datasets[activePoints._datasetIndex].data;
      $("#locations").hide();
      $("#positions").show();
    });

    $("#salary-chart_0").click(function(e) {

      $("#positions").hide();
      $("#age").show();
    });

    $("#maleAgeBar").click(function(e) {

    });

    $("#back").click(function(e) {
      goBack();
    });

    function goBack(){
      $("#locations").hide();
      $("#positions").hide();
      $("#age").hide();
      $("#overview").show();
    }

    //INITIALIZING CHART COMPONENTS: (They're shown on the page.)
    var terminationChart = new Chart(document.getElementById("terminationChart"), {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    label: "Default",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#9a3ecd"],
                    data: [] //205,35,734,784,433
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Reason For Termination'
            },
            onClick: function (evt, item) {
            }
        }
    });

    var newDC_1 = new Chart(document.getElementById("doughnut-chart_1"), {
      type: 'doughnut',
      data: {
        labels: ["Current", "Target"],
        datasets: [
          {
            backgroundColor: ["#54a335", "Grey"],
            data: [40,20]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Employee Retention (Months)'
        },
        onClick: function (evt, item) {
        }
      }
    });

    var newDC_2 = new Chart(document.getElementById("doughnut-chart_2"), {
      type: 'doughnut',
      data: {
        labels: ["Current"],
        datasets: [
          {
            backgroundColor: ["#ad2222", "Grey"],
            data: [50,10]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Time To Fill Job Positions(Months)'
        },
        onClick: function (evt, item) {
        }
      }
    });

    var gender_bar_0 = new Chart(document.getElementById("maleAge"), {
      type: 'bar',
      data: {
        labels: ["Under 30", "30-50", "50+"],
        datasets: [
          {
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            data: [5,5,2]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Terminated Males'
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5,
              max: 10,
            },
            scaleLabel: {
              display: true,
              labelString: 'Total'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });

    var gender_bar_1 = new Chart(document.getElementById("femaleAge"), {
      type: 'bar',
      data: {
        labels: ["Under 30", "30-50", "50+"],
        datasets: [
          {
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            data: [4,7,1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Terminated Females'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5,
              max: 10,
            },
            scaleLabel: {
              display: true,
              labelString: 'Total'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });





    var location_0 = new Chart(document.getElementById("location-chart_0"), {
      type: 'bar',
      data: {
        labels: ["Interior", "Tires", "Chassis & Safety"],
        datasets: [
          {
            backgroundColor: ["#54a335", "#cec937","#ad2222"],
            data: [30,70,150]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Troy'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5,
              max: 200,
            },
            scaleLabel: {
              display: true,
              labelString: 'Months'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });
    var location_1 = new Chart(document.getElementById("location-chart_1"), {
      type: 'bar',
      data: {
        labels: ["Interior", "Tires", "Chassis & Safety"],
        datasets: [
          {
            backgroundColor: ["#cec937", "#cec937","#ad2222"],
            data: [60,70,200]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Sumpter'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5,
              max: 200,
            },
            scaleLabel: {
              display: true,
              labelString: 'Months'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });
    var location_2 = new Chart(document.getElementById("location-chart_2"), {
      type: 'bar',
      data: {
        labels: ["Interior", "Tires", "Chassis & Safety"],
        datasets: [
          {
            backgroundColor: ["#ad2222", "#cec937","#54a335"],
            data: [120,80,40]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Mt. Vernon'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5,
              max: 200,
            },
            scaleLabel: {
              display: true,
              labelString: 'Months'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });




    //Overview page
    var genderOverview = new Chart(document.getElementById("genderOverview-chart_0"), {
      type: 'pie',
      data: {
        labels: ["Male", "Female", "Unknown"],
        datasets: [
          {
            label: "Gender",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [545,423,16]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Gender of Employees'
        },
        onClick: function (evt, item) {

        }
      }
    });


    ////Location Position Statistics

    var genderForPosition = new Chart(document.getElementById("gender-chart_0"), {
      type: 'pie',
      data: {
        labels: ["Male", "Female", "Unknown"],
        datasets: [
          {
            label: "Gender",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [6,5,1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Gender of Terminated Employees'
        },
        onClick: function (evt, item) {

        }
      }
    });



    var salary_bar_0 = new Chart(document.getElementById("salary-chart_0"), {
      type: 'bar',
      data: {
        labels: ["Grade 8", "Grade 9", "Grade 10", "Hourly",],
        datasets: [
          {
            backgroundColor: ["#54a335","#cec937","#54a335","#ad2222"],
            data: [2,4,1,8]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Salary Classification'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              stepValue: 1,
              max: 12,
            },
            scaleLabel: {
              display: true,
              labelString: 'Employees Terminated'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });




    var salary_bar_1 = new Chart(document.getElementById("salary-chart_1"), {
      type: 'bar',
      data: {
        labels: ["Grade 8", "Grade 9", "Grade 10", "Hourly",],
        datasets: [
          {
            backgroundColor: ["#54a335","#cec937","#54a335","#ad2222"],
            data: [4,2,1,8]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Salary Classification'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              stepValue: 1,
              max: 12,
            },
            scaleLabel: {
              display: true,
              labelString: 'Employees Terminated'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });

    var genderForPosition1 = new Chart(document.getElementById("gender-chart_1"), {
      type: 'pie',
      data: {
        labels: ["Male", "Female", "Unknown"],
        datasets: [
          {
            label: "Gender",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [4,5,1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Gender of Terminated Employees'
        },
        onClick: function (evt, item) {

        }
      }
    });



    var salary_bar_2 = new Chart(document.getElementById("salary-chart_2"), {
      type: 'bar',
      data: {
        labels: ["Grade 8", "Grade 9", "Grade 10", "Hourly",],
        datasets: [
          {
            backgroundColor: ["#54a335","#cec937","#54a335","#54a335"],
            data: [2,4,1,4]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Salary Classification'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              stepValue: 1,
              max: 12,
            },
            scaleLabel: {
              display: true,
              labelString: 'Employees Terminated'
            },
          }]
        },
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
        }
      }
    });

    var genderForPosition2 = new Chart(document.getElementById("gender-chart_2"), {
      type: 'pie',
      data: {
        labels: ["Male", "Female", "Unknown"],
        datasets: [
          {
            label: "Gender",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [3,3,0]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Gender of Terminated Employees'
        },
        onClick: function (evt, item) {

        }
      }
    });

      /*
        updateTerminationReason chart. //You'll need to write methods for all the charts and call them when the database finishes
        filling the correct array.
        PURPOSE: Uses the database built array to set the values in the chart then calls the .update() method on the chart.
        IMPROVEMENT NOTES: It's very dependant on the objects within the employeeArray (which is sent into it) being built a certain
        way. Without the array of objects having a 'reasonForAction' String field, it just wont work.
      */
      function updateTerminationData(theEmployees)
      {

          console.log("beginning to update terminationData.");
          var employeeArray = theEmployees;

          if (undefined === typeof employeeArray) {
              console.log("Couldn't build termination graph b/c employeeArray was undefined. Exiting buildTerminationData() function.");
              return;
          } else {
              employeeArray = employeeArray;
          }

          var terminationReasons: Array<string> = [];
          var terminationCount: Array<number> = [];

          //Finding ALL datapoints we want and putting their label and count in the above arrays.
          for(let i = 0; i < employeeArray.length; i++){

              let currentReason = employeeArray[i].reasonForAction;

              //Experiment removing the first if of this if statement and see if it still works.
              if(terminationReasons == null || terminationReasons.length == 0)//There's never been a reason before. This is the first entry looked at.
              {
                  //console.log("1st if branch. null or length 0. Reason: " + currentReason);
                  terminationReasons.push(currentReason);
                  terminationCount.push(1);//The count is literally 1 now.mm

              }else if (-1 == ($.inArray(currentReason, terminationReasons, 0)))//The reason is new. It's not in the array before this. '-1' is returned if it doesn't find it in the array.
              {
                  terminationReasons.push(currentReason);
                  terminationCount.push(1);
                  //console.log("2nd if branch: Creating new reason string & count in their respective arrays.");
              }else //We've seen the reason before, so we just find it, and add to it's count.
              {
                  //console.log("3rd if branch: Finding the existing reason " + currentReason +  " index then adding to it's count.");
                  let index = ($.inArray(currentReason, terminationReasons, 0));//Should return the index of the reason.
                  if(index != -1){
                      terminationCount[index]++;//Adding one to the count value at that location.
                  }else console.log("Error: Couldn't find the reason in the terminationReasons array.");
              }

          }

          //Placing arrays into sortable objects.
          var sortTheseByCount = [];
          for(let i = 0; i < terminationReasons.length; i++){
              sortTheseByCount.push({
                  label: terminationReasons[i],
                  count: terminationCount[i]
              });
          }
          //Sorting the objects by count.
          sortTheseByCount.sort(function(a, b){return b.count - a.count});

          //These hold finalized sorted data.
          var terminationReasonsFinal: Array<string> = [];
          var terminationCountFinal: Array<number> = [];

          //Rebuilding limited chart arrays with sorted data.
          var chartSize = 5;//Limiting size value of the chart.
          for(let i = 0; i < sortTheseByCount.length && i < chartSize; i++){
              terminationReasonsFinal[i] = sortTheseByCount[i].label;
              terminationCountFinal[i] = sortTheseByCount[i].count;
          }

          //I actually forgot what this is checking for... I THINK it checks if the terminationCount is null or undefined or something.
          if(terminationCount && terminationCount){
              console.log("Codes not working");
          }

          //Placing final arrays into the chart.
          terminationChart.data.datasets[0].data = terminationCountFinal;
          terminationChart.data.labels = terminationReasonsFinal;
          terminationChart.update();
      }//End of updateTerminationData.



      //GENERATING THE ARRAY OF DATA FROM THE TERMINATION DATABASE ==============================================

      var terminationArray; //Array of employees from the termination database.

      //$.ajaxSetup({async:false});//Removing the async of the get method for testing.

      /*
          PURPOSE: An AJAX method that fetches JSON from the google sheets database and puts it in employeeArray.
          IMPROVEMENT NOTES: The API call(It's the URL) is currently usable by anyone who has the link WITHOUT authentication so if this was actually
          implimented, we'd need to add security.
          IMPORTANT NOTE: This get method must be below the methods that update the charts in onInit so those methods exist
          when the callback method .always triggers. That way it'll be able to update all the charts.
      */
      var getTerminationDatabase = $.get({
          url: "https://spreadsheets.google.com/feeds/list/15hcBX6PDD4jGPQYr-nf7z0y7zcfYL4GdqNnn9kPzyqc/1/public/values?alt=json",
          success: function(terminationDataPull){
              //data processing here.
              var data = terminationDataPull.feed.entry,
                  terminationDataLength = data.length,
                  jsonEntries = [],
                  datum;

              //gsx$actiontype
              //FORMAT OF VARIABLES FROM THE data[i] place. data[i].gsx$variableName.$t  <-That returns the string.
              for(var i = 0; i < terminationDataLength; i++){
                  datum = data[i];

                  //Creating each employee represented by the termination database in google sheets.
                  var tempObject = {
                      //personnelNum: data[i].gsx$personnelno..$t,
                      gender: data[i].gsx$genderkey.$t,
                      job: data[i].gsx$job.$t,
                      personnelSubArea: data[i].gsx$personnelsubarea.$t,
                      personnelArea: data[i].gsx$personnelarea.$t,
                      salary: 30,
                      reasonForAction: data[i].gsx$reasonforaction.$t,
                      entryDate: data[i].gsx$entry.$t,
                      leaveDate: data[i].gsx$leavingdate.$t
                  };

                  jsonEntries.push(tempObject);
              }

              terminationArray = jsonEntries.slice();//hopefully assigning all these objects to the correct array.
          }
      });//End of getTerminationDatabase.

      /*
          Handler method for the getTerminationArray get function. Called on completion.
       */
      getTerminationDatabase.always(function(){
          updateTerminationData(terminationArray);//CALLING FUNCTION TO UPDATE 'terminationChart'
      });
      //END OF DATABASE PULL STUFF. The array name is terminationArray().


  }//End of ngOninit.


}
