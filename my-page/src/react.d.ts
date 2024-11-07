
import { AriaAttributes, DOMAttributes } from 'react' // not needed if skipLibCheck = true

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        className?: string
    }
}
