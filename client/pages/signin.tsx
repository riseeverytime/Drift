import { Page } from "@geist-ui/core";
import Auth from "../components/auth";
import UnauthenticatedHeader from "../components/unauthenticated-header";
import { ThemeProps } from "./_app";

const SignIn = ({ theme, changeTheme }: ThemeProps) => (
    <Page>
        <Page.Header>
            <UnauthenticatedHeader theme={theme} changeTheme={changeTheme} />
        </Page.Header>
        <Page.Content width={"var(--main-content-width)"} margin="auto">
            <Auth page="signin" />
        </Page.Content>
    </Page>
)

export default SignIn