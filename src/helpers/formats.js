const isNumber = (evt) => {
  // eslint-disable-next-line no-param-reassign
  evt = evt || window.event
  const charCode = evt.which ? evt.which : evt.keyCode
  if ((charCode !== 8 && charCode !== 0 && charCode < 48) || charCode > 57) {
    evt.preventDefault()
  }
}

export { isNumber }
