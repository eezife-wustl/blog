import {subscribe} from '../pages/api/subscribe'

export default function Sbutton() {
    return (
        <>
        <form action="/api/subscribe" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Submit</button>
        </form>

        <form onsubmit="validateFormWithJS()">
        <label for="rollNumber">Roll Number:</label>
        <input type="text" name="rollNumber" id="rollNumber" />

        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />

        <button type="submit">Submit</button>
        </form>

<script>
  function validateFormWithJS() {
    const name = document.querySelector('#name').value
    const rollNumber = document.querySelector('#rollNumber').value

    if (!name) {
      alert('Please enter your name.')
      return false
    }

    if (rollNumber.length < 3) {
      alert('Roll Number should be at least 3 digits long.')
      return false
    }
  }
</script>
        </>
    )
  }