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

    $("#doughnut-chart_0").click(function(e) {
      var activePoints = newDC_0.getElementsAtEvent(e)[0];
      var dataset = newDC_0.data.datasets[activePoints._datasetIndex].data;

      $("#doughnut_1").hide();
      $("#doughnut_2").hide();
      $("#doughnut_3").hide();
      alert(dataset);
      console.log(dataset);
      update();
    });
    $("#doughnut-chart_1").click(function(e) {
      var activePoints = newDC_1.getElementsAtEvent(e)[0];
      var dataset = newDC_1.data.datasets[activePoints._datasetIndex].data;

      $("#doughnut_0").hide();
      $("#doughnut_2").hide();
      $("#doughnut_3").hide();
      alert(dataset);
      console.log(dataset);
      update();
    });
    $("#doughnut-chart_2").click(function(e) {
      var activePoints = newDC_2.getElementsAtEvent(e)[0];
      var dataset = newDC_2.data.datasets[activePoints._datasetIndex].data;

      $("#doughnut_1").hide();
      $("#doughnut_0").hide();
      $("#doughnut_3").hide();
      alert(dataset);
      console.log(dataset);
      update();
    });

    $(".random").click(function(e) {
      newDC_0.data.datasets[0].data = [27,526,73,780,43];
      alert(newDC_0.data.datasets[0].data);
      update();
    });

    function update()
    {
      newDC_0.update();
    }



     var newDC_0 = new Chart(document.getElementById("doughnut-chart_0"), {
      type: 'doughnut',
      data: {
        labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "White"],
        datasets: [
          {
            label: "Race",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [25,35,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Races Percentage As A Whole'
        },
        onClick: function (evt, item) {

        }
      }
    });
    var newDC_1 = new Chart(document.getElementById("doughnut-chart_1"), {
      type: 'doughnut',
      data: {
        labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "White"],
        datasets: [
          {
            label: "Race",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [205,35,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Races Percentage As A Whole'
        },
        onClick: function (evt, item) {
        }
      }
    });
    var newDC_2 = new Chart(document.getElementById("doughnut-chart_2"), {
      type: 'doughnut',
      data: {
        labels: ["American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "White"],
        datasets: [
          {
            label: "Race",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [25,395,203,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Races Percentage As A Whole'
        },
        onClick: function (evt, item) {
        }
      }
    });

  function changeChart(value)
    {


    }

  function randomize() {
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
    let clone = JSON.parse(JSON.stringify(this.newDC));
    clone[0].data = data;
    this.newDC = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  }
  ////////////////////////////////////////


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}
