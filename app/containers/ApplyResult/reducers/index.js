import { combineReducers } from 'redux'
import { Final_Adoption, In_Review, Failure_Of_First_Instance,
  In_First_Instance,Submit_Materials,Failure_Of_In_Review} from '../actions/index.js'

const initialState = {
  progress:Failure_Of_First_Instance,//后台返回状态值
  title:"初审失败",//页面显示状态文字
  showBtnEdit:true,//是否显示-- 去编辑按钮
  progress:[
    { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
    { imgType:0,title:"复审",key:2,showLeftLine:true,showRightLine:true},
    { imgType:0,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
    { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
  ]
}

function applyStateReducer(state = initialState, action) {
  switch (action.type) {
    case Final_Adoption:
      return Object.assign({}, state, {
        progress:Final_Adoption,
        title:"终审通过 申请成功",
        showBtnEdit:false,
        progress:[
          { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:3,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:3,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:3,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    case In_First_Instance:
      return Object.assign({}, state, {
        progress:In_First_Instance,
        title:"初审中 请耐心等待",
        showBtnEdit:false,
        progress:[
          { imgType:2,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:0,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    case In_Review:
      return Object.assign({}, state, {
        progress:In_Review,
        title:"复审中 请耐心等待",
        showBtnEdit:false,
        progress:[
          { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:2,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    case Submit_Materials:
      return Object.assign({}, state, {
        progress:Submit_Materials,
        title:"递交材料 请耐心等待",
        showBtnEdit:false,
        progress:[
          { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:3,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:2,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    case Failure_Of_First_Instance:
      return Object.assign({}, state, {
        progress:Failure_Of_First_Instance,
        title:"初审失败",
        showBtnEdit:true,
        progress:[
          { imgType:1,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:0,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    case Failure_Of_In_Review:
      return Object.assign({}, state, {
        progress:Failure_Of_In_Review,
        title:"复审失败",
        showBtnEdit:true,
        progress:[
          { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
          { imgType:1,title:"复审",key:2,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
          { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
        ]
      })
    default:
      return state
  }
}

export default applyStateReducer