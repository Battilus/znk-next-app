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
    id: ProjectId
    tagName?: string
    category?: ProjectsCategory
}

export type ProjectsCategory = {
    id: ProjectId
    name: string
}

export type BffFilterParam = string

export type ProjectDescriptionData = {
    id: ProjectId
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

