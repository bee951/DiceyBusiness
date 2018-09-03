$(document).ready(function(){
    dstart=0
    sum=0
    idarry=[];
    objarry=[];
    $('#b1').click(function(){
        let obd=new Die(rd6(),dstart)
        obd.gendie()
        objarry.push(obd)
        dstart++
    })
    $('#b2').click(function() {
        for (let index = 0; index < objarry.length; index++) {

            objarry[index].reroll(rd6())
        }
    })
    $('#b3').click(function() {
        for (let index = 0; index < objarry.length; index++) {
            let n= objarry[index].value
            sum=sum+Number(n)
        }
        alert(`The die total is ${sum}.`)
        sum=0
    })
})
class Die {
    constructor(value,id){
        this.value=value
        this.id=id
    }
    gendie(){
        $("section").append("<div></div>");
        $("div:last").attr('id',this.id)
        $('#'+String(this.id)).append('<h2>'+String(this.value)+'</h2>')
        $("h2").css({
            "margin": "0",
            "padding": "1.35em",
            "justifyContent": "center"
        })
        idarry.push(this.id)
        console.log(objarry,idarry)
        $("div").dblclick(function() {
            $(this).remove()
            objarry.splice(idarry.indexOf(this.id),1)
            idarry.splice(idarry.indexOf(this.id),1)
            console.log(objarry,idarry)
        })
    }
    reroll(val){
        this.value=val
        $('#'+String(this.id)).empty()
        $('#'+String(this.id)).append('<h2>'+String(this.value)+'</h2>')
        $("h2").css({
            "margin": "0",
            "padding": "1.35em",
            "justifyContent": "center"
        })
    }
}
function rd6(){
    var rb=Math.floor(Math.random()*6)+1
        return rb
}