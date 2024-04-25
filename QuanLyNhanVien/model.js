function NhanVien(acc,name,email,pass,date,salary,position,hour){
    this.acc = acc
    this.name = name
    this.email = email
    this.pass = pass
    this.date = date
    this.salary = salary
    this.position = position
    this.hour = hour
    this.tongLuong = function(){
        var luong = 0
        if(this.position === 'Sếp'){
            luong = this.salary*1*3
        }
        else if(this.position === "Trưởng phòng"){
            luong = this.salary*1*2
        }
        else if(this.position === "Nhân viên"){
            luong = this.salary*1
        }
        return luong
    }
    this.xepLoai = function(){
        var loai = ""
        if(this.hour*1 >= 192){
            loai = "Nhân viên xuất sắc"
        }
        else if(this.hour*1 >= 176 && this.hour*1 < 192){
            loai = "Nhân viên giỏi"
        }
        else if(this.hour*1 >= 160 && this.hour*1 < 176){
            loai = "Nhân viên khá"
        }
        else{
            loai = "Nhân viên trung bình"
        }
        return loai
    }
}