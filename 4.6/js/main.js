// 1. Define margins and dimensions for the chart area
const margin = { top: 20, right: 30, bottom: 30, left: 120 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// 2. Create the SVG canvas and append a group (<g>) shifted by the margins
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .style("border", "1px solid black")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// 3. Create the function to draw the chart using scales
const drawBarChart = (data) => {
    
    // Domain goes from 0 to the maximum value in your data. Range goes from 0 to the chart width.
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, width]);

    // Domain is an array of all your category names. Range is the chart height.
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, height])
        .padding(0.1); // adding a 10% gap between each bar

    // 4. Bind the data and draw the rectangles using new scales
    svg.selectAll("rect")
       .data(data)
       .join("rect")
       .attr("class", d => `bar bar-${d.value}`)
       .attr("x", 0)
       .attr("y", d => yScale(d.category))       // Use yScale to find the vertical position
       .attr("width", d => xScale(d.value))      // Use xScale to calculate the exact pixel width
       .attr("height", yScale.bandwidth())       // Use yScale to automatically set the bar thickness
       .style("fill", "turquoise"); 
};

// 5. Load the CSV data and call the draw function
d3.csv("data/tv.csv", d => {
    return {
        category: d.Brand, 
        value: +d.Amount     
    };
}).then(data => {
    // Sort the data from highest to lowest for a cleaner chart
    data.sort((a, b) => b.value - a.value);
    drawBarChart(data);
});