





///////////////////////////////////
///////Graph I - analysis/////////
/////////////////////////////////


var url = "https://quake-wells.herokuapp.com/data";

var proxyurl = "https://cors-anywhere.herokuapp.com/";

  function buildPlot() {
  d3.json(proxyurl + url).then(function(loving_data) {
    console.log(loving_data);
    
    api= [];
    dg = [];

    // sorting the daily gas prodcution
    loving_data.sort((a, b) => (b.Daily_Oil > a.Daily_Oil) ? 1 : -1)

   
    // top10 = dg.length*0.1

    for (var i = 0; i < loving_data.length*0.01; i++) {
  
    var  api_nbr = loving_data[i].API;
    var  daily = loving_data[i].Daily_Oil; 

    api.push(api_nbr);
    dg.push(daily);
  }
  console.log(api);
  console.log(dg);
  
  
  var trace1 = 
    {
      x: api,
      y: dg,
      type: 'bar'
    }
    var plot_data = [trace1];

    var layout = {
      title: 'top 10 Most producing wells ',
      font:{
        family: 'Raleway, sans-serif'
      },
      showlegend: false,
      xaxis: {
        tickangle: -45
      },
      yaxis: {
        zeroline: false,
        gridwidth: 2
      },
      bargap :0.05
    };
    
  
  Plotly.newPlot('graph', plot_data, layout);
 
  });
}
  
buildPlot();







////////////////////////////////////////////////////////////////////////
////////Graph II -Oil & Gas Production By Year In Loving County, TX//// 
//////////////////////////////////////////////////////////////////////

// var prod_url = "https://gist.githubusercontent.com/hmakhlouf/1ff8fec36385fbd6c4c9a162b655de46/raw/2196c76e95e6b92a1f47aa35c04fbff3a92cdc0f/Prod_LovingCountyhttps://gist.githubusercontent.com/hmakhlouf/1ff8fec36385fbd6c4c9a162b655de46/raw/2196c76e95e6b92a1f47aa35c04fbff3a92cdc0f/Prod_LovingCounty"


// function buildProductionPlot() {
//   d3.json(prod_url).then(function(prod_data) {
//     console.log(prod_data);
        
//     years = [];
//     oil_production = [];
//     gas_production = [];
  
// for (var i = 0; i < prod_data.length; i++) {
  
//   var  yrs = prod_data[i].Years;
//   var  prod_oil = prod_data[i]["Oil(BBLs)"]; 
//   var  prod_gas = prod_data[i]["Gas(MCF)"]
  
//   years.push(yrs);
//   oil_production.push(prod_oil);
//   gas_production.push(prod_gas);

//   }
//   // console.log(years);
//   // console.log(oil_production);
//   // console.log(gas_production);

//   var trace1 = {
//   type: "scatter",
//   mode: "lines+markers",
//   name: "Oil(BBL)",        
//   marker: { 
//     size: 8,
//     opacity: 0.9,
//   },    
//   x: years,
//   y: oil_production,
//   line: {
//     color: "green"
//   }

  
//   };


//   // var trace2 = {
//   //   type: "scatter",
//   //   mode: "lines+markers",
//   //   name: "Gas(MCF)",
//   //   marker: { 
//   //   size: 6,
//   //   opacity: 0.9,
//   //   },
//   //   x: years,
//   //   y: gas_production,
//   //   line: {
//   //     color: "red"
//   //   }
//   //   };



//   var plot_data = [trace1];  // , trace2

//   var layout = {
//     title:'Oil & Gas Production By Year In Loving County, TX',
    
//     "titlefont": {
//       // family: 'Courier New, monospace',
//     "size": 32,
//   },
//   plot_bgcolor: "#fffce4", // '#fff5d0',   
//   xaxis: {
//     title: {
//       text: 'Years',
//       font: {
//         family: 'Courier New, monospace',
//         size: 25,
//         color: '#7f7f7f'
//       }
//     },
//   // range: [1993, 2019],
//   type: "date", 
//   },
//   yaxis: {
//     title: {
//       text: 'Production',
//       font: {
//         family: 'Courier New, monospace',
//         size: 25,
//         color: '#7f7f7f'
//       }
//     }
//   }
// };
    

//   Plotly.newPlot("graph_prod", plot_data, layout); 

//   });

// }


// // dropdown event 
// var LINE = document.getElementById("graph_prod");

// function updatePlotly(newx, newy, newline) {
//   var LINE = document.getElementById("graph_prod");

  
//   Plotly.restyle(LINE, "x", [newx]);
//   Plotly.restyle(LINE, "y", [newy]);
//   Plotly.restyle(LINE, "line", [newline]);
//   // Plotly.restyle(LINE, "name", [newname]);

  
// }

// function getData(dataset) {
//   var x = [];
//   var y = [];
//   var line = [];
//   // var name = [];

//   switch (dataset) {
//   case "dataset1":
//     x = years;
//     y = oil_production;
//     line = {
//           color: "green"
//         };
//     name = "Oil(BBLs)";
    
    
//     break;

//   case "dataset2":
//     x = years;
//     y = gas_production;
//     line =  {
//           color: "red"
//         };
//     name =  "Gas(MCF)";
    
//   }

//   updatePlotly(x, y, line);
// }




// buildProductionPlot();

















