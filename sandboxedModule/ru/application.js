// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');
//6 task
  var fs = require('fs');

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  
  //4 task
  log('From application exported function');
  
   //6 task
  fs.appendFile("log.txt", "hello from app "+ "\r\n", function(err) {
		if (err) {
			return console.log(err);
		}
	});
	
	
  
  log("1 task");
  //setInterval(function(){log("IntervalFunction");}, 1000); //закоментировано, чтобы не мешало другим выводам
  setTimeout(function(){log("TimeoutFunction");}, 1000);
  
  log("2 task");
  log("10/10/95 is Date: "+ut.isDate(new Date(1995,9,10)));
  log("skljdfn is string: "+ut.isString('skljdfn'));
  
  //3 & 5 task
  logfile("3 task: name of file app"+application);
 
   
   //9 task
   console.log(global);

};



