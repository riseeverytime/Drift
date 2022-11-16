import Card from "@components/card"
import * as RadixTooltip from "@radix-ui/react-tooltip"
import "./tooltip.css"

const Tooltip = ({
	children,
	content,
	className,
	...props
}: {
	children: React.ReactNode
	content: React.ReactNode
	className?: string
} & RadixTooltip.TooltipProps) => {
	return (
		<RadixTooltip.Root {...props}>
			<RadixTooltip.Trigger asChild className={className}>
				{children}
			</RadixTooltip.Trigger>

			<RadixTooltip.Content>
				<Card className="tooltip">{content}</Card>
			</RadixTooltip.Content>
		</RadixTooltip.Root>
	)
}

export default Tooltip