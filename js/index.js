window.addEventListener('load',function(){initialise()});

function initialise(){
  var xDown = null; var yDown = null;

  var songs = [
    {
      type: "Chinese",
      list: [
        {
          number:0,
          authorName:"吴青峰",
          name:"起风了",
          driveUrl:"1DKnIG642W_wpP_d_3M0M0xOXVErJ4zkC",
        },
        {
          number:1,
          authorName:"鬱歡",
          name:"烟火里的尘埃",
          driveUrl:"1QV1SnZUug5ilZ8V6fS1e7MBtMwTVNczr",
        },
        {
          number:2,
          authorName:"A-Lin",
          name:"有一种悲伤",
          driveUrl:"1YL1T25xTUZAjsAy6jWIWzE2tZPYlIQZl",
        },
        {
          number:3,
          authorName:"周兴哲",
          name:"怎么了",
          driveUrl:"1O3ykkidaG5xl37W3T-dv_usn3n9ETngb",
        },
        {
          number:4,
          authorName:"周兴哲",
          name:"终于自由了",
          driveUrl:"1rx0yFi03oemC4lM2K542tNkv_5djO8x5",
        },
        {
          number:5,
          authorName:"周兴哲",
          name:"快乐一次拥有",
          driveUrl:"1AzYnxQco11zR9YRqLmK9vQuA5xwMgtoH",
        },
        {
          number:6,
          authorName:"F.I.R",
          name:"星火",
          driveUrl:"1gWTPUBkq7l_uzDSvutiyA8mLk4GnXstI",
        },
        {
          number:7,
          authorName:"邓紫棋",
          name:"倒数",
          driveUrl:"1Trp8-5LM380TFEQi9HAteibSlnF170ES",
        },
        {
          number:8,
          authorName:"邓紫棋",
          name:"再见",
          driveUrl:"1PUilPs2UcGltNtuOSu5sGh1J4ulGh2SR",
        },
        {
          number:9,
          authorName:"邓紫棋",
          name:"那一夜",
          driveUrl:"1OxWQJuOHTGWC1nm20WkPNGwhFPb7_jeW",
        },
        {
          number:10,
          authorName:"Jason",
          name:"错过",
          driveUrl:"1Cw6RkGWhRZB4tJr4nKQ-O3FMSvwQGMub",
        },
        {
          number:11,
          authorName:"孫語賽,蕭全",
          name:"不僅僅是喜歡",
          driveUrl:"12UiH6W3h7xxH90ffvC8sFMlqoNp4oEWu",
        },
        {
          number:12,
          authorName:"周湯豪",
          name:"不放",
          driveUrl:"1HOy_Mm9XARbZu0C3_m8-GbhcL7oyrw8l",
        },
        {
          number:13,
          authorName:"銀臨",
          name:"不老夢",
          driveUrl:"1UZZ1qQdpOjxGePcPqhNKVfidjaVzaOGm",
        },
        {
          number:14,
          authorName:"于文文ft.伊一",
          name:"最好的",
          driveUrl:"1sKlbnUPLk5ZwkOIWL9EvQLahDmwyJLHv",
        },
        {
          number:15,
          authorName:"于文文ft.杨迪",
          name:"鲜为人知",
          driveUrl:"1DRIUzzQ1DEObLcD_C1fOvYHQ1LzOofJA",
        },
        {
          number:16,
          authorName:"于文文",
          name:"體面",
          driveUrl:"1xjBfQkCP0QJGUt5BlXEfTXR0wbrO_ja6",
        },
        {
          number:17,
          authorName:"以冬",
          name:"我的一個道姑朋友",
          driveUrl:"1_0Imog9BpQSLZjO6V_Dr8iSOIjJUXECr",
        },
        {
          number:18,
          authorName:"任然",
          name:"空空如也",
          driveUrl:"1m2LBjxr1r7ZmpIIqduN9EnP9gpJ6uVU_",
        },
        {
          number:19,
          authorName:"倫桑",
          name:"山有木兮",
          driveUrl:"1ni-cAvKRs3VVLcNFud6PYSmhRdKNKF0S",
        },
        {
          number:20,
          authorName:"倫桑",
          name:"答案",
          driveUrl:"1CUj4jQiyjbIosGBM0zkzss8B21qRH-Zx",
        },
        {
          number:21,
          authorName:"劉增瞳",
          name:"你怕不怕失去我",
          driveUrl:"1O12d2JEGSPkGJM91iI5YuYTI1w3cH8HQ",
        },
        {
          number:22,
          authorName:"劉增瞳",
          name:"多想留在你身邊",
          driveUrl:"1DKi8RWh2fj-92j0MCFH_fhIUYfQQwnY8",
        },
        {
          number:23,
          authorName:"吳亦凡",
          name:"時間煮雨",
          driveUrl:"15RC-ZBQ9ZLqiTAaYFxTrqUYwzxkf_EUF",
        },
        {
          number:24,
          authorName:"周深,毛不易",
          name:"梅香如故",
          driveUrl:"1IuKz7H5XFe2We3gtN2VSzqNro0-SvNK5",
        },
        {
          number:25,
          authorName:"周笔畅",
          name:"最美的期待",
          driveUrl:"1g8CNC-EsAVSniDO6AcvWWfxUZdj_TL_m",
        },
        {
          number:26,
          authorName:"張靚穎",
          name:"終於等到你",
          driveUrl:"1xOdOspagspWPu93-QvpXL3eU4wviqrrt",
        },
        {
          number:27,
          authorName:"房東的貓",
          name:"春風十里",
          driveUrl:"1b1hp0YWUv-9JYbopov_IFyNGFM7bUWAZ",
        },
        {
          number:28,
          authorName:"李榮浩",
          name:"不將就",
          driveUrl:"1A18wwnT1Ya9eIb6cboZZubabEoeMJaUP",
        },
        {
          number:29,
          authorName:"林俊杰",
          name:"我怀念的",
          driveUrl:"11xHO8a39EdlNj2FgsJFNEKv-BxfjL0N4",
        },
        {
          number:30,
          authorName:"林俊杰",
          name:"爱要怎么说出口",
          driveUrl:"1esTWEpVdo1p9g2G0oEW9Za2qLdhebBw6",
        },
        {
          number:31,
          authorName:"林俊杰",
          name:"输了你赢了世界又如何",
          driveUrl:"1kWoEa-x1pQ9G3kzluUw3HPPQzc94fCPJ",
        },
        {
          number:32,
          authorName:"林俊杰",
          name:"除了爱你还能爱谁",
          driveUrl:"1a7CsBja53Tv_l3qyAJLLok4h1tahNmTo",
        },
        {
          number:33,
          authorName:"林宥嘉",
          name:"成全",
          driveUrl:"1J59pf6tvZPN8CpVJbfilZeguLA3Bh6yW",
        },
        {
          number:34,
          authorName:"毛不易ft.周峻纬",
          name:"明天",
          driveUrl:"1_K0xdZP1Uf5s14pWDVmqBfjyo2QYJhVK",
        },
        {
          number:35,
          authorName:"毛不易",
          name:"不染",
          driveUrl:"1jd0Njo1wARM8jTn2TxyrtgvR9eSD5DcK",
        },
        {
          number:36,
          authorName:"熊錦勝",
          name:"愛過你這件事",
          driveUrl:"1nEdPRCjb1jV5GuiQwqpGp8r3HBpapMAE",
        },
        {
          number:37,
          authorName:"白小白",
          name:"最後我們沒在一起",
          driveUrl:"1AM5SS0MIVaw7pgOtyH_dnXFwZuNWGuDr",
        },
        {
          number:38,
          authorName:"白小白",
          name:"最美情侶",
          driveUrl:"1ELTybyKg6LgudJ0gL03YsGGB_pxKWju4",
        },
        {
          number:39,
          authorName:"薛之谦",
          name:"因为爱情",
          driveUrl:"1tBsIYq9UmfvVweAgCG53oMiDe_sEZRYY",
        },
        {
          number:40,
          authorName:"薛之谦",
          name:"江南",
          driveUrl:"15A0jAZFM-njBcVwxRImJ1GboFjwaGPKl",
        },
        {
          number:41,
          authorName:"薛之谦ft.小岳岳",
          name:"醒来",
          driveUrl:"1bURi5tSKe4XcN-V17X5Sm4jrXT4lDzVa",
        },
        {
          number:42,
          authorName:"薛之谦",
          name:"哑巴",
          driveUrl:"1fvF2AKTI_efEfVz_Ahi2xGsayFwUmiz1",
        },
        {
          number:43,
          authorName:"薛之谦",
          name:"像风一样",
          driveUrl:"1upT9Ci-t4YRyzsKzbIbt5cxER7qAVwIo",
        },
        {
          number:44,
          authorName:"薛之谦",
          name:"动物世界",
          driveUrl:"17aqegIcQyX-rSE3BcjhNTZ4gJw8m58M0",
        },
        {
          number:45,
          authorName:"薛之谦",
          name:"怪咖",
          driveUrl:"1s355cOVe6UBud9BXxHKxW9LPbwmYyqHO",
        },
        {
          number:46,
          authorName:"謝和弦ft.張智成",
          name:"在沒有你以後",
          driveUrl:"1yIZp1BTTkL_2QtwYnEwYSunsarSrwx5R",
        },
        {
          number:47,
          authorName:"賀敬軒",
          name:"走心",
          driveUrl:"1P1rmrvUbk2inxYPGmE3hOT_A4cTWpwXL",
        },
        {
          number:48,
          authorName:"林京燁-妮妮",
          name:"那對夫妻",
          driveUrl:"1InLDgrZz6cImdeO8cSS_VVKXqMt1sUbJ",
        },
        {
          number:49,
          authorName:"金玟岐",
          name:"歲月神偷",
          driveUrl:"1zC_R5UR1hY8a7CoZwO2EJEra-KSWbvv2",
        },
        {
          number:50,
          authorName:"雨宗林",
          name:"別把疼你的人弄丟了",
          driveUrl:"1IhMr4v2_8Lp6cjdqZx58lhE_gJ_SAFSg",
        },
        {
          number:51,
          authorName:"鞠文嫻ft.Deepain",
          name:"病变",
          driveUrl:"17wnBAjcdvBAMfWJWSfHVPZXq2giniazF",
        },
        /*{
          number:50,
          authorName:"",
          name:"",
          driveUrl:"",
        },*/


      ]
    },
    {
      type: "English",
      list: [
        {
          number:0,
          authorName:"5 Seconds Of Summer",
          name:"Youngblood",
          driveUrl:"11_OLPM2DvQgPoFEUOkmlJ70Wu4V-dKSR",
        },
        {
          number:1,
          authorName:"88rising ft. Joji, Rich Brian, Higher Brothers, AUGUST 08",
          name:"Midsummer Madness",
          driveUrl:"1k0xRDIku9pB3HaZiCtJ3V6SZ3xklyNXn",
        },
        {
          number:2,
          authorName:"Alan Walker ft. Au_Ra, Tomine Harket",
          name:"Darkside",
          driveUrl:"16UcLe3gN3thzFkmSSP-Ha4MfZ5TozGVu",
        },
        {
          number:3,
          authorName:"Alan Walker ft. Sabrina Carpenter, Farruko",
          name:"On My Way",
          driveUrl:"1Z_Wp-miNCS-i-GmpiKBQuc8_0vUOAED7",
        },
      ]
    },
    {
      type: "Korean",
      list: [
        {
          number:0,
          authorName:"YOONA 윤아",
          name:"如果妳也想起我(When The Wind Blows)",
          driveUrl:"18C1KXsY0UtrLZ6JvnGLkYveNm27bBWyL",
        },
        {
          number:1,
          authorName:"린(Lyn), 한해(HanHae)",
          name:"LOVE",
          driveUrl:"1R-3oBpy_TiZ7Rf7U9geqBSHPFwzLq5mO",
        }
      ]
    }
  ];

  //event listeners
  document.addEventListener('click', function(event){seeIfClicked(event)});
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  //Custom Array functions

  //NAI = name and index
  Array.prototype.getAllNAI = function () {
    var nAI = {};
    for (var i = 0; i < this.length; i++) {
      if(nAI.hasOwnProperty(this[i])) {
        nAI[this[i]].push(i);
      }
      else{
        nAI[this[i]] = [i];
      }
    }
    return nAI;
  };
  Array.prototype.getDuplicates = function () {
    var duplicates = {};
    var dupNames;
    for (var i = 0; i < this.length; i++) {
        if(duplicates.hasOwnProperty(this[i])) {
            duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
            duplicates[this[i]] = [i];
        }
    }
    dupNames = loop(duplicates);
    dupCollection.push(duplicates);
    dupCollection.push(dupNames);
    return dupCollection;
  };

  //Start getting player details

  //All the details in the whole collection
  var songNameInSongs = []; var authorNameInSongs = []; var driveUrlInSongs = []; var allVAI; var duplicates;
  var nonDuplicates; var copiedArray = []; var songTitles; var authorDataValue; var titleDataValue;
  var dupCollection = [];

  var row = document.querySelector('.row');
  var rowOutput = "";

  getSongs();

  function getSongs(){
    songs.forEach(function(x){x.list.map(function(y){songNameInSongs.push(y.name)})})
    songs.forEach(function(x){x.list.map(function(y){authorNameInSongs.push(y.authorName)})})
    songs.forEach(function(x){x.list.map(function(y){driveUrlInSongs.push(y.driveUrl)})})
    allVAI = authorNameInSongs.getAllNAI();
    nonDuplicates = JSON.parse(JSON.stringify(allVAI));
    duplicates = authorNameInSongs.getDuplicates();
    filter(nonDuplicates, duplicates[1]);
    //get copy of original array to make random sequences for shuffle function
    copiedArray = songNameInSongs.slice();
    loopSongContent();
  }

  //loop the properties in an object
  function loop(obj){
    var names = []
    for (var prop in obj){
      names.push(prop);
    }
    return names;
  }

  //filter out the duplicates
  function filter(object, array){
    for (var i = 0; i < array.length; i++) {
      if(object[array[i]].length > 1 ) {
        delete object[array[i]];
      }
    }
  }

  function loopSongContent(){
    for (var songType = 0; songType < /*1*/songs.length; songType++){
      rowOutput += '<div class="mainContent">';
      rowOutput += '<div class="boxTitle">';
      rowOutput += '<div class="m-0">' + songs[songType].type + ' Songs</div>';
      rowOutput += '</div>';
      rowOutput += '<div class="outline"></div>';
      rowOutput += '<ul class="clearfix">';
      for (var songsList = 0; songsList < /*51*/ /*songs[songType].list.length*/ 2; songsList++){
        songTitles = songs[songType].list[songsList].authorName + "-" + songs[songType].list[songsList].name;
        songTitles1 = songTitles.replace(/[\s\u3130-\u318F\uAC00-\uD7AF\{\(\)\}]/g,'');
        authorDataValue = songs[songType].list[songsList].authorName;
        titleDataValue = songs[songType].list[songsList].name;
        rowOutput += '<div class="mdl-grid">';
        rowOutput += '<div class="mdl-cell mdl-cell--3-col">';
        rowOutput += '<div class="demo-card-image mdl-card mdl-shadow--2dp" data-value="'+ titleDataValue +'" style="background-image:url(image/' + songs[songType].type + '/' + songTitles1 + '.jpg);"' + '>';
        rowOutput += '<div class="mdl-card__title mdl-card--expand">';
        rowOutput += '<button class="mdl-button mdl-js-button mdl-js-ripple-effect container-button">';
        rowOutput += '<i class="material-icons">play_arrow</i>';
        rowOutput += '</button>';
        rowOutput += '</div>';
        rowOutput += '</div>';
        rowOutput += '<div class="title-name" data-value="' + authorDataValue + '">' + songTitles + '</div>';
        rowOutput += '</div>';
        rowOutput += '</div>';
      }
      rowOutput += '</ul>';
      rowOutput += '</div>';
    }
    row.innerHTML = rowOutput;
  }


  //Event listener functions
  function seeIfClicked(event){
    //If condition for checkboxes on table being clicked
    if (event.target.matches('.container-song-author') ||event.target.matches('.container-song-title')){
      console.log(event.target)
    }
      //console.log(event.target)

  }

  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            console.log('left')
        }
        else {
            /* right swipe */
            console.log('right')
        }
      }
      else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
  };

};
