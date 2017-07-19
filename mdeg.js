google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawCn);

function drawTable(docurl , sort ) {
	
	var load = function(col){
		
		var qstr ='https://docs.google.com/spreadsheets/d/'+ docurl + '/gviz/tq?tq='				  
		  + encodeURIComponent('select A,C,B,D,E');
		  //order by B desc

		var tblDiv = document.getElementById('statdiv');
		tblDiv.innerHTML="<h2>データ読み込み中</h2>";
		//var csvn = "报名表_"+ $(".am-active")[0].innerText.trim() +"--" + tblDiv.parentElement.innerText.trim();
	  
		var query = new google.visualization.Query(qstr); 

		query.send(function(response){
			var data = response.getDataTable();

          
                            
			var table = new google.visualization.Table(tblDiv);
			table.draw(data, {showRowNumber: false,alternatingRowStyle:true, width: '100%', height: '100%'});	  


		});	  
			
	};
	
	load('F');	
    //console.log(pinyinUtil.getFirstLetter('好', false));
}

function drawCn(){
    
	drawTable('1ESqoBVXxAVc9iczg1e4aG81oUJx46OHj22N0NhxJAIA' , 'cn');
}

$("#btnreload").click(function(){drawCn();});

