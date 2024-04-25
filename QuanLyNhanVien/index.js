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
    var isValid = kiemTraRong(nv.acc,"tbTKNV")
    if(isValid){
    dsnv.push(nv)
    var data = JSON.stringify(dsnv)
    localStorage.setItem('DSNV', data)
    renderTable(dsnv)
    resetForm()
    }
}
function xoaNV(id){
    var index = dsnv.findIndex(function(item){
        item.acc == id
    })
    dsnv.splice(index,1)
    renderTable(dsnv)
}
// function suaNV(id){
//     var index = dsnv.findIndex(function(item){
//         item.acc == id
//     })
//     var nv = dsnv[index]
//     document.getElementById('tknv').value = nv.acc
//     document.getElementById('name').value = nv.name
//     document.getElementById('email').value = nv.email
//     document.getElementById('password').value = nv.password
//     document.getElementById('datepicker').value = nv.date
//     document.getElementById('luongCB').value = nv.salary
//     document.getElementById('chucvu').value = nv.position
//     document.getElementById('gioLam').value = nv.hour
//     // read only ô input chứa ô mã
//     document.getElementById('tknv').readOnly = true
// }
// function capNhat(){
//     var nv = layThongTin()
//     var index = dsnv.findIndex(function(item){
//         return item.acc == sv.acc
//     })
//     // update
//     dssv[index] = nv
//     renderDssv(dssv)
//     // clear form sau khi update
//     resetForm()
function resetForm(){
    document.getElementById('formDSNV').reset()
    document.getElementById('tknv').readOnly = false
}