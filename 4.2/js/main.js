// This selects the first <h1> tag it finds and changes the text color.
d3.select("h1")
  .style("color", "green");

// Experimenting with another element: Making the first paragraph italic
d3.select("p")
  .style("font-style", "italic");

// This selects the div with the class "container" and adds a new <p> at the end of it.
d3.select(".container")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!")
  .style("font-weight", "bold")
  .style("color", "blue");

// This targets the <svg> we created in the HTML and injects a <rect> into it.
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");