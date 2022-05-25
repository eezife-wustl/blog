import {subscribe} from '../pages/api/subscribe'

export default function Sbutton() {
    return (
        <>
        <form action="/api/subscribe" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Submit</button>
        </form>

        </>
    )
  }