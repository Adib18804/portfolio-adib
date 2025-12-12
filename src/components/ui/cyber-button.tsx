"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                cyber: "bg-transparent border border-primary text-primary hover:bg-primary/10",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
            glitch: {
                true: "relative overflow-hidden",
                false: "",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            glitch: false,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const CyberButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, glitch = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // CSS-based glitch effects using pseudo-elements and spans
        // We can't easily use pseudo-elements for multiple distinct animated layers if we want them to be complex.
        // However, for the simple effect we had (overlays), we can use a helper component or just classes if we accept simpler effects.

        // Let's try to keep it simple: use classes for the container.
        // If we really need the extra spans, we can't use asChild easily with Slot.
        // But we can use a wrapper? No.

        // Alternative: If glitch is true, we append the glitch elements as children?
        // But Slot replaces itself.

        // Let's stick to the CSS approach.
        // We will add a 'data-glitch' attribute and style it in global CSS or use tailwind classes that target after/before.

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, glitch, className }),
                    glitch && "before:absolute before:inset-0 before:translate-x-1 before:translate-y-1 before:bg-primary/20 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-100 before:mix-blend-screen after:absolute after:inset-0 after:-translate-x-1 after:-translate-y-1 after:bg-secondary/20 after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-100 after:mix-blend-screen"
                )}
                ref={ref}
                {...props}
            >
                {props.children}
                {/* We can't add the bottom border scale effect easily with just before/after if we used them for glitch. 
            But we can use a box-shadow or border-bottom transition. 
            Or just accept the simpler glitch effect.
        */}
            </Comp>
        );
    }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, buttonVariants };
