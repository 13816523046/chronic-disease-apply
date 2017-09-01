import {
  GET_DIEASES_START,
  GET_DIEASES_END,
  DEL_SELECTED_DISEASE,
  GET_APPLIED_DISEASES,
} from '../constants'

export const getAppliedDisease = () => {

  let appliedDi = []

  return {
    type: DEL_SELECTED_DISEASE,
    appliedDi
  }
}

export const deleteSelectedDisease = (diseaseID) => {
  let selectedDiseases = []

  selectedDiseases = []
  return {
    type: GET_APPLIED_DISEASES,
    selectedDiseases,
  }
}

export const startRequest = (isFetching) => {
  return {
    type: GET_DIEASES_START,
    isFetching,
  }
}

export const endRequest = (diseases, isFetching) => {
  return {
    type: GET_DIEASES_END,
    diseases,
    isFetching,
  }
}

export const requestDisease = () => {
  return (dispatch, getState) => {

    let isFetching = getState().applyReducer.isFetching
    // 必须再结束上次请求
    if (!isFetching) {

      dispatch(startRequest(pageNo, isFetching = true))

      let diseases = [
        {
          id: 0,
          text: '病种1',
          isApplied: false,
        },
        {
          id: 1,
          text: '病种2',
          isApplied: false,
        },
        {
          id: 2,
          text: '病种3',
          isApplied: true,
        },
        {
          id: 3,
          text: '病种4',
          isApplied: false,
        }
      ]

      dispatch(endRequest(diseases, isFetching = false));
      /*
      let diPromise = request('get', '/siapp-sms/open/getArticles.do', {

      })
      return diPromise.promise.then((data) => {
        let diseases = []

        dispatch(endRequest(diseases, isFetching = false));
      })
      .catch(err => {
        console.log(err);
      })
      .done()
      */

    }
  }
}
