const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

    // 1. Use row conversion function to access data
d3.csv("data/tv.csv", d => {
    return {
        category: d.Brand, 
        value: +d.Amount 
    };
})

.then(data => {
    // 2. Check browser console for the JavaScript objects created from the dataset
    console.log("Parsed data:", data);
    
    // 3. Use D3 to find information about the dataset
    console.log("Number of rows:", data.length);
    console.log("Maximum value:", d3.max(data, d => d.value));
    console.log("Minimum value:", d3.min(data, d => d.value));

    // Sort the data 
    data.sort((a, b) => b.value - a.value);
    drawBarChart(data);
});

// Set a constant for the height of each bar
const barHeight = 20;

// Create a function to draw the chart
const drawBarChart = (data) => {
    
    // 1. Select the svg, bind the data, and join rectangles to the DOM
    svg.selectAll("rect")
       .data(data)
       .join("rect")
       
       // 2. Dynamically assign a class name using a template literal
       .attr("class", d => `bar bar-${d.value}`)
       
       // 3. Set the dimensions and position based on the data
       .attr("width", d => d.value) 
       .attr("height", barHeight)
       .attr("x", 0) 
       .attr("y", (d, i) => (barHeight + 5) * i) 
       .style("fill", "green"); 
};