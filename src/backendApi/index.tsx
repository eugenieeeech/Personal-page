
import BackendHttpError from './src/BackendHttpError';


export default {
  // root: RootController,
  // Will throw error if not axios error
  interceptError: (err: any): BackendHttpError => {
    if (err.isAxiosError) {

      err.toAlertDialog = () => {
        if (err.response) {
          // Server-side error
          return {
            title: `Server error (${err.response.data.status})`,
            message: err.response.data.message
          }

        } else {
          // Network error
          return {
            title: "Network error",
            message: "Network error occurs, please try again later."
          };
        }
      }

      return err;
    } else {
      throw err;
    }
  }
}

