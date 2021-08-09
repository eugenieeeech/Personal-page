import React from "react";
import { useSnackbar, VariantType as SnackbarVariantType } from 'notistack';

import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';


export interface CreateSnackbarOptions {
  message: string;
  variant?: SnackbarVariantType;
  dismissable?: boolean; // default: true
  autoHideDuration?: number;  // default: 5000
}

export const CreateSnackbarContext = React.createContext<{
  createSnackbar: (options: CreateSnackbarOptions) => void
}| null>(null);

export const useCreateSnackbar = () => {
  return React.useContext(CreateSnackbarContext);
}

const CreateSnackbarProvider: React.FC<{}> = (props) => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const createSnackbar = (options: CreateSnackbarOptions) => {
    console.log("Creating snackbar");
    var action; 

    if (options.dismissable !== false) {
      action = (key : any) => (
        <IconButton 
          size="small" 
          style={{color: 'white'}} 
          aria-label="dismiss"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          <CloseIcon 
            fontSize="small"
          />
        </IconButton>
        
      );
    }

    enqueueSnackbar(
      options.message, {
        variant: options.variant,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        autoHideDuration: options.autoHideDuration || 5000,
        action
      }
    );
  }
  
  return (
    <CreateSnackbarContext.Provider value={{createSnackbar}}>
        {props.children}
    </CreateSnackbarContext.Provider>
    
  );
}

export default CreateSnackbarProvider;
