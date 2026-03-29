import { auth } from '@clerk/nextjs/server'
import LandingView from './landingview'

export default async function LandingPage() {
  const { userId } = await auth()
  return <LandingView userId={userId} />
}