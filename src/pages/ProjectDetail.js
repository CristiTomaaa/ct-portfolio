import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';


const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  return (
    <div>
      <h1>Movie details</h1>
    </div>
  );
}

export default ProjectDetail;