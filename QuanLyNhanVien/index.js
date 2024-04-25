var dsnv = []
var data = localStorage.getItem('DSNV')
if (data != null){
    var dataRaw = JSON.parse(data)
    for(var i=0; i<dataRaw.length; i++){
        var nv = new NhanVien(
            dataRaw[i].acc,
            dataRaw[i].name,
            dataRaw[i].email,
            dataRaw[i].pass,
            dataRaw[i].date,
            dataRaw[i].salary,
            dataRaw[i].position,
            dataRaw[i].hour,
        )
        dsnv.push(nv)
    }
    renderTable(dsnv)
}
function themNhanVien(){
    var nv = layThongTin()
    var isValid = kiemTraRong(nv.acc,"tbTKNV") && kiemTraMinMax(nv.acc,"tbTKNV",4,6) 
    isValid = kiemTraRong(nv.name,"tbTen") && kiemTraChu(nv.name,"tbTen") && isValid
    isValid = kiemTraRong(nv.email,"tbEmail") && kiemTraEmail(nv.email) && isValid
    isValid = kiemTraRong(nv.pass,"tbMatKhau") && kiemTraMinMax(nv.pass,"tbMatKhau",6,10) && kiemTraMatKhau(nv.pass,"tbMatKhau") && isValid
    isValid = kiemTraRong(nv.date,"tbNgay") && kiemTraNgay(nv.date) && isValid
    isValid = kiemTraRong(nv.salary,"tbLuongCB") && kiemTraLuong(nv.salary,"tbLuongCB",1000000,20000000) && isValid
    isValid = kiemTraChucVu(nv.position) && isValid
    isValid = kiemTraRong(nv.hour,"tbGiolam") && kiemTraSoGio(nv.hour,"tbGiolam",80,200) && isValid
    if(isValid){
    dsnv.push(nv)
    var data = JSON.stringify(dsnv)
    localStorage.setItem('DSNV', data)
    renderTable(dsnv)
    }
}
function xoaNV(id){
    var index = dsnv.findIndex(function(item){
         return item.acc == id
    })
    dsnv.splice(index,1)
    renderTable(dsnv)
}
function suaNV(id){
    var index = dsnv.findIndex(function(item){
         return item.acc == id
    })
    nv = dsnv[index]
    document.getElementById('tknv').value = nv.acc
    document.getElementById('name').value = nv.name
    document.getElementById('email').value = nv.email
    document.getElementById('password').value = nv.pass
    document.getElementById('datepicker').value = nv.date
    document.getElementById('luongCB').value = nv.salary
    document.getElementById('chucvu').value = nv.position
    document.getElementById('gioLam').value = nv.hour
    document.getElementById('tknv').readOnly = true
}
function capNhat(){
    var nv = layThongTin()
    var index = dsnv.findIndex(function(item){
        return item.acc == nv.acc
   })
   dsnv[index] = nv
   var isValid = kiemTraRong(nv.acc,"tbTKNV") && kiemTraMinMax(nv.acc,"tbTKNV",4,6) 
   isValid = kiemTraRong(nv.name,"tbTen") && kiemTraChu(nv.name,"tbTen") && isValid
   isValid = kiemTraRong(nv.email,"tbEmail") && kiemTraEmail(nv.email) && isValid
   isValid = kiemTraRong(nv.pass,"tbMatKhau") && kiemTraMinMax(nv.pass,"tbMatKhau",6,10) && kiemTraMatKhau(nv.pass,"tbMatKhau") && isValid
   isValid = kiemTraRong(nv.date,"tbNgay") && kiemTraNgay(nv.date) && isValid
   isValid = kiemTraRong(nv.salary,"tbLuongCB") && kiemTraLuong(nv.salary,"tbLuongCB",1000000,20000000) && isValid
   isValid = kiemTraChucVu(nv.position) && isValid
   isValid = kiemTraRong(nv.hour,"tbGiolam") && kiemTraSoGio(nv.hour,"tbGiolam",80,200) && isValid
   if(isValid){
   renderTable(dsnv)
   }
}

document.getElementById('btnTimNV').onclick = function() {
    var searchKeyword = document.getElementById('searchName').value.toLowerCase();

    var filteredEmployees = dsnv.filter(function(nv) {
        return nv.xepLoai().includes(searchKeyword);
    });

    renderTable(filteredEmployees);
}
