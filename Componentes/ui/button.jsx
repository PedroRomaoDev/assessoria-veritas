import React from "react";

export const Button = React.forwardRef(
  (
    {
      className = "",
      children,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-[#C9A24D] text-white hover:bg-[#E6C97A]",
      outline:
        "border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white",
      ghost: "hover:bg-[#C9A24D]/10 text-white",
    };

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
