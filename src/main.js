let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/*
*大家好,我是milkboy
*接下来由我们组来为大家演示Oauth协议实现过程
*是不是感觉不太正式
*那我就先换一种风格
*/

body{
    background:black;
    color:green;
}
#body1{
    border:1px solid green;
    margin:15px;
    padding:10px 30px;
    margin-left:20px;
}
/*
*大家是不觉得字有点小
*那我就放大一点
*/
*{
    font-size:18px;
}
#body1{
    width:40vw;
}
/*
*接下来，我要给大家演示Oauth协议了
*刚才的案例大家看了
*是用户，Github和第三方的验证
*/
#right{
    display:block;
    right:90px;
}
/*
*接下来给大家演示的是授权码模式
*首先是用户、Github、第三方网站
*/
#user{
    display:block;
    margin-top:10px;
}
#third{
    display:block;
    top:50px;
    margin-top:10px;
}
#github{
    display:block;
    top:50px;
    margin-top:10px;
}
#line_1{
    display:block;
}
#line_2{
    display:block;
}
#line_3{
    display:block;
}
#line_4{
    display:block;
}
#text_1{
    display:block;
}

#line_5{
    display:block;
}
#text_2{
    display:block;
}
`
console.log(string.length)
let n=-1

let string2=""
let step=()=>{
    n+=1
    if(string[n]==='\n'){
        string2+="<br>"
    }else if(string[n]===' '){
        string2+="&nbsp;"
    }else{
        string2+=string[n]
    }
    setTimeout(()=>{   
        console.log(n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n<string.length){
            html.innerHTML=string2
            style.innerHTML=string.substring(0,n)
            console.log(html.innerHTML)
        }else{
            return
        }
        step()
    },0) 
}
step()
