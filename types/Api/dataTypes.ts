export type ProjectImage = {
    _id: string | number
    src: string
    alt?: string
    description?: string
    projectPreview?: boolean
}

export type ProjectsCategoriesTag = {
    _id: string | number
    tagName?: string
    category?: ProjectsCategory
}

export type ProjectsCategory = {
    _id: string | number
    name: string
}

export type ProjectDescriptionData = {
    _id: string | number
    title: string
    location: string
    yearOfBuild: string | number
    status: string
    appointment?: string
    description: string
    mainPagePreview?: boolean
    images: ProjectImage[]
    tags?: ProjectsCategoriesTag[]
}

