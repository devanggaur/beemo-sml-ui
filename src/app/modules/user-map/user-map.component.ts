import {Component,   NgZone} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_indiaLow from '@amcharts/amcharts4-geodata/indiaLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: ['./user-map.component.scss']
})
export class UserMapComponent  {
  public map: any = {lat: 12, lng: 77.6};
  lat = 12;
  lng = 77.6;
  private chart: am4maps.MapChart;
  private userNumber: am4charts.XYChart;

  constructor(private zone: NgZone) {}
  ngOnInit(){

  }
  //
  private currentSeries: any;
  ngAfterViewInit() {
    this.chart = am4core.create('chartdiv', am4maps.MapChart);
    this.chart.maxZoomLevel = 64;
    this.chart.geodata = am4geodata_indiaLow;
    this.chart.projection = new am4maps.projections.Miller();


    const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
//
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.fill = am4core.color('#84329b');

    // Set up heat legend
    const heatLegend = this.chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = 'right';
    heatLegend.width = am4core.percent(25);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;
    heatLegend.valign = 'bottom';

    // Set up custom heat map legend labels using axis ranges
    const minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = 'Little';
    const maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = 'A lot!';

    heatLegend.valueAxis.renderer.labels.template.adapter.add('text', function(labelText) {
      return '';
    });


    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#FFFFFF').brighten(-0.5);

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#84329b').brighten(1),
      max: am4core.color('#84329b').brighten(-0.3)
    });
    polygonSeries.data = [{
      'id': 'IN-KA',
      'value': 0,
      // "fill": am4core.color("#F05C5C")
    }, {
      'id': 'IN-UP',
      'value': 150,
      // "fill": am4core.color("#5C5CFF")
    },
      {
        'id': 'IN-MH',
        'value': 225,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-MP',
        'value': 300,
        // "fill": am4core.color("#5C5CFF")
      }
      , {
        'id': 'IN-AP',
        'value': 275,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-JH',
        'value': 200,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-HP',
        'value': 180,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-TN',
        'value': 240,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-WB',
        'value': 300,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-CG',
        'value': 210,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-TL',
        'value': 220,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-GJ',
        'value': 185,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-RJ',
        'value': 285,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-GA',
        'value': 150,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-BR',
        'value': 150,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-KL',
        'value': 180,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-PB',
        'value': 180,
        // "fill": am4core.color("#5C5CFF")
      },

      {
        'id': 'IN-UK',
        'value': 300,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-HR',
        'value': 150,
        // "fill": am4core.color("#5C5CFF")
      }, {
        'id': 'IN-AS',
        'value': 300,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-JK',
        'value': 300,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-SK',
        'value': 150,
        // "fill": am4core.color("#5C5CFF")
      },
      {
        'id': 'IN-MN',
        'value': 150,
      },
      {
        'id': 'IN-MZ',
        'value': 180,
      },
      {
        'id': 'IN-NL',
        'value': 180,
      },
      {
        'id': 'IN-TR',
        'value': 180,
      },
      {
        'id': 'IN-ML',
        'value': 180,
      },
      {
        'id': 'IN-AR',
        'value': 180,
      },

      {
        'id': 'IN-CT',
        'value': 200,
      }
      ,

      {
        'id': 'IN-OR',
        'value': 180,
      },
      {
        'id': 'IN-UT',
        'value': 180,
      },


      {
        'id': 'IN-TG',
        'value': 240,
      }
    ];


    // Create image series
    const imageSeries = this.chart.series.push(new am4maps.MapImageSeries());


// Create a circle image in image series template so it gets replicated to all new images
    const imageSeriesTemplate = imageSeries.mapImages.template;
    const circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 8;
    circle.fill = am4core.color('#84329b');
    circle.stroke = am4core.color('#FFFFFF');
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = '{title}:{value}';

    imageSeries.heatRules.push({
      'target': circle,
      'property': 'radius',
      'min': 4,
      'max': 10,
      'dataField': 'value'
    });

// Set property fields
    imageSeriesTemplate.propertyFields.latitude = 'latitude';
    imageSeriesTemplate.propertyFields.longitude = 'longitude';

// Add data for the three cities
    imageSeries.data = [{
      'latitude': 12.97,
      'longitude': 77.59,
      'title': 'Bengaluru',
      'value': 10
    }, {
      'latitude': 19.07,
      'longitude': 72.87,
      'title': 'Mumbai',
      'value': 15
    }, {
      'latitude': 28.61,
      'longitude': 77.20,
      'title': 'New Delhi',
      'value': 15
    },
      {
        'latitude': 22.57,
        'longitude': 88.36,
        'title': 'Kolkata',
        'value': 9
      },
      ,
      {
        'latitude': 13.08,
        'longitude': 80.27,
        'title': 'Chennai',
        'value': 8
      }];
    this.zone.runOutsideAngular(() => {
      const userNumber = am4core.create('userdiv', am4charts.XYChart);

      userNumber.paddingRight = 20;

      const data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({date: new Date(2018, 0, i), name: 'name' + i, value: visits});
      }
      console.log('date is falana', data[1].date);
      userNumber.data = data;

      const dateAxis = userNumber.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const valueAxis = userNumber.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      const series = userNumber.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';

      series.tooltipText = '{valueY.value}';
      userNumber.cursor = new am4charts.XYCursor();

      const scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      userNumber.scrollbarX = scrollbarX;

      this.userNumber = userNumber;
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.userNumber) {
        this.userNumber.dispose();
      }
    });
  }
}
