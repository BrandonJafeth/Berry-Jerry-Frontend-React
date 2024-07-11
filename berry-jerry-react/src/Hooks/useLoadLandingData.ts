import { useQuery } from 'react-query';
import { fetchData } from '../Services/LandingService'; 

export const useLoadLandingData = () => {
  return useQuery('landingData', async () => {
    const endpoints = ['hero', 'services', 'footer', 'reviews', 'gallery'];
    const promises = endpoints.map(endpoint => fetchData(endpoint));
    const results = await Promise.all(promises);
    return {
      heroData: results[0],
      servicesData: results[1],
      footerData: results[2],
      customerReviewsData: results[3],
      galleryData: results[4],
    };
  });
};