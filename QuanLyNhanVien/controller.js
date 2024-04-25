function layThongTin(){
    var acc = document.getElementById('tknv').value
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('password').value
    var date = document.getElementById('datepicker').value
    var salary = document.getElementById('luongCB').value
    var position = document.getElementById('chucvu').value
    var hour = document.getElementById('gioLam').value
    var nv = new NhanVien(acc,name,email,pass,date,salary,position,hour)
    return nv
}
function renderTable(arr){
    var content = ""
    arr.reverse().forEach(function(nv){
        var trString = `
        <tr>
            <th>${nv.acc}</th>
            <th>${nv.name}</th>
            <th>${nv.email}</th>
            <th>${nv.date}</th>
            <th>${nv.position}</th>
            <th>${nv.tongLuong().toLocaleString()}</th>
            <th>${nv.xepLoai()}</th>
            <th>
                <button onclick="xoaNV()" class="btn btn-danger">Xóa</button>
                <button onclick="suaNV()" class="btn btn-btn-success">Sửa</button>
            </th>
        </tr>
        `
        content += trString
    })
    document.getElementById('tableDanhSach').innerHTML = content
}