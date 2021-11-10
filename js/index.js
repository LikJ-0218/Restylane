$(function () {
    // 图片预加载
    // var manifest = [
    //     'img/bg-down.png',
    //     'img/bg-top.png',
    //     'img/bg.png',
    //     'img/down-balloon.png',
    //     'img/heart2.png',
    //     'img/heart3.png',
    //     'img/home.png',
    //     'img/logo.png',
    //     'img/midde-balloon1.png',
    //     'img/middle-heart2.png',
    //     'img/middle-test.png',
    //     'img/model.png',
    //     'img/p1-card.png',
    //     'img/p1-create-poster.png',
    //     'img/p1-leave-words.png',
    //     'img/p1-reback.png',
    //     'img/p1-sidai.png',
    //     'img/p1-star.png',
    //     'img/p1-star2.png',
    //     'img/p1-star3.png',
    //     'img/p1-star4.png',
    //     'img/p1-star5.png',
    //     'img/p1-star6.png',
    //     'img/p2-box-font.png',
    //     'img/p2-box2-font.png',
    //     'img/p2-box2-font2.png',
    //     'img/p2-box3-font.png',
    //     'img/p2-box3-font2.png',
    //     'img/p2-box4-font.png',
    //     'img/p2-box4-font2.png',
    //     'img/p2-box5-font.png',
    //     'img/p2-box5-font2.png',
    //     'img/p2-center-box.png',
    //     'img/p2-font.png',
    //     'img/p2-font2.png',
    //     'img/p2-font3.png',
    //     'img/p2-font4.png',
    //     'img/p2-right.png',
    //     'img/p2-sidai.png',
    //     'img/p2-star.png',
    //     'img/p2-star2.png',
    //     'img/p2-star3.png',
    //     'img/p2-star4.png',
    //     'img/p2-star5.png',
    //     'img/p2-upload-fadeIn.png',
    //     'img/p2-upload.png',
    //     'img/photo-album.png',
    //     'img/rule-btn.png',
    //     'img/rule-description.png',
    //     'img/sidai3.png',
    //     'img/sidai4.png',
    //     'img/star2.png',
    //     'img/star3.png',
    //     'img/star4.png',
    //     'img/star5.png',
    //     'img/star6.png',
    //     'img/star7.png',
    //     'img/tab-4.png',
    //     'img/tab-5.png',
    //     'img/test.png',
    //     'img/title.png',
    //     'img/top- balloon1.png',
    //     'img/top-balloon2.png',
    //     'img/top-balloon3.png',
    //     'img/top-blue-balloon.png',
    //     'img/top-card.png',
    //     'img/top-hua.png',
    //     'img/top-sidai.png',
    //     'img/top-sidai1.png',
    //     'img/top-star.png',
    //     'src/img/index-air.png',
    //     'src/img/index-ball.png',
    //     'src/img/index-bg.png',
    //     'src/img/index-card.png',
    //     'src/img/index-hei.png',
    //     'src/img/index-house.png',
    //     'src/img/index-log.png',
    //     'src/img/index-logo.png',
    //     'src/img/index-love.png',
    //     'src/img/index-model.png',
    //     'src/img/index-shadow.png',
    //     'src/img/index-sign.png',
    //     'src/img/index-star.png',
    //     'src/img/poster-bg.png',
    //     'src/img/poster-btn.png',
    //     'src/img/poster-fanhui.png',
    //     'src/img/poster-guize.png',
    //     'src/img/poster-jielipng.png',
    //     'src/img/poster-sidai.png',
    //     'src/img/poster-star.png',
    //     'src/img/poster-tan.png',
    //     'src/img/poster-zaoju.png',
    //     'src/img/rew-456.png',
    //     'src/img/row-1list.png',
    //     'src/img/row-2list.png',
    //     'src/img/row-3list.png',
    //     'src/img/row-456.png',
    //     'src/img/row-4list.png',
    //     'src/img/row-5list.png',
    //     'src/img/row-6list.png',
    //     'src/img/row-bg.png',
    //     'src/img/row-fh.png',
    //     'src/img/row-fx.png',
    //     'src/img/row-love1.png',
    //     'src/img/row-love2.png',
    //     'src/img/row-nc.png',
    //     'src/img/row-star.png',
    //     'src/img/row-wyw.png',
    //     'src/img/row-ying.png',
    //     'src/img/share-bc.png',
    //     'src/img/share-fx.png',
    //     'src/img/share-ph.png',
    //     'src/img/share-star.png',
    //     'src/img/up-bg.png',
    //     'src/img/up-bt1.png',
    //     'src/img/up-bt2.png',
    //     'src/img/up-bt3.png',
    //     'src/img/up-bt4.png',
    //     'src/img/up-bt5.png',
    //     'src/img/up-btn.png',
    //     'src/img/up-gou.png',
    //     'src/img/up-kuang.png',
    //     'src/img/up-qrsc.png',
    //     'src/img/up-sidai.png',
    //     'src/img/up-star.png',
    //     'src/img/up-wenzi1.png',
    //     'src/img/up-wenzi21.png',
    //     'src/img/up-wenzi22.png',
    //     'src/img/up-wenzi31.png',
    //     'src/img/up-wenzi32.png',
    //     'src/img/up-wenzi41.png',
    //     'src/img/up-wenzi42.png',
    //     'src/img/up-wenzi51.png',
    //     'src/img/up-wenzi52.png',
    // ];

    // $.preload(manifest, {
    //     end: function () {
    //         console.log('图片加载完成');
    //     },

    // });
    // 点击首页第一个按钮进入海报页
    $('.homt-btn1').click(function () {
        $('.home').fadeOut()
        $('.poster').fadeIn()

    })
    // 点击×号隐藏海报弹层
    $('.poster-layer-bt').click(function () {
        $('.poster-layer').fadeOut()
    })
    // 点击生成海报按钮显示上传图片页面
    $('.poster-btn').click(function () {
        $('.uploading').fadeIn()
        $('.poster').fadeOut()
    })
    // 点击返回返回到首页
    $('.poster-fanhui').click(function () {
        $('.home').fadeIn()
        $('.poster').fadeOut()
    })
    // 点击对应的数字选择相应的文字格式
    $('.up-ul>li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index()
        $('.up-img').eq(index).addClass('active1').siblings().removeClass('active1')
    })

    // 监听文件上传 上传成功之后显示到页面中
    $('#file').change(function () {
        var files = $(this)[0].files
        // 获取文件上传到数据库
        var fd = new FormData()
        fd.append('avatar', files[0])
        // 1. 创建 xhr 对象
        var xhr = new XMLHttpRequest()
        // 2. 调用 open 函数，指定请求类型与URL地址。其中，请求类型必须为 POST
        xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
        // 3. 发起请求
        xhr.send(fd)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                var res = JSON.parse(xhr.responseText)
                if (res.status == 200) {
                    console.log(res);
                    getBase64('http://www.liulongbin.top:3006' + res.url, $('.upimg'));

                }
            }
        }

    })
    // 图片拖拽
    // JS原生获得手机端手机触摸点坐标并移动图片 方法一
    var img_move = document.getElementsByClassName('upimg');//获得元素DOM
    for (var n = 0; n <= img_move.length - 1; n++) {
        imgMove(img_move[n])
    }
    function imgMove(img_move) {
        var Xstart = 0, Ystart = 0, Xmove = 0, Ymove = 0, top = 0, left = 0;    //定义变量

        img_move.ontouchstart = function (e) {
            var e = e || window.event;
            Xstart = e.touches[0].clientX;//获得触屏点横坐标
            Ystart = e.touches[0].clientY;//获得触屏点纵坐标
            //alert(e.touches.length) 获得当前屏幕上所有手指列表
        }
        img_move.ontouchmove = function (e) {
            var e = e || window.event;
            e.preventDefault();//阻止页面滑动
            Xmove = e.changedTouches[0].clientX;//获得滑动时的触点横坐标
            Ymove = e.changedTouches[0].clientY;//获得滑动时的触点纵坐标
            img_move.style.top = top + Ymove - Ystart + "px";//对图片的下一次滑动操作时的定位
            img_move.style.left = left + Xmove - Xstart + "px";
        }
        img_move.ontouchend = function () {
            top = parseInt(img_move.style.top);//获得上一次滑动结束后的图片坐标
            left = parseInt(img_move.style.left);
        }
    }




    // 点击确认上传,截图之后跳转到分享页,把截图上传到到分享页
    $('.up-btnsc').click(function () {
        // 判断用户有没有上传图片
        if ($('#file')[0].files.length <= 0) {
            layer.open({
                content: '请上传图片'
                , skin: 'msg'
                , time: 2 //2秒后自动关闭
            });
            return false;
        }


        html2canvas(document.querySelector(".up-kuangb"), {
        }).then(canvas => {
            var url = canvas.toDataURL("image/png");
            $('.share').fadeIn();
            $('.shareimg').prop('src', url);
            $('.save').prop('src', url);
            $('.uploading').fadeOut();
        });
        // 第二次截图添加长按保存

    })

    // 点击排行榜按钮进入排行榜
    $('.share-ph').click(function () {
        $('.row').fadeIn()
        $('.share').fadeOut()
    })
    // 排行榜爱心排他
    $('.love').click(function () {

        if ($(this).hasClass("active") == false) {
            $('.love').removeClass('active')
        }

        $(this).toggleClass('active')


    })
    // 点击×号关闭排行榜
    $('.rowcha').click(function () {
        $('.row-layer').fadeOut()
    })
    // 点击返回到分享页
    $('.row-fh').click(function () {
        $('.share').fadeIn()
        $('.row').fadeOut()
    })

    var map = new BMap.Map("container");          // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标   
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    var geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            // alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        }
        else {
            alert('failed' + this.getStatus());
        }
    })


})







//把网络图片转换成 64
function getBase64(imgUrl, img) {
    window.URL = window.URL || window.webkitURL;
    var xhr = new XMLHttpRequest();
    xhr.open("get", imgUrl, true);
    // 至关重要
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (this.status == 200) {
            //得到一个blob对象
            var blob = this.response;
            //  至关重要
            let oFileReader = new FileReader();
            oFileReader.onloadend = function (e) {
                let base64 = e.target.result;

            };
            oFileReader.readAsDataURL(blob);


            img.attr('src', window.URL.createObjectURL(blob));
        }
    }
    xhr.send();
}