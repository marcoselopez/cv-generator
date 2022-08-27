const validateInput = (input) => {
  if(input.target.value.trim().length > 0){
    input.target.className = 'form-control is-valid'
  } else {
    input.target.className = 'form-control is-invalid'
  }
};

export default validateInput;