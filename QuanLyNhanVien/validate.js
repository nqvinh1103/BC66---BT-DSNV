function kiemTraRong(value,idErr){
    if(value.length == 0){
        document.getElementById(idErr).innerText = "Nội dung này không được để trống"
        return false
    }
    document.getElementById(idErr).innerHTML = ""
    return true
}

function kiemTraMinMax(value,idErr,min,max){
    if(min <= value.length && value.length <= max ){
        document.getElementById(idErr).innerText = ""
        return true
    }
    document.getElementById(idErr).innerText = `Nội dung phải từ ${min} đến ${max} ký số`
    return false
}
function kiemTraChu(value,idErr){
    var lettersOnly = /^[A-Za-z]+$/;
    if(!value.match(lettersOnly)){
        document.getElementById(idErr).innerText = "Nội dung phải là chữ"
        return false
    }
    document.getElementById(idErr).innerText = ""
    return true
}
function kiemTraEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail = re.test(email)
  if(isEmail){
    document.getElementById("tbEmail").innerText = ''
    return true
  }
  document.getElementById('tbEmail').innerText = 'Email không đúng định dạng'
  return false
}
function kiemTraMatKhau(mk,idErr){
    var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]).{8,}$/;
    if(!passwordPattern.test(mk)){
        document.getElementById(idErr).innerText = "Nội dung phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
        return false
    }
    document.getElementById(idErr).innerText = ""
    return true
}
function kiemTraNgay(date){
    var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
    if(regexDate.test(date)){
        document.getElementById('tbNgay').innerText = ''
        return true
    }
    document.getElementById('tbNgay').innerText = 'Nội dung không đúng định dạng mm/dd/yy'
    return false
}
function kiemTraLuong(value,idErr,min,max){
    if(min <= value && value <= max ){
        document.getElementById(idErr).innerText = ""
        return true
    }
    document.getElementById(idErr).innerText = "Lương phải từ 1000000 - 20000000"
    return false
}
function kiemTraChucVu(cv){
    if(cv === "Chọn chức vụ"){
        document.getElementById('tbChucVu').innerText = "Chọn 1 chức vụ hợp lệ"
        return false
    }
    document.getElementById('tbChucVu').innerText = ''
    return true
}
function kiemTraSoGio(value,idErr,min,max){
    if(min <= value && value <= max ){
        document.getElementById(idErr).innerText = ""
        return true
    }
    document.getElementById(idErr).innerText = "Số giờ phải từ 80-200 giờ"
    return false
}