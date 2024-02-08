import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

function TextInputInput(props: TextInputInputProps) {

    return (
        <input className='outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400' {...props} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}