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
        item.acc == id
    })
    dsnv.splice(index,1)
    renderTable(dsnv)
}
function resetForm(){
    document.getElementById('formDSNV').reset()
    document.getElementById('tknv').readOnly = false
}