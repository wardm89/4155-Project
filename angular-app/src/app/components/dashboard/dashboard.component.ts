import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import $ from 'jquery/dist/jquery.slim';

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

    // $(".random").click(function(e) {
    //   newDC_0.data.datasets[0].data = [27,526,73,780,43];
    //   alert(newDC_0.data.datasets[0].data);
    //   update();
    // });




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


  }


}
