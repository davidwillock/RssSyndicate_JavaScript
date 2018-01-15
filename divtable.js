

function buildIframe(a) {
    
    var mtable = a;
    
     var iframe = document.getElementById('f2');
  
     iframe.innerHTML = mtable;
  
     
    
    
    
}

function getNewsFeed() {
    
 
   $('#js-news0').ticker(); 
   $('#js-news1').ticker(); 
   $('#js-news2').ticker(); 
   $('#js-news3').ticker();
   $('#js-news4').ticker(); 
   $('#js-news5').ticker(); 
   $('#js-news6').ticker(); 
   $('#js-news7').ticker();
   $('#js-news8').ticker();
   $('#js-news9').ticker();
   $('#js-news10').ticker();
   $('#js-news11').ticker();
   $('#js-news12').ticker();
   $('#js-news13').ticker();
   $('#js-news14').ticker();
   $('#js-news15').ticker();
   $('#js-news16').ticker();
   $('#js-news17').ticker();
   $('#js-news18').ticker();
   $('#js-news19').ticker();
   $('#js-news20').ticker();
   $('#js-news21').ticker();
   $('#js-news22').ticker();
   $('#js-news23').ticker();
   $('#js-news24').ticker();
 }
 function getRSS2() {
    
    var test = document.getElementById('f3');
    test.innerHTML = "<p id="+"js-news"+"></p>";
    
    $('#js-news').ticker();
 }
 
 function getMatrixSz(){
     
     return cnt-1;
 }
 
 
function createTable(e, t) {
    
    var tabletype_value='tabl';
    var tablewidth_value='0';
    var tableborder_value='0';
    var tablewidthunit_value='1';
     var tablecellpadding_value='0';
    
  if (e > 0) {
    $('html, body').animate({
      scrollTop: $($('#hoverTableCont')).offset().top }, 500);
    var o,
    r,
    a = '';
    cnt=0;
    _cnt=0;
    
     if ('table' == tabletype_value) {
      for (a = '<table ', tablewidth_value > 0 && (a += 'style="', tablewidth_value > 0 && (a += 'width: ' + tablewidth_value, a += 1 == tablewidthunit_value ? '%;' : 'px;'), a += '" '), tableborder_value > 0 && (a += 'border="' + tableborder_value + '"'), tablecellpadding_value > 0 && (a += ' cellpadding="' + tablecellpadding_value + '"'), '<table ' == a && (a = '<table'), a += '>\n<tbody>', o = 0; t > o; o++) {
        for (a += '\n<tr bgcolor="#FF0000"  >', r = 0; e > r; r++) a += '\n<td><p id="js-news"></p></td>';
        a += '\n</tr>'
      }
      a += '\n</tbody>\n</table>\n',
   
      buildIframe(a)
    }else {
      for (a = '<div class="table_c" ', (tablewidth_value > 0 || 0 != tablewidth_value) && (a += 'style="', tablewidth_value > 0 && (a += 'width: ' + tablewidth_value, a += 1 == tablewidthunit_value ? '%;' : 'px;'), tableborder_value > 0 && (a += 'border: ' + tableborder_value + 'px solid #000;'), a += '" '), '<div class="divTable" ' == a && (a = '<div class="divTable"'), a += '>\n<div class="divTableBody">', o = 0; t > o; o++) {
        for (a += '\n<div class="divTableRow">', r = 0; e > r; r++) a += '\n<div class="divTableCell',a+= cnt,a+='" ><p id="js-news', a += cnt++, a+='"></p></div>';
         
                a += '\n</div>'
      }
      a += '\n</div>\n</div>\n'
       buildIframe(a);
       
       var test = getMatrixSz();
       getNewsFeed();
  }
    
   
    
  }
}


var curX = 0,
curY = 0,
selX = 0,
selY = 0,
ezX = 0,
ezY = 0;



$(document).ready(function () {
  $('a.smoothscroll').click(function () {
    return $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500),
    !1
  }),

    $('.tableCell').mousedown(function (e) {
    curX = Number($(this).attr('data-colsz')),
    curY = Number($(this).attr('data-rowsz')),
    selX = curX,
    selY = curY,
    $('#tableDimmensions').html(curX + ' x ' + curY),
    $('#tableDimmensions').css('left', 17 * curX - 60 + 'px'),
    $('#tableDimmensions').css('top', 17 * curY - 190 + 'px'),
    $('.tableCell').each(function () {
      $(this).removeClass('selectedCell'),
      ezX = Number($(this).attr('data-colsz')),
      ezY = Number($(this).attr('data-rowsz')),
      curX >= ezX && curY >= ezY && $(this).addClass('selectedCell')
    }),
    $('.howToUseInstruction').hide(),
    createTable(selX, selY)
  }),
  
  $('#hoverTableCont').mouseout(function (e) {
    $('.tableCell').each(function () {
      $(this).removeClass('higlightCell')
    }),
    $('#tableDimmensions').html(selX + ' x ' + selY),
    $('#tableDimmensions').css('left', 17 * selX - 75 + 'px'),
    $('#tableDimmensions').css('top', 17 * selY - 205 + 'px')
  }),
  $('.tableCell').mouseover(function () {
    curX = Number($(this).attr('data-colsz')),
    curY = Number($(this).attr('data-rowsz')),
    $('#tableDimmensions').html(curX + ' x ' + curY),
    $('#tableDimmensions').css('left', 17 * curX - 60 + 'px'),
    $('#tableDimmensions').css('top', 17 * curY - 190 + 'px'),
    $('.tableCell').each(function () {
      $(this).removeClass('higlightCell'),
      ezX = Number($(this).attr('data-colsz')),
      ezY = Number($(this).attr('data-rowsz')),
      curX >= ezX && curY >= ezY && $(this).addClass('higlightCell')
    })
  });
  
});





        

