// 전역변수 선언할 위치
let days = document.forms[0].days   //요소
console.log(typeof days)
console.log(typeof days.value)      //object
days = parseInt(days.value)         //string
console.log(typeof days)
// 여기까지는 동적타입 확인하기위한 코드입니다
days = document.forms[0].days
let start = document.forms[0].start
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)
start.max = dateFormat(today)
// var selectday = document.getElementById('days');

function daySelect(){
alert('숙박일수 '+ days.value +" 일 입니다")
console.log('숙박일수 '+ days.value+ ' 일 입니다')
if(start.value != '')
endOutput()
}
function endOutput(){
    // parseInt() : select에서 선택한 값은 typeof 가 string 
    let end = new Date(start.value) //선택한 입실 날짜로 Date객체 생성
    console.log('입실날짜 : '+ end)
    end.setDate(end.getDate()+ parseInt(days.value))
    console.log('퇴실날짜 : ' + end)
    console.log('퇴실날짜 dateFormat : ' + dateFormat(end))
    document.forms[0].end.value= dateFormat(end)
}

function dateFormat(someday){
    const month = (someday.getMonth()+1).toString().padStart(2,0)
const date = someday.getDate().toString().padStart(2,0)
let result = [someday.getFullYear(),month,date].join('-') 
console.log("dateFormat : "+ result)
return result
}