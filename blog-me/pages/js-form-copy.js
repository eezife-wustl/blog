export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      email: event.target.email.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    //alert(`Is this your full name: ${result.data}`)
    //console.log(result);

    document.getElementById("message").innerHTML = "Thanks for subscribing! You'll recieve blog updates via email.";
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form style={{ fontSize: "1rem"}} onSubmit={handleSubmit}>
    <label htmlFor="email">Subscribe for Updates: </label>
    <input type="email" id="email" name="email" required />
    <button type="submit">Submit</button>
    <div id="message" style={{ fontSize: "1rem", marginBottom: "1rem"}}></div>
  </form>
  )
}