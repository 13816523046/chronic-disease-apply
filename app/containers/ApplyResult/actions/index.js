/*
 * action 类型
 */

export const Final_Adoption = 'Final_Adoption';//终审通过
export const In_First_Instance = 'In_First_Instance';//初审中
export const In_Review = 'In_Review';//复审中
export const Submit_Materials = 'Submit_Materials';//递交材料
export const Failure_Of_First_Instance = 'Failure_Of_First_Instance';//初审失败
export const Failure_Of_In_Review = 'Failure_Of_In_Review';//复审失败
/*
 * action 创建函数
 */

export function Add_Final_Adoption() {
  	return { type: Final_Adoption }
}

export function Add_In_Review() {
  	return { type: In_Review }
}

export function Add_Failure_Of_First_Instance() {
  	return { type: Failure_Of_First_Instance }
}

export function Add_In_First_Instance() {
  	return { type: In_First_Instance }
}

export function Add_Submit_Materials() {
  	return { type: Submit_Materials }
}

export function Add_Failure_Of_In_Review() {
  	return { type: Failure_Of_In_Review }
}

