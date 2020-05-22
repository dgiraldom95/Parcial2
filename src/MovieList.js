import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import * as d3 from 'd3';
import Movie from './Movie';
import Graph from './Graph';

const MovieList = (props) => {
  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    if (!currentMovie) setCurrentMovie(props.movies[0]);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <FormattedMessage id="Name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Director" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Country" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Budget" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Release" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Views" />
                </th>
              </tr>
            </thead>
            <tbody>
              {props.movies.map((m) => (
                <Movie key={m.id} movie={m} clickAction={() => setCurrentMovie(m)} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-4">
          {currentMovie && (
            <div>
              <img className="img-fluid" src={currentMovie.poster} />
              <h5>
                <b>{currentMovie.name}</b>
              </h5>
              <p>{currentMovie.description}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Graph data={props.movies.map((m) => ({ id: m.id, views: m.views }))} />
      </div>
    </div>
  );
};

export default MovieList;
