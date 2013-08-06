//Graph for Percent Charge
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("BattSoC").innerHTML;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: 0, max: 100 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#PERCENT_CHARGE_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});


//Graph for Power In
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = 2.5; //document.getElementById("POWER_IN").innerHTML;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0 }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#POWER_IN_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});




//Graph For Power Out
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = 1.2; //document.getElementById("POWER_OUT").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#POWER_OUT_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});



//Graph for USB Current
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("USB_CURRENT").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#USB_CURRENT_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});


//Graph for Auxiliary Power Current
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("AUX_PWR_CURRENT").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#AUX_PWR_CURRENT_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});


//Graph for Charge Current
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("CHARGE_CURRENT").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#CHARGE_CURRENT_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});


//Graph for System Current
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("SYSTEM_CURRENT").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 3.3 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#SYSTEM_CURRENT_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});


//Graph for Battery Voltage
$(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 50;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            //var y = prev + Math.random() * 10 - 5;
            var y = document.getElementById("BattV").innerHTML;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    // setup control widget
    var updateInterval = 1000;


    // setup plot
    var options = {
        series: { shadowSize: 0, }, // drawing is faster without shadows
        yaxis: { min: 0, max: 10 },
        //yaxis: { show: false }
        xaxis: { show: false }
    };
    var plot = $.plot($("#BattV_GRAPH"), [ getRandomData() ], options);

    function update() {
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        setTimeout(update, updateInterval);
    }

    update();
});

