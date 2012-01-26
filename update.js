{
	var serverip="192.168.1.101";
    var online =  false;
    
	function check_network() {
    	var timeOutInteger = null;
    	var timeOutOccured = false;

                var url = 'http://' + serverip + '/images/boxbg.gif';
 
                    $.ajax({ type: "GET",
                            data: "{}",
                            url: url,
                            cache: false,
                            timeout: 10 * 1000,
                            success:function(response)
                            {
                                if(!timeOutOccured){
                                    clearTimeout(timeOutInteger);
                                }
                                online = true;
                                //confirm('Connection type: \n ' + online);
                                getenv();
                                
                            },
                            error:function(xhr, textStatus, errorThrown) {
                                if(!timeOutOccured){
                                    clearTimeout(timeOutInteger);
                                }
                                online = false;
                                confirm('Connection type: \n ' + online);  
                            }
                     });   	             
	};
	

	$(document).bind("deviceready", function () {
			alert("ready");
	});	

	$( document ).bind( "mobileinit", function() {
    	// Make your jQuery Mobile framework configuration changes here!

    	$.mobile.allowCrossDomainPages = true;
	});

 	$('#home').live('pageinit', function(event) {
		console.log('pageinit triggered.');
		//disable cache
                $.ajaxSetup({ cache: false });
		// server ip
                $('#ipname').val(serverip);  
		// check online
		check_network();

		var reload = setInterval(getenv,20000);
		//getenv();
		// an anchor element gets clicked
                $('#form1').submit(function() { 
		  serverip = $('#ipname').val();
		});

		$("#button").click( function() {
                        serverip = $('#ipname').val();
                        check_network();
		});

		$('#slider1').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip  + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'A',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        clearInterval(reload);
                        reload = setInterval(getenv,20000);
		});
		$('#slider2').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'B',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        reload = setInterval(getenv,20000);
		});
		$('#slider3').change(function() {
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'C',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        clearInterval(reload);
                        reload = setInterval(getenv,20000);
		});
		$('#slider4').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'D',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        window.clearInterval(reload);
                        reload = window.setInterval(getenv,20000);
		});
		$('#slider5').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'E',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        reload = setInterval(getenv,20000);
		});
		$('#slider6').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'F',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        reload = setInterval(getenv,20000);
		});
		$('#slider7').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'G',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        reload = setInterval(getenv,20000);
		});
		$('#slider8').change(function() {
                        clearInterval(reload);
    			var myswitch = $(this);
			$.post('http://' + serverip + '/cgi-bin/dodev.cgi', 
				{ 
					'Feld' : 'H',
					'Value': myswitch[0].selectedIndex == 1 ? "true":"false"
				}, parseInfo);
                        reload = setInterval(getenv,20000);
		});
  	});

	function getenv(){
		//Assign default value to form field #1
        if(online) {
  		// make a request
  		//  alert('Connection type: ' + "online");

        $.getJSON('http://' + serverip + '/cgi-bin/uenv.cgi',
			function(data){
			var myswitch = $("select#slider1");
			myswitch[0].selectedIndex = (data.relay1 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider2");
			myswitch[0].selectedIndex = (data.relay2 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider3");
			myswitch[0].selectedIndex = (data.relay3 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider4");
			myswitch[0].selectedIndex = (data.relay4 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider5");
			myswitch[0].selectedIndex = (data.relay5 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider6");
			myswitch[0].selectedIndex = (data.relay6 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider7");
			myswitch[0].selectedIndex = (data.relay7 == 1);
			myswitch.slider("refresh");
			var myswitch = $("select#slider8");
			myswitch[0].selectedIndex = (data.relay8 == 1);
			myswitch.slider("refresh");

			$('#stext1').text(data.relname1);
			$('#stext2').text(data.relname2);
			$('#stext3').text(data.relname3);
			$('#stext4').text(data.relname4);
			$('#stext5').text(data.relname5);
			$('#stext6').text(data.relname6);
			$('#stext7').text(data.relname7);
			$('#stext8').text(data.relname8);
		});
				} else {
  		// load from localStorage
		  alert('Connection type: ' + "offline");
		};
	};
	// this function parses the fetched data into the 'info' paragraph
	function parseInfo(data)
	{
		// the data parameter is an object, while name and email are the keys from the PHP array
		// you can also use the 'text' function instead of html. The difference is that 'text'
		// displays raw text, even if it contains other HTML elements.
		//$('#info').html(data);
	};
}
