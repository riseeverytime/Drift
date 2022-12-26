import VisibilityControl from "@components/badges/visibility-control"
import { getPostById } from "@lib/server/prisma"
import { getCurrentUser } from "@lib/server/session"
import { notFound, redirect } from "next/navigation"
import { cache } from "react"
import PostFiles from "./components/post-files"

export const getPost = cache(async (id: string) => {
	const post = await getPostById(id, {
		select: {
			visibility: true,
			authorId: true,
			title: true,
			description: true,
			id: true,
			createdAt: true,
			expiresAt: true,
			parentId: true,
			author: {
				select: {
					displayName: true,
					image: true
				}
			},
			files: {
				select: {
					id: true,
					content: true,
					updatedAt: true,
					title: true,
					html: true
				}
			}
		}
	})

	if (!post) {
		return notFound()
	}

	if (post.expiresAt && new Date(post.expiresAt) < new Date()) {
		return redirect("/expired")
	}

	if (post.visibility === "public" || post.visibility === "unlisted") {
		return { post }
	}

	if (post.visibility === "private") {
		const user = await getCurrentUser()
		if (user?.id === post.authorId || user.role === "admin") {
			return { post }
		}
		return redirect("/new")
	}

	if (post.visibility === "protected") {
		return {
			post: {
				visibility: "protected",
				authorId: post.authorId,
				id: post.id
			}
		}
	}

	return { post }
})

export default async function PostPage({
	params
}: {
	params: {
		id: string
	}
}) {
	const { post } = await getPost(params.id)
	const stringifiedPost = JSON.stringify(post)
	return (
		<>
			<PostFiles post={stringifiedPost} />
			<VisibilityControl
				authorId={post.authorId}
				postId={post.id}
				visibility={post.visibility}
			/>
		</>
	)
}
