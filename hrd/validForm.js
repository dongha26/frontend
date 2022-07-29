// 현재 날짜 new Date()
const today = new Date()
let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')
const month = today.getMonth()+1
let date1 = [today.getFullYear(),month.toString().padStart(2,0),today.getDate()].join('')

// document.getElementById('lblday').value
// document.getElementById('lblday').value = new Date().toISOString().substring(0, 10);;

document.forms[1].day.value = date1
function valid_check(){
    const frm = document.forms[1];
    const name = frm.name
    const number = frm.number
    const adress = frm.adress
    const grade = frm.grade
    const city = frm.city
    const date = frm.day
    let isvalid = true
    // document.getElementById('lblday').value = new Date().toISOString().substring(0, 10);;
if(name.value ==''){
    document.getElementById('name')
    alert('회원성명이 입력되지 않았습니다.')
    name.focus()
    isvalid = false
}else
var regPhone = /^010-([0-9]{3,4})-([0-9]{4})$/;
if(regPhone.test(lblnum.value)===false){
    alert('입력된 값은 전화번호 형식이 아닙니다')
}
if(adress.value ==''){
    alert('주소가 입력되지 않았습니다.')
    adress.focus()
    isvalid = false
}
if(lblday.value == date1){

}else{
   alert('입력값이 오늘 날짜가 아닙니다') 
}
if(grade.value == 'A' || grade.value == 'B' || grade.value == 'C'){
}else{
    alert('A,B,C 중 선택하여 작성해주세요')
    grade.focus()
    isvalid = false
}
if(city.value.length == 2){

}else{
    alert('도시코드는 두자리 숫자로만 입력가능합니다')
    city.focus()
    isvalid = false
}
}
// const today = new Date()
// console.log(today)
// console.log("년도 : " +today.getFullYear())
// console.log("월 : " +(today.getMonth()+1))
// console.log("일 : " +today.getDate())
// let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')
// console.log(result)
// const month = today.getMonth()+1
// console.log([today.getFullYear(),month.toString().padStart(2,0),today.getDate()].join(''))
// const date1 = [today.getFullYear(),month.toString().padStart(2,0),today.getDate()].join('')
// console.log(date1)
// document.getElementById('lblday').value = [today.getFullYear(),month.toString().padStart(2,0),today.getDate()].join('');
// document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);


