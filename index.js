const opt={weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(()=>
{
    a=new Date();
    let time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
let date=a.toLocaleDateString(undefined,opt);
document.getElementById('Time').innerHTML=time.toString()+"<br>on date "+date;

},1000)
