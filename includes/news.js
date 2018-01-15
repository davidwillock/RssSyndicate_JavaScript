
(function ($){  
	$.fn.ticker = function(options) { 
		
		var opts = $.extend({}, $.fn.ticker.defaults, options); 

		
		if ($(this).length == 0) {
			if (window.console && window.console.log) {
				window.console.log('Element does not exist in DOM!');
			}
			else {
				alert('Element does not exist in DOM!');		
			}
			return false;
		}
		
		/* build url  */
		var newsID = '#' + $(this).attr('id');
                var donkeyID = '#' + $(this).attr('id');
                
                
              
                
            
            
            
                var divNum = newsID.match(/\d+/g);
                var divName = ".divTableCell";
                divName+= divNum;
                var wrapperID = "ticker-wrapper-";
                wrapperID+=divNum;
                var contentID = ".ticker-content-";
                contentID+=divNum;
                var contentID_a = ".ticker-content a";
                var contentID_h = ".ticker-content hover";
                var tickerID = ".ticker-";
                tickerID  +=divNum;
                var tickerWrapperID = "#ticker-wrapper-";
                tickerWrapperID   +=divNum;
                var revealID = ".ticker-swipe-";
                revealID +=divNum;
                var swipeElem = "#ticker-swipe-";
                swipeElem +=divNum;
                
                
                var counter =0;
                var backslash = "/";
                var fnewsID = newsID.substring(1,8);
                
               
                fnewsID+=divNum;
           
              /*  
                var ext = ".xml";
                var _url = "http://localhost:8383/NCI_RSS/";
                var _url = document.URL.substr(0,document.URL.lastIndexOf('/'));
                _url+= backslash;
                _url+= fnewsID;
                _url+= ext;
               
              */
               var _url = 'http://localhost:1720/Service1.svc/DoRSSFeed'
             //  var _url = "http://localhost:1720"
               
	
		var tagType = $(this).get(0).tagName; 	

		return this.each(function() { 
			
			var uniqID = divNum;
                      
			
			/* Internal vars */
			var settings = {				
				position: 0,
				time: 0,
				distance: 0,
				newsArr: {},
				play: true,
				paused: false,
				contentLoaded: false,
				dom: {
					contentID: '#ticker-content-' + uniqID,
					titleID: '#ticker-title-' + uniqID,
					titleElem: '#ticker-title-' + uniqID + ' SPAN',
					tickerID : '#ticker-' + uniqID,
					wrapperID: '#ticker-wrapper-' + uniqID,
					revealID: '#ticker-swipe-' + uniqID,
					revealElem: '#ticker-swipe-' + uniqID + ' SPAN',
					controlsID: '#ticker-controls-' + uniqID,
					prevID: '#prev-' + uniqID,
					nextID: '#next-' + uniqID,
					playPauseID: '#play-pause-' + uniqID,
                                        donkeycontentID: '#donkey-content-' + uniqID,
                                        donkeyrevealElemID: '#donkey-ticker-swipe-' + uniqID + ' SPAN',
                                        donkeyrapperID: '#donkey-wrapper-' + uniqID
				}
			};

			
			if (tagType != 'UL' && tagType != 'OL' && opts.htmlFeed === true) {
				debugError('Cannot use <' + tagType.toLowerCase() + '> type of element for this plugin - must of type <ul> or <ol>');
				return false;
			}

		
			opts.direction == 'rtl' ? opts.direction = 'right' : opts.direction = 'left';
			
			// lets go...
			initialisePage();
			/* Function to get the size of an Object*/
			function countSize(obj) {
			    var size = 0, key;
			    for (key in obj) {
			        if (obj.hasOwnProperty(key)) size++;
			    }
			    return size;
			};

			function getUniqID() {
				var newDate = new Date;
				return newDate.getTime();
                               
			}
			
			
			function debugError(obj) {
				if (opts.debugMode) {
					if (window.console && window.console.log) {
						window.console.log(obj);
					}
					else {
						alert(obj);			
					}
				}
			}

			
			function initialisePage() {
				
                                
                                CallService();
				processContent();
				
                                $(newsID).wrap('<div id="' + settings.dom.wrapperID.replace('#', '') + '"></div>');
				
				$(settings.dom.wrapperID).children().remove();
				$(settings.dom.wrapperID).append('<div id="' + settings.dom.tickerID.replace('#', '') + '" class="' + settings.dom.tickerID.replace('#', '') + '"><p id="' + settings.dom.contentID.replace('#', '') + '" class="' + settings.dom.contentID.replace('#', '') + '"></p><div id="' + settings.dom.revealID.replace('#', '') + '" class="' + settings.dom.revealID.replace('#', '') + '"><span></span></div></div>');
                                
                                
                                
                                
                                
                                
                                

				$(settings.dom.tickerElem + ',' + settings.dom.contentID).hide();
				
                                
                                    
				if (opts.displayType != 'fade') {
                
               		$(settings.dom.contentID).mouseover(function () {
               			if (settings.paused == false) {
               				pauseTicker();
               			}
               		}).mouseout(function () {
               			if (settings.paused == false) {
               				restartTicker();
               			}
               		});
				}
				
				if (!opts.ajaxFeed) {
					setupContentAndTriggerDisplay();
				}
			}


                    function newspicker() {
                            
                           var news_id = parseInt(divNum);
                            switch (news_id) {
                                
                                case 0: 
                                            _url = "feeds.bbci.co.uk/news/rss.xml?edition=uk";
                                    break;
                                
                                case 1:
                                            _url = "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk";
                                            
                                    break;
                                
                                case 2: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/uk/rss.xml?edition=uk";
                                    break;
                                
                                case 3:
                                            _url = "http://feeds.bbci.co.uk/news/business/rss.xml?edition=uk";
                                    break;
                                
                                case 4: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/education/rss.xml?edition=uk";
                                    break;
                                
                                case 5:
                                            _url = "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml?edition=uk";
                                    
                                    break;
                                
                                
                                case 6: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk";
                                    break;
                                
                                case 7:
                                    
                                            _url = "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml?edition=uk";
                                    break;
                                
                                case 8: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/have_your_say/rss.xml?edition=uk";
                                    
                                    break;
                                
                                case 9:
                                    
                                            _url = "http://feeds.bbci.co.uk/news/magazine/rss.xml";
                                    
                                    break;
                                    
                                    
                                case 10: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk";
                                    
                                    break;
                                
                                case 11:
                                    
                                            _url = "http://feeds.bbci.co.uk/news/video_and_audio/uk/rss.xml?edition=uk";
                                    
                                    break;
                                    
                                    
                                case 12: 
                                    
                                            _url = "http://feeds.bbci.co.uk/news/video_and_audio/world/rss.xml?edition=uk";
                                    break;
                                
                                case 13:
                                        
                                            _url = "http://feeds.bbci.co.uk/news/video_and_audio/business/rss.xml?edition=uk";
                                    
                                    break;
                                    
                                case 14: 
                                    
                                               _url = "http://feeds.bbci.co.uk/news/video_and_audio/technology/rss.xml?edition=uk";
                                    break;
                                
                                case 15:
                                    
                                                _url = "http://feeds.bbci.co.uk/news/video_and_audio/health/rss.xml?edition=uk";
                                    
                                    break;
                                
                                case 16: 
                                    
                                                _url = "http://feeds.bbci.co.uk/news/video_and_audio/entertainment_and_arts/rss.xml?edition=uk";
                                    
                                    break;
                                
                                case 17:
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/latest";
                                    break;
                                
                                case 18: 
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/national";
                                    break;
                                
                                case 19:
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/world";
                                    
                                    break;
                                
                                
                                case 20: 
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/politics";
                                    
                                    break;
                                
                                case 21:
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/business";
                                    
                                    break;
                                
                                
                                case 22: 
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/scitech";
                                    
                                    break;
                                
                                case 23:
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/health";
                                    
                                    break;
                                
                                
                                case 24: 
                                    
                                                _url = "http://feeds.foxnews.com/foxnews/entertainment";
                                   
                                    break;
                                
                               
                                
                                
                                
                                
                                
                            }
                            
                            
                            
                            
                            
                        }
                        

function CallService() {
    
    var ContentType = "charset=utf-8";
    var Data = "";
    var ProcessData = true; 
    var Type = "GET";
    DataType = "xml";
    
    $.ajax({
        type: Type, //GET or POST or PUT or DELETE verb
        url: _url, // Location of the service
        data: Data, //Data sent to server
        contentType: ContentType, // content type sent to server
        dataType: DataType, //Expected data format from server
        processdata: ProcessData, //True or False
        success: function(msg) {//On Successfull service call
            ServiceSucceeded(msg);
        },
        error: ServiceFailed// When Service call fails
    });
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + '' + result.statusText);
    Type = null;
    varUrl = null;
    Data = null; 
    ContentType = null;
    DataType = null;
    ProcessData = null;
}


function ServiceSucceeded(msg){
    
    
    alert(msg);
    
    
}

























			
			function processContent() {
                            
                           // newspicker ();
			
				if (settings.contentLoaded == false) {
					// construct content
					if (opts.ajaxFeed) {
						if (opts.feedType == 'xml') {							
							$.ajax({
								url: _url,
								cache: false,
								dataType: opts.feedType,
								async: true,
								success: function(data){
									count = 0;	
									// get the 'root'
									for (var a = 0; a < data.childNodes.length; a++) {
										if (data.childNodes[a].nodeName == 'rss') {
											xmlContent = data.childNodes[a];
										}
									}
									// channels
									for (var i = 0; i < xmlContent.childNodes.length; i++) {
										if (xmlContent.childNodes[i].nodeName == 'channel') {
											xmlChannel = xmlContent.childNodes[i];
										}		
									}
									// link for each item
									for (var x = 0; x < xmlChannel.childNodes.length; x++) {
										if (xmlChannel.childNodes[x].nodeName == 'item') {
											xmlItems = xmlChannel.childNodes[x];
											var title, link = false;
											for (var y = 0; y < xmlItems.childNodes.length; y++) {
												if (xmlItems.childNodes[y].nodeName == 'title') {      												    
													title = xmlItems.childNodes[y].lastChild.nodeValue;
												}
												else if (xmlItems.childNodes[y].nodeName == 'link') {												    
													link = xmlItems.childNodes[y].lastChild.nodeValue; 
												}
												if ((title !== false && title != '') && link !== false) {
												    settings.newsArr['item-' + count] = { type: opts.titleText, content: '<a href="' + link + '">' + title + '</a>' };												    count++;												    title = false;												    link = false;
												}
											}	
										}		
									}			
									// data ?
									if (countSize(settings.newsArr < 1)) {
										debugError('Couldn\'t find any content from the XML feed for the ticker to use!');
										return false;
									}
									settings.contentLoaded = true;
									setupContentAndTriggerDisplay();
								}
							});							
						}
						else {
							debugError('Code Me!');	
						}						
					}
                                                
					else {
						debugError('The ticker is set to not use any types of content! Check the settings for the ticker.');
						return false;
					}					
				}			
			}
                        
                        
                        
                        
                        function FireEvent( ElementId, EventName )
                        {
                        if( document.getElementById(ElementId) != null )    
                            {   
                            if( document.getElementById( ElementId ).fireEvent ) 
                            {
                            document.getElementById( ElementId ).fireEvent( 'on' + EventName );     
                            }
                             else 
                            {   
                                var evObj = document.createEvent( 'Events' );
                            evObj.initEvent( EventName, true, false );
                            document.getElementById( ElementId ).dispatchEvent( evObj );
                            }
                            }
                           }
                        
                        
                        
                        function update( j ) {
                        var n = parseInt( j.text(), 10 );
                        j.text( n + 1 );
                        }
                        
                        
                        function eventFire(el, etype){
                        if (el.fireEvent) {
                        el.fireEvent('on' + etype);
                        } else {
                        var evObj = document.createEvent('Events');
                        evObj.initEvent(etype, true, false);
                        el.dispatchEvent(evObj);
                        }
                            }
                        
                        
                        
                        
                        
                        
                        function randomSelect (color){
                            
                            var red, blue, green, yellow, num;
                            
                            
                            if (color === 1){
                                
                                /*  red      */
                                
                                 return "#ea4335";
                            }else if (color === 2){
                                
                                /*    green         */
                                  return "#4285f4";
                            }else if (color === 3){
                                /*  blue      */
                                 return "#34a852";
                            }else {
                                
                                /*  yellow         */
                                 return "#fabb05";
                            }
                            
                           
                            
                        }
                        
           function toggleDivs() {
                        var $inner = $("#inner");

                    // See which <divs> should be animated in/out.
                        if ($inner.position().left == 0) {
                        $inner.animate({
                        left: "-400px"
                        });
                        }
                            else {
                        $inner.animate({
                        left: "0px"
                        });
                    }


        }
                        
                        
                        

			function setupContentAndTriggerDisplay() {
                            
                                
                                
                                var green = "rgb(52, 168, 82)";
                                var blue = "rgb(66, 133, 244)";
                                var yellow = "rgb(250, 187, 5)";
                                var red = "rgb(234, 67, 53)";

                               
                                
                                
                              
                                  var white_color = "#FFFFFF";
                                  var testcolor = "{ 'color': 'red', 'font-size': '150%' }";
                                  var colour = "#4285f4";
                                  var rand = Math.floor(Math.random() * 4) + 1;
                               
                                  
                                   var col = randomSelect(rand);
                                   
                                      $('.tst').css({'background': col});
                                      $("a:hover").css({'background': col});
                                      $('.hoverTableCont:hover').css({'background': col});
                             
                                     
                                     // Determine the size of the matrix
                                     var matrixsz = getMatrixSz();
                                    // matrixsz = 0;
                                     switch (matrixsz) {
                                         case 0:
                                             
                                             
                                                // Setup the matrix
                                                $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                
                                            //    var getImageSrc = $(divName).attr('img');
                                            //    $(divName).css('background-image', 'url(' + getImageSrc + ')');
                                            var imageUrl = "images\matrix.png";
                                               $(divName).css('background-image', 'url(' + imageUrl + ')'); 
                                               // $(divName).css("background",'url(images\matrix.png)');
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '1600px' });
                                                $(tickerID).css("height",'1060px');
                                                $(tickerID).css("display",'block');
                                                $(tickerID).css("position",'absolute');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                              
                                            
                                                 $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '400%' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                                // Position the wrapper within the TableCell 
                                                $(tickerWrapperID).css("top",'50%');
                                                //Position the content within the ticker
                                                 $(contentID).css({'line-height': '15.00em' });
                                             
                                            
                                            // Setup the Matrix
                                             
                                            
                                                break;
                                          
                                case 1:      
                                               
                                    
                                    // Setup the Matrix
                                              
					       $(divName).css({'padding-left': '0px'});
                                               $(divName).css({'padding-top': '350px'});
                                               $(divName).css("background-color",col);                                       
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '1571px' });
                                                $(tickerID).css("height",'325px');
                                        //       $(tickerID).css("display",'block');
                                              $(tickerID).css("position",'relative');
                                               $(tickerID).css("overflow",'hidden');
                                               $(tickerID).css("background-color",col);
                                                // Setup the swip
                                               $(swipeElem).css("top",'0px');
                                              
                                                $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '300%' });
                                                  $(contentID).css({'position': 'absolute' });
                                                 
                                                // wrapper 
                                                $(wrapperID).css("background-color",col);
                                                
                                                //Position the content
                                                $(contentID).css({'line-height': '0.05em' });
                                                // Align the text... issue below cant find anchor properties
                                 
                                          
                                                 
                                                break;
                                         
                                         
                                         
                                         
                                          
                                         case 3:
                                             
                                                  
                                             
                                                // Setup the matrix
                                               $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                  $(divName).css("display",'table-cell');
                                                   $(divName).css("position",'relative');
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '792px' });
                                                $(tickerID).css("height",'527px');
                                                $(tickerID).css("display",'block');
                                               $(tickerID).css("position",'relative');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                     
                                                 $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '200%' });
                                                $(contentID).css({'position': 'relative' });
                                                 $(contentID).css({' overflow': 'hidden' });
                                                 $(contentID).css({'left': '0px' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                                // Position the wrapper within the TableCell 
                                  
                                                $(contentID).css({'line-height': '16.00em' });
                                               

                                                break;
                                         
                                         
                                         
                                         
                                         
                                         
                                         case 5:
                                             
                                                
                                           
                                                // Setup the matrix
                                               $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                  $(divName).css("display",'table-cell');
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '528px' });
                                                $(tickerID).css("height",'530px');
                                                $(tickerID).css("display",'block');
                                               $(tickerID).css("position",'relative');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                     
                                                $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '150%' });
                                                $(contentID).css({'position': 'relative' });
                                                 $(contentID).css({' overflow': 'hidden' });
                                                 $(contentID).css({'left': '0px' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                            
                                                 $(contentID).css({'line-height': '21.00em' });
                                                                                     
                                                                                   
                                            
                                        break;
                                        case 8:
                                        
                                       // Setup the matrix
                                               $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                  $(divName).css("display",'table-cell');
                                                  
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '530px' });
                                                $(tickerID).css("height",'350px');
                                                $(tickerID).css("display",'block');
                                               $(tickerID).css("position",'relative');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                     
                                                $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '200%' });
                                                $(contentID).css({'position': 'relative' });
                                                 $(contentID).css({' overflow': 'hidden' });
                                                 $(contentID).css({'left': '0px' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                              
                                                 $(contentID).css({'line-height': '11.00em' });
                                                
                                        
                                        break;
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        case 15:
                                        
                                        
                                          
                                       // Setup the matrix
                                               $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                  $(divName).css("display",'table-cell');
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '400px' });
                                                $(tickerID).css("height",'262px');
                                                $(tickerID).css("display",'block');
                                               $(tickerID).css("position",'relative');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                     
                                                 $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '100%' });
                                                $(contentID).css({'position': 'relative' });
                                                 $(contentID).css({' overflow': 'hidden' });
                                                 $(contentID).css({'left': '0px' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                             
                                                //Position the content within the ticker
                                                 $(contentID).css({'line-height': '17.00em' });
                                                
                                            
                                        
                                        
                                        
                                        break;
                                        
                                        
                                        case 24:
                                        
                                           
                                       // Setup the matrix
                                               $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                                  $(divName).css("display",'table-cell');
                                               
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '315px' });
                                                $(tickerID).css("height",'210px');
                                                $(tickerID).css("display",'block');
                                               $(tickerID).css("position",'relative');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                     
                                                 $(revealID).css("background-color",col);
                                                // Setup the font size
                                             //   $(contentID).css({'font-size': '0%' });
                                                $(contentID).css({'position': 'relative' });
                                                 $(contentID).css({' overflow': 'hidden' });
                                                 $(contentID).css({'left': '0px' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                               
                                                 $(contentID).css({'line-height': '14.00em' });
                                               
                                        
                                        
                                        break;
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        default:
                                            
                                            // Setup the matrix
                                                $(divName).css({'padding-left': '0px'});
                                                $(divName).css({'padding-top': '0px'});
                                                $(divName).css("background-color",col);
                                               
                                                // Setup the ticktock
                                                $(tickerID).css({'width': '1600px' });
                                                $(tickerID).css("height",'1060px');
                                                $(tickerID).css("display",'block');
                                                $(tickerID).css("position",'absolute');
                                                $(tickerID).css("background-color",col);
                                                $(tickerID).css("overflow",'hidden');
                                              
                                              
                                                 $(revealID).css("background-color",col);
                                                // Setup the font size
                                                $(contentID).css({'font-size': '400%' });
                                                // wrapper
                                                $(wrapperID).css("background-color",col);
                                                // Position the wrapper within the TableCell 
                                                $(tickerWrapperID).css("top",'50%');
                                                //Position the content within the ticker
                                                 $(contentID).css({'line-height': '16.00em' });
                                               
                                           break;
                                            
                                    } 
                                     
                                 
				settings.contentLoaded = true;
                                 
                                 $( "button:first" ).hover(function() {
                                    update( $( "span:first" ) );
                                  });
 
                                $( "button:last" ).click(function() {
                              //  $(".button_sliding_bg").trigger("mouseenter");
                                 $(".button_sliding_bg").trigger('mouseover');
                                //mouseenter click
                                // update( $( "span:last" ) );
                                });
 
                                $(settings.dom.titleElem).html(settings.newsArr['item-' + settings.position].type);
				$(settings.dom.contentID).html(settings.newsArr['item-' + settings.position].content);
                        

			
				if (settings.position == (countSize(settings.newsArr) -1)) {
					settings.position = 0;
				}
				else {		
					settings.position++;
				}			

				
				distance = $(settings.dom.contentID).width();
                                
				time = distance / opts.speed;

									
				revealContent();		
			}

			
			function revealContent() {
		
                        
                                
                                $(settings.dom.contentID).css('opacity', '1');
				if(settings.play) {	
					
					var offset = $(settings.dom.titleID).width() + 0;
	
					$(settings.dom.revealID).css(opts.direction, offset + 'px');
					
					if (opts.displayType == 'fade') {
						
						$(settings.dom.revealID).hide(0, function () {
							$(settings.dom.contentID).css(opts.direction, offset + 'px').fadeIn(opts.fadeInSpeed, postReveal);
						});						
					}
					else if (opts.displayType == 'scroll') {
						// to code
					}
					else {
						// default bbc scroll effect
						$(settings.dom.revealElem).show(0, function () {
							//*4* $(settings.dom.donkeycontentID).css(opts.direction, offset + 'px').show();
                                                        $(settings.dom.contentID).css(opts.direction, offset + 'px').show();
							// set our animation direction
							animationAction = opts.direction == 'right' ? { marginRight: distance + 'px'} : { marginLeft: distance + 'px' };
							$(settings.dom.revealID).css('margin-' + opts.direction, '0px').delay(20).animate(animationAction, time, 'linear', postReveal);
                                                        
						});		
					}
				}
				else {
					return false;					
				}
			};

			// here we hide the current content and reset the ticker elements to a default state ready for the next ticker item
			function postReveal() {				
				if(settings.play) {		
					// we have to separately fade the content out here to get around an IE bug - needs further investigation
					$(settings.dom.contentID).delay(opts.pauseOnItems).fadeOut(opts.fadeOutSpeed);
					// deal with the rest of the content, prepare the DOM and trigger the next ticker
					if (opts.displayType == 'fade') {
						$(settings.dom.contentID).fadeOut(opts.fadeOutSpeed, function () {
							$(settings.dom.wrapperID)
                                                            .find(settings.dom.revealElem + ',' + settings.dom.contentID)
                                                            .hide()
                                                            .find(settings.dom.tickerID + ',' + settings.dom.revealID)
                                                            .show()
                                                            .end().find(settings.dom.tickerID + ',' + settings.dom.revealID)
							$(settings.dom.wrapperID).removeAttr('style');								
							setupContentAndTriggerDisplay();						
						});
					}
					else {
						$(settings.dom.revealID).hide(0, function () {
							$(settings.dom.contentID).fadeOut(opts.fadeOutSpeed, function () {
                                                        //*5* of 5 $(settings.dom.donkeycontentID).fadeOut(opts.fadeOutSpeed, function () {
								$(settings.dom.wrapperID)
									.find(settings.dom.revealElem + ',' + settings.dom.contentID)
										.hide()
									.end().find(settings.dom.tickerID + ',' + settings.dom.revealID)
										.show()
									.end().find(settings.dom.tickerID + ',' + settings.dom.revealID)
										.removeAttr('style');								
								setupContentAndTriggerDisplay();						
							});
						});	
					}
				}
				else {
					$(settings.dom.revealElem).hide();
				}
			}

		
		});  
	};  


	$.fn.ticker.defaults = {
		speed: 0.10,			
		ajaxFeed: true,
		feedUrl: 'http://localhost:8383/rss/news.xml',
		feedType: 'xml',
		displayType: 'reveal',
		htmlFeed: false,
		debugMode: true,
		controls: true,
		titleText: '',	
		direction: 'ltr',	
		pauseOnItems: 3000,
		fadeInSpeed: 600,
		fadeOutSpeed: 300
	};	
})(jQuery);