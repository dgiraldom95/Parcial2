import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = (props) => {
  const width = 700;
  const height = 500;
  const margin = { top: 10, left: 50, bottom: 40, right: 10 };
  const iwidth = width - margin.left - margin.right;
  const iheight = height - margin.top - margin.bottom;

  const d3Container = useRef(null);

  useEffect(() => {
    console.log(props.data);
    if (props.data && d3Container.current) {
      const svg = d3
        .select(d3Container.current)
        .attr('width', width)
        .attr('height', height)
        .style('border', '1px solid black');

      const update = svg.append('g').selectAll('rect').data(props.data);

      update
        .enter()
        .append('rect')
        .attr('fill', 'navy')
        .attr('class', 'sBar')
        .attr('width', 10)
        .attr('height', 50)
        .attr('x', (d, i) => i * 25)
        .attr('y', (d, i) => d.views * 30)
        .text((d) => d.id);
    }
  });

  return <svg className="d3-component" width={400} height={200} ref={d3Container} />;
};

export default Graph;
