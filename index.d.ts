
declare type Post = {
    title: string
    date: string
    description: string
    name: string
}

declare type PostHolder = {
    status: boolean
    post: Post
}

declare type Work = {
    name: string
    url: string
    description: string
}