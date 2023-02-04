import {useParams} from 'react-router-dom';

export const useParamsId = () => {
  return Number(useParams().id);
};