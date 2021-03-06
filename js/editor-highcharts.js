// JavaScript Document for Editor highcharts
/* -- Highcharts graphs -- */
Highcharts.setOptions({
    colors: ['#F05440', '#192440', '#F05440', '#337AB7', '#F0AD4E', '#00CD00', '#FF0000'],
    chart: {
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 0
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initiate graphs here
	// #highcharts-type-bar-preview-example
var typeBarPreviewExample = Highcharts.chart('highcharts-type-bar-preview-example', {
    chart: {
        type: 'bar',
        animation: false,
        AnimationOptionsObject: false,
        backgroundColor: "#FFF",
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 1,
        plotBorderColor: 0,
    },
    tooltip: { enabled: false },
    legend: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
        series:{
            states: {
                inactive: {
                    opacity: 1
                },
                hover: {
                    enabled: false
                }
            }
        }
    },
    title: {
        text: 'Bar',
        align: "left"
    },
    xAxis: {
        title: {
            text: ''
        },    
        categories: ['A', 'B', 'C'],
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    series: [{
        name: '1',
        data: [1, 3, 5]
        // 0 of caregoy 1
        // 2 of caregoy 2
        // 4 of caregoy 3
    }, {
        name: '2',
        data: [2, 4, 6]
        // 1 of caregoy 1
        // 3 of caregoy 2
        // 5 of caregoy 3
    }]
});
	// #highcharts-type-column-element-preview    
var typeColumnPreviewExample = new Highcharts.chart('highcharts-type-column-preview-example', {
    chart: {
        type: 'column',
        animation: false,
        AnimationOptionsObject: false,
        backgroundColor: "#FFF",
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 1,
        plotBorderColor: 0,
    },
    tooltip: { enabled: false },
    legend: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
        series:{
            states: {
                inactive: {
                    opacity: 1
                },
                hover: {
                    enabled: false
                }
            }
        }
    },
    title: {
        text: 'column',
        align: "left"
    },
    xAxis: {
        title: {
            text: ''
        },    
        categories: ['A', 'B', 'C'],
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    series: [{
        name: '1',
        data: [1, 3, 5]
        // 0 of caregoy 1
        // 2 of caregoy 2
        // 4 of caregoy 3
    }, {
        name: '2',
        data: [2, 4, 6]
        // 1 of caregoy 1
        // 3 of caregoy 2
        // 5 of caregoy 3
    }]
});
	// #highcharts-type-line-element-preview    
var typelinePreviewExample = new Highcharts.chart('highcharts-type-line-preview-example', {
    chart: {
        type: 'line',
        animation: false,
        AnimationOptionsObject: false,
        backgroundColor: "#FFF",
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 1,
        plotBorderColor: 0,
    },
    tooltip: { enabled: false },
    legend: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
        series:{
            states: {
                inactive: {
                    opacity: 1
                },
                hover: {
                    enabled: false
                }
            }
        }
    },
    title: {
        text: 'line',
        align: "left"
    },
    xAxis: {
        title: {
            text: ''
        },    
        categories: ['A', 'B', 'C'],
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    series: [{
        name: '1',
        data: [1, 3, 5]
        // 0 of caregoy 1
        // 2 of caregoy 2
        // 4 of caregoy 3
    }, {
        name: '2',
        data: [2, 4, 6]
        // 1 of caregoy 1
        // 3 of caregoy 2
        // 5 of caregoy 3
    }]
});
	document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('highcharts-type-line-example', {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Graph title'
        },
        xAxis: {
            title: {
                text: 'X-axis title'
            },    
            categories: ['Category 1', 'Category 2', 'Category 3']
        },
        yAxis: {
            title: {
                text: 'Y-axis title'
            }
        },
        series: [{
            name: 'Series name 1',
            data: [0, 2, 4]
            // 0 of caregoy 1
            // 2 of caregoy 2
            // 4 of caregoy 3
        }, {
            name: 'Series name 2',
            data: [1, 3, 5]
            // 1 of caregoy 1
            // 3 of caregoy 2
            // 5 of caregoy 3
        }]
    });
});
	
})// #highcharts-type-pie-element-preview    
var typepiePreviewExample = Highcharts.chart('highcharts-type-pie-preview-example', {
    chart: {
        type: 'pie',
        animation: false,
        AnimationOptionsObject: false,
        backgroundColor: "#FFF",
        borderWidth: 0,
        plotShadow: false,
        plotBorderWidth: 1,
        plotBorderColor: 0,
    },
    tooltip: { enabled: false },
    legend: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
    pie: {
    allowPointSelect: false,
    },
    series:{
            states: {
                inactive: {
                    opacity: 1
                },
                hover: {
                    enabled: false
                }
            }
        }
    },
    title: {
        text: 'pie',
        align: "left"
    },
    xAxis: {
        title: {
            text: ''
        },    
        categories: ['A', 'B', 'C'],
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    series: [{
        name: 'ABC',
        colorByPoint: true,
        data: [{
            name: 'A',
            y: 4,
        }, {
            name: 'B',
            y: 3
        }, {
            name: 'C',
            y: 2
        }, {
            name: 'D',
            y: 1
        }]
    }]
});