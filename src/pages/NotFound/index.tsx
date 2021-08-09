import React from "react";
import PageTemplate from "../../components/PageTemplate";

const NotFound: React.FC = (props) => {
  return (
    <PageTemplate 
      appBarTitle="Error"
      errorCode={404}
    >    
    </PageTemplate>
  );
}

export default NotFound;