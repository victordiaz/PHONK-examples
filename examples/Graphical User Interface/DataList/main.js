/*
 * PHONK Example: DataList
 *
 * Create and display a list of data using custom widgets
 */

ui.addTitle(app.name)

var mydata = []

// lets fill the array with random data
for (var i = 0; i < 1000; i++) {
  mydata.push({'text': 'hola ' + i})
}

var list = ui.addList(0.1, 0.2, 0.8, 0.7).init(
  mydata,
  function () { // on create view
    return ui.newView('button')
  },
  function (o) { // data binding
    var t = mydata[o.position].text
    o.view.props.background = '#00FFFFFF'
    o.view.props.padding = 50
    o.view.text(t)
    o.view.onClick(function () {
      ui.toast('pressed ' + t)
    }
  )
  })
