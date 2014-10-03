var chartIsland = c3.generate({
    bindto: "#chartByIsland",
    size: {
	height: 480,
	width: 640
    },
    data: {
	columns: [
	    ['Other', 20],
	    ['Orcas',31],
	    ['Over Water',62],
	    ['San Juan',78],
	    ['Lopez',680],
	],
	type: 'bar',
	labels: true,
	order: 'asc'
    },
    axis: {
	rotated: true
    }
});

var chartTime = c3.generate({
    bindto: "#chartByTime",
    size: {
	height: 480,
	width: 640
    },
    data: {
	rows: [
	    ['Morning', 'Afternoon', 'Night'],
	    [218,371,224],
	],
	type: 'bar',
	colors: {
	    Morning: '#F79646',
	    Afternoon: '#4BACC6',
	    Night: '#1F497D'
	},
	groups: [
	    ['Morning', 'Afternoon', 'Night'],
	],
	order: null,
    },
    axis: {
	rotated: true
    }
});

var chartDate = c3.generate({
    bindto: "#chartByDate",
    size: {
	height: 480,
	width: 640
    },
    data: {
	x: 'Date',
	xFormat: '%m/%d/%Y',
	url: 'jet_noise_incidents_byDate.csv',
	type: 'bar'
    },
    axis: {
	x: {
	    type: 'timeseries'
	}
    },
    legend: { show: false},
});

var chartLoudness = c3.generate({
    bindto: "#chartByLoudness",
    size: {
	height: 480,
	width: 640
    },
    data: {
	rows: [
	    ['Low Rumble','Rumble and Vibration','Disrupted Activities','Extremely Loud'],
	    [150,245,227,249]
	],
	type: 'bar',
	colors: {
	    'Low Rumble': '#E6B9B8',
	    'Rumble and Vibration': '#D99694',
	    'Disrupted Activities': '#953735',
	    'Extremely Loud': '#632523'
	},
	order: null,
	groups: [
	    ['Low Rumble','Rumble and Vibration','Disrupted Activities','Extremely Loud'],
	],
    },
    axis: {
	rotated: true
    }
});

