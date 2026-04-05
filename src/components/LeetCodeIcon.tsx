import type { SVGProps } from "react";

const LeetCodeIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M19.48 7.41 24.74 12.67"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.27 12.13 7.23 16.99a1.43 1.43 0 0 0 0 2.04l5.04 4.84"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 25.6h7.4a1.7 1.7 0 0 0 1.21-.5l4.67-4.6a1.7 1.7 0 0 0 0-2.42l-4.67-4.6a1.7 1.7 0 0 0-1.21-.5h-7.4"
        stroke="#FFA116"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.33 17.06h12.14"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LeetCodeIcon;
