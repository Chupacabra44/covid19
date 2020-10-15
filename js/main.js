
init()

function init() {

  var url = "https://api.covid19api.com/summary"

  var data = ''

  $.get(url, function (data) {
    console.log(data)


    data = `

<td>${data.Countries[14].NewConfirmed}</td>
<td>${data.Countries[14].NewConfirmed}</td>
<td>${data.Countries[14].NewConfirmed}</td>
<td>${data.Countries[14].NewConfirmed}</td>
`

    $("#data").html(data)

  })



}



function refreshData() {
  init()
  clearData()

}

function clearData() {
  $("#data").empty()
}