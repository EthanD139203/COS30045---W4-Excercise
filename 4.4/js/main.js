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
}).then(data => {
    // 2. Check browser console for the JavaScript objects created from the dataset
    console.log("Parsed data:", data);
    
    // 3. Use D3 to find information about the dataset
    console.log("Number of rows:", data.length);
    console.log("Maximum value:", d3.max(data, d => d.value));
    console.log("Minimum value:", d3.min(data, d => d.value));

    // Sort the data 
    data.sort((a, b) => b.value - a.value);
});