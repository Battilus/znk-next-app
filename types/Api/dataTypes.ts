export type ProjectDescriptionData = {
    _id: string | number
    title: string
    location: string
    yearOfBuild: string | number
    status: string
}

export type ProjectsCategoriesTag = {
    _id?: string | number
    tagName?: string
    category?: string
}