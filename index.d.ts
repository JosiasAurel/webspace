
declare type Project = {
    url?: string
    name: string
    description: string
    state: "deployed"|"development"|"stealth-dev"|"pending"|"planning"|"deprecated"|"experimental"|"closed"
}

declare type Post = {
    title: string
    publishDate: string
    content: string,
    views: number,
    url: string
    description: string
}

declare type PostHolder = {
    status: boolean
    post: Post
}