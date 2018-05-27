export function validateOnSubmit( id, password ) {
  if(id === ''){
    alert('ID를 입력해주세요');
    return false;
  }

  if(password === ''){
    alert('PASSWORD를 입력해주세요');
    return false;
  }

  if(id === '123' && password === '123'){
    return true;
  }
}
