/*
 * PHONK Example: HTTP_POST
 *
 * With this code you are able to upload multipart content to a webserver
 * An example of a php file that will handle the upload is included
 *
 * The type of each data part can be text / json / file
 * If type === file then it will automatically load from the folder
 * and transfer
 *
 */

ui.addTitle(app.name)

network.httpRequest({
  method: 'POST',
  url: 'https://postman-echo.com/post',
  data: [
    { 'name': 'field_1', 'content': 'hello', 'type': 'text' },
    { 'name': 'field_2', 'content': 'world', 'type': 'text' },
    { 'name': 'userfile', 'content': 'patata.png', 'type': 'file', 'mediaType': 'image/png' }
  ]
}).onResponse(function (e) {
  console.log(e.status, e.response)
})

