const formatDate = (strDateObj) => {

  const date = new Date(strDateObj);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0から始まるため+1し、2桁表示にするためにsliceを使用
  const day = ('0' + date.getDate()).slice(-2); // 日は2桁表示にするためにsliceを使用
  const hours = ('0' + date.getHours()).slice(-2); // 時は2桁表示にするためにsliceを使用
  const minutes = ('0' + date.getMinutes()).slice(-2); // 分は2桁表示にするためにsliceを使用
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
} 

export {formatDate};