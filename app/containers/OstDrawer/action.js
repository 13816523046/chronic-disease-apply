import {
  SET_DRAWER_STATUS,
} from './constant'

export const changeDrawerStyle = (visibleFlag, styles) => {
  return {
    type: SET_DRAWER_STATUS,
    visibleFlag,
    styles,
  }
}
