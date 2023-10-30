import React, { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/Loading';
import { actionExampleContext } from '../context/actionExampleContext';
import { actionExampleAction, setActionExampleTwo } from '../actions/actionExample';

const Page1 = () => {
  const { state: loadingState, dispatch: loadingDispatch } = useContext(LoadingContext);
  const { state: actionExampleState, dispatch: actionExampleDispatch } = useContext(actionExampleContext);
  console.log('actionExampleState: ', actionExampleState);

  useEffect(()=>{
    actionExampleAction()(actionExampleDispatch, loadingDispatch)
  }, []);

  return (
    loadingState.loading ?
    <div>loading</div>
    :
    <div>
      Page1
      {actionExampleState?.actionExample?.length ? actionExampleState?.actionExample?.map((val) => {
        return (
          <>
            <div>
              title {val?.title}
            </div>
            <div>
              description {val?.description}
            </div>
          </>
        );
      }) : <>no data found</>}
    </div>
  )
}

export default Page1