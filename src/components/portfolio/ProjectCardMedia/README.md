Purpose

Renders responsive image media for project cards. Supports aspect ratio and lazy loading.

Props

- src: string
- alt?: string
- width/height?: numbers
- aspectRatio?: number
- priority?: boolean

Usage

<ProjectCardMedia src={image.src} alt={image.alt} aspectRatio={16/9} />

Accessibility

- Provide meaningful alt text when image conveys content; otherwise pass alt="" for decorative media.

CMS Integration

- Provide image URLs and metadata (width/height/aspect ratio) via CMS fields.
