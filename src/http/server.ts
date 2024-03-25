import { Elysia } from 'elysia'

import { registerRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'
import { authenticateFromLink } from './routes/authenticate-from-link'
import { signOut } from './routes/sign-out'
import { getProfile } from './routes/get-profile'
import { getManagedRestaurant } from './routes/get-managed-restaurant'
import { getOrderDetails } from './routes/get-order-details'
import { approveOrder } from './routes/approve-order'

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)
  .use(signOut)
  .use(getProfile)
  .use(getManagedRestaurant)
  .use(getOrderDetails)
  .use(approveOrder)
  .onError(({ code, set, error }) => {
    switch (code) {
      case 'VALIDATION': {
        set.status = error.status

        return error.toResponse()
      }
      default: {
        set.status = 500

        return new Response(null, { status: 500 })
      }
    }
  })

app.listen(3333, () => {
  console.log('HTTP server running')
})
