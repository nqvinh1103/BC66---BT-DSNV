function kiemTraRong(value,idErr){
    if(value.length == 0){
        document.getElementById(idErr).innerText = "Nội dung này không được để trống"
        return false
    }
    document.getElementById(idErr).innerHTML = ""
    return true
}