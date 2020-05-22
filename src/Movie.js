import React from 'react';
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';

const Movie = (props) => {
  return (
    <tr onClick={() => props.clickAction()}>
      <th scope="row">{props.movie.id}</th>
      <td>{props.movie.name}</td>
      <td>{props.movie.directedBy}</td>
      <td>{props.movie.country}</td>
      <td>
        <FormattedNumber localeMatcher="best fit" value={props.movie.budget} notation="compact" compactDisplay="long" />
      </td>

      <td>
        <FormattedDate value={props.movie.releaseDate} year="numeric" month="long" day="numeric" weekday="long" />
      </td>

      <td>
        <FormattedNumber localeMatcher="best fit" value={props.movie.views} notation="compact" compactDisplay="long" />
      </td>
    </tr>
  );
};

export default Movie;
