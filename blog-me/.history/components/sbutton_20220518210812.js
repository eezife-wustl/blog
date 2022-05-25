import {subscribe} from '../pages/api/subscribe'

export default function sbutton() {
    return (
        </>
        <form action="/pages/api/subscribe" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        </form>
    )
  }