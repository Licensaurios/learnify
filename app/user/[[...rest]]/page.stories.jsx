
import User from './page'
import { ClerkProvider } from '@clerk/nextjs'

export default {
  title: 'Pages/User',
  component: User,
  decorators: [
    (Story) => (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <Story />
      </ClerkProvider>
    ),
  ],
}

export const Default = {}
//agregar este format (sin decorators sino tiene elementos Clerk)