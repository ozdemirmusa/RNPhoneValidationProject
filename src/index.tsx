function phonevalidation(phone: string): true | false {
  const regex_phone:RegExp = /^[(]?[0]?([0-9]{3})[)]?[-\s]?([0-9]{3})[-\s]?([0-9]{2})[-\s]?([0-9]{2})$/
  if(regex_phone.test(phone)){
    return true
  }else{
    return false
  }
  
}

export default phonevalidation;