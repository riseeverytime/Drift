import type { LinkProps } from "@geist-ui/core"
import GeistLink from "@geist-ui/core/dist/link"
import { useRouter } from "next/router";

const Link = (props: LinkProps) => {
    const { basePath } = useRouter();
    const propHrefWithoutLeadingSlash = props.href && props.href.startsWith("/") ? props.href.substring(1) : props.href;
    const href = basePath ? `${basePath}/${propHrefWithoutLeadingSlash}` : props.href;
    return <GeistLink {...props} href={href} />
}

export default Link
