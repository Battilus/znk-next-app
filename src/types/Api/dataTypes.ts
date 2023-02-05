export type Locales = "ru" | "en"

export type ProjectId = string | number

export type YearOfBuild = string | number

export type ProjectImage = {
    src: string
    alt?: string
    showOrder: number,
    description?: string
    projectPreview?: boolean
}

export type ProjectsCategoriesTag = {
    _id: ProjectId
    tagName?: string
    category?: ProjectsCategory
}

export type ProjectsCategory = {
    _id: ProjectId
    name: string
}

export type BffFilterParam = string

export type ProjectDescriptionData = {
    _id: ProjectId
    title: string
    location: string
    yearOfBuild: YearOfBuild
    status: string
    assignment?: string
    description: string
    mainPagePreview?: boolean
    images: ProjectImage[]
    tags?: ProjectsCategoriesTag[]
    locale?: Locales
}

