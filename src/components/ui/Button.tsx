import { cva, type VariantProps } from "class-variance-authority"


// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva("transition-all duration-300 cursor-pointer", {
    variants: {
        variant: {
            primary: `text-primary font-medium hover:underline-offset-4 relative inline-flex
            items-center py-2 px-2
            hover:after:scale-x-100 after:content-[''] after:absolute
            after:left-0 after:bottom-1 after:h-[2px] after:w-full after:bg-tertiary
            after:scale-x-0 after:origin-center after:transition-transform after:duration-300`,
            secondary: "bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:shadow-color-soft hover:-translate-y-0.5",
            tertiary: "bg-glass border border-glass text-primary font-bold px-4 py-2 rounded-md hover:bg-[var(--border-color-glass)] hover:-translate-y-0.5 hover:shadow-color-soft",
        },
    },
    defaultVariants: {
        variant: "primary",
    }
})

interface ButtonProps 
    extends VariantProps<typeof buttonVariants>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
            children: React.ReactNode
        }

export default function Button({
    variant,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, className })}
            { ...props }
        >
            {children}
        </button>
    )
}