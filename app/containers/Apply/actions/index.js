import {
  GET_DIEASES_START,
  GET_DIEASES_END,
  DEL_SELECTED_DISEASE,
  GET_APPLIED_DISEASES,
  SET_SELECTED_DISEASE,
} from '../constants'

export const setSelectedDiseases = (currDi, selectedDi) => {
  if (selectedDi.length >= 7) {
    if (currDi.isSelected) currDi.isSelected = false
  } else {
    currDi.isSelected = !currDi.isSelected
  }

  // 判断已选中的是该添加还是该删除
  if (currDi.isSelected) {
    // 添加
    selectedDi.push(currDi)
  } else {
    // Delete
    selectedDi.length > 0 && selectedDi.map((s, i) => {
      if (s.id === currDi.id) selectedDi.splice(i, 1)
    })
  }

  return {
    type: SET_SELECTED_DISEASE,
    selectedDi,
  }
}

export const getAppliedDisease = () => {

  let appliedDi = [
    {id: 0, text: 'OMG'},
    {id: 1, text: 'OMG'},
    {id: 2, text: 'OMG'},
    {id: 3, text: 'OMG'},
    {id: 4, text: 'OMG'},
    {id: 5, text: 'OMG'},
    {id: 6, text: 'OMG'},
  ]

  return {
    type: GET_APPLIED_DISEASES,
    appliedDi
  }
}

export const deleteSelectedDisease = (diseaseID, selectedDi, diseases) => {

  selectedDi.length > 0 && selectedDi.map((s, i) => {
    if (s.id === +diseaseID) {
      selectedDi.splice(i, 1)
    }
  })

  diseases.length > 0 && diseases.map((d, i) => {
    if (d.id === +diseaseID) {
      d.isSelected = false
    }
  })

  return {
    type: DEL_SELECTED_DISEASE,
    selectedDi,
    diseases,
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
    let selectedDi = getState().applyReducer.selectedDi
    // 必须再结束上次请求
    if (!isFetching) {

      dispatch(startRequest(isFetching = true))

      let diseases = [
        {
          id: 0,
          text: '病种1',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 1,
          text: '病种2',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 2,
          text: '病种3',
          isApplied: true,
          isSelected: false,
        },
        {
          id: 3,
          text: '病种3',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 4,
          text: '病种4',
          isApplied: true,
          isSelected: false,
        },
        {
          id: 5,
          text: '病种5',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 6,
          text: '病种6',
          isApplied: true,
          isSelected: false,
        },
        {
          id: 7,
          text: '病种7',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 8,
          text: '病种8',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 9,
          text: '病种9',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 10,
          text: '病种10',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 11,
          text: '病种11',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 12,
          text: '病种12',
          isApplied: false,
          isSelected: false,
        },
        {
          id: 13,
          text: '病种13',
          isApplied: false,
          isSelected: false,
        }
      ]

      diseases.length > 0 && diseases.map((di, idx) => {
        selectedDi.length > 0 && selectedDi.map((s, i) => {
          if (s.id === di.id) {
            di.isSelected = s.isSelected
          }
        })
      })

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
