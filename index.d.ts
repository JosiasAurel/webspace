
declare type Project = {
    url?: string
    name: string
    description: string
    state: "deployed"|"development"|"stealth-dev"|"pending"|"planning"|"deprecated"|"experimental"|"closed"
}