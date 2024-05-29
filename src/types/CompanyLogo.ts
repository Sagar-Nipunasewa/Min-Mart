import type { VariantProps } from "tailwind-variants"
import type companyLogoVariants from "../ui/Molecules/CompanyLogo/styles.ts";

type CompanyLogoVariants = VariantProps<typeof companyLogoVariants>;

export interface CompanyLogoProps extends CompanyLogoVariants{
    companyLogoSrc: string;
    className?: string;
}
