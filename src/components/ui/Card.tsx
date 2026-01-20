import React from "react";
import { cva, type VariantProps } from "class-variance-authority"



// eslint-disable-next-line react-refresh/only-export-components
export const cardVariants = cva(
    `flex flex-col w-full bg-secondary py-5 px-5 rounded-lg`,{
        variants: {
            variant: {
                primary: `border-gradient-conic`,
                secondary: "border border-glass"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)

interface CardProps extends VariantProps< typeof cardVariants>, 
    React.ComponentProps<"div"> {
        as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
    as="div",
    variant,
    className,
    children,
    ...props
}: CardProps) {
    return React.createElement(
        as,
        {
            className: cardVariants({ variant, className }),
            ...props
        },
        children
    )
}