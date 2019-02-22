const pageLen = 10;
const data = [ { index: '1', tip: '马云的福字', newCount: 489145, oldCount: 489028 },
  { index: '2',
    tip: '清华硕士荷兰丧生',
    newCount: 447412,
    oldCount: 447506 },
  { index: '3', tip: '谢娜登澳洲报纸', newCount: 440719, oldCount: 441269 },
  { index: '4',
    tip: 'Tesco裁员近万人',
    newCount: 433520,
    oldCount: 433775 },
  { index: '5',
    tip: 'iPhone通话窃听',
    newCount: 418447,
    oldCount: 418251 },
  { index: '6',
    tip: '怒晴湘西昆仑下线',
    newCount: 417210,
    oldCount: 417403 },
  { index: '7', tip: '武磊薪资曝光', newCount: 396456, oldCount: 395592 },
  { index: '8',
    tip: '村民670万分红',
    newCount: 381777,
    oldCount: 381521 },
  { index: '9',
    tip: '夺回苏杯冲击5金',
    newCount: 323284,
    oldCount: 324157 },
  { index: '10',
    tip: '5G网络VR实时传输',
    newCount: 321372,
    oldCount: 320738 },
  { index: '11',
    tip: '意大利三天两空难',
    newCount: 321091,
    oldCount: 320836 },
  { index: '12', tip: '王源长歌行', newCount: 320922, oldCount: 321862 },
  { index: '13',
    tip: '餐厅老板举报自己',
    newCount: 314791,
    oldCount: 314991 },
  { index: '14',
    tip: '蒋劲夫现身快餐店',
    newCount: 314454,
    oldCount: 315145 },
  { index: '15', tip: '圆明园大宫门', newCount: 303543, oldCount: 302861 },
  { index: '16',
    tip: '英伟达业绩预警',
    newCount: 292182,
    oldCount: 292917 },
  { index: '17',
    tip: '巨人网络开盘跌停',
    newCount: 287345,
    oldCount: 288025 },
  { index: '18',
    tip: '郭可盈晒照林文龙',
    newCount: 276940,
    oldCount: 277724 },
  { index: '19',
    tip: '吴宣仪回应催婚',
    newCount: 273340,
    oldCount: 273198 },
  { index: '20', tip: '日本晋级决赛', newCount: 270247, oldCount: 269702 },
  { index: '21',
    tip: '徐海乔为吴昕庆生',
    newCount: 267097,
    oldCount: 267744 },
  { index: '22',
    tip: '春节年味大数据',
    newCount: 262542,
    oldCount: 261806 },
  { index: '23',
    tip: '德国北威州拜年',
    newCount: 257874,
    oldCount: 258752 },
  { index: '24',
    tip: '鹈鹕未与浓眉续约',
    newCount: 255230,
    oldCount: 254956 },
  { index: '25',
    tip: '王源回应出国留学',
    newCount: 252193,
    oldCount: 251681 },
  { index: '26',
    tip: '美取消对俄企制裁',
    newCount: 237514,
    oldCount: 237894 },
  { index: '27',
    tip: '休斯敦枪击事件',
    newCount: 222834,
    oldCount: 222859 },
  { index: '28',
    tip: '美联储将结束缩表',
    newCount: 198143,
    oldCount: 198418 },
  { index: '29',
    tip: '武磊留洋郜林羡慕',
    newCount: 192744,
    oldCount: 192682 },
  { index: '30',
    tip: '哈瓦那遭暴雨袭击',
    newCount: 189482,
    oldCount: 189302 },
  { index: '31',
    tip: '悟空八戒游客互殴',
    newCount: 182395,
    oldCount: 181520 },
  { index: '32',
    tip: '日本队对阵伊朗队',
    newCount: 176602,
    oldCount: 177420 },
  { index: '33',
    tip: '戴维斯不会续约',
    newCount: 174465,
    oldCount: 174507 },
  { index: '34',
    tip: '苏醒晒截图回怼',
    newCount: 166872,
    oldCount: 166014 },
  { index: '35',
    tip: '电子竞技员 新职业',
    newCount: 160911,
    oldCount: 160538 },
  { index: '36',
    tip: '张柏芝三胎出生证',
    newCount: 159561,
    oldCount: 160359 },
  { index: '37',
    tip: '85后压岁钱负担',
    newCount: 158042,
    oldCount: 157391 },
  { index: '38',
    tip: '武磊转会西班牙人',
    newCount: 156355,
    oldCount: 157320 },
  { index: '39',
    tip: '网红店被吊销执照',
    newCount: 155680,
    oldCount: 155401 },
  { index: '40',
    tip: '荷兰海牙煤气爆炸',
    newCount: 151799,
    oldCount: 152036 } ]
const colors = ['#f54545','#ff8547','#ffac38','skyblue'];
const wholePage = 4;
var nowPage = 0;


function renderPage (data, len) {
   $('.body ul').empty();
   for (var i  = 0; i < len; i++) {
      nowI = i + nowPage*10;
      var tpl = $('.tpl').clone().removeClass('tpl').css({display: 'block'});
      tpl.find('.index').text(data[nowI].index).css({background: data[nowI].index > 3 ? colors[3] : colors[data[nowI].index-1]});
      tpl.find('.content').text(data[nowI].tip);
      tpl.find('.count-num').text(data[nowI].newCount);
      tpl.find('.count-tend').addClass(data[nowI].newCount > data[nowI].oldCount ? 'up' : 'down');
      console.log(tpl);
      $('.body ul').append(tpl);
   }
}

function bindEvent () {
   $('.change').on('click', function () {
      nowPage = (nowPage + 1) % 4;
      console.log(nowPage)
      renderPage(data, pageLen);
   })
}

renderPage(data, pageLen);
bindEvent();
















