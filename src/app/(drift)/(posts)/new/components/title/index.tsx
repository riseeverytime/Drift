import { ChangeEvent, memo } from "react"

import Input from "@components/input"
import styles from "./title.module.css"

const titlePlaceholders = [
	"How to...",
	"Status update for ...",
	"My new project",
	"My new idea",
	"Let's talk about...",
	"What's up with ...",
	"I'm thinking about ..."
]

const placeholder = titlePlaceholders[3]

type props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	title?: string
}

function Title({ onChange, title }: props) {
	return (
		<div className={styles.title}>
			<h1 style={{ margin: 0, padding: 0 }}>Drift</h1>
			<Input
				placeholder={placeholder}
				value={title}
				onChange={onChange}
				label="Title"
				className={styles.labelAndInput}
				style={{ width: "100%" }}
				labelClassName={styles.labelAndInput}
			/>
		</div>
	)
}

export default memo(Title)
