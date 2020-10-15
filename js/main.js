
init()

function init() {

  var url = "https://api.covid19api.com/summary"

  var data = ''

  $.get(url, function (data) {
    console.log(data)


    data = `

<td>${data.Global.TotalConfirmed}</td>
<td>${data.Countries[41].NewConfirmed}</td>
<td>${data.Countries[41].NewRecovered}</td>
<td>${data.Countries[41].NewDeaths}</td>
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