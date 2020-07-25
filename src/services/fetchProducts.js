import axios from 'axios';
import { fetchPending, fetchSucces, fetchError } from '../reduxData/actions/productsActions';

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending());

  try {
    const response = await axios.get(
      // 'http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com'
      'https://d24huwa7xw9s1p.cloudfront.net'
    );
    dispatch(fetchSucces(response.data));
  } catch (e) {
    dispatch(fetchError(e));
  }
};
