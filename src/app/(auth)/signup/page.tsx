import Auth from "../components"
import { getRequiresPasscode } from "pages/api/auth/requires-passcode"
import { isGithubEnabled } from "../signin/page"

const getPasscode = async () => {
	return await getRequiresPasscode()
}

export default async function SignUpPage() {
	const requiresPasscode = await getPasscode()
	return <Auth page="signup" requiresServerPassword={requiresPasscode} isGithubEnabled={isGithubEnabled()} />
}
