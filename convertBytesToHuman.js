/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */


export default function convertBytesToHuman(bytes) {
  var readble = ['KB', 'MB', 'GB'];
  var counter = 0;
  if (bytes == null){
    return "0 B"
  }
  if (typeof bytes != 'number' || bytes < 0 || bytes > 1023*1024*1024*1024 || isNaN(bytes) || bytes == Infinity){
    //console.log("wrong input, not negative number is required, maximum value is 1023 GB")
    return false
  }
  else{ 
    while(bytes >= 1024){
      bytes = bytes/1024
      counter += 1
    }
    if (counter > 0){
      return bytes + ' ' + readble[counter-1]
      }
    else{
      return bytes + " B"
    } 
    }
  }
