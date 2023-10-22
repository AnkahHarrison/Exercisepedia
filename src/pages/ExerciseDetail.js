import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      //   console.log({ exerciseDetailData }); //for debugging

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideoData.contents);
      //console.log({ exerciseVideoData }); //for debugging
    };
    fetchExerciseData();
  }, [id]); //will recall the useEffect when id changes
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo 
      exerciseVideos={exerciseVideos}
      name={exerciseDetail.name}
      
      />
      <SimilarExercises
        
      />
    </Box>
  );
};

export default ExerciseDetail;
