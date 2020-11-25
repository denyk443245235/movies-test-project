import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import movieApi from '../../api-services/movies';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import Button from "@material-ui/core/Button";
import Preloader from "../preloader";
import { allowedMovieOptions } from '../../config';
import './details.css';

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const [ movieOptions, setMovieOptions] = useState(null);

  const parseOptionsInArray = () => {
    return Object.keys(movieOptions).filter(item => allowedMovieOptions.indexOf(item) !== -1);
  };

  const returnToDashboard = () => {
    history.push('/dashboard');
  };

  useEffect( () => {
    movieApi.getDetails(id)
      .then(details => {
        setMovieOptions(details)
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const descriptionList = () => {
    let arrayOptions = parseOptionsInArray();
    return arrayOptions.map((key, index) => {
      return  (
        <Accordion key={index}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{key}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              { movieOptions[key] }
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    })
  };

  if (!movieOptions) {
    return <Preloader/>
  }

  const { Poster, Title } = movieOptions;

  return (
    <div className='details-container'>
      <div>
        <img src={Poster} alt='icon'/>
        <Button onClick={returnToDashboard} variant="contained" color="secondary">
          Back to dashboard
        </Button>
      </div>
      <div className='options-container'>
        <div className='title'>{Title}</div>
        <div style={{width: '60%'}}>
          {descriptionList()}
        </div>
      </div>
    </div>
  )
};

export default Details;