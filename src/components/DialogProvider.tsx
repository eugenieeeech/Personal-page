import React, {  useReducer } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, DialogProps } from "@material-ui/core";

export enum DialogType {
  Alert, 
  Confirm,
  Customized,
}

export interface DialogOptions {
  title: string | JSX.Element;
  message: string | JSX.Element;
  type?: DialogType;    // Default alert
  key?: number;

  DialogProps?: Partial<DialogProps>;

  onClose?: () => void; // For all

  alertActionText?: string; // Default "OK"

  actions?: JSX.Element;

  // action?: React.ReactNode | React.ReactNode[];     // Override default action
  onConfirm?: () => boolean | void | Promise<boolean | void>;   // For confirm
  onConfirmCancel?: () => boolean | void | Promise<boolean | void>; // For confirm
}

interface DialogDetails {
  key?: number;
  open: boolean;
  loading: boolean;
  options: DialogOptions;



}

// https://www.basefactor.com/global-state-with-react
// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68
// https://stackoverflow.com/questions/54738681/how-to-change-context-value-while-using-react-hook-of-usecontext
//const defaultGlobalState: AlertDialogDetails[] = [];


type CreateDialogFunction = (options: DialogOptions) => number;

export const DialogContext = React.createContext<{
  closeDialog: (key: any) => void,
  createDialog: CreateDialogFunction,
  createAlertDialog: CreateDialogFunction,
  createConfirmDialog: CreateDialogFunction,
}| null>(null);

export const useDialog = () => {
  return React.useContext(DialogContext);
}

interface DialogDetailsReducerAction {
  type: 'add' | 'close' | 'loading';
  options?: DialogOptions;  // add
  key?: number; // close
  loading?: boolean;  // loading
};

const dialogDetailsReducer = (dialogDetails: DialogDetails[], action: DialogDetailsReducerAction) => {
  var newDialogDetails = [...dialogDetails];

  switch (action.type) {
    case 'add':
      newDialogDetails.push({
        key: action.key,
        open: true,
        loading: false,
        options: action.options as DialogOptions
      })
    break;

    case 'close':
    case 'loading': 

      // Find dialog details by key
      for (let newDialogDetail of newDialogDetails) {
        if (newDialogDetail.key === action.key) {
          switch (action.type) {
            case 'close': 
              newDialogDetail.open = false;
            break;

            case 'loading':
              newDialogDetail.loading = action.loading as boolean;
            break;
          }
        }
      }
    break;
  }
  return newDialogDetails;
}

const DialogProvider: React.FC<{}> = (props) => {
  const [dialogDetails, dispatchDialogDetails] = useReducer(
    dialogDetailsReducer,
    [] as DialogDetails[]  // initial state
  );

  const closeDialog = (key: any) => {
    for (let dialogDetail of dialogDetails) {
      if (dialogDetail.key === key) {
        dialogDetail.open = false;
      }
    }
    //setDialogDetails([...dialogDetails]);
  }

  const createDialog = (options: DialogOptions) => {
    var key = options.key || Math.floor(Math.random() * 10000000);
    options.key = key;

    dispatchDialogDetails({
      type: 'add',
      key: key,
      options: options
    })
    return key; 
  }

  const createAlertDialog = (options: DialogOptions) => {
    return createDialog({
      type: DialogType.Alert,
      ...options
    });
  }

  const createConfirmDialog = (options: DialogOptions) => {
    return createDialog({
      type: DialogType.Confirm,
      ...options
    });
  }



  return (
    <DialogContext.Provider value={{
      closeDialog,
      createDialog, 
      createAlertDialog,
      createConfirmDialog,
    }}>
      {
        dialogDetails && dialogDetails.map((dialogDetail, index) => {
          //console.log(dialogDetail.key);
          return (
            <Dialog
              key={dialogDetail.key}
              fullWidth={true}
              PaperProps={{
                style: {
                  minWidth: '320px'
                }
              }}
              open={dialogDetail.open}
              onClose={() => {
                if (dialogDetail.options.onClose) {
                  dialogDetail.options.onClose();
                }
                
              }}
              onExited={() => {
                // Delete this alert dialog from detail
                // dialogDetails.filter((obj) => {
                //   return obj != dialogDetail;
                // });
                // setDialogDetails([...dialogDetails]);
              }}
              {...dialogDetail.options.DialogProps}
            >
              <DialogTitle>{dialogDetail.options.title}</DialogTitle>
              <DialogContent>
                {
                  typeof(dialogDetail.options.message) === "string" && (
                  <DialogContentText>
                    {dialogDetail.options.message}
                  </DialogContentText>
                  )
                }
                {
                  typeof(dialogDetail.options.message) != "string" && (
                    dialogDetail.options.message
                  )
                }

              </DialogContent>
              <DialogActions>
                {
                  dialogDetail.options.type === DialogType.Customized &&
                  dialogDetail.options.actions
                }

                {
                  (dialogDetail.options.type === DialogType.Alert) &&
                  <Button 
                    onClick={() => {
                      dispatchDialogDetails({
                        type: 'close',
                        key: dialogDetail.key
                      })
                    }}
                    color="primary">
                    {dialogDetail.options.alertActionText || "Okay"}
                  </Button>
                }
                
                {
                  (dialogDetail.options.type === DialogType.Confirm) &&
                  <Button 
                    disabled={dialogDetail.loading}
                    onClick={() => {
                      dispatchDialogDetails({
                        type: 'close',
                        key: dialogDetail.key
                      })
                      
                      if (dialogDetail.options.onConfirmCancel) {
                        dialogDetail.options.onConfirmCancel();
                      }
                    }}
                    color="primary">
                    Cancel
                  </Button>
                }
                {
                  (dialogDetail.options.type === DialogType.Confirm) &&
                  <Button 
                    disabled={dialogDetail.loading}
                    onClick={async () => {
                      
                      var shouldClose = true;
                      

                      if (dialogDetail.options.onConfirm) {
                        dispatchDialogDetails({
                          type: 'loading',
                          key: dialogDetail.key,
                          loading: true
                        })
                        let result = await dialogDetail.options.onConfirm();
                        dispatchDialogDetails({
                          type: 'loading',
                          key: dialogDetail.key,
                          loading: false
                        });

                        shouldClose = !(result === false);
                      }

                      if (shouldClose) {
                        dispatchDialogDetails({
                          type: 'close',
                          key: dialogDetail.key
                        })
                      }
                      
                    }}
                    color="secondary">
                    Confirm
                  </Button>
                }
              </DialogActions>
            </Dialog>
          )
        })
      }
      {props.children}
    </DialogContext.Provider>
  )
}

export default DialogProvider;
