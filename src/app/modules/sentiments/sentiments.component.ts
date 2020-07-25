import {Component,   NgZone} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.scss']
})
export class SentimentsComponent  {
  private charts: am4charts.PieChart;
  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("doughnutChart", am4charts.PieChart);

      chart.data = [ {
        "sentiments": "Positive",
        "percentage": 100
      }, {
        "sentiments": "Neutral",
        "percentage": 30
      }, {
        "sentiments": "Negative",
        "percentage": 40
      }];

// Set inner radius
      chart.innerRadius = am4core.percent(50);

// Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "percentage";
      pieSeries.dataFields.category = "sentiments";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
//       pieSeries.hiddenState.properties.opacity = 1;
//       pieSeries.hiddenState.properties.endAngle = -90;
//       pieSeries.hiddenState.properties.startAngle = -90;

      chart.legend = new am4charts.Legend();
      pieSeries.colors.list = [
        am4core.color("#845EC2"),
        am4core.color("#D65DB1"),
        am4core.color("#FF6F91"),
        am4core.color("#FF9671"),
        am4core.color("#FFC75F"),
        am4core.color("#F9F87f"),
      ];
      this.charts = chart;
    });

  }

  markFavourite(){
    
  }

}
