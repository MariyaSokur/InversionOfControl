// Файл, демонстрирующий то, как фреймворк создает среду (песочницу) для
// исполнения приложения, загружает приложение, передает ему песочницу в
// качестве глобального контекста и получает ссылу на экспортируемый
// приложением интерфейс. Читайте README.md в нем задания.

// Фреймворк может явно зависеть от библиотек через dependency lookup
var fs = require('fs'),
    vm = require('vm');

// Создаем контекст-песочницу, которая станет глобальным контекстом приложения
var context = { module: {}, console: console };
//9 task
context.global = context;

//1 task
context.setInterval=function(cb, ms){
	setInterval(cb,ms);
}
context.setTimeout=function(cb, ms){
	setTimeout(cb,ms);
}

//2 task
var util = require('util');
context.ut = util;
var sandbox = vm.createContext(context);

//3 task
context.application = process.argv[2];
var fileName = './'+process.argv[2];

//4 task
context.log = function(s){
	var date = new Date();
	context.console.log(context.application+date+s);
}

//5 task
context.logfile = function(s){
	context.log(s);
	var date = new Date();
	fs.appendFile("log.txt", context.application+date+s + "\r\n", function(err) {
		if (err) {
			return console.log(err);
		}
	})
}

//6 task
context.require = function(l){
	var date = new Date();
	fs.appendFile("log.txt", date+l + "\r\n", function(err) {
		if (err) {
			return console.log(err);
		}
	})
	return require(l);
}


// Читаем исходный код приложения из файла
fs.readFile(fileName, function(err, src) {
  // Тут нужно обработать ошибки
  if(err!=null){
  console.log(err);}
  
  // Запускаем код приложения в песочнице
  else{
  var script = vm.createScript(src, fileName);
  var x = script.runInNewContext(sandbox);
  x();
  }
  
  // Забираем ссылку из sandbox.module.exports, можем ее исполнить,
  // сохранить в кеш, вывести на экран исходный код приложения и т.д.
});
