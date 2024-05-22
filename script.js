document
  .getElementById('survey-form')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    const pincode = document.getElementById('pincode').value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const foods = Array.from(
      document.querySelectorAll('input[name="food"]:checked')
    ).map((food) => food.value)
    const state = document.getElementById('state').value
    const country = document.getElementById('country').value

    if (foods.length < 2) {
      alert('Please select at least 2 food options.')
      return
    }

    const tableBody = document.getElementById('table-body')
    const newRow = document.createElement('tr')

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `

    tableBody.appendChild(newRow)

    document.getElementById('survey-form').reset()
  })
