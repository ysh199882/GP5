$(function(){
    $.ajax({
        url:'./data/data.json',
        type:'get',
        dataType:'json',
        cache:false,
        success: function(json){
            var str = ""
            $.each(json,function(index,item){
                str +=`<div class="goods">
                <img src="${item.imgsrc}" alt="">
                <p>${item.prince}</p>
                <h3>${item.title}</h3>
                <div>加入购物车</div>
              </div>
                `
            });
            $('.main').html(str)
        }
    })


})
