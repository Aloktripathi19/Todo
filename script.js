let a = []
let ind = -1
let dr = document.getElementById("dp")
let tfr = document.getElementsByTagName("input")
let sr = document.getElementsByTagName("select")[0]
let br = document.getElementsByTagName("button")

function disp() {
    if (a.length > 0) {
        let s = "<table border=1><tr><th>User id</th><th>Task</th><th>Deadline</th><th>Dept</th></tr>"
        for (i in a) {
            s = s + `<tr><td>${a[i].uid}</td><td>${a[i].task}</td><td>${a[i].dl}</td><td>${a[i].dept}</td><td><button onclick="del(${i})">Delete</button></td><td><button onclick="edit(${i})">Edit</button></td></tr>`
        }
        s = s + `</table>`
        dr.innerHTML = s
    }
    else {
        dr.innerHTML = ""
    }
}
function add() {
    let obj = { "uid": tfr[0].value, "task": tfr[1].value, "dl": tfr[2].value, "dept": sr.value }
    a.push(obj)
    tfr[0].value = ""
    tfr[1].value = ""
    tfr[2].value = ""
    sr.value = ""
    disp()
}
function del(i) {
    a.splice(i, 1)
    disp()
}
function edit(i) {
    tfr[0].value = a[i].uid
    tfr[1].value = a[i].task
    tfr[2].value = a[i].dl
    sr.value = a[i].dept
    br[0].style.display = "none"
    br[1].style.display = "inline"
    ind = i
}
function upd(i) {
    let obj = { "uid": tfr[0].value, "task": tfr[1].value, "dl": tfr[2].value, "dept": sr.value }
    a[ind] = obj
    tfr[0].value = ""
    tfr[1].value = ""
    tfr[2].value = ""
    sr.value = ""
    br[0].style.display = "inline"
    br[1].style.display = "none"
    disp()
}